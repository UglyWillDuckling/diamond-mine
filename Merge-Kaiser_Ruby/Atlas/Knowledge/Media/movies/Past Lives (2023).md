---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Past Lives
year: "2023"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt13238346/
id: tt13238346
plot: Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora's family emigrates from South Korea. Twenty years later, they are reunited for one fateful week as they confront notions of love and destiny.
genres:
  - Drama
  - Romance
director:
  - "[[Celine Song]]"
actors:
  - "[[Greta Lee]]"
  - Teo Yoo
  - John Magaro
image: https://m.media-amazon.com/images/M/MV5BYjQyMTNhNjUtN2VmYy00NWRhLTkwOTctMGVmNTBmNDIxYjZhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06/23/2023
watched: true
lastWatched: ""
personalRating: 9
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
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Premiered**: `$= dv.current().premiere`

___

***Past Lives*** is a 2023 American [romantic drama film](https://en.wikipedia.org/wiki/Romantic_drama_film) written and directed by [Celine Song](https://en.wikipedia.org/wiki/Celine_Song) in her [feature directorial debut](https://en.wikipedia.org/wiki/List_of_directorial_debuts). Starring [Greta Lee](https://en.wikipedia.org/wiki/Greta_Lee), [Teo Yoo](https://en.wikipedia.org/wiki/Teo_Yoo), and [John Magaro](https://en.wikipedia.org/wiki/John_Magaro), the film follows a reunion between two childhood friends as they contemplate their relationship and their own lives.[[1]](https://en.wikipedia.org/wiki/Past_Lives_(film)#cite_note-PressNotes-1)

*Past Lives* had its world premiere at the [Sundance Film Festival](https://en.wikipedia.org/wiki/2023_Sundance_Film_Festival) on January 21, 2023, and was released theatrically in the United States on June 2, 2023. The film was released with a [soundtrack](https://en.wikipedia.org/wiki/Past_Lives_(soundtrack)).