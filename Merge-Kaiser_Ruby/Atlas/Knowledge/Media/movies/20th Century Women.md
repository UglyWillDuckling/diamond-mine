---
type: movie
subType: drama
title: 20th Century Women
year: "2016"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt4385888/
id: tt4385888
plot: In 1979 Santa Barbara, Dorothea is a determined single mother who is raising her son, Jamie. Dorothea enlists the help of two women -- Abbie, a free-spirited punk artist and Julie, a savvy teenager -- to help with Jamie's upbringing.
genres:
  - Comedy
  - Drama
director:
  - Mike Mills
onlineRating: 7.3
actors:
  - Annette Bening
  - Elle Fanning
  - Greta Gerwig
image: https://m.media-amazon.com/images/M/MV5BMTkwNDE4NzQwM15BMl5BanBnXkFtZTgwNzQ5Nzg0MDI@._V1_SX300.jpg
released: true
premiere: 01/20/2017
watched: true
lastWatched: 2025-08-18
personalRating: 8.2
interest: 8.5
plan-to-watch: false
tags:
  - film/drama
  - film/comedy
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

20th Century Women is a 2016 American coming-of-age comedy-drama film written and directed by [[Mike Mills ]]and starring [[Annette Bening]], [[Elle Fanning]], [[Greta Gerwig]], [[Lucas Jade Zumann]], and [[Billy Crudup]]. 
It is set in **1979** in Southern California and partly inspired by Mills's childhood.

The film was produced by [[Annapurna Pictures]] in 2015. 
It had its world premiere at the New York Film Festival on October 8, 2016, and was theatrically released by [[A24]] on December 28.[8] 
Critics responded favorably to the film, and it was nominated for Best Motion Picture – Musical or Comedy and Best Actress (Bening) at the 74th [[Golden Globe Awards]], as well as Best Original Screenplay at the 89th [[Academy Awards Oscars]].

## Cast

- [[Annette Bening]] as Dorothea Fields
- [[Elle Fanning]] as Julie Hamlin
- [[Greta Gerwig]] as Abbie Porter
- [[Billy Crudup]] as William
- [[Lucas Jade]] Zumann as Jamie Fields
- [[Vitaly A. LeBeau]] as young Jamie
- [[Alison Elliott]] as Julie's mom
- [[Thea Gill]] as Gail, Abbie's mom
- [[Olivia Hone]] as Julie's sister
- [[Waleed Zuaiter]] as Charlie, Dorothea's coworker
- [[Curran Walters]] as Matt, a skateboarder who beats up Jamie
- [[Darrell Britt-Gibson]] as Julian, one of Abbie's acquaintances
- [[Alia Shawkat]] as Trish, one of Abbie's acquaintances
- [[Nathalie Love]] as Cindy, a woman who sleeps with William
- [[John Billingsley]] as Abbie's OBGYN, Dr. Jones
- [[Gareth Williams]] as Fire Chief
- [[Kai Lennox]] as Reporter/Abbie's future husband, Dave
- [[Finnegan Seeker]] Bell as Brian


## note

Everybody should watch this,  the younger the better. 

