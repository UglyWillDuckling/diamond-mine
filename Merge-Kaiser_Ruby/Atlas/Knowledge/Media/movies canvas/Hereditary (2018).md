---
type: movie
subType: ""
title: Hereditary (2018)
year: "2018"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt16416212/
id: tt16416212
plot: N/A
genres:
  - Horror
director:
  - "[[Ari Aster]]"
onlineRating: .nan
actors:
  - Jacob A. Miller
image: https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png
released: true
premiere: 10/09/2018
watched: false
lastWatched: ""
personalRating: 0
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

___

Hereditary is a 2018 American supernatural psychological horror[4] drama film written and directed by [[Ari Aster]] in his feature directorial debut. 

Starring [[Toni Collette]], [[Alex Wolff]], [[Milly Shapiro]], [[Ann Dowd]], and [[Gabriel Byrne]], the film follows a grieving family tormented by sinister occurrences after the death of their secretive grandmother.

Aster's work on short horror films, most notably [[The Strange Thing About the Johnsons]], attracted the attention of [[A24]], who greenlit Hereditary as his first feature film. Aster conceived it as primarily a family drama consisting of two distinct halves. 
Filming took place in Utah in 2017, with most indoor scenes shot on custom built sets on a soundstage to give the film a dollhouse aesthetic.

Hereditary premiered at the Sundance Film Festival on January 21, 2018,[5] and was theatrically released in the United States on June 8, 2018.[6] 

The film received critical acclaim and made over $87 million, becoming A24's highest-grossing film at the time,[7][8] until the release of [[Everything Everywhere All at Once]] in 2022.

**It has since been regarded as among the best films of the 21st century.
