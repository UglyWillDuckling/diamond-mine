---
type: movie
subType: ""
title: Totem
englishTitle: Totem
year: "2023"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt26315142/
id: tt26315142
plot: Seven-year-old Sol is spending the day at her grandfather's home, for a surprise party for Sol's father, Tonatiuh. As daylight fades, Sol comes to understand that her world is about to change dramatically.
genres:
  - Drama
director:
  - "[[Lila Avilés]]"
writer:
  - Lila Avilés
studio:
  - N/A
duration: 95 min
onlineRating: 7
actors:
  - Naíma Sentíes
  - Montserrat Marañon
  - Marisol Gasé
image: "[[~/×/ebe33ff20ab99c83b24b5d6c4e026f07_MD5.jpg]]"
released: true
streamingServices:
premiere: 23.04.2024
watched: true
plan-to-watch: false
lastWatched: 2025-05-15
personalRating: 9
tags:
  - film
---
![[~/×/ebe33ff20ab99c83b24b5d6c4e026f07_MD5.jpg|200]]

```dataviewjs
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:watched]\` watched \n last watched on ${dv.current().lastWatched || '---'}`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:watched]\` not yet watched`);
}
```

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Genres**:
```dataviewjs
dv.current().genres.length === 0 ? dv.span(' - none') : dv.list(dv.current().genres)
```

```dataviewjs
if (!dv.current().released) {
	dv.span('**Not released** The movie is not yet released.')
}
```

**Type**: `$= dv.current().type`
**Online Rating**: `$= dv.current().onlineRating`
**Duration**:  `$= dv.current().duration`
**Premiered**: `$= dv.current().premiere`

Mentions [[Tonatiuh]]
