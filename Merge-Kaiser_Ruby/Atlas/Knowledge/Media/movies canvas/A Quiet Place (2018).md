---
type: movie
subType: ""
title: A Quiet Place
year: "2018"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt6644200/
id: tt6644200
plot: A family struggles for survival in a world invaded by blind alien creatures with ultra-sensitive hearing.
genres:
  - Drama
  - Horror
  - Sci-Fi
director:
  - John Krasinski
onlineRating: 7.5
actors:
  - "[[Emily Blunt]]"
  - "[[John Krasinski]]"
  - Millicent Simmonds
image: https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg
released: true
premiere: 04/06/2018
watched: true
lastWatched: ""
personalRating: 8
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

A Quiet Place is a 2018 American post-apocalyptic horror film directed by [[John Krasinski]]. The screenplay was written by [[Scott Beck]] and [[Bryan Woods]] from a story they conceived. 

The movie tells the story of a mother ([[Emily Blunt]]) and father (Krasinski) who struggle to survive and raise their 
children ([[Millicent Simmonds]] and Noah Jupe) in a post-apocalyptic world inhabited by blind extraterrestrial creatures with an acute sense of hearing.

Beck and Woods developed the concept for the story while in college, and began writing the screenplay in January 2016. 
They told Platinum Dunes producers that they wanted Blunt for the role of the mother. In July 2016, Krasinski read their script for the role of the father. He spoke with Blunt about his ideas for the story, and she suggested he direct the film. 

Blunt initially did not take the role, but later felt connected to the story after reading the script. The two collaborated on ideas for the film during pre-production. Krasinski was announced as director, co-writer, and co-star with Blunt in March 2017. 
Filming took place in upstate New York from May to November 2017.

A Quiet Place premiered at South by Southwest on March 9, 2018, and was released in the United States on April 6, 2018, by Paramount Pictures. It grossed more than $340 million worldwide and received critical acclaim. The film was chosen by the National Board of Review and American Film Institute as one of the top ten films of 2018, and received nominations for the Golden Globe Award for Best Original Score, Academy Award for Best Sound Editing, Writers Guild of America Award for Best Original Screenplay, and Blunt won the Screen Actors Guild Award for Outstanding Performance by a Female Actor in a Supporting Role. It is the first film in the A Quiet Place universe. Its sequel, A Quiet Place Part II, was released in 2021.