---

type: series
subType: series
title: Candy Candy
englishTitle: Candy Candy
year: 1976
dataSource: MALAPI
url: https://myanimelist.net/anime/2800/Candy_Candy
id: 2800
plot: |-
  This story is about a girl, Candy, who is an orphan. She is a nice and optimistic girl and she has a warm heart. When she was a child, she lived in an orphanage called Pony's Home. She had a good friend called Annie. And she met the "Prince of the Hill" who is a important person in her life, on the hill behind the orphanage.

  She was adopted by the Leagan family. What's awaiting her are the bad-hearted Neil and his sister, Eliza. One day, in the rose garden, she met a boy, who is identical to the "Prince of the Hill" who she had met in her childhood. His name is Anthony. Thereafter, a fantastic story that she has never expected begins.

  (Source: AnimeNfo)
genres:
  - Drama
  - Romance
writer: []
episodes: 115
onlineRating: 7.59
actors: []
image: https://cdn.myanimelist.net/images/anime/4/35051.jpg
released: true
airing: false
airedFrom: 10/01/1976
airedTo: 02/02/1979
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