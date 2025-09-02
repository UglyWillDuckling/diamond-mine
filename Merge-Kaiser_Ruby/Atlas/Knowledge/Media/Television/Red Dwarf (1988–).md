---
type: series
subType: ""
title: Red Dwarf
englishTitle: Red Dwarf
year: 1988–
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0094535/
id: tt0094535
plot: The adventures of the last human alive and his friends, stranded three million years into deep space on the mining ship Red Dwarf.
genres:
  - Comedy
  - Sci-Fi
writer:
  - Rob Grant
  - Doug Naylor
episodes: 0
onlineRating: 8.4
actors:
  - Chris Barrie
  - Craig Charles
  - Danny John-Jules
image: https://m.media-amazon.com/images/M/MV5BY2I3NWI1NDctMWFmNi00YWM2LWJiYTYtZjhlMzFmNjEzYWRjXkEyXkFqcGc@._V1_SX300.jpg
released: true
airing: false
airedFrom: 29.03.1989
airedTo: unknown
watched: false
lastWatched: ""
personalRating: 8.2
tags:
  - tv-series
status:
  - 0_Backlog
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
