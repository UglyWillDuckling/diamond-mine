1. [**1.** Introduction](Pro%20Git%20-%20Scott%20Chacon/Introduction.md)
1. [**1.1.** Installation](Atlas/tools/dev/Zellij/zellijdoc/installation.md)
2. [**1.2.** Terminology](terminology.md)
3. [**1.3.** Syntax](syntax.md)
4. [**1.4.** Settings](settings.md)
5. [[Atlas/tools/obsidian/Templater/Templater doc/faq|faq]]
6. [**2.** Internal Functions](Atlas/tools/obsidian/Templater/Templater%20doc/internal-functions/overview.md)
7. [**2.1.** tp.app](app-module.md)
8. [**2.2.** tp.config](config-module.md)
9. [**2.3.** tp.date](date-module.md)
10. [**2.4.** tp.file](file-module.md)
11. [**2.5.** tp.frontmatter](frontmatter-module.md)
12. [**2.6.** tp.hooks](hooks-module.md)
13. [**2.7.** tp.obsidian](obsidian-module.md)
14. [**2.8.** tp.system](system-module.md)
15. [**2.9.** tp.web](web-module.md)
16. [**2.10.** Contributing](contribute.md)
17. [**3.** User Functions](Atlas/tools/obsidian/Templater/Templater%20doc/user-functions/overview.md)
18. [**3.1.** User Scripts](script-user-functions.md)
19. [**3.2.** System Commands](system-user-functions.md)
20. [**4.** Commands](Atlas/tools/obsidian/Templater/Templater%20doc/commands/overview.md)
21. [**4.1.** Dynamic Commands](dynamic-command.md)
22. [**4.2.** Execution Commands](execution-command.md)
23. [**4.3.** Whitespace Control](whitespace-control.md)

- Light (default)
- Rust
- Coal
- Navy
- Ayu

# Templater

[Print this book](print.md)

# [Contributing](contribute.md)

You can contribute to [Templater](https://github.com/SilentVoid13/Templater) by developing a new internal function / variable.

The process to develop a new one is really easy.

Keep in mind that only pertinent submissions will be accepted, don't submit a very specific internal variable / function that you'll be the only one using.

## [Layout](contribute.md)

Internal variables / functions are sorted by modules. Each module has a dedicated folder under [src/InternalTemplates](https://github.com/SilentVoid13/Templater/tree/master/src/InternalTemplates).

Let's take the [date module](https://github.com/SilentVoid13/Templater/tree/master/src/InternalTemplates/date) as an example.

It contains an [InternalModuleDate](https://github.com/SilentVoid13/Templater/blob/master/src/core/functions/internal_functions/date/InternalModuleDate.ts) file where all our internal date's related variables and functions are defined and registered:

```typescript
export class InternalModuleDate extends InternalModule {
    name = "date";

    async createStaticTemplates() {
        this.static_templates.set("now", this.generate_now());
        this.static_templates.set("tomorrow", this.generate_tomorrow());
        this.static_templates.set("yesterday", this.generate_yesterday());
    }

    async updateTemplates() {}

    generate_now() {
        return (format: string = "YYYY-MM-DD", offset?: number, reference?: string, reference_format?: string) => {
            if (reference && !window.moment(reference, reference_format).isValid()) {
                throw new Error("Invalid title date format, try specifying one with the argument 'reference'");
            }
            return get_date_string(format, offset, reference, reference_format);
        }
    }

    generate_tomorrow() {
        return (format: string = "YYYY-MM-DD") => {
            return get_date_string(format, 1);
        }
    }

    generate_yesterday() {
        return (format: string = "YYYY-MM-DD") => {
            return get_date_string(format, -1);
        }
    }
}

```

Every module extends the [InternalModule](https://github.com/SilentVoid13/Templater/blob/master/src/core/functions/internal_functions/InternalModule.ts) abstract class, which means they contain the following attributes and methods:

- `this.app` attribute: the Obsidian API `App` object.
- `this.file` attribute: The destination file where the template will be inserted.
- `this.plugin` attribute: The Templater plugin object.
- `this.static_templates` attribute: A map containing all (name; variable/function) that are static. A static variable / function means that it doesn't depend on the file when executed. These type of variables / functions won't be updated each time we insert a new template, to save some overhead.
- `this.dynamic_templates` attribute: Same as `static_templates` except that it contains variables / functions dependent on the file when executed.
- `this.createStaticTemplates()` method: Registers all static internal variable / function for that module.
- `this.updateTemplates()` method: Registers every dynamic internal variable / function for that module.

You can use these attributes in your new internal variable / function if you need them.

## [Registering a new internal variable / function](contribute.md)

Here are the different steps you need to follow, in order to register a new internal variable / function in a module.

**1st step:** Create a method inside the module called `generate_<internal_variable_or_function_name>()` that will generate your internal variable / function, that means it will return either a lambda function (representing the internal function) or directly the internal variable you want to expose.

All generation methods are ordered by alphabetical order based on the internal variable / function name.

Try to give a good, self-explanatory name for your variable / function.

**2nd step:** Register your internal variable / function in the `static_templates` or `dynamic_templates` map depending on whether your internal variable / function on the file when executed. The registration happens either in `createStaticTemplates` or `updateTemplates`.

To register your variable / function, use your `this.generate_<internal_variable_or_function_name>()` method you defined earlier:

```typescript
this.static_templates.set(<internal_variable_or_function_name>, this.generate_<internal_variable_or_function_name>());
OR
this.dynamic_templates.set(<internal_variable_or_function_name>, this.generate_<internal_variable_or_function_name>());

```

Internal variable / function registrations are also ordered by alphabetical order based on the variable / function name.

**3rd step:** Add your internal variable / function documentation to Templater's [documentation](https://github.com/SilentVoid13/Templater/tree/master/docs/docs/internal-variables-functions/internal-modules).

And you are done ! Thanks for contributing to [Templater](https://github.com/SilentVoid13/Templater) !

Now, just submit a [pull request](https://github.com/SilentVoid13/Templater/pulls) on Github, I'll try to be as reactive as possible.

[Previous chapter](web-module.md)

[Previous chapter](web-module.md)

