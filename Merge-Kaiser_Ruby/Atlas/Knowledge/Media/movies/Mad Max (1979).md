---
type: movie
subType: ""
title: "Mad Max: Fury Road"
englishTitle: Mad Max
year: "1979"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0079501/
id: tt0079501
plot: In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.
genres:
  - Action
  - Adventure
  - Sci-Fi
director:
  - George Miller
writer:
  - James McCausland
  - George Miller
  - Byron Kennedy
studio:
  - N/A
duration: 107 min
onlineRating: 6.8
actors:
  - Mel Gibson
  - Joanne Samuel
  - Hugh Keays-Byrne
image: https://m.media-amazon.com/images/M/MV5BMTM4Mjg5ODEzMV5BMl5BanBnXkFtZTcwMDc3NDk0NA@@._V1_SX300.jpg
released: true
streamingServices:
premiere: 03/21/1980
watched: true
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
part of:
  - "[[Mad Max Franchise]]"
plan-to-watch: false
---
`$= '![Image|360](' + dv.current().image + ')'`

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
**Producer**: `$= dv.current().producer`