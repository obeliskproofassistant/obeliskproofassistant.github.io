#!/usr/bin/env bash
set -euo pipefail

# Interactive SSH key setup.
# Generates a key, optionally loads it into ssh-agent, optionally adds a
# ~/.ssh/config entry, and then helps you install the public key on
# GitHub, GitLab, or a remote server (ssh-copy-id).

# Key names that are refused (to avoid clobbering/confusing existing keys).
RESERVED_NAMES=(id githubpass)

die() { echo "Error: $*" >&2; exit 1; }

# Ask a yes/no question. Usage: confirm "Question" default(Y|N)
confirm() {
  local prompt="$1" default="${2:-N}" hint reply
  [[ "$default" == "Y" ]] && hint="[Y/n]" || hint="[y/N]"
  read -r -p "$prompt $hint: " reply
  reply="${reply:-$default}"
  [[ "$reply" =~ ^[Yy] ]]
}

copy_to_clipboard() {
  local file="$1"
  local tool
  for tool in pbcopy clip.exe clip wl-copy "xclip -selection clipboard" "xsel --clipboard --input"; do
    # shellcheck disable=SC2086
    if command -v ${tool%% *} >/dev/null 2>&1; then
      # shellcheck disable=SC2086
      $tool < "$file"
      echo "Copied public key to clipboard using ${tool%% *}."
      return 0
    fi
  done
  echo "No clipboard tool found. Copy the public key manually from the output below."
  return 1
}

show_public_key() {
  local pub="$1"
  copy_to_clipboard "$pub" || true
  echo
  echo "Public key:"
  cat "$pub"
  echo
}

# Add a Host block to ~/.ssh/config so the right key is used automatically.
add_ssh_config() {
  local host="$1" user="$2" key="$3"
  local config="$HOME/.ssh/config"

  touch "$config"
  chmod 600 "$config"

  if grep -qE "^[[:space:]]*Host[[:space:]]+${host}([[:space:]]|$)" "$config"; then
    echo "~/.ssh/config already has a 'Host $host' entry; not modifying it."
    echo "Make sure it contains: IdentityFile $key"
    return 0
  fi

  {
    echo
    echo "Host $host"
    echo "  HostName $host"
    echo "  User $user"
    echo "  IdentityFile $key"
    echo "  IdentitiesOnly yes"
  } >> "$config"
  echo "Added 'Host $host' entry to $config."
}

command -v ssh-keygen >/dev/null 2>&1 || die "ssh-keygen not found. Install OpenSSH first."

trap 'echo; echo "Aborted."; exit 130' INT

echo "=== SSH Key Setup ==="
echo

# --- Email / comment ---------------------------------------------------------
email=""
while [[ ! "$email" =~ ^[^@[:space:]]+@[^@[:space:]]+$ ]]; do
  read -r -p "Email address for key comment: " email
  [[ "$email" =~ ^[^@[:space:]]+@[^@[:space:]]+$ ]] || echo "Please enter a valid email address."
done

# --- Key name ----------------------------------------------------------------
read -r -p "Key name (default: noname): " key_name
key_name="${key_name:-noname}"

[[ "$key_name" =~ ^[A-Za-z0-9._-]+$ ]] || die "Key name may only contain letters, digits, '.', '_' and '-'."
for reserved in "${RESERVED_NAMES[@]}"; do
  [[ "$key_name" == "$reserved" ]] && die "Invalid key name: '$key_name' is reserved."
done

# --- Key type ----------------------------------------------------------------
read -r -p "Key type [ed25519/rsa] (default: ed25519): " key_type
key_type="$(echo "${key_type:-ed25519}" | tr '[:upper:]' '[:lower:]')"
case "$key_type" in
  ed25519|rsa) ;;
  *) die "Invalid key type. Use ed25519 or rsa." ;;
esac

# --- Key path ----------------------------------------------------------------
default_key="$HOME/.ssh/${key_name}_${key_type}"
read -r -p "Key file path [$default_key]: " key_path
key_path="${key_path:-$default_key}"
key_path="${key_path/#\~/$HOME}"

mkdir -p "$(dirname "$key_path")"
if [[ "$(dirname "$key_path")" == "$HOME/.ssh" ]]; then
  chmod 700 "$HOME/.ssh"
fi

# --- Overwrite check (back up instead of deleting) ---------------------------
if [[ -e "$key_path" || -e "${key_path}.pub" ]]; then
  confirm "Key already exists at $key_path. Replace it? (a backup will be kept)" N || die "Aborted."
  backup_suffix=".bak.$(date +%Y%m%d%H%M%S)"
  [[ -e "$key_path" ]] && mv "$key_path" "${key_path}${backup_suffix}"
  [[ -e "${key_path}.pub" ]] && mv "${key_path}.pub" "${key_path}.pub${backup_suffix}"
  echo "Existing key backed up with suffix $backup_suffix"
fi

# --- Generate key (ssh-keygen prompts for the passphrase) --------------------
echo
echo "Generating key at: $key_path"
echo "Tip: use a passphrase. It protects the key if the file is ever copied."
if [[ "$key_type" == "rsa" ]]; then
  ssh-keygen -t rsa -b 4096 -C "$email" -f "$key_path"
else
  ssh-keygen -t ed25519 -a 100 -C "$email" -f "$key_path"
fi
chmod 600 "$key_path"
chmod 644 "${key_path}.pub"

# --- ssh-agent ---------------------------------------------------------------
echo
if confirm "Add private key to ssh-agent now?" Y; then
  if [[ -z "${SSH_AUTH_SOCK:-}" ]]; then
    echo "Note: no running ssh-agent was found in this shell. Starting one that"
    echo "only lives for this script; run 'eval \"\$(ssh-agent -s)\"' in your shell"
    echo "(or enable your OS's agent) to keep the key loaded afterwards."
    eval "$(ssh-agent -s)" >/dev/null
  fi
  if [[ "$(uname -s)" == "Darwin" ]]; then
    ssh-add --apple-use-keychain "$key_path" 2>/dev/null || ssh-add "$key_path"
  else
    ssh-add "$key_path"
  fi
fi

# --- Destination -------------------------------------------------------------
echo
echo "Where do you want to add the public key?"
echo "1) GitHub"
echo "2) GitLab"
echo "3) Remote server via ssh-copy-id"
echo "4) None - just show/copy the public key"
read -r -p "Choose [1-4] (default: 4): " target
target="${target:-4}"

case "$target" in
  1|2)
    if [[ "$target" == "1" ]]; then
      host="github.com"; label="GitHub"
      where="GitHub → Settings → SSH and GPG keys → New SSH key"
    else
      host="gitlab.com"; label="GitLab"
      where="GitLab → Preferences → SSH Keys"
    fi

    show_public_key "${key_path}.pub"
    echo "Paste it into: $where"

    if confirm "Add a $host entry to ~/.ssh/config so this key is used automatically?" Y; then
      add_ssh_config "$host" git "$key_path"
    fi
    echo "Test with: ssh -T git@$host"
    ;;
  3)
    read -r -p "Enter remote target (user@host): " remote
    [[ -n "$remote" ]] || die "No remote target provided."
    read -r -p "SSH port (default: 22): " port
    port="${port:-22}"
    [[ "$port" =~ ^[0-9]+$ ]] || die "Invalid port."

    if command -v ssh-copy-id >/dev/null 2>&1; then
      ssh-copy-id -i "${key_path}.pub" -p "$port" "$remote"
    else
      echo "ssh-copy-id not found. Run this manually:"
      echo "cat \"${key_path}.pub\" | ssh -p $port $remote 'mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys'"
      exit 1
    fi
    echo "Test with: ssh -i \"$key_path\" -p $port $remote"
    ;;
  4)
    show_public_key "${key_path}.pub"
    ;;
  *)
    echo "Invalid choice. Showing public key instead."
    show_public_key "${key_path}.pub"
    ;;
esac

echo
echo "Done."
echo "Private key: $key_path"
echo "Public key:  ${key_path}.pub"
