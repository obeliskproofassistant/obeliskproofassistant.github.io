#!/usr/bin/env bash
#
# auto-push.sh — Push a git repository at random intervals (10–20 minutes).
#
# Usage:
#   ./auto-push.sh <repo-path> [remote] [branch]
#
# Example:
#   ./auto-push.sh /home/me/project origin main
#
# Requires: bash, git, $RANDOM (built into bash).

set -u

# -------- config ------------------------------------------------------------
REPO_PATH="${1:-}"
REMOTE="${2:-origin}"
BRANCH="${3:-$(git -C "${REPO_PATH:-.}" rev-parse --abbrev-ref HEAD 2>/dev/null || echo main)}"

MIN_MIN=10
MAX_MIN=20
MIN_SEC=$((MIN_MIN * 60))
MAX_SEC=$((MAX_MIN * 60))
# ----------------------------------------------------------------------------

if [[ -z "$REPO_PATH" ]]; then
    echo "Usage: $0 <repo-path> [remote] [branch]" >&2
    exit 1
fi

if [[ ! -d "$REPO_PATH/.git" ]]; then
    echo "Error: '$REPO_PATH' is not a git repository." >&2
    exit 1
fi

log() { printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*"; }

# Random sleep between MIN_SEC and MAX_SEC (bash 3.2+ compatible).
random_sleep() {
    local span=$((MAX_SEC - MIN_SEC + 1))
    local secs=$((MIN_SEC + RANDOM % span))
    log "Sleeping $((secs / 60))m $((secs % 60))s before next push..."
    sleep "$secs"
}

push_once() {
    log "Pushing to ${REMOTE}/${BRANCH} ..."
    if git -C "$REPO_PATH" push "$REMOTE" "$BRANCH"; then
        log "Push OK."
    else
        log "Push FAILED (exit $?). Will retry on next cycle."
    fi
}

# Stop cleanly on Ctrl-C / SIGTERM.
trap 'log "Interrupted, exiting."; exit 0' INT TERM

log "Starting auto-push loop for '$REPO_PATH' -> $REMOTE/$BRANCH"
log "Interval: ${MIN_MIN}-${MAX_MIN} minutes."

while true; do
    push_once
    random_sleep
done