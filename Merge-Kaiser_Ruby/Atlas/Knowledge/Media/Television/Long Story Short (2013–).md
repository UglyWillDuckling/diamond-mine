---
type: series
subType: ""
title: Long Story, Short
englishTitle: Long Story, Short
year: 2013–
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt3062938/
id: tt3062938
plot: 21-year-old Kristen Harvey and her two best friends navigate messy relationships, bad dates, drunken mishaps and other assorted humiliations on the road to adulthood.
genres:
  - Drama
writer:
  - N/A
episodes: 0
onlineRating: 7
actors:
  - Lauren Collins
  - Katie Boland
  - Tommie-Amber Pirie
image: https://m.media-amazon.com/images/M/MV5BMDYyMDQwMDktNzdlYi00YmZjLWJiY2YtM2Y1MWM5N2FkMzY5XkEyXkFqcGc@._V1_SX300.jpg
released: true
airing: false
airedFrom: 19.08.2013
airedTo: unknown
watched: false
lastWatched: ""
personalRating: 0
tags:
  - tv-series/animated
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