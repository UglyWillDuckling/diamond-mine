[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

$SOURCE = if ($args.Count -ge 1) { $args[0] } else { '' }
$STAGED_HTML = if ($args.Count -ge 2) { $args[1] } else { '' }
if (($args.Count -ne 1 -and $args.Count -ne 2) -or -not $SOURCE -or ($args.Count -eq 2 -and -not $STAGED_HTML)) {
  [Console]::Error.WriteLine('Usage: openartifacts-publish.ps1 <source-note-path> [staged-html-path]')
  exit 1
}

$OBSIDIAN_CLI = [Environment]::GetEnvironmentVariable('COPILOT_OBSIDIAN_CLI')
$WORKSPACE_ROOT = [Environment]::GetEnvironmentVariable('OPENARTIFACTS_WORKSPACE_ROOT')
if (-not $WORKSPACE_ROOT) {
  [Console]::Error.WriteLine('The owning Obsidian workspace is unavailable.')
  exit 1
}

$EXIT_CODE = 0
try {
  if (-not $OBSIDIAN_CLI) { throw 'A compatible Obsidian CLI is unavailable.' }
  Set-Location -LiteralPath $WORKSPACE_ROOT
  $VAULT_NAME = Split-Path -Leaf (Get-Location).Path
  if (-not $VAULT_NAME) { throw 'The owning Obsidian vault is unavailable.' }
  $SOURCE_B64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($SOURCE))
  if ($args.Count -eq 1) {
    $CODE = "(()=>{const decode=(value)=>new TextDecoder().decode(Uint8Array.from(atob(value),(char)=>char.charCodeAt(0)));const bridge=app.plugins.plugins.copilot?.openArtifactsAgentBridge;if(!bridge)throw new Error('Copilot OpenArtifacts host is unavailable.');return bridge.reviewAgentManage(decode('$SOURCE_B64')).then(JSON.stringify);})()"
  } else {
    $HTML_B64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($STAGED_HTML))
    $CODE = "(()=>{const decode=(value)=>new TextDecoder().decode(Uint8Array.from(atob(value),(char)=>char.charCodeAt(0)));const bridge=app.plugins.plugins.copilot?.openArtifactsAgentBridge;if(!bridge)throw new Error('Copilot OpenArtifacts host is unavailable.');return bridge.reviewAgentPublish(decode('$SOURCE_B64'),decode('$HTML_B64')).then(JSON.stringify);})()"
  }

  $CLI_OUTPUT = & $OBSIDIAN_CLI "vault=$VAULT_NAME" 'eval' "code=$CODE"
  if ($LASTEXITCODE -ne 0) { throw 'Copilot could not complete the OpenArtifacts review.' }
  $CLI_RESULT = [string](@($CLI_OUTPUT | Where-Object { ([string]$_).StartsWith('=> {') })[-1])
  if (-not $CLI_RESULT.StartsWith('=> {')) {
    throw 'Copilot could not complete the OpenArtifacts review.'
  }
  $OUTCOME = $CLI_RESULT.Substring(3)
  [Console]::Out.Write($OUTCOME)
} catch {
  [Console]::Error.WriteLine($_.Exception.Message)
  $EXIT_CODE = 1
}
exit $EXIT_CODE
