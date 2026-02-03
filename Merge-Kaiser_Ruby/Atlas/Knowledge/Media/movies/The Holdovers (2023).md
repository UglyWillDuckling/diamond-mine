---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: The Holdovers
year: "2023"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt14849194/
id: tt14849194
plot: In 1970, a curmudgeonly history teacher at a New England boarding school remains on campus during Christmas break to supervise held over students, and ends up forming an unlikely bond with a brainy but damaged troublemaker.
genres:
  - Comedy
  - Drama
director:
  - Alexander Payne
onlineRating: 7.9
actors:
  - Paul Giamatti
  - Da'Vine Joy Randolph
  - Dominic Sessa
image: https://m.media-amazon.com/images/M/MV5BOWY3MjUzZTctOTI5ZC00MDA5LTk4ZTMtZWJjNjRmMzE4ZmI2XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/10/2023
watched: true
lastWatched: ""
personalRating: 8.2
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

***The Holdovers*** is a 2023 American [comedy-drama film](/wiki/Comedy-drama_film) directed by [Alexander Payne](/wiki/Alexander_Payne) and written by [David Hemingson](/wiki/David_Hemingson). Set in the winter of 1970–71, the film stars [Paul Giamatti](/wiki/Paul_Giamatti) as a strict [classics](/wiki/Classics) teacher at a [New England](/wiki/New_England) [boarding school](/wiki/Boarding_school) who is forced to chaperone a handful of students with nowhere to go on the Christmas break. [Da'Vine Joy Randolph](/wiki/Da%27Vine_Joy_Randolph) and [Dominic Sessa](/wiki/Dominic_Sessa) play the school cafeteria manager and one of the students who stays on campus.

*The Holdovers* premiered at the [50th Telluride Film Festival](/wiki/50th_Telluride_Film_Festival) on August 31, 2023, and was released in the United States by [Focus Features](/wiki/Focus_Features) on October 27, 2023. It received positive reviews and has grossed $42 million worldwide. The film was named one of the top 10 films of 2023 by the [National Board of Review](/wiki/National_Board_of_Review) and the [American Film Institute](/wiki/American_Film_Institute), and has received [many other accolades](/wiki/List_of_accolades_received_by_The_Holdovers), including two wins at the [Golden Globe Awards](/wiki/81st_Golden_Globe_Awards) and the [British Academy Film Awards](/wiki/77th_British_Academy_Film_Awards); Randolph won the Best Supporting Actress award at both ceremonies. *The Holdovers* also received five nominations at the [96th Academy Awards](/wiki/96th_Academy_Awards), including [Best Picture](/wiki/Academy_Award_for_Best_Picture), with Randolph winning [Best Supporting Actress](/wiki/Academy_Award_for_Best_Supporting_Actress).