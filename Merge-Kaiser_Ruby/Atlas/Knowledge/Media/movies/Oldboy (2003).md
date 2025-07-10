---
type: movie
subType: ""
title: Oldboy
englishTitle: Oldboy
year: "2003"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0364569/
id: tt0364569
plot: After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must track down his captor in five days.
genres:
  - Action
  - Drama
  - Mystery
director:
  - Park Chan-wook
writer:
  - Garon Tsuchiya
  - Nobuaki Minegishi
  - Park Chan-wook
duration: 120 min
onlineRating: 8.3
actors:
  - Choi Min-sik
  - Yoo Ji-tae
  - Kang Hye-jeong
image: https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg
released: true
streamingServices: 
premiere: 21.11.2003
watched: false
lastWatched: ""
personalRating: 8
tags:
  - mediaDB/tv/movie
interest: 8
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