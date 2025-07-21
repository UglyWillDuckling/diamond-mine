---
type: series
subType: ""
title: "A Knight of the Seven Kingdoms: The Hedge Knight"
year: "2025"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt27497448/
id: tt27497448
plot: A century before GOT, Ser Duncan the Tall, and his squire, Egg wandered through Westeros, while the Targaryen dynasty ruled the Iron Throne and dragons were still remembered, great destinies and enemies await the incomparable frie...
genres:
  - Action
  - Adventure
  - Drama
writer:
  - N/A
studio: []
episodes: 0
duration: N/A
onlineRating: .nan
actors:
  - Daniel Ings
  - Sam Spruell
  - Bertie Carvel
image: https://m.media-amazon.com/images/M/MV5BOWNmYTRlOGYtZjE4Yy00YjAxLWEwZDgtNzU4MGViN2Q2ODMzXkEyXkFqcGc@._V1_SX300.jpg
released: true
airing: false
watched: false
lastWatched: ""
personalRating: 0
plan-to-watch: true
tags:
  - tv-series
finished: false
new_episodes: ""
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
**Aired until**: `$= dv.current().airedTo`o

## about

A Knight of the Seven Kingdoms is an upcoming American fantasy drama television series created by George R. R. Martin. A prequel to Game of Thrones (2011–2019), it is set to be the third television series in Martin's A Song of Ice and Fire franchise and uses his Tales of Dunk and Egg novellas as its basis. It stars Peter Claffey as Ser Duncan the Tall, the titular hedge knight, and Dexter Sol Ansell as Egg.

The series is scheduled to be released on HBO in **early 2026** and will consist of `six episodes.`

