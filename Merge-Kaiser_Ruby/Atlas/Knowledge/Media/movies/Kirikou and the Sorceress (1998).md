---
type: movie
subType: ""
title: Kirikou and the Sorceress
year: "1998"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0181627/
id: tt0181627
plot: Kirikou, an unusual little boy, must search the wisdom of the forbidden mountain in order to save his village from a spell cast by the evil sorceress Karaba
genres:
  - Animation
  - Adventure
  - Family
director:
  - Michel Ocelot
  - Raymond Burlet
onlineRating: 7.5
actors:
  - Doudou Gueye Thiaw
  - Maimouna N'Diaye
  - Awa Sene Sarr
image: https://m.media-amazon.com/images/M/MV5BYjc3ZjU0ODUtNDM5ZC00ODY2LWI1OTgtNjgyMzZmN2UwNDhjXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 27.10.2000
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
films:
plan-to-watch: true
interest: 8
selected: false
movie_status:
  - plan_to_watch
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