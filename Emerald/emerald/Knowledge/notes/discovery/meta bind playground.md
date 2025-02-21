---
rating: 1
done: true
listing:
  - hello
  - fdfd
related:
  - "[[Meta Bind Plugin|Meta Bind Plugin]]"
  - "[[+/Christmas Party.md|Christmas Party]]"
  - "[[Knowledge/Articles/Obsidian/Metabind can create interactive elements on the page.md|Metabind can create interactive elements on the page]]"
  - "[[+/FIFO.md|FIFO]]"
  - "[[+/crontab.md|crontab]]"
image:
  - work/people and teams/LUNA/Screenshot_20241107_140216.png
  - Knowledge/Education/React/documentation/attachements/unnamed.png
  - Knowledge/Education/React/documentation/attachements/sharing_data_parent.webp
file: Fali mi graficki view za git logove
single_image: x/d4aed17d7f1d69a2485adcf4932c25ce_MD5.jpg
images:
  - Knowledge/Education/React/documentation/attachements/sharing_data_parent.webp
  - Knowledge/Education/React/documentation/attachements/unnamed.png
  - x/249c294c60af5298fa4d1da1d0cd7174_MD5.png
exampleProperty:
  - "[[+/Christmas Party.md|Christmas Party]]"
  - "[[Clippings/Configuring the Nginx Error and Access Logs.md|Configuring the Nginx Error and Access Logs]]"
  - "[[Clippings/Explanation of % directives in find -printf.md|Explanation of % directives in find -printf]]"
---
part_of:: [[Meta Bind Plugin]]

## note

- Meta bind actually has its own playground. Use `Open playground` to access it .
- It also has a [GitHub repository](https://github.com/mProjectsCode/obsidian-meta-bind-plugin) with an example vault

**done**: `INPUT[toggle:done]`

**Rating** 

```meta-bind
INPUT[inlineSelect(
    option(1, bad),
    option(2, meh),
    option(3, ok),
    option(4, good),
    option(5, great)
):rating]
```

```meta-bind
INPUT[inlineSelect(
    option(1, 'if you value your time, do not watch')
):rating]
```

## listing

```meta-bind
INPUT[list:listing]
```

## images

### `imageListSuggester`

```meta-bind
INPUT[imageListSuggester(optionQuery("")): images]
```

### `imageSuggester`
> single image input

```meta-bind
INPUT[imageSuggester(optionQuery("")): single_image]
```

___
## link

```meta-bind
INPUT[suggester(optionQuery(""), useLinks(false)):file]
```

```meta-bind
VIEW[{file}][link]
```

### `listSuggester`

```meta-bind
INPUT[listSuggester(optionQuery(""), useLinks(true), title("Related")):related]
```
