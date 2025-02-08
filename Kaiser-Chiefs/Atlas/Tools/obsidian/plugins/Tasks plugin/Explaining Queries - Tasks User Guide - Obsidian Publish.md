---
source: https://publish.obsidian.md/tasks/Queries/Explaining+Queries
author:
  - "[[Tasks User Guide]]"
published: 
created: 2025-01-29
tags:
  - docs
  - docs/official
---
![icon|50](https://publish.obsidian.md/favicon.ico?4bb6aa9a821f975db2a1)

about:: [[Tasks plugin]]
## Overview: the 'explain' instruction

Introduced in Tasks 1.19.0.

The `explain` instruction adds some extra output at the start of the search results, when tasks blocks are viewed in Live Preview and Reading modes.

This has a number of benefits:

- It is easy to understand date-based-filters:
- Any dates in filters are expanded, to show the actual dates used in the search.
- Boolean query logic is clearer.
- Combinations of queries (via `AND`, `OR`, `NOT` etc) can be seen more clearly.
- If there is a [global filter](https://publish.obsidian.md/tasks/Getting+Started/Global+Filter) enabled, it is included in the explanation.
- This often explains why tasks are missing from results.
- If there is a [global query](https://publish.obsidian.md/tasks/Queries/Global+Query) enabled, it too is included in the explanation.
- Any ['group by'](https://publish.obsidian.md/tasks/Queries/Grouping) instructions are listed (since Tasks 5.4.0)
- Any ['sort by'](https://publish.obsidian.md/tasks/Queries/Sorting) instructions are listed (since Tasks 5.4.0)

## Examples

### Dates in filters are expanded

For example, when the following text is placed in a tasks query block:

```text
starts after 2 years ago
scheduled after 1 week ago
due before tomorrow
explain
```

the results begin with the following, on `2022-10-21`:

```text
Explanation of this Tasks code block query:

  starts after 2 years ago =>
    start date is after 2020-10-21 (Wednesday 21st October 2020) OR no start date

  scheduled after 1 week ago =>
    scheduled date is after 2022-10-14 (Friday 14th October 2022)

  due before tomorrow =>
    due date is before 2022-10-22 (Saturday 22nd October 2022)

  No grouping instructions supplied.

  No sorting instructions supplied.
```

Note how it shows the dates being searched for very clearly, including the day of the week.

It also shows that `starts` searches also match tasks with not start date.

### Regular Expressions are explained

Introduced in Tasks 4.3.0.

For example, when the following [regular expression](https://publish.obsidian.md/tasks/Queries/Regular+Expressions) is placed in a tasks query block:

```text
explain
path regex matches /^Root/Sub-Folder/Sample File\.md/i
```

the results begin with the following:

```text
Explanation of this Tasks code block query:

  path regex matches /^Root/Sub-Folder/Sample File\.md/i =>
    using regex:     '^Root\/Sub-Folder\/Sample File\.md' with flag 'i'

  No grouping instructions supplied.

  No sorting instructions supplied.
```

### Boolean combinations are displayed

For example, when the following text is placed in a tasks query block:

```text
explain
not done
(due before tomorrow) AND (is recurring)
```

the results begin with the following, on `2022-10-21`:

```text
Explanation of this Tasks code block query:

  not done

  (due before tomorrow) AND (is recurring) =>
    AND (All of):
      due before tomorrow =>
        due date is before 2022-10-22 (Saturday 22nd October 2022)
      is recurring

  No grouping instructions supplied.

  No sorting instructions supplied.
```

### More complex combinations are displayed

With complex Boolean combinations of filters, it is easy to get parentheses in the wrong place, even when using [Line Continuations](https://publish.obsidian.md/tasks/Queries/Line+Continuations) to improve readability.

With `explain`, the interpreted logic is easily visible.

For example, when the following text is placed in a tasks query block:

```text
explain
(                                                                                       \
    (description includes 1) AND (description includes 2) AND (description includes 3)  \
) OR (                                                                                  \
    (description includes 5) AND (description includes 6) AND (description includes 7)  \
)                                                                                       \
AND NOT (description includes 7)
```

the results begin with the following, on `2022-10-21`:

```text
Explanation of this Tasks code block query:

  (                                                                                       \
      (description includes 1) AND (description includes 2) AND (description includes 3)  \
  ) OR (                                                                                  \
      (description includes 5) AND (description includes 6) AND (description includes 7)  \
  )                                                                                       \
  AND NOT (description includes 7)
   =>
  ( (description includes 1) AND (description includes 2) AND (description includes 3) ) OR ( (description includes 5) AND (description includes 6) AND (description includes 7) ) AND NOT (description includes 7) =>
    OR (At least one of):
      AND (All of):
        description includes 1
        description includes 2
        description includes 3
      AND (All of):
        AND (All of):
          description includes 5
          description includes 6
          description includes 7
        NOT:
          description includes 7

  No grouping instructions supplied.

  No sorting instructions supplied.
```

### Global Query is displayed

The Global Query setting was added in Tasks 3.5.0.

```text
limit 50
heading includes tasks
```

and when the following text is placed in a tasks query block:

```text
not done
due next week
explain
```

the results begin with the following, on `2022-10-21`:

```text
Explanation of the global query:

  heading includes tasks

  No grouping instructions supplied.

  No sorting instructions supplied.

  At most 50 tasks.

Explanation of this Tasks code block query:

  not done

  due next week =>
    due date is between:
      2022-10-24 (Monday 24th October 2022) and
      2022-10-30 (Sunday 30th October 2022) inclusive

  No grouping instructions supplied.

  No sorting instructions supplied.
```

### Placeholder values are expanded

Placeholders were introduced in Tasks 4.7.0.

For example, when the following query with [Query Properties](https://publish.obsidian.md/tasks/Scripting/Query+Properties) in [placeholders](https://publish.obsidian.md/tasks/Scripting/Placeholders) is placed in a tasks query block in the file `some/sample/file path.md`:

```text
explain
path includes {{query.file.path}}
root includes {{query.file.root}}
folder includes {{query.file.folder}}
filename includes {{query.file.filename}}

description includes Some Cryptic String {{! Inline comments are removed before search }}
```

the results begin with the following:

```text
Explanation of this Tasks code block query:

  path includes {{query.file.path}} =>
  path includes some/sample/file path.md

  root includes {{query.file.root}} =>
  root includes some/

  folder includes {{query.file.folder}} =>
  folder includes some/sample/

  filename includes {{query.file.filename}} =>
  filename includes file path.md

  description includes Some Cryptic String {{! Inline comments are removed before search }} =>
  description includes Some Cryptic String

  No grouping instructions supplied.

  No sorting instructions supplied.
```

## Styling explain results

### Default style

For readability, explanations are shown in a fixed-width font (a `PRE` block), and if the text is too wide for the screen a horizontal scrollbar is shown. Otherwise, testing showed that the explanations would be unusable on small-screen devices.

### Customizing the results

For example, [this CSS snippet](https://github.com/obsidian-tasks-group/obsidian-tasks/blob/main/resources/sample_vaults/Tasks-Demo/.obsidian/snippets/tasks-plugin-explain-text-blue.css) `tasks-plugin-explain-text-blue.css` makes the explanation block text blue:

```css
/* Make the Tasks plugin's 'explain' output stand out in blue */
.plugin-tasks-query-explanation {
    color: var(--color-blue);
}
```