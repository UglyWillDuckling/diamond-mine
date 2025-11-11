---
author:
  - "[[bagamag]]"
created: 2025-07-09
published: 2024-11-30
source: "https://forum.obsidian.md/t/help-with-quick-add/92556"
tags:
---
## Help with quick-add

[Help](https://forum.obsidian.md/c/get-help/19)

[bagamag](https://forum.obsidian.md/u/bagamag)

[Nov 2024](https://forum.obsidian.md/t/help-with-quick-add/92556 "Post date")

### Use quick add to create a new meeting note and insert a link to another file by matching a property

- I have a folder of People. Each person has a nickname.
- In quick-add I create a new meeting note with the filename format such as: Nov\_30\_2024\_FirstName
- I want to create a link in this new note to the person using the first name which is part of the filename. The first name would match to the nickname property in the files under People/. This would look like participant:: \[\[First Last\]\]

### Things I have tried

I tried embedding calls to dataview apis without luck even though my dataview query is correct.

[blue\_emperor](https://forum.obsidian.md/u/blue_emperor)

[Dec 2024](https://forum.obsidian.md/t/help-with-quick-add/92556/2 "Post date")

This is how to return values in Template choices in QuickAdd:

```
\`\`\`js quickadd
const input = await this.quickAddApi.inputPrompt("Input promp");
return \`Input given: ${input}\`;
\`\`\`
```

I.e. you insert **js quickadd** code block into your template and then use **return** to write text. To get more specific help, send the dataview related code which has to be in JavaScript format.

[bagamag](https://forum.obsidian.md/u/bagamag)

[Dec 2024](https://forum.obsidian.md/t/help-with-quick-add/92556/3 "Post date")

Here is the what I’ve been trying

```js
// I already had a prompt from quick add to create the new file with the firstname.
// This is redundant and shouldn't be needed.
const input = await this.quickAddApi.inputPrompt("Participants")

// for testing I hard code a name rather than use ${input}
// as a dataview query this works fine
const query = \`
    LIST
    FROM "People"
    WHERE nickname = "Joe"
  \`;

const dataviewApi = app.plugins.plugins["dataview"].api;
const result = await dataviewApi.query(query);

if (result && result.length > 0) {
    // access the first element
    const link = result[0][0];
    return \`participants:: [[${link}]]\`;
  } else {
     return \`No file found for participant: ${query}\`;
  }
```

3 months later

Closed

This topic was automatically closed 90 days after the last reply. New replies are no longer allowed.

### Want to read more? Browse other topics in Help or view latest topics.

[Powered by Discourse](https://discourse.org/powered-by)