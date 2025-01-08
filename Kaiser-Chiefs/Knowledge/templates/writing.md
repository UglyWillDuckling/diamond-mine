---
tag: 📚Book
title: "{{title}}"
subtitle: "{{subtitle}}"
author: [{{author}}]
category: [{{category}}]
publisher: {{publisher}}
publish: {{publishDate}}
total: {{totalPage}}
isbn: {{isbn10}} {{isbn13}}
cover: {{coverUrl}}
localCover: {{localCoverImage}}
status: unread
created: {{DATE:YYYY-MM-DD HH:mm:ss}}
updated: {{DATE:YYYY-MM-DD HH:mm:ss}}
---

%% To use an image URL from the server, use the following syntax: %%
<%* if (tp.frontmatter.cover && tp.frontmatter.cover.trim() !== "") { tR += `![cover|150](${tp.frontmatter.cover})` } %>

%% To save images locally, enable the 'Enable Cover Image Save' option in the settings and enter as follows: %%
<%* if (tp.frontmatter.localCover && tp.frontmatter.localCover.trim() !== "") { tR += `![[${tp.frontmatter.localCover}|150]]` } %>

# {{title}}