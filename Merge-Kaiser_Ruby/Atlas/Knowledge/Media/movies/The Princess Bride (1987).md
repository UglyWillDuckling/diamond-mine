---
type: movie
subType: ""
title: The Princess Bride
year: "1987"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0093779/
id: tt0093779
plot: A bedridden boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.
genres:
  - Adventure
  - Comedy
  - Family
director:
  - Rob Reiner
onlineRating: 8
actors:
  - Cary Elwes
  - Mandy Patinkin
  - Robin Wright
image: https://m.media-amazon.com/images/M/MV5BMjFiOTEyNGMtN2E4MC00ZjZlLTk3ZDQtNTU1ZGNiZTA1MzJlXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 09.10.1987
watched: false
lastWatched: ""
personalRating: 0
plan-to-watch: true
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

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Genres**:
```dataviewjs
dv.current().genres.length === 0 ? dv.span(' - none') : dv.list(dv.current().genres)
```

```dataviewjs
if (!dv.current().released) {
	dv.span('**Not released** The movie is not yet released.')
}
```

**Type**: `$= dv.current().type`
**Online Rating**: `$= dv.current().onlineRating`
**Duration**:  `$= dv.current().duration`
**Premiered**: `$= dv.current().premiere`


In this enchantingly cracked fairy tale, the beautiful Princess Buttercup and the dashing Westley must overcome staggering odds to find happiness amid six-fingered swordsmen, murderous princes, Sicilians and rodents of unusual size. But even death can’t stop these true lovebirds from triumphing.