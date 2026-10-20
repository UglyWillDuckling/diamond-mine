---
created: 2026-10-20
tags:
  - audit
---

# Vault improvement suggestions

## Priority overview

| #   | Item                                    | Impact | Effort |
| --- | --------------------------------------- | ------ | ------ |
| 2   | Duplicate notes and folders             | High   | High   |
| 3   | Task system cleanup (TaskNotes removed) | Low    | Low    |
| 4   | Template / Templater safety             | High   | Low    |
| 5   | Project status normalization            | Medium | Medium |
| 6   | Plugin cleanup                          | Medium | Low    |
| 7   | Missing `Tickets.base`                  | Medium | Low    |
| 8   | Case-only duplicate folders             | Medium | Low    |
| 9   | Property and date types                 | Medium | Medium |
| 10  | `+/` clipping triage                    | Medium | Medium |
| 11  | Root clutter                            | Low    | Low    |
| 12  | Deletion safety                         | Low    | Low    |

---

## 1. Resolve duplicate notes and folders

Status 2026-10-20: numbered duplicates were compared by content and cleaned up.

- 54 `… 1`/`… 2` notes deleted: exact duplicates, canonical supersets, empty stubs, and duplicates whose unique content was merged into the canonical daily notes.
- 6 clippings with empty canonical files were promoted (content moved onto the canonical name): `Dragan Primorac Resurrection`, `Handala - Wikipedia`, `How Yemen's 'asabiyya'…`, `Try These 20 PS1 Games…`, `Što je plijesan…`, `A Web Revival…`.
- 5 daily notes with unique content were merged into their canonical dates; 3 empty or template-only numbered daily notes were deleted.
- Inbound links to deleted names were repointed to the canonical notes.
- Backup: `/tmp/dedupe-backup-20261020-192850.tar.gz`.

Nine numbered notes were kept because their content genuinely differs: `Tjedan 25 - 2026 1` (newer weekly revision), `Films Mentioned by It’s Just Cinema 1` (page 2 of the list), `Ep 031 Identities of Boolean Algebra 1` and `Probability Tree Diagrams 1` and `How to create a barrel pond 1` (different videos), `DNS MX Records… 1`, `Measuring China’s Manufacturing Might 1`, `Tango music - Wikipedia 1`, `The 150 Original Pokemon 28`. Numeric-suffixed titles like `Boox palma 2`, `Medievil 2`, `Andor Season 2`, `Tjedan 10 - 2026` are legitimate and should not be touched.

Still open: 133 duplicate **basenames** (identical names in different folders) and four numerically suffixed folders (`Senka 1`, `archive 1`, `Obsidian Tinkering 1`, `Dinosaurs 1`). None are exact duplicates of their neighbours; they need per-item decisions. Wikilinks without a path resolve silently to one candidate, so content edits can land in the wrong copy.

Action:

1. Produce a duplicate report keyed by basename with paths, mtime, and size.
2. For each group, choose the canonical note (usually the one with more links or newer content).
3. Merge unique content, then repoint links with `obsidian move` / `obsidian rename` rather than `mv`.
4. Archive or delete the leftovers only after `obsidian backlinks file=<name>` shows no remaining references.

Do not run a blanket delete based on the ` 1` pattern; some may be genuine second entries (people, events).

## 3. Consolidate the task systems

Status: TaskNotes (`tasknotes` 4.13.8) was uninstalled on 2026-10-20. The plugin folder, its entry in `.obsidian/community-plugins.json`, its `lazy-plugins` entry, and both generated view directories (`TaskNotes/Views/`, `Efforts/TaskNotes/Views/`) were removed. The three task notes (`Apply for New Jobs`, `Handle Current Job Situation`, `just another task`) were also deleted on 2026-10-20, so `Efforts/TaskNotes/` no longer exists. A backup of the plugin directory and views is at `/tmp/tasknotes-removal-backup-20261020-192053.tar.gz`.

QuickAdd captures into monthly inbox files at `Efforts/tasks/inbox/YYYY-MM-MonthName.md`, e.g. `2026-10-October.md` (configured 2026-10-20; `New Task` target `Efforts/tasks/inbox/{{DATE:YYYY-MM-MMMM}}.md`, insert at top). `Efforts/Master Task List.md` is no longer the capture target; archive a month by moving its file to `Efforts/tasks/archive/`.

## 4. Fix the daily template and scope Templater

- `Atlas/templates/daily template v2.md` links previous/next days under `Timestamps/…`, which does not exist. Real notes live in `Calendar/daily/YYYY/YYYY-MM-DD-ddd.md`.
- Templater executes on every newly created `.md` file, including inside fenced code blocks and inline code. This was verified experimentally: a newly written note containing a placeholder was substituted immediately. Any future note that must show template syntax has to be created with a placeholder and edited afterwards.

Action:

1. Update the previous/next links to resolve within `Calendar/daily/`.
2. Configure a Templater folder template for `Calendar/daily` only, so new notes elsewhere are not processed.
3. Consider disabling "trigger on new file creation" globally if folder templates cover the real use case.

## 5. Normalize project status and priority

`Efforts/Projects.base` groups by `Backlog`, `Planning`, `Active`, `Finished` and hides `cancelled`/`Done`/`Ongoing` plus anything tagged `archived`. Notes currently use `Active`, `Finished`, `Done`, `Backlog`, `Ongoing`, `Planning`, `archived`, `fini`, `1_Standby`.

Action:

- Map `Done`, `fini`, `1_Standby` to `Finished`; map `Ongoing` to `Active`; keep `archived` as a tag.
- Project notes use numeric `priority` (0-10); older notes use `normal/low/high`. Standardize project priorities to numbers and leave task priorities to the Tasks plugin.
- Move completed work to `Efforts/_Complete/` so the status and folder agree.

`bulk-properties` is already installed and is the lowest-risk way to do the property rewrite.

## 6. Plugin cleanup

- 67 plugin folders on disk, 23 listed in `.obsidian/community-plugins.json`, and `lazy-plugins` defers many others.
- Empty or incomplete plugin folders: `obsidian-projects`, `metadata-menu`, `obsidian-kanban`, `markwhen`, `mathlive`, `obsidian-banners`, `obsidian-html-tags-autocomplete`. They have no `main.js` and should be removed or reinstalled, not enabled.
- `lazy-plugins/data.json` references plugins that are not installed at all (`table-editor-obsidian`, `obsidian-auto-link-title`, `obsidian-book-search-plugin`, `css-snippets`, `obsidian-contextual-typography`, among others). Pruning these entries removes startup warnings.

Decide which vault features are actually in use (Bases, Tasks, QuickAdd, Dataview, Templater, Meta Bind, Advanced Canvas) and reduce the enabled set to that list. This also shortens startup and makes `AGENTS.md` maintenance simpler.

## 7. Create the missing `Tickets.base`

`HOME.md` links `[[Tickets.base]]`, but no such file exists. Either create a base filtering `#ticket` notes (status, priority, due date, project) or remove the link. A ticket base also fits the existing `#ticket/...` tag hierarchy in `Efforts/`.

## 8. Merge case-only duplicate folders

`Atlas/Knowledge/Concepts` (19 notes) and `Atlas/Knowledge/concepts` (4) coexist. On Linux these are distinct directories, so links and `path=` lookups depend on exact casing. Merge into one casing, update inbound links with `obsidian rename`, then remove the empty directory.

Check for the same pattern elsewhere before merging (`find . -type d | tr 'A-Z' 'a-z' | sort | uniq -d`).

## 9. Audit property and date types

- 262 properties are in use; `.obsidian/types.json` declares types for a subset.
- `created` and `dateModified` are often strings such as `2026-10-20 18:41` rather than ISO datetimes, so date filters and sort orders behave inconsistently.
- Tags sometimes contain wikilinks (for example `[[Film]]`) or display-case values (`Drama`, `Adventure`), which fragments the tag graph and breaks tag-based bases.

Action: run a property frequency report, add missing entries to `types.json`, normalize date strings to ISO 8601, and normalize imported tag values to lowercase slugs (`film`, `drama`) unless a base depends on the current names.

## 10. Triage the `+/` clipping folder

`+/` holds about 1,537 notes, mostly imported web pages with HTML residue, Wikipedia footnote markers, and CSS colors that show up as tags (`#fn`, `#fnref`, `#CITEREF…`, `#ECECFF`). This makes tag search and global tag counts nearly unusable.

Options:

- Move clippings to a separate vault and keep only curated notes here.
- Strip footnote and style remnants during import.
- Keep the folder but exclude it from tag reviews, and treat `+/Clippings` as read-only.

If a tag pane is useful for curation, enable the core tag pane (currently disabled) after the cleanup, not before.

## 11. Reduce root clutter

Eleven Markdown notes plus scratch files sit at the vault root. Suggested split:

- Keep: `HOME.md`, `AGENTS.md`, `▶ Next Actions.md`, `IMPROVEMENTS.md`.
- Move into a scratch folder under `~/%/`: `test_regex.js`, `game_rsp.json`, `obsidian inline base example.md`, `Istraziti single purpose devices.md`.
- Merge or delete: `todo.md` (duplicates `Master Task List`), `Tjedan 43 - 2026.md` (duplicates the weekly note), `Zdravlje home.md` (0 bytes but transcluded by the weekly note).

If `Zdravlje home.md` stays, fill it with at least the headings that weekly notes embed, such as `## Tjedan 34 - 2026`.

## 12. Restore deletion confirmation

`.obsidian/app.json` has `promptDelete: false`, so deleting a note in the app is immediate. Set it to `true` until the duplicate cleanup is finished, then decide whether to keep it.

---

## Suggested order

1. Version control (1).
2. Deletion confirmation (12) and template safety (4), before any bulk work.
3. Plugin cleanup (6) and root cleanup (11), to reduce noise.
4. Duplicate report and link repointing (2), then case folders (8).
5. Status normalization (5) and property types (9); the TaskNotes cleanup is done.
6. `+/` triage (10) and `Tickets.base` (7) last, since both depend on the cleaned-up metadata.
