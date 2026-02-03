---
type: movie
subType: ""
title: Roy del espacio
year: "1983"
found_during: "[[The Ultimate Midnight Movie, Reborn]]"
plot: Alome, emperor of a distant red planet, threatens to destroy Earth. Roy, Dr. Faz and psychologist Elena are sent by Earth leaders in a peace mission, but they get involved in a series of adventures that include romance, robot figh...
genres:
  - Animation
  - Adventure
  - Family
director:
  - Rafael Angel Gil
  - Hector Lopez Carmona
actors:
  - José Chorena
  - Guillermo Coria
  - Juan Domingo Méndez
image: https://substackcdn.com/image/fetch/$s_!l_9A!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd082dace-6e5e-443a-873c-d74f76c66fe5_1100x600.png
released: true
premiere: 03/03/1983
watched: false
personalRating: 0
plan-to-watch: false
tags:
  - film/animated
---

`$= '![Image|400](' + dv.current().image + ')'`

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

**Premiered**: `$= dv.current().premiere`