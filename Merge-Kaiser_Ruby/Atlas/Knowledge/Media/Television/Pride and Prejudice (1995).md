---

type: series
subType: ""
title: Pride and Prejudice
englishTitle: Pride and Prejudice
year: "1995"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0112130/
id: tt0112130
plot: While the arrival of wealthy gentlemen sends her marriage-minded mother into a frenzy, willful and opinionated Elizabeth Bennet matches wits with haughty Mr. Darcy.
genres:
  - Drama
  - Romance
writer:
  - N/A
episodes: 0
onlineRating: 8.8
actors:
  - Colin Firth
  - Jennifer Ehle
  - Susannah Harker
image: https://m.media-amazon.com/images/M/MV5BYzNkMjRmZGMtODg1Ni00MjIxLWI4MTYtOGEwM2YyMmZiMjUzXkEyXkFqcGc@._V1_SX300.jpg
released: true
airing: false
airedFrom: 01/14/1996
airedTo: unknown
watched: false
lastWatched: ""
personalRating: 0
tags: mediaDB/tv/series
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