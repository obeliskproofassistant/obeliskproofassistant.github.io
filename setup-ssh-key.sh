#!/usr/bin/env bash
set -euo pipefail

# Interactive SSH key setup script
# Supports: generate key, add to ssh-agent, copy public key to GitHub/GitLab,
# or install public key on a remote server via ssh-copy-id.

copy_to_clipboard() {
  local file="$1"
  if command -v pbcopy >/dev/null 2>&1; then
    pbcopy < "$file"
    echo "Copied public key to clipboard using pbcopy."
  elif command -v clip >/dev/null 2>&1; then
    clip < "$file"
    echo "Copied public key to clipboard using clip."
  elif command -v xclip >/dev/null 2>&1; then
    xclip -selection clipboard < "$file"
    echo "Copied public key to clipboard using xclip."
  elif command -v wl-copy >/dev/null 2>&1; then
    wl-copy < "$file"
    echo "Copied public key to clipboard using wl-copy."
  else
    echo "No clipboard tool found. Copy the public key manually from the output below."
    return 1
  fi
}

echo "=== SSH Key Setup ==="
echo

# Email / comment
email=""
while [[ -z "$email" ]]; do
  read -r -p "Email address for key comment: " email
done

# Key type
read -r -p "Key type [ed25519/rsa] (default: ed25519): " key_type
key_type="${key_type:-ed25519}"
case "$key_type" in
  ed25519|rsa) ;;
  *)
    echo "Invalid key type. Use ed25519 or rsa."
    exit 1
    ;;
esac

# Key path
default_key="$HOME/.ssh/id_${key_type}"
read -r -p "Key file path [$default_key]: " key_path
key_path="${key_path:-$default_key}"
key_path="${key_path/#\~/$HOME}"

mkdir -p "$(dirname "$key_path")"
if [[ "$(dirname "$key_path")" == "$HOME/.ssh" ]]; then
  chmod 700 "$HOME/.ssh"
fi

# Overwrite check
if [[ -e "$key_path" || -e "${key_path}.pub" ]]; then
  read -r -p "Key already exists at $key_path. Overwrite? [y/N]: " overwrite
  case "$overwrite" in
    y|Y)
      rm -f "$key_path" "${key_path}.pub"
      ;;
    *)
      echo "Aborted."
      exit 1
      ;;
  esac
fi

# Generate key. ssh-keygen will prompt for passphrase interactively.
echo
echo "Generating key at: $key_path"
if [[ "$key_type" == "rsa" ]]; then
  ssh-keygen -t rsa -b 4096 -C "$email" -f "$key_path"
else
  ssh-keygen -t ed25519 -C "$email" -f "$key_path"
fi

# Add to ssh-agent
echo
read -r -p "Add private key to ssh-agent now? [Y/n]: " add_agent
add_agent="${add_agent:-Y}"
if [[ "$add_agent" =~ ^[Yy]$ ]]; then
  if [[ -z "${SSH_AUTH_SOCK:-}" ]]; then
    eval "$(ssh-agent -s)" >/dev/null
  fi
  ssh-add "$key_path"
fi

# Choose destination
echo
echo "Where do you want to add the public key?"
echo "1) GitHub"
echo "2) GitLab"
echo "3) Remote server via ssh-copy-id"
echo "4) None — just show/copy the public key"
read -r -p "Choose [1-4] (default: 4): " target
target="${target:-4}"

case "$target" in
  1)
    copy_to_clipboard "${key_path}.pub" || true
    echo
    echo "Public key:"
    cat "${key_path}.pub"
    echo
    echo "Paste it into: GitHub → Settings → SSH and GPG keys → New SSH key"
    echo "Test with: ssh -T git@github.com"
    ;;
  2)
    copy_to_clipboard "${key_path}.pub" || true
    echo
    echo "Public key:"
    cat "${key_path}.pub"
    echo
    echo "Paste it into: GitLab → Preferences/Settings → SSH Keys"
    echo "Test with: ssh -T git@gitlab.com"
    ;;
  3)
    read -r -p "Enter remote target (user@host): " remote
    if [[ -z "$remote" ]]; then
      echo "No remote target provided. Aborted."
      exit 1
    fi

    if command -v ssh-copy-id >/dev/null 2>&1; then
      ssh-copy-id -i "${key_path}.pub" "$remote"
    else
      echo "ssh-copy-id not found. Run this manually:"
      echo "cat \"${key_path}.pub\" | ssh $remote 'mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys'"
      exit 1
    fi

    echo "Test with: ssh $remote"
    ;;
  4)
    copy_to_clipboard "${key_path}.pub" || true
    echo
    echo "Public key:"
    cat "${key_path}.pub"
    ;;
  *)
    echo "Invalid choice. Showing public key instead."
    echo
    cat "${key_path}.pub"
    ;;
esac

echo
echo "Done."
echo "Private key: $key_path"
echo "Public key:  ${key_path}.pub"