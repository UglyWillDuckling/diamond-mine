#ticket 

%% this could later turn into a final product, an artifact, a place to contain concrete information on cli tools and automations for Obsidian. For now, it starts with having tasks %%

- [x] #task investigate [[Obsidian CLI tools and automations]] 🆔 xgN6bQ 🔼 ⏳ 2025-02-09 📅 2025-02-28 ✅ 2025-02-23
	- [[mckyobsidian-cli]]
	- [[obsidian-cli]]

### [[mckyobsidian-cli]]

- written in [[Rust]]
- intuitive
- decent featureset
#### commands

**obx notes**

- `view`        Output the raw markdown contents of a note
- `open`        Open a note in the Obsidian app
- `uri`         Print the Obsidian URI of a note
- `create`      Create a new note
- `edit`        Open a note in your default editor ($EDITOR)
- `path`        Print the full file-path of the note
- `render`      Pretty-print a markdown note
- `properties`  View the properties of a note
- `export`      Convert the note to a range of formats
- `backlinks`   View the files within the vault that contain backlinks to this file

**obx vaults**

- `create`   Create a new vault and switch to it. The name will be inferred from the last segment unless --name is explicitly provided
- `list`     List all vaults
- `switch`   Set a vault as current, to be implicitly used by commands. A vault can be explicitly provided, or chosen interactively
- `current`  Print the name and path of the current vault
- `path`     Print the absolute path to the current vault
