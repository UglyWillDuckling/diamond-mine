---
type: series
subType: ""
title: "Alien: Earth"
englishTitle: "Alien: Earth"
year: 2025–
url: https://www.imdb.com/title/tt13623632/
plot: When a mysterious space vessel crash-lands on Earth, a young woman and a ragtag group of tactical soldiers make a fateful discovery that puts them face-to-face with the planet's greatest threat.
genres:
  - Horror
  - Sci-Fi
  - Thriller
onlineRating: .nan
actors:
  - Sydney Chandler
  - Alex Lawther
  - Timothy Olyphant
image: https://m.media-amazon.com/images/M/MV5BYjA3NjVmNGYtOWZiZS00N2I1LWIwNDEtNmE4YjAyMTQ4NjQ0XkEyXkFqcGc@._V1_SX300.jpg
released: true
airing: false
airedFrom: 08/12/2025
airedTo: unknown
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/series
  - tv-series
new_episodes: 2025-08-12
finished: false
plan-to-watch: false
---
`$= '![Image|200](' + dv.current().image + ')'`

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
let text = '';

if (!dv.current().released) {
	text += '**Not released**\n';
	if (dv.current().airedFrom) {
		text += 'The series will release on ' + dv.current().release_date + '.';
	} else {
		text += 'The series is not released yet.';
	}
	
} else if (dv.current().airing) {
	text += '**Not finished**\n';
	text += 'The series is not fully released yet.';
}

if (text) {
	dv.paragraph(text);
}
```
**Online Rating**: `$= dv.current().onlineRating`
**Episodes**: `$= dv.current().episodes`
**Duration**:  `$= dv.current().duration`
**Aired from**: `$= dv.current().airedFrom`
**Aired until**: `$= dv.current().airedTo`