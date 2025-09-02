---
type: series
subType: series
title: One Piece
year: 1999-
url: https://myanimelist.net/anime/21/One_Piece
wikiUrl: https://en.wikipedia.org/wiki/One_Piece
genres:
  - Action
  - Adventure
  - Fantasy
studio:
  - Toei Animation
onlineRating: 8.73
image: https://cdn.myanimelist.net/images/anime/1244/138851.jpg
released: true
streamingServices:
  - Crunchyroll
  - Netflix
  - Shahid
airing: true
airedFrom: 10/20/1999
airedTo: unknown
watched: false
lastWatched: ""
personalRating: 8
tags:
  - mediaDB/tv/series
  - tv-series
finished: false
plan-to-watch: true
status:
  - 0_Backlog
---
`$= '![Image|360](' + dv.current().image + ')'`

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
let text = '';

if (!dv.current().released) {
	text += '**Not released**\n';
	if (dv.current().airedFrom) {
		text += 'The series will release on ' + dv.current().release_date + '.';
	} else {
		text += 'The series is not released yet.';
	}
	
} else if (dv.current().airing) {
	text += '**Not finished**\n';
	text += 'The series is not fully released yet.';
}

if (text) {
	dv.paragraph(text);
}
```

**Online Rating**: `$= dv.current().onlineRating`
**Episodes**: `$= dv.current().episodes`
**Duration**:  `$= dv.current().duration`
**Aired from**: `$= dv.current().airedFrom`
**Aired until**: `$= dv.current().airedTo`o

## plot

Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree [[Monkey D. Luffy]] ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.

The late King of the Pirates, [[Gol D. Roger]], stirred up the world before his death by disclosing the whereabouts of his hoard of riches and daring everyone to obtain it. Ever since then, countless powerful pirates have sailed dangerous seas for the prized One Piece only to never return. Although Luffy lacks a crew and a proper ship, he is endowed with a superhuman ability and an unbreakable spirit that make him not only a formidable adversary but also an inspiration to many.

As he faces numerous challenges with a big smile on his face, Luffy gathers one-of-a-kind companions to join him in his ambitious endeavor, together embracing perils and wonders on their once-in-a-lifetime adventure.

## about

One Piece (stylized in all caps) is a Japanese manga series written and illustrated by [[Eiichiro Oda]]. It follows the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, as he explores the Grand Line in search of the mythical treasure known as the "One Piece" to become the next King of the Pirates.

It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its chapters compiled in 111 tankōbon volumes as of March 2025. The manga series was licensed for an English language release in North America and the United Kingdom by Viz Media and in Australia by Madman Entertainment. Becoming a media franchise, it has been adapted into a festival film by Production I.G, and an anime series by Toei Animation, which began broadcasting in 1999. Additionally, Toei has developed 14 animated feature films and one original video animation. Several companies have developed various types of merchandising and media, such as a trading card game and video games. Netflix released a live action TV series adaptation in 2023.

One Piece has received praise for its storytelling, world-building, art, characterization, and humour. It has received many awards and is ranked by critics, reviewers, and readers as one of the best manga of all time. By August 2022, it had over 516.6 million copies in circulation in 61 countries and regions worldwide, making it the best-selling manga series in history, and the best-selling comic series printed in a book volume. Several volumes of the manga have broken publishing records, including the highest initial print run of any book in Japan. In 2015 and 2022, One Piece set the Guinness World Record for "the most copies published for the same comic book series by a single author". It was the best-selling manga for 11 consecutive years from 2008 to 2018 and is the only manga that had an initial print of volumes of above 3 million continuously for more than 10 years, as well as the only one that had achieved more than 1 million copies sold in all of its over 100 published tankōbon volumes. One Piece is the only manga whose volumes have ranked first every year in Oricon's weekly comic chart existence since 2008.

