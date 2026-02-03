---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: "Pirates of the Caribbean: The Curse of the Black Pearl"
year: "2003"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0325980/
id: tt0325980
plot: Blacksmith Will Turner teams up with eccentric pirate "Captain" Jack Sparrow to save Elizabeth Swann, the governor's daughter and his love, from Jack's former pirate allies, who are now undead.
genres:
  - Action
  - Adventure
  - Fantasy
director:
  - Gore Verbinski
onlineRating: 8.1
actors:
  - Johnny Depp
  - Geoffrey Rush
  - Orlando Bloom
image: https://m.media-amazon.com/images/M/MV5BNDhlMzEyNzItMTA5Mi00YWRhLThlNTktYTQyMTA0MDIyNDEyXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/09/2003
watched: true
lastWatched: ""
personalRating: 8.2
tags:
  - film
---

`$= '![Image|200](' + dv.current().image + ')'`

# `$= dv.current().title`

```dataviewjs
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:watched]\` watched \n last watched on ${dv.current().lastWatched || '---'}`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:watched]\` not yet watched`);
}
```

```dataviewjs
if (dv.current()['plan-to-watch']) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Premiered**: `$= dv.current().premiere`
