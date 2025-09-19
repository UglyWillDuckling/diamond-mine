---
type: series
subType: ""
title: Fallout
englishTitle: Fallout
year: 2024–
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt12637874/
id: tt12637874
plot: In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.
genres:
  - Action
  - Adventure
  - Drama
writer:
  - Geneva Robertson-Dworet
  - Graham Wagner
actors:
  - Ella Purnell
  - Aaron Moten
  - Walton Goggins
image: https://m.media-amazon.com/images/M/MV5BYzk4MWZkMDgtN2UwZC00ZjVlLWE1M2ItYjY4NWEwN2YwOGYxXkEyXkFqcGc@._V1_SX300.jpg
released: true
airing: false
airedFrom: 04/10/2024
airedTo: unknown
new_episodes: 2025-12-17
watched: true
lastWatched: ""
onlineRating: 8.3
personalRating: 7.3
related:
  - "[[Fallout franchise]]"
tags:
  - tv-series
finished: false
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