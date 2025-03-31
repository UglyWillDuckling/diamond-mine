---
type: series
title: The Last of Us
englishTitle: The Last of Us
year: 2023–
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt3581920/
id: tt3581920
plot: After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.
genres:
  - Action
  - Adventure
  - Drama
writer:
  - Craig Mazin
  - Neil Druckmann
studio: 
episodes: 0
duration: 18S min
onlineRating: 8.7
actors:
  - Pedro Pascal
  - Bella Ramsey
  - Brendan Rozario
image: https://m.media-amazon.com/images/M/MV5BY2JiNjU3NWYtMTRlYS00NzY3LWE2NDQtZGFkNWE2MDU4OTExXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: 
airing: false
airedFrom: 01/15/2023
airedTo: unknown
watched: false
lastWatched: ""
personalRating: 8
tags:
  - mediaDB/tv/series
---
`$= '![Image|360](' + dv.current().image + ')'`

# `$= dv.current().title`

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

**Type**: `$= dv.current().type`
**Online Rating**: `$= dv.current().onlineRating`
