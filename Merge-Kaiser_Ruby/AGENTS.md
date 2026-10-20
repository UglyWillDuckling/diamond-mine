# AGENTS.md

This is an **Obsidian vault** (personal knowledge base), not a software project. There is no build, test, lint, package manager, CI, or git repository. The work is editing Markdown notes, YAML frontmatter, `.base` files, `.canvas` JSON, and `.obsidian/*` plugin config.

Vault name: `Merge-Kaiser_Ruby` (already the default vault for both `obsidian` and `obsidian-cli`). Duplicate `… 1` files/folders and parallel folders indicate it was assembled by merging older vaults, which explains most of the inconsistencies below.

Scale: ~3,400 Markdown notes (~7,900 files including attachments), most of it under `Atlas/` and `+/`.

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
   - `tasks` query code blocks render across the vault (18 notes), e.g. `Efforts/tasks/tasks.md`, `▶ Next Actions.md`, `HOME.md`.
2. **Obsidian Bases** (core plugin, enabled). `.base` files drive project/task/media tables and kanbans.

TaskNotes (`tasknotes`) was fully removed on 2026-10-20: the plugin, its generated `.base` views, and its three task notes in `Efforts/TaskNotes/` were deleted. Do not recreate the file-per-task format; use `#task` checkboxes.

QuickAdd choice **New Task** captures into `Efforts/tasks/inbox/{{DATE:YYYY-MM-MMMM}}.md`, e.g. `2026-10-October.md` (monthly inbox, verified through `obsidian quickadd:list`), inserting at the top via the Tasks plugin task modal. Archive a month by moving its file to `Efforts/tasks/archive/`.

## Note conventions

- YAML frontmatter for metadata. Tags appear both as a YAML list and as inline `#tag` in the body; both are normal. Nested tags are used heavily (`#ticket/pc`, `#ticket/learn/programming`, `#howto/linux`, `#week/2026`, `#film/animated`, `#incident/hyprland`).
- Wikilinks with aliases: `[[Stipe Peric|Stipi]]`, `[[PlayStation (console)|psx]]`, embeds `![[Note#Heading]]`, block refs `![[Zdravlje home#Tjedan 34 - 2026]]`.
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

`.obsidian/types.json` declares Obsidian property types (`multitext`, `number`, `date`, `datetime`, `checkbox`, `text`). A property not listed there is treated as text by Obsidian; add an entry when introducing a multi-valued or numeric property.

Common project schema (notes tagged `project`):

```yaml
status: Active        # Backlog | Planning | Active | Finished (+ status: archived)
priority: 6           # 0-10
due_date: 2026-10-17
area: "[[Personal]]"  # [[Personal]], [[Business]], [[Finances]], [[Health]], [[Home]], [[Education]]
tags:
  - project
```

`Efforts/Projects.base` groups by status in the order Backlog → Planning → Active → Finished, hides `cancelled`/`Done`/`Ongoing` statuses and anything tagged `archived`. Status strings outside that vocabulary (`Done`, `Ongoing`, `fini`, `1_Standby`) exist but fall outside the board. Prefer the four canonical values for new/edited projects, and move completed projects to `Efforts/_Complete/`.

Media notes are machine-imported (OMDb / media DB plugin) with a large fixed schema: `type: movie|series|book|game`, `title`, `year`, `dataSource`, `url`, `id`, `plot`, `genres`, `director`, `actors`, `image`, `onlineRating`, `personalRating`, `watched`, `lastWatched`, `plan-to-watch`, `interest`, `movie_status`. Do not invent fields for these; query/read them through the matching `.base` (e.g. `Atlas/Knowledge/Media/movies/movies base.base`).

Events (`Calendar/Events/`) use `lokacija` (list of quoted links), `participants`, `datum`. Daily notes use `tags: []` and `created`. Weekly notes are `Calendar/Weeks/Tjedan <n> - <year>.md` carrying `#week/YYYY`.

## Obsidian Bases (`.base`) syntax

Observed schema: top-level `filters`, `formulas`, `properties`, `views`. Filters use expressions like `file.tags.contains("event")`, `file.hasTag("media")`, `type == "movie"`, `note["plan-to-watch"] == true`, `link("Kuca")`, `project == link("Kuca")`, `!file.folder.contains("Set")`. View types seen: `table`, `cards`, `kanban`. View keys: `name`, `filters`, `order`, `sort` (`property`/`column`, `direction`), `groupBy`, `groupOrder`, `image`, `cardSize`, `columnSize`, `rowHeight`. Notes can also embed an inline base with a ` ```base ` fenced block (see `obsidian inline base example.md`).

Sets plugin data lives in `Atlas/Sets/`: `<Name>Set/<Name>Set.md` with a ```` ```set ```` scope block, and object types in `Atlas/Sets/Types/<name>Type.md` declaring `type: <name>`. Base filters exclude folders containing `Set` to avoid indexing these type notes.

## Gotchas

- **No version control.** There is no `.git`; there is no undo outside Obsidian's file recovery. Be conservative, and prefer additive edits over rewrites.
- **`promptDelete: false`** — deleting in the app does not ask for confirmation. Do not delete notes unless explicitly asked.
- **Templater executes on every new `.md` file**, including text inside fenced code blocks and inline code. Anything written with Templater's angle-bracket-percent placeholder delimiters when a note is created is replaced immediately (`tp.file.title`, `tp.date.now()`, etc.). Verified experimentally: a newly written note containing such a placeholder got substituted. When a note must *show* that syntax (templates, docs), create it with a placeholder first and add the real syntax with a follow-up edit: edits to an existing note are not processed, creation is.
- **133 duplicate note basenames**, many from the vault merge. Wikilinks without a path are ambiguous; check both candidates before editing, and use `path=` in the CLI.
- **Numbered notes are not automatically duplicates.** On 2026-10-20, 54 `… 1`/`… 2` copies were removed after content comparison (exact duplicates and supersets), and 6 clippings were promoted over empty canonicals. Nine numbered notes remain because their content genuinely differs (`Tjedan 25 - 2026 1`, `Films Mentioned by It’s Just Cinema 1`, `Ep 031 … 1`, and similar). Titles that merely end in a number (`Boox palma 2`, `Medievil 2`, `Andor Season 2`, `Tjedan 10 - 2026`) are legitimate; never bulk-delete by filename pattern.
- **Case-only duplicates exist**: `Atlas/Knowledge/Concepts` vs `Atlas/Knowledge/concepts` (same for some nested folders). On Linux these are distinct; avoid assuming one correct casing.
- **Plugin state is inconsistent.** 69 plugin folders exist, `.obsidian/community-plugins.json` enables 24, and `lazy-plugins` defers many more (Dataview, Templater, Meta Bind, Copilot). Do not assume a block renders or is broken based on the note syntax alone; check `obsidian plugins:enabled` / `community-plugins.json`. Several plugin folders are empty or have no `main.js` (`obsidian-projects`, `metadata-menu`, `obsidian-kanban`, `markwhen`, `mathlive`, `obsidian-banners`, `obsidian-html-tags-autocomplete`) — do not enable them.
- **Filenames are hostile to shell:** emojis (`🏤 🏚️ 💕🎉`), Croatian diacritics, apostrophes, parentheses, `:`/`?`-style punctuation, leading spaces, and the literal folders `+` and `~`. Always quote arguments and avoid unquoted globs.
- **Attachment paths** are `~/×/<md5>_MD5.ext`; existing notes embed them as `![[~/×/<hash>_MD5.png]]`. `app.json` sets `attachmentFolderPath: "~/×"`. Do not move or rename attachment files.
- **Daily template drift:** `Atlas/templates/daily template v2.md` is a Templater template but links previous/next days under a `Timestamps/` folder that does not exist. Notes live in `Calendar/daily/YYYY/YYYY-MM-DD-ddd.md` (`daily-notes.json` format `YYYY/YYYY-MM-DD-ddd`); older notes sometimes omit the weekday suffix. Do not silently rewrite either; note the discrepancy if relevant.
- **`HOME.md` is stale in places:** it embeds `[[Tickets.base]]`, which does not exist, and uses `dataviewjs` with `moment()`.
- **`+` is not a scratch area.** It is the web-clipping inbox; naive tag scans there are dominated by HTML residue (`#fn`, `#fnref`, `#CITEREF…`, `#include`, hex colors). Restrict tag/property surveys to `Efforts/`, `Atlas/`, and `Calendar/`.
- **Root-level stray files** are scratch, not project infrastructure: `test_regex.js`, `game_rsp.json`, `todo.md`, `▶ Next Actions.md`, `Tjedan 43 - 2026.md`, `Zdravlje home.md`.
- **Digital Garden publish flags:** `HOME.md` has `dg-home: true` / `dg-publish: true`. Other notes use `dg-publish`. Adding `dg-publish` publishes a note to the user's garden site — never add it unless asked.
- **Sync is enabled** (core `sync` plugin) and the vault is shared with mobile. Avoid bulk rewrites that could conflict.

## Working in this vault

- Search first with `rg` (respect `.gitignore` but the vault has none) or `obsidian search:context`. Use `path=` filters; the vault is large.
- Read the whole note before editing it; frontmatter, heading structure, and task sections vary by note type.
- Match the note's existing shape: projects use `## Cilj` / `### Trenutna situacija` / `### ⏭ sljedeće` / `### ☑ zadaci` / `### odluke` / `### istraživanja` / `### bilješke` (some older projects use English headings). Tickets are usually a `#ticket/...` inline tag plus a status and a task list. Hand-written howtos typically carry a `#howto/...` tag, inline `based_on::`/`**requires**::` fields, and a fenced command block. Incidents are `#incident/<tool>`, the error, then a `### solution` section.
- Keep `#task` items in the Tasks-plugin syntax; do not reintroduce the removed TaskNotes file-per-task format.
- After edits, verify by re-reading with `obsidian read path=...` or `rg`, and check that any new wikilinks resolve to exactly one note (`obsidian file file=<name>` resolves a name to a single path silently, so check for duplicate basenames with `rg --files` first).
- There are no tests or linters to run. The only "verification" available is re-reading the file, confirming frontmatter parses as YAML, and confirming links/properties are consistent with the schemas above.
