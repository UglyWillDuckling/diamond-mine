---
category:
  - "[[Film]]"
type: movie
subType: ""
title: Three Times
year: "2005"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0459666/
id: tt0459666
plot: Three stories set in three times, 1911, 1966 and 2005. Two actors play the two main characters in each story.
genres:
  - Drama
  - Romance
director:
  - Hsiao-Hsien Hou
onlineRating: 6.9
actors:
  - Shu Qi
  - Chang Chen
  - Fang Mei
image: https://m.media-amazon.com/images/M/MV5BMDg4YmNlYTgtMzM4Yi00ZmNjLWI5ZjAtMzU1MmRkYWE1NzFiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 10/28/2005
watched: true
lastWatched: ""
personalRating: 8.2
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

***Three Times*** ([Chinese](https://en.wikipedia.org/wiki/Traditional_Chinese_characters): 最好的時光) is a [2005](https://en.wikipedia.org/wiki/2005_in_film) [Taiwanese](https://en.wikipedia.org/wiki/Cinema_of_Taiwan) film directed by [Hou Hsiao-hsien](https://en.wikipedia.org/wiki/Hou_Hsiao-hsien). It consists of three separate stories of romance, set in different eras, using the same lead actors, [Shu Qi](https://en.wikipedia.org/wiki/Shu_Qi) and [Chang Chen](https://en.wikipedia.org/wiki/Chang_Chen).
 In "A Time for Love," set in 1966, a soldier (Chang) meets an alluring 
pool-hall hostess (Shu). "A Time for Freedom," set in 1911, focuses on a
 courtesan's relationship with a freedom fighter during the Japanese 
occupation of Taiwan. In "A Time for Youth," set in 2005, a singer 
forsakes her female lover for a photographer with whom she's having an 
affair.

The film was nominated for the [*Palme d'Or*](https://en.wikipedia.org/wiki/Palme_d%27Or) at the [2005 Cannes Film Festival](https://en.wikipedia.org/wiki/2005_Cannes_Film_Festival),[[1]](https://en.wikipedia.org/wiki/Three_Times#cite_note-festival-cannes.com-1) won the [Golden Apricot](https://web.archive.org/web/20130703112324/http://www.gaiff.am/en/home) for Best Feature Film at the 2006 [Yerevan International Film Festival](https://en.wikipedia.org/wiki/Yerevan_International_Film_Festival), and received positive reviews. In 2017 [*The New York Times*](https://en.wikipedia.org/wiki/The_New_York_Times) listed it as one of the 25 best films of the 21st century.[[2]](https://en.wikipedia.org/wiki/Three_Times#cite_note-NY_Times-2)
 It has been praised for its topical themes of communication, romance 
and relationships, with each linked symbolically to the era it takes 
place in.