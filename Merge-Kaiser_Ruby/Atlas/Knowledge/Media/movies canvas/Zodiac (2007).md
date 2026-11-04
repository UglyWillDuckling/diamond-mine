---
type: movie
subType: ""
title: Zodiac
year: "2007"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0443706/
id: tt0443706
plot: Between 1968 and 1983, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.
genres:
  - Crime
  - Drama
  - Mystery
director:
  - "[[David Fincher]]"
onlineRating: 7.7
actors:
  - "[[Jake Gyllenhaal]]"
  - "[[Robert Downey Jr.]]"
  - "[[Mark Ruffalo]]"
image: https://m.media-amazon.com/images/M/MV5BNDFkMTRkZmQtM2I0NC00NjJjLWJlMDctNTNiZWYxYzhjZDZiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 03/02/2007
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
**Premiered**: `$= dv.current().premiere`o
___

**Zodiac is a 2007 American mystery thriller** film directed by David Fincher and written by James Vanderbilt, based on the nonfiction books by Robert Graysmith: Zodiac (1986) and Zodiac Unmasked (2002). It stars Jake Gyllenhaal, Mark Ruffalo, and Robert Downey Jr., with Anthony Edwards, Brian Cox, Elias Koteas, Donal Logue, John Carroll Lynch, Chloë Sevigny, Philip Baker Hall, and Dermot Mulroney in supporting roles.[4][5]

The film tells the story of the manhunt for the Zodiac Killer, a serial killer who terrorized the San Francisco Bay Area during the late 1960s and early 1970s, taunting police with letters, bloodstained clothing, and ciphers mailed to newspapers. The case remains one of the United States' most infamous unsolved crimes. Fincher, Vanderbilt, and producer Bradley J. Fischer spent 18 months conducting their own investigation and research into the Zodiac murders. Fincher employed the digital Thomson Viper FilmStream Camera to photograph most of the film and used traditional high-speed film cameras for slow-motion murder sequences.

Zodiac was released by Paramount Pictures in the United States and Canada and by Warner Bros. Pictures in international markets on March 2, 2007. It received largely positive reviews, with praise for its writing, directing, acting, and historical accuracy. The film was nominated for several awards, including the Saturn Award for Best Action, Adventure or Thriller Film. It grossed over $84.7 million worldwide on a production budget of $65 million. In a 2016 critics' poll conducted by the BBC, Zodiac was voted the 12th greatest film of the 21st century.

In the years since its release, the film has garnered a large cult following, with many claiming it to be David Fincher's best work. Most of the film's followers praise its direction, acting, writing, cinematography, production design, soundtrack, attention to detail, and accuracy to both the real life investigation and the obsession that gripped some of those who were either directly involved with or close to the investigation itself.


![](https://www.youtube.com/watch?v=yNncHPl1UXg)