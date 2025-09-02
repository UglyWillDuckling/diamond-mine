---
type: series
subType: ""
title: Twin Peaks
englishTitle: Twin Peaks
year: 1990–1991
wikiUrl: https://en.wikipedia.org/wiki/Twin_Peaks
url: https://www.imdb.com/title/tt0098936/
genres:
  - Crime
  - Drama
  - Mystery
writer:
  - Mark Frost
  - "[[David Lynch]]"
episodes: 0
onlineRating: 8.7
actors:
  - "[[Kyle MacLachlan]]"
  - Michael Ontkean
  - Mädchen Amick
image: https://m.media-amazon.com/images/M/MV5BMTExNzk2NjcxNTNeQTJeQWpwZ15BbWU4MDcxOTczOTIx._V1_SX300.jpg
released: true
airing: false
airedFrom: 04/08/1990
airedTo: unknown
watched: false
lastWatched: ""
personalRating: 9.2
status: Watching 👀
tags:
  - series
plan-to-watch: true
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
___

Twin Peaks is an American surrealist mystery-horror drama television series created by [[Mark Frost]] and [[David Lynch]]. It premiered on ABC on April 8, 1990, and ran for two seasons until its cancellation in 1991. 
==The show returned in 2017 for a third season on Showtime.==

Set in the fictional Pacific Northwest town of Twin Peaks, the series follows an investigation led by FBI special agent Dale Cooper (Kyle MacLachlan) into the murder of local teenager Laura Palmer (Sheryl Lee). The show's narrative draws on the characteristics of detective fiction, but its uncanny tone, supernatural elements, and campy, melodramatic portrayal of eccentric characters also draw from American horror and soap opera tropes.[4][5][6][7] Like much of Lynch's work, it is distinguished by surrealism, distinctive cinematography, and offbeat humor.[8] The musical score was composed by Angelo Badalamenti with Lynch.[9]

The original run was followed by the 1992 feature film Twin Peaks: Fire Walk with Me, which serves as a prequel to the series. The success of the series sparked a media franchise, leading to the release of several tie-in books, including The Secret Diary of Laura Palmer. Under Lynch's direction, the show's 2017 revival included much of the original cast.

In the years following the first two seasons, the show has gained a devoted cult following and been referenced in a wide variety of media, earning widespread critical acclaim and various accolades.[10][11][12][6] Twin Peaks is considered a landmark turning point in television drama and often listed among the greatest television series of all time.[b] The 2017 revival also received widespread critical acclaim; film journal Cahiers du cinéma named it the best film of the 2010s.