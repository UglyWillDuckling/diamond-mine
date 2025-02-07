#!/usr/bin/env bash

set -eo pipefail

VAULT_PATH="/home/vsedlar/Documents/Obsidian/Emerald/emerald/+/"

add_note_obs() {
    local path="$1"
    cat >"$path"
    echo "$path"
}

add_note_obs "$VAULT_PATH$1.md"
