---
type: game
title: God Hand
year: "2006"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0889191/
genres:
  - Action
  - Adventure
  - Comedy
onlineRating: 7.5
image: https://i.ytimg.com/vi/SiPhunoOork/maxresdefault.jpg
released: true
releaseDate: 10.10.2006
played: false
personalRating: 0
tags:
  - videogame
platforms: "[[PS2]]"
images:
  - https://m.media-amazon.com/images/M/MV5BZTY3ZGUyMjQtNTY1ZS00NjVjLWIzOGUtZjZlODVmZDMyYmEzXkEyXkFqcGc@._V1_QL75_UX776_.jpg
  - https://file.sector.sk/files/novinky/3/2006-4-19-13-43-85/01-l.jpg
  - https://i.ytimg.com/vi/CLT9SEVQdlo/maxresdefault.jpg
---
`$= '![Image|200](' + dv.current().image + ')'`

### images

```dataviewjs
for (const img of dv.current().images) {
  console.log(img);
	dv.paragraph(`![Image|200](${img})`)
}
```