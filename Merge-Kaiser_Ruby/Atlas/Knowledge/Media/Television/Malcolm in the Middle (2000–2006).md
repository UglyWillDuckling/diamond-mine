---
type: series
subType: ""
title: Malcolm in the Middle
year: 2000–2006
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0212671/
id: tt0212671
genres:
  - Comedy
  - Family
writer:
  - Linwood Boomer
  - Michael Glouberman
  - Gary Murphy
actors:
  - Frankie Muniz
  - Bryan Cranston
  - Justin Berfield
image: https://m.media-amazon.com/images/M/MV5BY2M0Y2M4YTQtZDdjMC00MDZiLWI1OGEtZDdjZjBiZDE4ODU3XkEyXkFqcGc@._V1_SX300.jpg
released: true
airing: false
airedFrom: 01/09/2000
airedTo: unknown
watched: true
lastWatched: ""
personalRating: 10
tags:
  - tv-series
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

**Aired from**: `$= dv.current().airedFrom`
**Aired until**: `$= dv.current().airedTo`