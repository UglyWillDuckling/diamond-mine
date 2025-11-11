---
type: series
subType: ""
title: Common Side Effects
englishTitle: Common Side Effects
year: 2024–
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt28093628/
id: tt28093628
plot: Follows former high school lab mates Marshall and Frances as they unravel a conspiracy involving big pharma and the government to suppress knowledge of a rare fungus secret that may contain the solution to cure all world's diseases.
genres:
  - Animation
  - Comedy
  - Drama
writer:
  - Joseph Bennett
  - Steve Hely
episodes: 0
onlineRating: 8.5
actors:
  - Dave King
  - Emily Pendergast
  - Mike Judge
image: https://m.media-amazon.com/images/M/MV5BMmY5ZmY1ZWItYjMwMy00ZmYyLTlkNmItNjdmZGJjNmNjNWUwXkEyXkFqcGc@._V1_SX300.jpg
released: true
airing: true
airedFrom: 02.02.2025
airedTo: unknown
watched: false
lastWatched: ""
personalRating: 0
tags:
  - tv-series
plan-to-watch: true
status:
  - 3_Ready 📺
new_episodes:
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