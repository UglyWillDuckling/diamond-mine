---
type: series
title: "Star Trek: Strange New Worlds"
year: 2022–
new_episodes: 2025-07-17
url: https://www.imdb.com/title/tt12327578/
wikiUrl: https://en.wikipedia.org/wiki/Star_Trek:_Strange_New_Worlds
plot: A prequel to Star Trek (1966), this series follows the crew of the USS Enterprise under the command of Captain Christopher Pike.
genres:
  - Action
  - Adventure
  - Sci-Fi
writer:
  - Akiva Goldsman
  - Alex Kurtzman
  - Jenny Lumet
actors:
  - "[[Anson Mount]]"
  - "[[Ethan Peck]]"
  - "[[Christina Chong]]"
onlineRating: 8.3
image: https://m.media-amazon.com/images/M/MV5BOWY1Y2ZlNzctMzIwMi00NTM3LWJiNDUtMTZmYWY0Y2NmZmE2XkEyXkFqcGc@._V1_SX300.jpg
released: true
airing: true
airedFrom: 05/05/2022
airedTo: unknown
watched: false
lastWatched: ""
personalRating: 8.5
tags:
  - mediaDB/tv/series
  - tv-series
finished: false
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
**Aired until**: `$= dv.current().airedTo`

## about

Star Trek: Strange New Worlds is an American science fiction television series created by [[Akiva Goldsman]], [[Alex Kurtzman]], and [[Jenny Lumet]] for the streaming service [[Paramount+]]. 

It is the 11th Star Trek series and debuted in 2022 as part of Kurtzman's expanded Star Trek Universe. A spin-off from the series Star Trek: Discovery (2017–2024), it follows Captain Christopher Pike and the crew of the starship Enterprise in the 23rd century during the decade before Star Trek: The Original Series (1966–1969).

Anson Mount, Ethan Peck, and Rebecca Romijn respectively star as Pike, Spock, and Number One, all characters from The Original Series. They were initially cast for the second season of Discovery (2019) and, after positive fan responses, Kurtzman expressed interest in bringing them back for a spin-off. Development began by March 2020 and Strange New Worlds was officially ordered in May. The lead cast and creative team were confirmed, with Goldsman and Henry Alonso Myers as showrunners. Jess Bush, Christina Chong, Celia Rose Gooding, Melissa Navia, Babs Olusanmokun, Bruce Horak, and Martin Quinn also star. Some of those actors play younger versions of Original Series characters. The series is produced by CBS Studios in association with Secret Hideout, Weed Road Pictures, H M R X Productions, and Roddenberry Entertainment. Filming takes place at CBS Stages Canada in Mississauga, Ontario. The showrunners chose to return to the episodic storytelling of The Original Series rather than Discovery's more serialized approach.

Star Trek: Strange New Worlds premiered on Paramount+ on May 5, 2022, and its 10-episode first season was released weekly until July. A second season was released from June to August 2023, a third season is set to be released from July to September 2025, and a fourth season is in production and expected to be released in 2026. A fifth and final season, with a shorter 6-episode order, is set to begin filming in late 2025.[1] The series is estimated to have high viewership and audience demand. It received positive reviews for its episodic storytelling and cast, and several accolades including two Primetime Creative Arts Emmy Award nominations and two Saturn Award wins.

## premise

Star Trek: Strange New Worlds follows [[Captain Christopher Pike]] and the crew of the USS Enterprise (NCC-1701) in the 23rd century as they explore new worlds and carry out missions throughout the galaxy during the decade before Star Trek: The Original Series (1966–1969).[2][3] It has a contemporary take on The Original Series's episodic storytelling and 1960s designs,[4] and is the first Star Trek series since Star Trek: The Next Generation (1987–1994) to feature the franchise's opening narration during its main credits:

	Space, the final frontier. These are the voyages of the starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no one has gone before.

___
- [ ] back on [[2025-07-17-Thu]] (@2025-07-23)