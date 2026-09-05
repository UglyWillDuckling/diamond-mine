---
id: {{id}}
release_date: {{released}}
platforms: <%= {{platforms}}.map(p => `${p.platform.name}`) %>
genres: <%= {{genres}}.map(g => `${g.name}`) %>
publishers: <%= {{publishers}}.map(p => `${p.name}`) %>
developers: <%= {{developers}}.map(d => `${d.name}`) %>
image: {{background_image}}
background_image_add: {{background_image_additional}}
tags:
  - videogame
---
![{{name}}|400]({{background_image}})
