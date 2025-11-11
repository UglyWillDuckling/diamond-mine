---
type: movie
subType: ""
title: Easy Rider
year: "1969"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0064276/
id: tt0064276
plot: Two bikers head from L.A. to New Orleans through the open country and desert lands, and along the way they meet a man who bridges a counter-culture gap of which they had been unaware.
genres:
  - Adventure
  - Drama
director:
  - "[[Dennis Hopper]]"
onlineRating: 7.2
actors:
  - Peter Fonda
  - Dennis Hopper
  - Jack Nicholson
image: https://m.media-amazon.com/images/M/MV5BMTc2MjI2NDc4Ml5BMl5BanBnXkFtZTgwODI4NzU0MTI@._V1_SX300.jpg
released: true
premiere: 26.06.1969
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film
plan-to-watch: true
---

`$= '![Image|200](' + dv.current().image + ')'`9

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



Easy Rider is a 1969 American road drama film written by Peter Fonda, Dennis Hopper, and Terry Southern. It was produced by Fonda and directed by Hopper. Fonda and Hopper play two bikers who travel through the American Southwest and the South, carrying money made from a cocaine deal. Other actors in the film include Jack Nicholson, Karen Black, and Toni Basil. The success of Easy Rider helped spark the New Hollywood era of filmmaking during the early 1970s. 


**A landmark counterculture film,** and a "touchstone for a generation" which "captured the national imagination," Easy Rider explores the societal landscape, issues, and tensions towards adolescents in the United States during the 1960s including the **rise of the hippie movement**, drug use, and communal lifestyle.[4][5]
Real drugs were used in scenes showing the use of marijuana and other substances.[6]

An independent production,[7][8] the film was released by Columbia Pictures on July 14, 1969, and earned $60 million worldwide compared to a modest filming budget of $400,000.[2][3] Critics have praised the performances, directing, writing, soundtrack, and visuals. 

It received two Academy Awards nominations for Best Original Screenplay and Best Supporting Actor (Jack Nicholson). In 1998, the film was selected for preservation in the United States National Film Registry by the Library of Congress as being "culturally, historically, or aesthetically significant".[9] 
