---
source: https://handlebarsjs.com/guide/
published: 2023-09-23
created: 2025-11-09
tags:
  - tool/js
  - tool/dev/templating
---
## Introduction

## What is Handlebars?

Handlebars is a simple **templating language**.

It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions.

template [Click to try out](https://handlebarsjs.com/examples/simple-expressions.html)

```
<p>{{firstname}} {{lastname}}</p>
```

A handlebars expression is a `{{`, some contents, followed by a `}}`. When the template is executed, these expressions are replaced with values from an input object.

[Learn More: Expressions](https://handlebarsjs.com/guide/expressions.html)

## Installation

The fastest way to test Handlebars is to load it from a *CDN* and embed it in an HTML file.

WARNING

This method can be used for small pages and for testing. There are several other ways to use Handlebars, when you target real production systems.

[Learn more: Installation](https://handlebarsjs.com/guide/installation/)

## Language features

### Simple expressions

As shown before, the following template defines two Handlebars expressions

template [Click to try out](https://handlebarsjs.com/examples/simple-expressions.html)

```
<p>{{firstname}} {{lastname}}</p>
```

If applied to the input object

input [Click to try out](https://handlebarsjs.com/examples/simple-expressions.html)

```
{

  firstname: "Yehuda",

  lastname: "Katz",

}
```

the expressions will be replaced by the corresponding properties. The result is then

output [Click to try out](https://handlebarsjs.com/examples/simple-expressions.html)

```
<p>Yehuda Katz</p>
```

### Nested input objects

Sometimes, the input objects contains other objects or arrays. For example:

input [Click to try out](https://handlebarsjs.com/examples/path-expressions-dot.html)

```
{

  person: {

    firstname: "Yehuda",

    lastname: "Katz",

  },

}
```

In such a case, you can use a dot-notation to gain access to the nested properties

template [Click to try out](https://handlebarsjs.com/examples/path-expressions-dot.html)

```
{{person.firstname}} {{person.lastname}}
```

[Learn more: Expressions](https://handlebarsjs.com/guide/expressions.html)

Some built-in helpers allow you to change the current context to a nested object. You can then access this object as if it were the root object

### Evaluation context

The built-in block-helpers `each` and `with` allow you to change the current evaluation context.

The `with` -helper dives into an object-property, giving you access to its properties

template [Click to try out](https://handlebarsjs.com/examples/builtin-helper-with-block.html)

```
{{#with person}}

{{firstname}} {{lastname}}

{{/with}}
```

input [Click to try out](https://handlebarsjs.com/examples/builtin-helper-with-block.html)

```
{

  person: {

    firstname: "Yehuda",

    lastname: "Katz",

  },

}
```

The `each` -helper iterates an array, allowing you to access the properties of each object via simple handlebars expressions.

template [Click to try out](https://handlebarsjs.com/examples/builtin-helper-each-block.html)

```
<ul class="people_list">

  {{#each people}}

    <li>{{this}}</li>

  {{/each}}

</ul>
```

input [Click to try out](https://handlebarsjs.com/examples/builtin-helper-each-block.html)

```
{

  people: [

    "Yehuda Katz",

    "Alan Johnson",

    "Charles Jolley",

  ],

}
```

[Learn more: Built-in helpers](https://handlebarsjs.com/guide/builtin-helpers.html)

You can use comments in your handlebars code just as you would in your code. Since there is generally some level of logic, this is a good practice.

The comments will not be in the resulting output. If you'd like the comments to show up just use HTML comments, and they will be output.

Any comments that must contain `}}` or other handlebars tokens should use the `{{!-- --}}` syntax.

template [Click to try out](https://handlebarsjs.com/examples/comments.html)

```
{{! This comment will not show up in the output}}

<!-- This comment will show up as HTML-comment -->

{{!-- This comment may contain mustaches like }} --}}
```

### Custom Helpers

Handlebars helpers can be accessed from any context in a template. You can register a helper with the Handlebars.registerHelper method.

Helpers receive the current context as the `this` -context of the function.

### Block Helpers

Block expressions allow you to define helpers that will invoke a section of your template with a different context than the current. These block helpers are identified by a `#` preceeding the helper name and require a matching closing mustache, `/`, of the same name. Let's consider a helper that will generate an HTML list:

The example creates a helper named `list` to generate our HTML list. The helper receives the `people` as its first parameter, and an `options` hash as its second parameter. The options hash contains a property named `fn`, which you can invoke with a context just as you would invoke a normal Handlebars template.

When executed, the template will render:

output [Click to try out](https://handlebarsjs.com/examples/helper-block.html)

```
<ul>

<li>Yehuda Katz</li>

<li>Carl Lerche</li>

<li>Alan Johnson</li>

</ul>
```

Block helpers have more features, such as the ability to create an `else` section (used, for instance, by the built-in `if` helper).

Since the contents of a block helper are escaped when you call `options.fn(context)`, Handlebars does not escape the results of a block helper. If it did, inner content would be double-escaped!

[Learn More: Block Helpers](https://handlebarsjs.com/guide/block-helpers.html)

### HTML Escaping

Because it was originally designed to generate HTML, Handlebars escapes values returned by a `{{expression}}`. If you don't want Handlebars to escape a value, use the "triple-stash", `{{{`.

template [Click to try out](https://handlebarsjs.com/examples/html-escaping.html)

```
raw: {{{specialChars}}}

html-escaped: {{specialChars}}
```

The special characters in the second line will be escaped:

output [Click to try out](https://handlebarsjs.com/examples/html-escaping.html)

```
raw: & < > " ' \` =

html-escaped: &amp; &lt; &gt; &quot; &#x27; &#x60; &#x3D;
```

Handlebars will not escape a `Handlebars.SafeString`. If you write a helper that generates its own HTML, you will usually want to return a `new Handlebars.SafeString(result)`. In such a circumstance, you will want to manually escape parameters.

This will escape the passed in parameters, but mark the response as safe, so Handlebars will not try to escape it even if the "triple-stash" is not used.

WARNING

Handlebars does not escape JavaScript strings. Using Handlebars to generate JavaScript, such as inline event handlers, could potentially lead to cross-site scripting vulnerabilities.

### Partials

Handlebars partials allow for code reuse by creating shared templates. You can register a partial using the `registerPartial` -method:

The following template and input:

template [Click to try out](https://handlebarsjs.com/examples/partials/register.html)

```
{{#each persons}}

  {{>person person=.}}

{{/each}}
```

input [Click to try out](https://handlebarsjs.com/examples/partials/register.html)

```
{

  persons: [

    { name: "Nils", age: 20 },

    { name: "Teddy", age: 10 },

    { name: "Nelson", age: 40 },

  ],

}
```

will then provide the following result:

output [Click to try out](https://handlebarsjs.com/examples/partials/register.html)

```
Nils is 20 years old.

  Teddy is 10 years old.

  Nelson is 40 years old.
```

[Learn More: Partials](https://handlebarsjs.com/guide/partials.html)

### Built-In Helpers

Handlebars offers a variety of built-in helpers such as the if conditional and each iterator.

[Learn More: Built-In Helpers](https://handlebarsjs.com/guide/builtin-helpers.html)

### API Reference

Handlebars offers a variety of APIs and utility methods for applications and helpers.

[Learn More: API Reference](https://handlebarsjs.com/api-reference/)