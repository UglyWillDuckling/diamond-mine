# AGENTS.md

This is an **Obsidian vault** (personal knowledge base), not a software project. There is no build, test, lint, package manager, or CI; the vault is tracked in a git repository. The work is editing Markdown notes, YAML frontmatter, `.base` files, `.canvas` JSON, and `.obsidian/*` plugin config.

Vault name: `Merge-Kaiser_Ruby` (already the default vault for both `obsidian` and `obsidian-cli`). Duplicate `… 1` files/folders and parallel folders indicate it was assembled by merging older vaults, which explains most of the inconsistencies below.

Scale: 3,381 Markdown notes (7,851 files outside `.obsidian/`, of which ~4,400 are attachments in `~/×/`), most of it under `Atlas/` and `+/` (1,511 notes).

## Tooling

Two Obsidian CLIs are installed and the vault is the default:

- `obsidian <command> [key=value ...]` — full-featured, drives the running app.
- `obsidian-cli <create|open|search|move|delete|print|daily|print-default>` — simpler wrapper.

Most `obsidian` commands resolve `file=<name>` like a wikilink or `path=<exact path>`. Name resolution is silent when duplicate basenames exist (`obsidian file file="DAS - watchlist"` picks one), so use `path=` for edits and moves.

Verified commands worth knowing:

```sh
obsidian files total                     # file count
obsidian files folder=Efforts ext=md
obsidian folders folder=Atlas
obsidian read path="Efforts/Active/Kuca/Kuca.md"
obsidian search:context query="text" path=Efforts format=json limit=20
obsidian properties sort=count counts format=tsv
obsidian property:read name=status path="Efforts/Active/Kuca/Kuca.md"
obsidian property:set name=status value=Active path="Efforts/Active/Kuca/Kuca.md"
obsidian bases                          # list all .base files
obsidian base:query path="Efforts/Projects.base" format=tsv
obsidian move path="Efforts/Ideas/x.md" to="Efforts/Simmering"
obsidian create path="Efforts/Active/New Thing/New Thing.md" content="#project"
obsidian daily:read
obsidian daily:append content="- [ ] #task something"
obsidian commands filter=quickadd
obsidian plugins:enabled
obsidian-cli print-default
```

Notes on the CLIs:

- They communicate with the Obsidian app. Some commands (`base:query`, `base:views`) return empty if no matching view/app focus is available; fall back to reading the file.
- `obsidian move` / `obsidian rename` update wikilinks. The app also rewrites links on rename because `alwaysUpdateLinks: true`. **Do not `mv` notes in the shell** — it silently breaks links.
- Read-only searching with `rg`/Grep is usually faster than the CLI; the CLI is best for structured operations (properties, bases, daily notes, link-safe moves).

## Directory architecture

| Path | Purpose |
| --- | --- |
| `Efforts/` | Actionable material: projects, tickets, tasks. Lifecycle folders: `Active/`, `Planned/`, `Simmering/`, `Ideas/`, `_Complete/`, `_Ongoing/`, `tasks/`. |
| `Atlas/` | Reference knowledge. `Knowledge/` (People, Places, History, Science, Concepts, Media, Quotes, Books), `Tools/`, `Life/` (Areas, People, Faks, Health, Home), `howtos/`, `templates/`, `Sets/`, `Notes/`. |
| `Calendar/` | `daily/` (daily notes), `Weeks/` (weekly notes), `Events/`, `Incidents/`, `actions/`. |
| `+/` | Inbox/web clippings (~1,500 notes), including `Clippings/` and `DAS - watchlist/`. Mostly imported HTML, not hand-written. |
| `~` | Literal folder named `~`: attachments in `~/×/`, templates and scratch in `~/%/`. |
| `.obsidian/` | App config, enabled plugins, themes, snippets, icons. Never hand-edit plugin `main.js`; config edits are fine. |

Folder notes (folder plugin) are files named exactly after their folder: `Efforts/Active/Kuca/Kuca.md`, `Efforts/Active/PS2 Setup/PS2 Setup.md`, `Efforts/Simmering/Techdot.IO/Techdot.IO.md`. When changing a folder's overview, edit that folder note.

## Task systems (two coexist — do not unify them unprompted)

1. **Tasks plugin** (`obsidian-tasks-plugin` 8.5.0). Inline checkboxes in any note.
   - Global filter is `#task` with `removeGlobalFilter: true`, so `#task` is present in source but hidden in rendered views.
   - Custom statuses: `[ ]` todo, `[/]` in progress, `[x]` done, `[-]` cancelled.
   - Metadata emoji: `🆔` id, `📅` due, `⏳` scheduled, `✅` done date, `🔼/⏫/🔽` priority.
   - `tasks` query code blocks render across the vault (18 notes), e.g. `Efforts/tasks/tasks.md`, `HOME.md`, `Efforts/Active/Kuca/Kuca.md`.
2. **Obsidian Bases** (core plugin, enabled). `.base` files drive project/task/media tables and kanbans.

TaskNotes (`tasknotes`) was fully removed on 2026-10-20: the plugin, its generated `.base` views, and its three task notes in `Efforts/TaskNotes/` were deleted, and no `tasknotes` references remain in `community-plugins.json` or `lazy-plugins/data.json`. Do not recreate the file-per-task format; use `#task` checkboxes.

QuickAdd choice **New Task** captures into `Efforts/tasks/inbox/{{DATE:YYYY-MM-MMMM}}.md`, e.g. `2026-10-October.md` (monthly inbox, verified through `obsidian quickadd:list`), inserting at the top via the Tasks plugin task modal. Archive a month by moving its file to `Efforts/tasks/archive/`. That archive folder also contains nested `archive/` duplicates and the stray `archive 1/`.

## Note conventions

- YAML frontmatter for metadata. Tags appear both as a YAML list and as inline `#tag` in the body; both are normal. Nested tags are used heavily (`#ticket/pc`, `#ticket/learn/programming`, `#howto/linux`, `#week/2026`, `#film/animated`, `#incident/hyprland`).
- Wikilinks with aliases: `[[Stipe Peric|Stipi]]`, `[[PlayStation (console)|psx]]`, embeds `![[Note#Heading]]`, block refs `![[Note#Heading]]`.
- Property values that are links are quoted: `area: "[[Personal]]"`, `about: "[[Smalltalk]]"` (or a list of quoted links).
- Inline fields use Dataview `::` syntax: `location::`, `related::`, `resources::`, `tools::`, `standing::`, `deadline::`.
- Meta Bind widgets appear in note bodies: `` `INPUT[date:date_start]` ``, `` `INPUT[toggle:watched]` ``, `` `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` ``.
- Templater placeholder syntax (angle-bracket-percent delimiters, e.g. `tp.file.title`, `tp.date.now()`) and Dataview `dataview`/`dataviewjs` blocks are widespread (585 notes use Dataview).
- Callout styling from the MCL snippets: `> [!blank-container|no-margin gallery]`, `> [!SUCCESS]`, `> [!WARNING]`.
- Inline icons like `:LiHouse:`, `:LiBook:` come from the icon-folder icon packs (`.obsidian/icons`); they are text, not links.
- Indentation: YAML lists use two spaces; nested task bullets frequently use tabs. Tab size is configured as 2.
- Vim mode is on. `.obsidian.vimrc` defines a `,` leader, `J`/`K` line-jumps, and clipboard mappings.
- The vault mixes English and Croatian. Keep the language of the note being edited (Croatian for life/project/task notes, English for technical/reference notes). Do not translate content.

## Property schemas

`.obsidian/types.json` declares Obsidian property types (`multitext`, `number`, `date`, `datetime`, `checkbox`, `text`). A property not listed there is treated as text by Obsidian; add an entry when introducing a multi-valued or numeric property. 221 distinct properties are in use outside `+/` but only 110 are declared, so most keys are implicitly text.

Common project schema (notes tagged `project`):

```yaml
status: Active        # Backlog | Planning | Active | Finished (+ status: archived)
priority: 6           # 0-10, but 28 notes under Efforts/ use `normal`
due_date: 2026-10-17
area: "[[Personal]]"  # [[Personal]], [[Business]], [[Finances]], [[Health]], [[Home]], [[Education]]
tags:
  - project
```

`Efforts/Projects.base` groups by status in the order Backlog → Planning → Active → Finished, hides `cancelled`/`Done`/`Ongoing` statuses and anything tagged `archived`. Status strings outside that vocabulary exist and fall outside the board: `Done` (7 notes), `Ongoing` (2), `fini`, `1_Standby`, `open`, `in-progress`, `Cancelled`, `3_Ready 📺`, plus one note carrying the leaked schema text `String (npr. dostupno, iznajmljeno)`. Prefer the four canonical values for new/edited projects, and move completed projects to `Efforts/_Complete/`.

`priority` is declared `number` in `types.json` but is the string `normal` in 28 notes and numeric in only 7, so never assume it sorts or filters numerically across the vault. Media notes reuse the same `status` key for reading/watching state (`unread`, `Reading`, `Watching`); filter by path or tag before any status rewrite.

Media notes are machine-imported (OMDb / media DB plugin) with a large fixed schema: `type: movie|series|book|game`, `title`, `year`, `dataSource`, `url`, `id`, `plot`, `genres`, `director`, `actors`, `image`, `onlineRating`, `personalRating`, `watched`, `lastWatched`, `plan-to-watch`, `interest`, `movie_status`. Do not invent fields for these; query/read them through the matching `.base` (e.g. `Atlas/Knowledge/Media/movies/movies base.base`).

Events (`Calendar/Events/`) use `lokacija` (list of quoted links), `participants`, `datum`. Daily notes use `tags: []` and `created`. Weekly notes are `Calendar/Weeks/Tjedan <n> - <year>.md` carrying `#week/YYYY`; that folder is incomplete (missing weeks 1–6, 29–32, 43–52) and contains a malformed `Tjedan 28- 2026.md`, so a missing week may live at the vault root instead.

## Obsidian Bases (`.base`) syntax

Observed schema: top-level `filters`, `formulas`, `properties`, `views`. Filters use expressions like `file.tags.contains("event")`, `file.hasTag("media")`, `type == "movie"`, `note["plan-to-watch"] == true`, `link("Kuca")`, `project == link("Kuca")`, `!file.folder.contains("Set")`. View types seen: `table`, `cards`, `kanban`. View keys: `name`, `filters`, `order`, `sort` (`property`/`column`, `direction`), `groupBy`, `groupOrder`, `image`, `cardSize`, `columnSize`, `rowHeight`. Notes can also embed an inline base with a ` ```base ` fenced block; the inline block renders its first view. A `.base` file is embedded with `![[file.base#View name]]` to pick a specific view.

Sets plugin data lives in `Atlas/Sets/`: `<Name>Set/<Name>Set.md` with a ```` ```set ```` scope block, and object types in `Atlas/Sets/Types/<name>Type.md` declaring `type: <name>`. Base filters exclude folders containing `Set` to avoid indexing these type notes.

## Gotchas

- **Version control exists.** The vault is under version control, so the history is the undo mechanism for bulk edits; rely on it instead of avoiding rewrites, but still keep each cleanup pass to one coherent change so it can be reverted on its own.
- **`promptDelete: false`** — deleting in the app does not ask for confirmation. Do not delete notes unless explicitly asked.
- **Templater substitutes placeholders in newly created notes**, including text inside fenced code blocks and inline code (`tp.file.title`, `tp.date.now()`, etc.). This only fires when the per-device creation trigger (`trigger_on_file_creation`) is on; that flag lives in each device's localStorage (`templater-local-settings`), not in `templater-obsidian/data.json`, so it cannot be audited from the vault and may differ between desktop and mobile. `trigger_on_file_creation_mode` is `folder` with `folder_templates: []`, which means folder templates supply content only to *empty* new files and do **not** limit parsing of files that already have content; only `ignore_folders_on_creation` excludes paths. When a note must *show* that syntax (templates, docs), create it with a placeholder first and add the real syntax with a follow-up edit: edits to an existing note are not processed, creation is.
- **133 duplicate note basenames**, many from the vault merge. Wikilinks without a path are ambiguous; check both candidates before editing, and use `path=` in the CLI.
- **Numbered notes are not automatically duplicates.** On 2026-10-20, 54 `… 1`/`… 2` copies were removed after content comparison (exact duplicates and supersets), and 6 clippings were promoted over empty canonicals. Nine numbered notes remain because their content genuinely differs (`Tjedan 25 - 2026 1`, `Films Mentioned by It’s Just Cinema 1`, `Ep 031 … 1`, and similar). Titles that merely end in a number (`Boox palma 2`, `Medievil 2`, `Andor Season 2`, `Tjedan 10 - 2026`) are legitimate; never bulk-delete by filename pattern.
- **Case-only duplicates exist**: `Atlas/Knowledge/Concepts` (17 notes) vs `Atlas/Knowledge/concepts` (2). On Linux these are distinct; avoid assuming one correct casing. It is the only such pair (`find . -type d | tr 'A-Z' 'a-z' | sort | uniq -d`).
- **Plugin state is inconsistent.** 67 plugin folders exist and `.obsidian/community-plugins.json` enables 23, while `lazy-plugins/data.json` has 75 desktop entries, 18 of which point at plugins that are not installed (`copilot`, `table-editor-obsidian`, `css-snippets`, `juggl`, `tabs`, among others). Do not assume a block renders or is broken based on the note syntax alone; check `obsidian plugins:enabled` / `community-plugins.json`. Seven folders have no `main.js` (`obsidian-projects`, `metadata-menu`, `obsidian-kanban`, `markwhen`, `mathlive`, `obsidian-banners`, `obsidian-html-tags-autocomplete`) — do not enable them. Plugin `data.json` files can hold credentials (`image-search`, `quickadd`, `digitalgarden`), so never paste their contents into notes or commits.
- **Filenames are hostile to shell:** emojis (`🏤 🏚️ 💕🎉`), Croatian diacritics, apostrophes, parentheses, `:`/`?`-style punctuation, leading spaces, and the literal folders `+` and `~`. Always quote arguments and avoid unquoted globs.
- **Attachment paths** are `~/×/<md5>_MD5.ext`; existing notes embed them as `![[~/×/<hash>_MD5.png]]`. `app.json` sets `attachmentFolderPath: "~/×"`. Do not move or rename attachment files.
- **Templater template paths:** `templater-obsidian/data.json` sets `templates_folder` to `~/%/templater` (template paths resolve there first), while `Atlas/templates/` is a separate folder holding only `daily template v2.md`, which is wired into core Daily Notes through `daily-notes.json`. Do not conflate the two, and remember files under `templates_folder` are skipped by the creation handler automatically.
- **Daily template drift:** `Atlas/templates/daily template v2.md` is a Templater template but links previous/next days under a `Timestamps/` folder that does not exist. Notes live in `Calendar/daily/YYYY/YYYY-MM-DD-ddd.md` (`daily-notes.json` format `YYYY/YYYY-MM-DD-ddd`); older notes sometimes omit the weekday suffix. Do not silently rewrite either; note the discrepancy if relevant.
- **`HOME.md` depends on Dataview:** its top line renders the current week with a `dataviewjs` block using `moment()`, so it is blank until Dataview (lazy-loaded) starts. Its links (`[[Projects.base]]`, `[[Task Map.canvas]]`, `[[Ideas 💡 · Projects]]`) all resolve to single notes.
- **`+` is not a scratch area.** It is the web-clipping inbox; naive tag scans there are dominated by HTML residue (`#fn`, `#fnref`, `#CITEREF…`, `#include`, hex colors). Restrict tag/property surveys to `Efforts/`, `Atlas/`, and `Calendar/`.
- **Root-level stray files** are scratch, not project infrastructure: `taskboard-configs-export-2026-05-15T14_02_35.json` and `testing • outcome vs behavior.md`. `Tjedan 43 - 2026.md` is **not** a duplicate of a weekly note (that folder has no week 43); treat it as the real week-43 note that was never filed. `.crush/` holds tool output and is not vault content.
- **Digital Garden publish flags:** `HOME.md` has `dg-home: true` / `dg-publish: true`. Other notes use `dg-publish`. Adding `dg-publish` publishes a note to the user's garden site — never add it unless asked.
- **Sync is enabled** (core `sync` plugin) and the vault is shared with mobile. Avoid bulk rewrites that could conflict; close the mobile client during a bulk pass and let one sync cycle finish between batches.

## Working in this vault

- Search first with `rg` (respect `.gitignore`) or `obsidian search:context`. Use `path=` filters; the vault is large.
- Read the whole note before editing it; frontmatter, heading structure, and task sections vary by note type.
- Match the note's existing shape: projects use `## Cilj` / `### Trenutna situacija` / `### ⏭ sljedeće` / `### ☑ zadaci` / `### odluke` / `### istraživanja` / `### bilješke` (some older projects use English headings). Tickets are usually a `#ticket/...` inline tag plus a status and a task list. Hand-written howtos typically carry a `#howto/...` tag, inline `based_on::`/`**requires**::` fields, and a fenced command block. Incidents are `#incident/<tool>`, the error, then a `### solution` section.
- Keep `#task` items in the Tasks-plugin syntax; do not reintroduce the removed TaskNotes file-per-task format.
- After edits, verify by re-reading with `obsidian read path=...` or `rg`, and check that any new wikilinks resolve to exactly one note (`obsidian file file=<name>` resolves a name to a single path silently, so check for duplicate basenames with `rg --files` first).
- There are no tests or linters to run. The only "verification" available is re-reading the file, confirming frontmatter parses as YAML, and confirming links/properties are consistent with the schemas above.
- `IMPROVEMENTS.md` at the root is the audit backlog. Its numbers are verified with commands (`find`, `rg`, `python3` over `data.json` files) and should be re-checked rather than trusted once the vault changes; update it in the same pass when a cleanup item is completed.
- `AGENTS.md` is itself a note in the vault: keep its counts honest when they change (plugin counts, note counts, weekly-note gaps) instead of leaving stale figures.
