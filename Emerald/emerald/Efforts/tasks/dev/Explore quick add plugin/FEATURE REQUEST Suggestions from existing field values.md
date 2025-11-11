---
author:
  - "[[Elaws]]"
created: 2025-07-09
published: 2022-11-26
source: https://github.com/chhoumann/quickadd/issues/337
tags:
  - PR/quickadd
part of:
  - "[[quickAdd]]"
---
## Description

**Problem description**

Often, I use {{VALUE}} or the suggester (from QuickAdd API) to complete a field in a note (e.g.: `type::`). It would be really useful if {{VALUE}} or the suggester could automatically retrieve the possible values for the field (either from all the notes or a chosen subset of notes) and suggest them.

## Activity

[![qaptoR|200](https://avatars.githubusercontent.com/u/40372043?u=b055172e11081867f1f1ff96ecbeba35afab71f0&v=4&size=80)

I support this 100%
I'm thinking of adding it myself as I see a few relatively simple solutions.

1. add to the list of format variables {{FIELD:}} so that we can specify a field that is searched through.
2. for every {{VALUE:}} variable, search the filesystem of fields with that name.

I prefer the idea of 1 because it improves performance by only incurring the cost of searching for a field when a user requests it explicitly.

[![MichaTarlton|100](https://avatars.githubusercontent.com/u/23247219?v=4&size=80)]

In my mental model, this would replicate metadata inheritance. I would like QuickAdd to pull metadata from fields in the currently open note, so they could be reapplied in the created note. Expanding the value selection to some filterable subset of notes or fields would be a crazy powerful feature.

[![chhoumann](https://avatars.githubusercontent.com/u/29108628?u=ec8a2b2c568cdfb8322ab8ddff304103bdf3d8ea&v=4&size=80)](https://github.com/chhoumann)

Yeah, this would be a fantastic feature to have. I especially like your suggestion about `{{FIELD}}`, [@qaptoR](https://github.com/qaptoR), for the reasons you mentioned. Merging it with `{{VALUE}}` would be hard to maintain + inhibit performance unnecessarily.

Let's see. What if `{{FIELD:Type}}` looks for every occurrence of `Type` in metadata - both Dataview fields & YAML properties.  
Since both already have indexing, QA doesn't need to do that... so it's probably just O(1) lookup (very fast to do).

Then it's just how we get the subset. I imagine one could either specify

- a file path (for replicating properties of a specific file),
- a folder path to get all files within as subset, or
- a tag to get all files with this tag as subset.

If there's only 1 potential value, then that's used without asking the user. Otherwise, use suggester to prompt user.  
If there are no values... an input prompt could be used to ask for a specific value.

Any thoughts?

[@qaptoR](https://github.com/qaptoR) the process for adding format syntax is quite involved at the moment. There are many things to be aware of. If you wish to save the headache of navigating this complexity, I'll be more than happy to add this feature tomorrow.

[![Elaws](https://avatars.githubusercontent.com/u/52013479?u=50ef7313c80a8d4bd00f2e337c043fd7e1d6caa9&v=4&size=80)](https://github.com/Elaws)

[@chhoumann](https://github.com/chhoumann):

> Then it's just how we get the subset. I imagine one could either specify
> 
> - a file path (for replicating properties of a specific file),
> - a folder path to get all files within as subset, or
> - a tag to get all files with this tag as subset.

Maybe more complex to implement, but I was also thinking about the following filters:

- A combination of the choices you mentioned, e.g.:

```
Files in PATH and not SUBPATH with TAG_1 and not TAG_2
```

- A filter based on a given `FIELD` and its values (e.g.: only notes with `composer:: John Williams`).

[![qaptoR](https://avatars.githubusercontent.com/u/40372043?u=b055172e11081867f1f1ff96ecbeba35afab71f0&v=4&size=80)](https://github.com/qaptoR)

[@chhoumann](https://github.com/chhoumann)  
I've already implemented it (to my own immediate specification, see below)  
I just made the pull request here: [#403](https://github.com/chhoumann/quickadd/pull/403)

It's possible I've missed something, but I've tested it and it works.

The only hiccup I found was not realizing that if you search all frontmatter fields in all markdown files then it searches the templates too. So I have to do a check for frontmatter fields that are of type 'object' because the format syntax when read as frontmatter is an object.

My Specification:  
I'm not super familiar yet with the obsidian API, I've just been building small tools for linking together different workflows offered by different plugins. So it's possible there's a more performant way to get the values, as I didn't think about the dataview field:: syntax, or that the info might be cached in a more easy to access way.

Essentially, I just get all markdown files from the vault, and loop over them, checking their frontmatter for the  provided. It's definitely a brute force method, but I was more keen on getting the new syntax working than finding the optimal solution at this stage.

[![qaptoR](https://avatars.githubusercontent.com/u/40372043?u=b055172e11081867f1f1ff96ecbeba35afab71f0&v=4&size=80)](https://github.com/qaptoR)

So, I just started using it, and it's great. But one major flaw that I'll probably fix, is that if there is no suggestion selectable (meaning no matches) then it won't allow you to accept the current input as the value.

This is definitely for safety, since the FuzzySuggestModal is a generic with type, and the input is always a string. But for string values it should be acceptable.

The problem I'm running into is that: if I want to set a field with a new entry I have to use {{VALUE}}. If I want to use an existing value (and get fuzzy suggest) then I can use {{FIELD:}}, but it can't be both

[![chhoumann](https://avatars.githubusercontent.com/u/29108628?u=ec8a2b2c568cdfb8322ab8ddff304103bdf3d8ea&v=4&size=80)](https://github.com/chhoumann)

Thanks for your PR [@qaptoR](https://github.com/qaptoR) & your input [@Elaws](https://github.com/Elaws)!

With the latest update, , `{{FIELD}}` has been added as a new feature.  
I'm considering this release a beta-test of the `{{FIELD}}` feature, and have asked for feedback in the release notes:  

I've also gone ahead and fixed the issue that [@qaptoR](https://github.com/qaptoR) mentioned:  
Supports when there are *no* fields like the one you specify in `{{FIELD}}` in your vault. Will just ask you to input a value manually. Similar to `{{VALUE}}`.

I want to more towards what [@Elaws](https://github.com/Elaws) suggested, allowing for a more sophisticated language to query for these. I'm strongly considering using dataview for this, as it is familiar syntax to many Obsidian users. Need to consider it a bit more, though...

Anyway, hoping to get some more feedback in here. Looking to add dataview support (inline properties) to this soon, so leaving this issue up + for further consideration feedback.

Forgive my ignorance, but are there defined capabilities and directions for the {{FIELD}} feature as of current?

From my quick study and testing, adding `{{FIELD:fieldname}}` to a template, will search all frontmatter or DV fields with that name, and then display variables from those fields in a suggester during quick add. It does not display unique variables, so if multiple notes have the same field variable, e.g. `FIELD: uniquename`, I would see multiple entries for `uniquename` in the suggester for each note it appears in, across the vault. Am I missing any additional functionality?

Also, am I missing a way to define or filter the fieldname input? My ideal use case would be for quickadd to take `FIELD: fieldname` from the active file. I see that adding a query ability is in the cards but, it feels as if there is some "capture from active file" feature in QA that I keep missing.

[![chhoumann](https://avatars.githubusercontent.com/u/29108628?u=ec8a2b2c568cdfb8322ab8ddff304103bdf3d8ea&v=4&size=80)](https://github.com/chhoumann)

No ignorance on your part, [@MichaTarlton](https://github.com/MichaTarlton). You raise some very valid concerns.

I have added documentation for the feature. I'm including it here as a point for discussion:

> Suggest the values of `FIELDNAME` anywhere `{{FIELD:FIELDNAME}}` is used. Fields are YAML fields, and the values represent any value this field has in your vault. If there exists no such field or value, you are instead prompted to enter one. This is currently in beta, and the syntax can change—leave your thoughts [here](https://github.com/chhoumann/quickadd/issues/337).

Dataview fields are not currently supported. I'm still figuring how the integration should be managed.  
As it stands, it will look for any possible value contained in the specified YAML field (case-sensitive!), across your vault.

And for your last question: what would you expect to happen if

- you have no file open? ⇒ Error? Prompt? Suggest across vault?
- the file you have opened doesn't have `fieldname`? ⇒ Error? Prompt? Suggest across vault?
- the file you have opened has `fieldname`, but it has no value? ⇒ Prompt? Use the empty value?

One of the things I'm pondering is how to encode these things in a query/with format syntax.

However, some things I think make sense:

- removing case sensitivity.
- only showing unique values.

Which I'll be implementing now.

Thank you for putting my mind to rest.

I think DV uses case-sensitive field querying, so some people might actually be using case uniqueness (though in my situation it's just a pain in my ass).

To your Qs, shooting from the hip I would expect:

1. Insertion of the `undefined` entry that usually shows up in such cases. But a prompt which searches across the vault, sounds better.
2. Same as above.
3. Use the empty value. But this would probably be a highly personal preference. I could see where I may want it to trigger a prompt instead.

[![chhoumann](https://avatars.githubusercontent.com/u/29108628?u=ec8a2b2c568cdfb8322ab8ddff304103bdf3d8ea&v=4&size=80)](https://github.com/chhoumann)

Thank you for the input!

Luckily, I hadn't removed the case sensitivity yet. I was under the impression that it didn't, but I'm glad to hear that my assumption might be wrong before I acted on it.  
Will wait for further input / more info on that matter

I've gone ahead and made QA only consider unique values. No need to put every value in the suggester. That is included in 0.11.

I'm also considering what to do instead of `undefined` across the board. It is really just is because the implementation details spill into the plugin. The value is `undefined` in JavaScript, so if none is given, it'll just get put in our notes (or an error). However, I'd like to make the UX a bit more clear as to when `undefined` could occur, and give options for recovery or alternatives.  
Perhaps a setting that could customize this behavior for users? Although I don't think adding settings for everything necessarily makes the plugin any simpler. Anyway, that's a bit besides the scope of this discussion.

[![MichaTarlton](https://avatars.githubusercontent.com/u/23247219?v=4&size=80)](https://github.com/MichaTarlton)

Probably should digress this into another thread, but what I've seen some template using plugins do is let you define the "no data" output. Though with this I can see users wanting flexible case-specific "undefined-s". Maybe a user chosen "undefined" and then one which can be passed to templater for the hyper-specific stuff?

[![JosefTaylor](https://avatars.githubusercontent.com/u/7024203?u=034ed80f31be94aef20275b1df97bd687125d15c&v=4&size=80)](https://github.com/JosefTaylor)

I'm having some struggles and wanted to understand if I'm doing the intended thing:  
my template is:

```
---
aliases: <% tp.user.split_name("{{VALUE}}") %>
pronouns: {{FIELD:pronouns}}
company: {{FIELD:company}}
created: {{DATE}}
role: {{FIELD:role}}
location: {{FIELD:location}}
---
```

company is a link to another file, i.e. `[[<company>]]`. I'm having an issue because Obsidian wants quotes around the whole link, i.e. `"[[<company>]]"`, but this template yields `[[<company>]]`, which Obsidian doesn't recognize as a link in frontmatter. So I tried including quotes in the template:

```
[...]
company: "{{FIELD:company}}"
[...]
```

This works, but has the unfortunate effect of including the template string itself in the drop-down menu (i.e. `{{FIELD:company}}`). If I click it, Obsidian crashes. What am I doing wrong?

EDIT: per [@ReidWeb](https://github.com/ReidWeb) below, this is a bug, not really part of this feature request. I've submitted at [#644](https://github.com/chhoumann/quickadd/issues/644). I suspect this is similar to [#455](https://github.com/chhoumann/quickadd/issues/455). I am going to try a workaround in which I use a very simple.js to wrap the field in quotes, so that QuickAdd doesn't get confused.

[![ReidWeb](https://avatars.githubusercontent.com/u/3649078?u=1b179d78b11f11350ef57fda5afb640979da621c&v=4&size=80)](https://github.com/ReidWeb)

[@JosefTaylor](https://github.com/JosefTaylor) your comment relates more to the creation of links from quickadd inputs than to this issue. You should probably create a separate issue.

---

FWIW: I've never found a way to successfully create an obsidian link in the frontmatter of a document based on quickadd input - what i've seen replicates what you're seeing. What I do to establish that relationship is something like so (using your example)

```
---
aliases: <% tp.user.split_name("{{VALUE}}") %>
pronouns: {{FIELD:pronouns}}
company: {{FIELD:company}}
created: {{DATE}}
role: {{FIELD:role}}
location: {{FIELD:location}}
---

> **Company:**  [[{{FIELD:company}}]]
```

Which creates a link in the body rather than the metadata, realise this doesn't entirely achieve the desired effect

[![hbock-42](https://avatars.githubusercontent.com/u/9290665?u=d7a86edc69f9e699960b7cf5900152133fd2c31e&v=4&size=80)](https://github.com/hbock-42)

Thx, excellent feature!

It work perfectly for one-line front matter field, however, it seems that if you are using multi-choice front-matter (like tags) it does not work.

```
author: Robert
```

in the case above, next time I use `{{FIELD:author}}` I have `Robert` as a suggestion.

However, if my front matter is like this:

```
author: 
   - Robert
   - Bob
```

Next time I use `{{FIELD:author}}`, I have no suggestion

[![WhiskeyJack96](https://avatars.githubusercontent.com/u/10688621?v=4&size=80)](https://github.com/WhiskeyJack96)

FYI I opened [#740](https://github.com/chhoumann/quickadd/pull/740) (which I think will fix the above issue)  
I haven't tested yet since attempting to build locally isnt working (on main without changes) but if someone else has that working it might help you!

[![chhoumann](https://avatars.githubusercontent.com/u/29108628?u=ec8a2b2c568cdfb8322ab8ddff304103bdf3d8ea&v=4&size=80)](https://github.com/chhoumann)

## 🎉 Field Suggestions Enhancement Merged!

Great news everyone! The comprehensive field suggestions enhancement has been merged into master via PR [#826](https://github.com/chhoumann/quickadd/pull/826).

## What's Included

### ✨ All the features discussed in this thread:

- **Advanced filtering** - folder, tag, exclusions
- **Default values** - with smart context-aware defaults
- **Dataview integration** - automatic performance boost when Dataview is installed
- **Inline field support** - works with both YAML and inline fields
- **Better error messages** - helpful context when syntax errors occur

### 📖 Full Syntax Reference

```
{{FIELD:fieldname|folder:path|tag:tagname|default:value|...}}
```

See the [PR description](https://github.com/chhoumann/quickadd/pull/826) for complete documentation of all available filters.

## 🙏 Thank You!

This feature wouldn't exist without all the amazing feedback and suggestions from:

- Everyone who contributed ideas and use cases
- Those who tested early versions
- Everyone who provided feedback on the syntax

The enhancement will be included in the next QuickAdd release. Looking forward to seeing how you all use it!

Feel free to report any issues or suggest further improvements.

[![Elaws](https://avatars.githubusercontent.com/u/52013479?u=50ef7313c80a8d4bd00f2e337c043fd7e1d6caa9&v=4&size=80)](https://github.com/Elaws)
