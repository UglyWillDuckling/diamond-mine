---
type: series
subType: ""
title: Carol & The End of the World
englishTitle: Carol & The End of the World
year: "2023"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt29629770/
id: tt29629770
plot: Global human annihilation is impending due to a mystery planet speeding towards Earth. Among the hedonistic crowd, one quiet and perpetually uneasy woman stands out, while the majority feel free to follow their greatest desires.
genres:
  - Animation
  - Comedy
  - Drama
writer:
  - Dan Guterman
episodes: 0
onlineRating: 7.2
actors:
  - Martha Kelly
  - Kimberly Hebert Gregory
  - Shelby Young
image: https://m.media-amazon.com/images/M/MV5BNTg1ODU4ZjItMWZkOC00MDZkLTkxZjAtYWRiOTNhZTA1YzYzXkEyXkFqcGc@._V1_SX300.jpg
released: true
airing: false
airedFrom: 15.12.2023
airedTo: unknown
watched: false
lastWatched: ""
personalRating: 0
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