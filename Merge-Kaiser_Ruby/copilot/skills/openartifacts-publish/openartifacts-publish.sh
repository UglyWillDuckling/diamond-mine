#!/bin/sh
SOURCE=${1:-}
STAGED_HTML=${2:-}
case "$#" in
  1) ;;
  2) ;;
  *)
    printf '%s\n' "Usage: sh openartifacts-publish.sh <source-note-path> [staged-html-path]" >&2
    exit 1
    ;;
esac
[ -n "$SOURCE" ] && { [ "$#" -eq 1 ] || [ -n "$STAGED_HTML" ]; } || {
  printf '%s\n' "Usage: sh openartifacts-publish.sh <source-note-path> [staged-html-path]" >&2
  exit 1
}

OBSIDIAN_CLI=${COPILOT_OBSIDIAN_CLI:-}
WORKSPACE_ROOT=${OPENARTIFACTS_WORKSPACE_ROOT:-}
[ -n "$WORKSPACE_ROOT" ] || {
  printf '%s\n' "The owning Obsidian workspace is unavailable." >&2
  exit 1
}

[ -n "$OBSIDIAN_CLI" ] || {
  printf '%s\n' "A compatible Obsidian CLI is unavailable." >&2
  exit 1
}

cd "$WORKSPACE_ROOT" || {
  printf '%s\n' "The owning Obsidian workspace is unavailable." >&2
  exit 1
}
VAULT_NAME=${WORKSPACE_ROOT%/}
VAULT_NAME=${VAULT_NAME##*/}
[ -n "$VAULT_NAME" ] || {
  printf '%s\n' "The owning Obsidian vault is unavailable." >&2
  exit 1
}

SOURCE_B64=$(printf '%s' "$SOURCE" | base64 | tr -d '\r\n')
if [ "$#" -eq 1 ]; then
  CODE="(()=>{const decode=(value)=>new TextDecoder().decode(Uint8Array.from(atob(value),(char)=>char.charCodeAt(0)));const bridge=app.plugins.plugins.copilot?.openArtifactsAgentBridge;if(!bridge)throw new Error('Copilot OpenArtifacts host is unavailable.');return bridge.reviewAgentManage(decode('$SOURCE_B64')).then(JSON.stringify);})()"
else
  HTML_B64=$(printf '%s' "$STAGED_HTML" | base64 | tr -d '\r\n')
  CODE="(()=>{const decode=(value)=>new TextDecoder().decode(Uint8Array.from(atob(value),(char)=>char.charCodeAt(0)));const bridge=app.plugins.plugins.copilot?.openArtifactsAgentBridge;if(!bridge)throw new Error('Copilot OpenArtifacts host is unavailable.');return bridge.reviewAgentPublish(decode('$SOURCE_B64'),decode('$HTML_B64')).then(JSON.stringify);})()"
fi

CLI_OUTPUT=$("$OBSIDIAN_CLI" "vault=$VAULT_NAME" eval "code=$CODE") || exit $?
CLI_RESULT=$(printf '%s\n' "$CLI_OUTPUT" | sed -n '/^=> {/p' | sed -n '$p')
case "$CLI_RESULT" in
  "=> {"*)
    OUTCOME=${CLI_RESULT#"=> "}
    printf '%s\n' "$OUTCOME"
    exit 0
    ;;
  *)
    printf '%s\n' "Copilot could not complete the OpenArtifacts review." >&2
    exit 1
    ;;
esac
