---
type: series
title: Eyes of Wakanda
year: "2025"
url: https://www.imdb.com/title/tt13968252/
plot: Wakandan warriors who, throughout history, have traveled the world to retrieve dangerous vibranium artifacts.
genres:
  - Animation
  - Action
  - Adventure
writer:
  - N/A
episodes: 0
onlineRating: .nan
actors:
  - Gary Anthony Williams
  - Cress Williams
  - Anika Noni Rose
image: https://m.media-amazon.com/images/M/MV5BYTFjODcxMDQtMjZhMS00YmZkLThmMjItMDA1OGE4N2I0YzVkXkEyXkFqcGc@._V1_SX300.jpg
released: true
airing: false
airedFrom: 27.08.2025
airedTo: unknown
watched: false
plan-to-watch: false
tags:
  - tv-series/animated
status:
  - 0_Backlog
new_episodes: 2025-05-01
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


___

_**Eyes of Wakanda**_ is an American animated [anthology](https://en.wikipedia.org/wiki/Anthology_series "Anthology series") television [miniseries](https://en.wikipedia.org/wiki/Miniseries "Miniseries") created by Todd Harris for the streaming service [Disney+](https://en.wikipedia.org/wiki/Disney%2B "Disney+"), based on the [Marvel Comics](https://en.wikipedia.org/wiki/Marvel_Comics "Marvel Comics") country [Wakanda](https://en.wikipedia.org/wiki/Wakanda "Wakanda"). It is the [15th television series](https://en.wikipedia.org/wiki/List_of_Marvel_Cinematic_Universe_television_series#Marvel_Studios "List of Marvel Cinematic Universe television series") in the [Marvel Cinematic Universe](https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe "Marvel Cinematic Universe") (MCU) from [Marvel Studios](https://en.wikipedia.org/wiki/Marvel_Studios "Marvel Studios") and is produced by [Marvel Studios Animation](https://en.wikipedia.org/wiki/Marvel_Studios_Animation "Marvel Studios Animation") with [Proximity Media](https://en.wikipedia.org/wiki/Proximity_Media "Proximity Media"), sharing continuity with [the films of the franchise](https://en.wikipedia.org/wiki/List_of_Marvel_Cinematic_Universe_films "List of Marvel Cinematic Universe films"). It follows the [Hatut Zaraze](https://en.wikipedia.org/wiki/Hatut_Zaraze "Hatut Zaraze"), [Wakandan](https://en.wikipedia.org/wiki/Wakanda_\(Marvel_Cinematic_Universe\) "Wakanda (Marvel Cinematic Universe)") warriors who carry out dangerous missions throughout history. Harris served as [showrunner](https://en.wikipedia.org/wiki/Showrunner "Showrunner") and director.

The series stars [Winnie Harlow](https://en.wikipedia.org/wiki/Winnie_Harlow "Winnie Harlow"), [Cress Williams](https://en.wikipedia.org/wiki/Cress_Williams "Cress Williams"), Larry Herron, Adam Gold, [Jacques Colimon](https://en.wikipedia.org/wiki/Jacques_Colimon "Jacques Colimon"), [Jona Xiao](https://en.wikipedia.org/wiki/Jona_Xiao "Jona Xiao"), Zeke Alton, and [Steve Toussaint](https://en.wikipedia.org/wiki/Steve_Toussaint "Steve Toussaint"). In February 2021, an overall deal between Disney and [Ryan Coogler](https://en.wikipedia.org/wiki/Ryan_Coogler "Ryan Coogler")'s Proximity Media was announced. An animated series about Wakanda was in development by March 2023, and was officially announced as _Eyes of Wakanda_ that December. Harris's involvement was revealed in March 2024. Unlike [Marvel Animation's other series](https://en.wikipedia.org/wiki/Marvel_Studios_Animation#Production_library "Marvel Studios Animation") to that point, _Eyes of Wakanda_ is set in the MCU's "[Sacred Timeline](https://en.wikipedia.org/wiki/Sacred_Timeline "Sacred Timeline")" and has greater connections with the franchise's films. Animation for the series is provided by Axis Animation in a hand-painted style inspired by contemporary African-American artists such as [Ernie Barnes](https://en.wikipedia.org/wiki/Ernie_Barnes "Ernie Barnes"), as well as illustrator [Dean Cornwell](https://en.wikipedia.org/wiki/Dean_Cornwell "Dean Cornwell").

_Eyes of Wakanda_ premiered on [[Disney+]] on August 1, 2025, with all four episodes released simultaneously. It is the first series of [Phase Six](https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe:_Phase_Six "Marvel Cinematic Universe: Phase Six") of the MCU.