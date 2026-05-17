---

category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: false
type: movie
subType: movie
title: Kidou Keisatsu Patlabor the Movie
year: 1989
dataSource: MALAPI
url: https://myanimelist.net/anime/1095/Kidou_Keisatsu_Patlabor_the_Movie
id: 1095
plot: |-
  The Babylon Project is a massive renovation of Tokyo's neighborhoods, including the creation of artificial islands in the Bay. Utilizing "Labors," or robots created for the express purpose of doing work, architects and construction crews are able to more efficiently progress development of the overhaul. When a key figure in the Project's conception is found dead after committing suicide under mysterious circumstances, Captain Kiichi Gotou's Patlabor police unit is tasked with getting to the bottom of the bizarre situation.

  As several Labors begin to go haywire and a hacked AI program endangers the people of Tokyo, young pilot Noa Izumi and her Patlabor Alphonse work under Gotou's orders to save the city and the entire nation from a massive biblical conspiracy.

  [Written by MAL Rewrite]
genres:
  - Drama
director: []
onlineRating: 7.59
actors: []
image: https://myanimelist.net/images/anime/5/74786.jpg
released: true
premiere: 15.07.1989
watched: false
lastWatched: ""
personalRating: 0
tags: mediaDB/tv/movie
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
