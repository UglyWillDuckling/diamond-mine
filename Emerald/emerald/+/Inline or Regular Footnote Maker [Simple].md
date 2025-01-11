---
related:
  - "[[footnotes example]]"
---
#template

I have been using footnotes and I wanted to make it a little faster to make them so I used AI to help me get started with the script and edited a few parts to make this:
It prompts you to either a regular ( [^x] ) or inline footnote ( ^[x] ) and you choose what to put in X.

<%*
/*
THIS IS A JAVASCRIPT TEMPLATER FOR OBSIDIAN NOTES
It creates either an inline footnote or a regular footnote
*/

// Input: Prompt the user for the footnote type
const footnoteType = await tp.system.suggester(["Inline Footnote", "Regular Footnote"], ["Inline Footnote", "Regular Footnote"], true);

if (footnoteType === "Inline Footnote") {
  const inlineFootnoteContent = await tp.system.prompt("Write your inline footnote here", null, true);
  await tp.file.cursor_append(`^[${inlineFootnoteContent}]`);
} else {
  const footnoteTitle = await tp.system.prompt("Name your footnote", null, true);
  await tp.file.cursor_append(`[^${footnoteTitle}]`);
}
%>