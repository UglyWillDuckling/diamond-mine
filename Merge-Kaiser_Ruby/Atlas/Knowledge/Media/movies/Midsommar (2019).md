---
type: movie
subType: ""
title: Midsommar (2019)
year: "2019"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt12624460/
id: tt12624460
plot: This week, Char and Kelly bring on an extra special guest who is an expert on all things Norwegian and Swedish. Dave helps us navigate the FACT from FICTION in the horrifying slow burn of a film, Midsommar (2019).
genres: []
director:
  - "[[Ari Aster]]"
onlineRating: .nan
actors:
  - Charlene Bayer
  - Kelly Wright
image: https://upload.wikimedia.org/wikipedia/en/4/47/Midsommar_%282019_film_poster%29.png
released: true
premiere: 07/12/2019
watched: false
lastWatched: ""
personalRating: 0
plan-to-watch: true
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
**Premiered**: `$= dv.current().premiere`o
___

Midsommar is a 2019 folk horror film written and directed by [[Ari Aster]]. It stars [[Florence Pugh]] and [[Jack Reynor]] as an American couple who are drawn into a violent cult in rural Sweden. 
Supporting actors include William Jackson Harper, Vilhelm Blomgren, Ellora Torchia, Archie Madekwe, and Will Poulter.

A co-production between the United States and Sweden, Midsommar was initially pitched to Aster as a straightforward slasher film set among Swedish cultists. While elements of the original concept remain in the final product, the finished film focuses on a deteriorating relationship inspired by a difficult breakup experienced by Aster himself. The film's soundtrack, composed by the British electronic musician Bobby Krlic, takes inspiration from Nordic folk music. The film was predominantly shot on location within the Budapest metropolitan area of Hungary, from July to October 2018.[5]

Midsommar was theatrically released in the United States by A24 on July 3, 2019, and in Sweden by Nordisk Film on July 10, 2019. 
The film grossed $48 million and received positive reviews, with praise for Aster's direction and Pugh's performance.