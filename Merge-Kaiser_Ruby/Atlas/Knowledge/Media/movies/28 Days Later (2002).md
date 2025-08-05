---
type: movie
subType: ""
title: 28 Days Later
year: "2002"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0289043/
id: tt0289043
plot: Four weeks after a mysterious, incurable virus spreads throughout the United Kingdom, a handful of survivors try to find sanctuary.
genres:
  - Drama
  - Horror
  - Sci-Fi
director:
  - Danny Boyle
onlineRating: 7.5
actors:
  - Cillian Murphy
  - Naomie Harris
  - Christopher Eccleston
image: https://m.media-amazon.com/images/M/MV5BM2I4NTI0ZGQtNGQ2ZC00ODIxLWI2N2QtMDBkNzI1NDhjYjE5XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06/27/2003
watched: true
lastWatched: ""
personalRating: 0
tags:
  - film
wikiUrl: https://en.wikipedia.org/wiki/28_Days_Later
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

28 Days Later (sometimes stylised with ellipsis as 28 Days Later...[2]) is a **2002** post-apocalyptic horror film directed by [[Danny Boyle]] and written by [[Alex Garland]]. It stars [[Cillian Murphy]] as a bicycle courier who awakens from a coma to discover that the accidental release of a highly contagious, aggression-inducing virus has caused the breakdown of society. [[Naomie Harris]], [[Christopher Eccleston]], [[Megan Burns]], and [[Brendan Gleeson]] appear in supporting roles.

Garland took inspiration from George A. Romero's Night of the Living Dead film series and John Wyndham's 1951 novel The Day of the Triffids. Filming took place in various locations in the United Kingdom in 2001. The crew filmed for brief periods during early mornings and temporarily closed streets to capture recognisable and typically busy areas when they were deserted. John Murphy composed an original soundtrack for the film, with other instrumental songs by Brian Eno, Godspeed You! Black Emperor, and other artists.

28 Days Later was released on 1 November 2002 in the UK and 27 June 2003 in the US to generally positive reviews and commercial success. Grossing $82.8 million worldwide on a budget of $8 million, it became one of the most profitable horror films of 2002. Reviewers praised Boyle's direction, the cast's performances, Garland's screenplay, the atmosphere and soundtrack.

Despite Boyle not considering it a zombie film, 28 Days Later is credited with reinvigorating the genre and influencing a revival in it a decade after its release, with its fast-running infected and character-driven drama.[5][6] It has been featured in several "best-of" film lists.

The film's success launched its titular film series, featuring two further instalments, 28 Weeks Later (2007) and 28 Years Later (2025). A wider franchise also includes the graphic novel 28 Days Later: The Aftermath (2007), and the comic book series 28 Days Later (2009–2011).