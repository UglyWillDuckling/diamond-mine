1. [**1.** Introduction](Atlas/tools/obsidian/Templater/Templater%20doc/introduction.md)
1. [**1.1.** Installation](Atlas/tools/obsidian/Templater/Templater%20doc/installation.md)
2. [**1.2.** Terminology](terminology.md)
3. [**1.3.** Syntax](syntax.md)
4. [**1.4.** Settings](settings.md)
5. [**1.5.** FAQ](Atlas/tools/obsidian/Templater/Templater%20doc/faq.md)
3. [**2.** Internal Functions](Atlas/tools/obsidian/Templater/Templater%20doc/internal-functions/overview.md)
01. [**2.1.** tp.app](app-module.md)
2. [**2.2.** tp.config](config-module.md)
3. [**2.3.** tp.date](date-module.md)
4. [**2.4.** tp.file](file-module.md)
5. [**2.5.** tp.frontmatter](frontmatter-module.md)
6. [**2.6.** tp.hooks](hooks-module.md)
7. [**2.7.** tp.obsidian](obsidian-module.md)
8. [**2.8.** tp.system](system-module.md)
9. [**2.9.** tp.web](web-module.md)
10. [**2.10.** Contributing](contribute.md)
5. [**3.** User Functions](Atlas/tools/obsidian/Templater/Templater%20doc/user-functions/overview.md)
1. [**3.1.** User Scripts](script-user-functions.md)
2. [**3.2.** System Commands](system-user-functions.md)
7. [**4.** Commands](Atlas/tools/obsidian/Templater/Templater%20doc/commands/overview.md)
1. [**4.1.** Dynamic Commands](dynamic-command.md)
2. [**4.2.** Execution Commands](execution-command.md)
3. [**4.3.** Whitespace Control](whitespace-control.md)

# [Settings](settings.md)

## [General Settings](settings.md#general-settings)

- `Template folder location`: Files in this folder will be available as templates.
- `Syntax Highlighting on Desktop` adds syntax highlighting for [Templater](https://github.com/SilentVoid13/Templater) commands in edit mode.
- `Syntax Highlighting on Mobile` adds syntax highlighting for [Templater](https://github.com/SilentVoid13/Templater) commands in edit mode on mobile. Use with caution: this may break live preview on mobile platforms."
- `Automatic jump to cursor` automatically triggers `tp.file.cursor` after inserting a template. You can also set a hotkey to manually trigger `tp.file.cursor`.
- `Trigger Templater on new file creation`: [Templater](https://github.com/SilentVoid13/Templater) will listen for the new file creation event, and, if it matches a rule you've set, replace every command it finds in the new file's content. This makes [Templater](https://github.com/SilentVoid13/Templater) compatible with other plugins like the Daily note core plugin, Calendar plugin, Review plugin, Note refactor plugin, etc.

  - Make sure to set up rules under either Folder Templates or File Regex Template below.
  - **Warning:** This can be dangerous if you create new files with unknown / unsafe content on creation. Make sure that every new file's content is safe on creation."

## [Template Hotkeys](settings.md)

Template Hotkeys allows you to bind a template to a hotkey.

## [Folder Templates](settings.md)

**Note**: This setting is hidden by default. To view it first enable the `Trigger Template on new file creation` setting. And since it's mutually exclusive with File Regex Templates, enabling one will disable the other.

You can specify a template that will automatically be used on a selected folder and children using the `Folder Templates` functionality. The deepest match will be used, so the order of the rules is irrelevant.

Add a rule for " `/`" if you need a catch-all.

## [File Regex Templates](settings.md)

**Note**: This setting is hidden by default. To view it first enable the `Trigger Template on new file creation` setting. And since it's mutually exclusive with Folder Templates, enabling one will disable the other.

You can specify regex declarations that a new file's path will be tested against. If a regex matches, the associated template will automatically be used. Rules are tested top-to-bottom, and the first match will be used.

End with a rule for " `.*`" if you need a catch-all.

Use a tool like [Regex101](https://regex101.com/) to verify your regexes.

## [Startup Templates](settings.md)

Startup Templates are templates that will get executed once when Templater starts.

These templates won't output anything.

This can be useful to set up templates adding hooks to obsidian events for example.

## [User Script Functions](settings.md)

All JavaScript files in this folder will be loaded as CommonJS modules, to import custom [user functions](Atlas/tools/obsidian/Templater/Templater%20doc/user-functions/overview.md).

The folder needs to be accessible from the vault.

Check the [documentation](script-user-functions.md) for more information.

## [User System Command Functions](settings.md)

Allows you to create [user functions](Atlas/tools/obsidian/Templater/Templater%20doc/user-functions/overview.md) linked to system commands.

Check the [documentation](system-user-functions.md) for more information.

**Warning:** It can be dangerous to execute arbitrary system commands from untrusted sources. Only run system commands that you understand, from trusted sources.

[Previous chapter](syntax.md)

[Previous chapter](syntax.md)

