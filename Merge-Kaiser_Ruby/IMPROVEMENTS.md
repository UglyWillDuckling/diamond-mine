---
created: 2026-10-20
tags:
  - audit
---

# Vault improvement suggestions

All numbers below were re-verified against the vault on 2026-10-20 unless a date is given. Items are ordered by the suggested execution order, not by impact.

## Priority overview

| #  | Item                             | Impact | Effort | State                               |
| -- | -------------------------------- | ------ | ------ | ----------------------------------- |
| 1  | Version control for the vault    | High   | Low    | done (2026-10-20)                   |
| 2  | Duplicate notes and folders      | High   | High   | numbered notes done, basenames open |
| 3  | Task system consolidation        | Low    | Low    | done                                |
| 4  | Daily template / Templater scope | High   | Low    | done (2026-10-20)                   |
| 5  | Plugin cleanup                   | Medium | Low    | open                                |
| 6  | Case-only duplicate folders      | Medium | Low    | open                                |
| 7  | Property and date types          | Medium | Medium | open                                |
| 8  | `+/` clipping triage             | Medium | Medium | open                                |
| 9  | Root clutter                     | Low    | Low    | partially done                      |
| 10 | Deletion confirmation            | High   | Low    | open                                |
| 11 | Sync-safe bulk editing           | Medium | Low    | not started                         |

## 1. Version control for the vault

Status 2026-10-20: done. The vault is under version control, so every remaining item below is revertible and can be worked in batches instead of all at once.

This removes the main reason to defer the bulk items (2, 5, 7): each can now be one change that is undone wholesale if the result is wrong.

## 2. Resolve duplicate notes and folders

Status 2026-10-20: numbered duplicates were compared by content and cleaned up.

- 54 `… 1`/`… 2` notes deleted: exact duplicates, canonical supersets, empty stubs, and duplicates whose unique content was merged into the canonical daily notes.
- 6 clippings with empty canonical files were promoted (content moved onto the canonical name): `Dragan Primorac Resurrection`, `Handala - Wikipedia`, `How Yemen's 'asabiyya'…`, `Try These 20 PS1 Games…`, `Što je plijesan…`, `A Web Revival…`.
- 5 daily notes with unique content were merged into their canonical dates; 3 empty or template-only numbered daily notes were deleted.
- Inbound links to deleted names were repointed to the canonical notes.
- Backup: `/tmp/dedupe-backup-20261020-192850.tar.gz`; superseded by the version-control history now that it exists.

Nine numbered notes were kept because their content genuinely differs: `Tjedan 25 - 2026 1` (newer weekly revision), `Films Mentioned by It’s Just Cinema 1` (page 2 of the list), `Ep 031 Identities of Boolean Algebra 1` and `Probability Tree Diagrams 1` and `How to create a barrel pond 1` (different videos), `DNS MX Records… 1`, `Measuring China’s Manufacturing Might 1`, `Tango music - Wikipedia 1`, `The 150 Original Pokemon 28`. Numeric-suffixed titles like `Boox palma 2`, `Medievil 2`, `Andor Season 2`, `Tjedan 10 - 2026` are legitimate and should not be touched.

Still open: **133 duplicate basenames** (verified: `find . -name '*.md' -printf '%f\n' | sort | uniq -d | wc -l`) and four numerically suffixed folders:

- `Efforts/_Complete/Senka 1/`
- `Efforts/_Complete/Obsidian Tinkering 1/`
- `Efforts/tasks/archive/archive 1/`
- `Atlas/Knowledge/History/Prehistoric/Dinosaurs 1/`

Three of the four already sit under `_Complete/` or `archive/`, so the folder half is cosmetic and can wait. Wikilinks without a path resolve silently to one candidate, so content edits can land in the wrong copy; that is the real risk of the 133.

Action:

1. Produce a duplicate report keyed by basename with paths, mtime, and size.
2. For each group, choose the canonical note (usually the one with more links or newer content).
3. Merge unique content, then repoint links with `obsidian move` / `obsidian rename` rather than `mv`.
4. Archive or delete the leftovers only after `obsidian backlinks file=<name>` shows no remaining references.

Do not run a blanket delete based on the ` 1` pattern; some may be genuine second entries (people, events).

## 3. Consolidate the task systems

Status: TaskNotes (`tasknotes` 4.13.8) was uninstalled on 2026-10-20. The plugin folder, its entry in `.obsidian/community-plugins.json`, its `lazy-plugins` entry, and both generated view directories (`TaskNotes/Views/`, `Efforts/TaskNotes/Views/`) were removed. The three task notes (`Apply for New Jobs`, `Handle Current Job Situation`, `just another task`) were also deleted, so `Efforts/TaskNotes/` no longer exists. Verified 2026-10-20: no `tasknotes` references remain in `community-plugins.json` or `lazy-plugins/data.json`. A backup of the plugin directory and views is at `/tmp/tasknotes-removal-backup-20261020-192053.tar.gz`.

QuickAdd captures into monthly inbox files at `Efforts/tasks/inbox/YYYY-MM-MonthName.md`, e.g. `2026-10-October.md` (configured 2026-10-20; `New Task` target `Efforts/tasks/inbox/{{DATE:YYYY-MM-MMMM}}.md`, insert at top). `Efforts/Master Task List.md` is no longer the capture target; archive a month by moving its file to `Efforts/tasks/archive/`.

Remaining loose ends in this area, all optional:

- `Efforts/tasks/archive/archive/` and `archive/archive 1/` are nested duplicates of the archive folder.
- QuickAdd has 7 choices (`New Task`, `Thought 💭`, `Log 🪵`, `daily task`, `link in daily 🔗`, `action`, `New Project 🔼`); check that every one still points at a live file or folder.

## 4. Fix the daily template and scope Templater

Status 2026-10-20: implemented.

- `Atlas/templates/daily template v2.md` now links `[[Calendar/daily/<YYYY>/<YYYY-MM-DD-ddd>|Yesterday]]` / `…|Tomorrow]]`. `ddd` is the real suffix used by note names (`2026-10-20-Tue`); the old `Timestamps/<YYYY>/<MM-MMMM>/<YYYY-MM-DD-dddd>` path pointed at a folder that never existed and used the wrong weekday width.
- `templater-obsidian/data.json` now sets `ignore_folders_on_creation` to `[{"folder": "+/"}, {"folder": "Atlas/templates"}]`, so importer-created clippings and the daily template itself are never parsed. `~/%/templater` needs no entry: files under `templates_folder` are skipped automatically.
- One item stays open by design: whether the creation trigger stays on is a per-device setting, so it has to be checked in Settings on desktop and mobile separately.

Why folder templates were the wrong fix: `on_file_creation` parses any new `.md` with content (under 100 KB) regardless of `folder_templates`; folder templates only supply content to *empty* new files. So a `Calendar/daily` entry changes nothing for other notes. `ignore_folders_on_creation` is the only per-folder exclusion honored on the parse path, and the trigger itself (`trigger_on_file_creation`) is stored in per-device localStorage (`templater-local-settings`), not in `data.json`.

If the trigger is ever turned off, daily notes have to be created through Templater instead: move `daily template v2.md` into `~/%/templater/` (Templater resolves template paths relative to `templates_folder`) and update `daily-notes.json` or switch to Templater's create-from-template command.

## 5. Plugin cleanup

Verified 2026-10-20:

- 67 plugin folders on disk, 23 listed in `.obsidian/community-plugins.json` (note: `AGENTS.md` still says 69/24 and is stale).
- 7 folders with no `main.js`: `markwhen`, `mathlive`, `metadata-menu`, `obsidian-banners`, `obsidian-html-tags-autocomplete`, `obsidian-kanban`, `obsidian-projects`. Remove or reinstall them; never enable them.
- `lazy-plugins/data.json` has 75 desktop entries, **18 of which reference plugins that are not installed**: `copilot`, `css-snippets`, `enhanced-annotations`, `execute-code`, `highlightr-plugin`, `image-picker`, `juggl`, `obsidian-auto-link-title`, `obsidian-book-search-plugin`, `obsidian-contextual-typography`, `obsidian-day-and-night`, `obsidian-dictionary-plugin`, `obsidian-plugin-toc`, `settings-search`, `table-editor-obsidian`, `tabs`, `text-extractor`, `workspaces-plus`.

Action: prune the 18 dangling entries, delete the 7 broken folders, then decide which features are actually in use (Bases, Tasks, QuickAdd, Dataview, Templater, Meta Bind, Advanced Canvas) and reduce the enabled set to that list. This shortens startup and keeps `AGENTS.md` accurate.

## 6. Merge case-only duplicate folders

`Atlas/Knowledge/Concepts` (17 notes) and `Atlas/Knowledge/concepts` (2) coexist. On Linux these are distinct directories, so links and `path=` lookups depend on exact casing. Merge into one casing (`Concepts` is the larger and better-attested), update inbound links with `obsidian rename`, then remove the empty directory.

No other case-only pair exists today: `find . -type d | tr 'A-Z' 'a-z' | sort | uniq -d` returns only `atlas/knowledge/concepts`.

## 7. Audit property and date types

- 221 distinct properties are in use outside `+/` (frontmatter scan), while `.obsidian/types.json` declares 110; 142 keys are undeclared and silently typed as text.
- `priority` is declared `number` but is a string (`normal`) in 28 notes under `Efforts/`.
- `created` and `dateModified` are often strings such as `2026-10-20 18:41` rather than ISO datetimes, so date filters and sort orders behave inconsistently.
- Tags sometimes contain wikilinks (for example `[[Film]]`) or display-case values (`Drama`, `Adventure`), which fragments the tag graph and breaks tag-based bases.

Action: run a property frequency report, add the frequently used keys to `types.json`, normalize date strings to ISO 8601, and normalize imported tag values to lowercase slugs (`film`, `drama`) unless a base depends on the current names.

## 8. Triage the `+/` clipping folder

`+/` holds 1,511 notes, mostly imported web pages. Residue measured today: `#fn` 1,169, `#CITEREF…` several hundred, and CSS colors such as `#ECECFF` 76. This makes tag search and global tag counts nearly unusable.

Options:

- Move clippings to a separate vault and keep only curated notes here.
- Strip footnote and style remnants during import.
- Keep the folder but exclude it from tag reviews, and treat `+/Clippings` as read-only.

If a tag pane is useful for curation, enable the core tag pane (currently disabled) after the cleanup, not before.

## 9. Reduce root clutter

Status 2026-10-20: partially done. `test_regex.js`, `game_rsp.json`, and `The Penelopiad - Margaret Atwood.epub` were deleted.

Root now holds 5 Markdown notes (`AGENTS.md`, `HOME.md`, `IMPROVEMENTS.md`, `testing • outcome vs behavior.md`, `Tjedan 43 - 2026.md`) and 1 leftover plugin export (`taskboard-configs-export-2026-05-15T14_02_35.json`). The root folders (`+`, `~`, `Atlas`, `Calendar`, `Efforts`) and `.obsidian.vimrc` are structural and stay where they are.

Remaining actions:

- Keep: `HOME.md`, `AGENTS.md`, `IMPROVEMENTS.md`.
- `taskboard-configs-export-….json`: move to `~/%/` (or delete if a newer export exists).
- `testing • outcome vs behavior.md`: move under `Atlas/Notes/`.
- `Tjedan 43 - 2026.md` is **not** a duplicate and must not be deleted. `Calendar/Weeks/` has no week-43 note (it holds weeks 10–28, 33, 34 and 7–9 only), so this root file is the only week 43. Move it with `obsidian move path="Tjedan 43 - 2026.md" to="Calendar/Weeks"`.

Note `Efforts/Ideas 💡 · Projects.md` is a real note but lives in `Efforts/Ideas/`, not at root; an earlier draft listed it as a root file.

Related data gap worth a separate pass: `Calendar/Weeks/` is missing weeks 1–6, 29–32, and 43–52, and contains `Tjedan 28- 2026.md` (malformed spacing) plus the legitimate `Tjedan 25 - 2026 1.md` variant.

## 10. Restore deletion confirmation

`.obsidian/app.json:2` has `promptDelete: false`, so deleting a note in the app is immediate and unconfirmed. Set it to `true` at least until the duplicate cleanup (item 2) is finished; the version-control history limits the damage but does not replace the prompt.

## 11. Make bulk edits sync-safe

Sync is enabled and the vault is shared with mobile. Items 2, 5 and 7 rewrite many files in one pass, which is exactly the pattern that produces silent Sync conflicts.

Action:

- Do bulk work with the mobile client closed and the desktop app idle, then let one full sync cycle finish before the next pass.
- Work in small batches per folder and commit after each batch, so a conflicted batch can be discarded wholesale.
- Check `.obsidian/` config edits (plugins, types, Templater) on the second device afterwards; several plugin settings (Templater's creation trigger in particular) are stored per device and will not sync.

---

## Suggested order

1. Deletion confirmation (10), before any bulk work; version control (1) is already in place.
2. Template safety (4, done) and the task-system cleanup (3, done).
3. Plugin cleanup (5) and root cleanup (9), to reduce noise.
4. Duplicate report and link repointing (2), then case folders (6).
5. Property and date types (7).
6. `+/` triage (8) last, since it depends on cleaned-up metadata.
7. Sync discipline (11) applies throughout, not as a final step.
