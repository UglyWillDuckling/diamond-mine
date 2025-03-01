---
related:
  - "[[Footnote]]"
  - "[[footnotes example]]"
---
<%*
/*
creates either inline or a regular footnote
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
