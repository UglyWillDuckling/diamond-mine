---
type: movie
subType: ""
title: Audition
year: "1999"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0235198/
id: tt0235198
plot: A widower has his film producer friend organize a fake audition as a means of helping him find a new girlfriend, but the woman he selects is not who she appears to be.
genres:
  - Drama
  - Horror
  - Mystery
director:
  - "[[Takashi Miike]]"
onlineRating: 7.1
actors:
  - Ryô Ishibashi
  - Eihi Shiina
  - Tetsu Sawaki
image: https://m.media-amazon.com/images/M/MV5BMTI5MmFlZjgtNjNhNC00NTFlLWEzZTctYjNjZDdjYjVmNjExXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 03/03/2000
watched: false
lastWatched: ""
personalRating: 0
plan-to-watch: true
tags:
  - mediaDB/tv/movie
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
**Premiered**: `$= dv.current().premiere`o

___

Audition (オーディション, Ōdishon) is a **1999 Japanese horror film** directed by [[Takashi Miike]]and written by [[Daisuke Tengan]]. 

An adaptation of [[Ryu Murakami]]'s 1997 novel, it stars [[Ryo Ishibashi]] and [[Eihi Shiina]]. The film follows a middle-aged widower (Ishibashi) who enlists the help of his film producer friend to stage a fake audition in order to meet a new girlfriend, only to find that the dark past of the woman he chooses (Shiina) severely affects their relationship.

The film was originally a project of the Japanese company Omega Project, who wanted to make another horror film after the financial success of Ring (1998). The company purchased the rights to Murakami's book and sought Miike and Tengan for an adaptation. The cast and crew consisted primarily of previous Miike collaborators, with the exception of Shiina, who had worked as a model prior to her acting career. The film was shot throughout Tokyo in approximately three weeks.

Audition premiered with a few other Japanese horror films at the Vancouver International Film Festival, but received increased attention when screened at the 2000 Rotterdam International Film Festival, where it received the FIPRESCI Prize and the KNF Award. Following a theatrical release in Japan, the film continued to play at festivals and had theatrical releases in the United States and United Kingdom, followed by several home media releases.

The film was received positively by Western film critics, with many singling out the final torture scene and its stark contrast with the non-horrific scenes that preceded it. The film has appeared on several lists of the best horror films ever made, and has had an influence on other horror directors, including Eli Roth and the Soska sisters.

<iframe width="560" height="315" src="https://www.youtube.com/embed/EBQHp2__AVQ?si=_u4KwFcp8FGL97ie" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>