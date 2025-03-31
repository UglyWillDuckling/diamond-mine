---
type: movie
subType: ""
title: Tampopo
englishTitle: Tampopo
year: "1985"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0092048/
id: tt0092048
plot: A truck driver stops at a small family-run noodle shop and decides to help its fledgling business. The story is intertwined with various vignettes about the relationship of love and food.
genres:
  - Comedy
director:
  - Jûzô Itami
writer:
  - Jûzô Itami
studio:
  - N/A
duration: 114 min
onlineRating: 7.9
actors:
  - Ken Watanabe
  - Tsutomu Yamazaki
  - Nobuko Miyamoto
image: https://m.media-amazon.com/images/M/MV5BNDBiM2U5ODItZGExOS00OWYwLTliNGEtODhlMjg1NzY3MmM5XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 09/01/1987
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
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
## meta

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
**Producer**: `$= dv.current().producer`



`=this.plot`

## description

Tampopo (タンポポ, Tanpopo, literally "dandelion") is a 1985 Japanese comedy film written and directed by Juzo Itami, and starring Tsutomu Yamazaki, Nobuko Miyamoto, Kōji Yakusho, and Ken Watanabe. The publicity for the film calls it the first "ramen Western", a play on the term spaghetti Western.

## response
> from wikipedia

[[Roger Ebert]] gave the film four out of four stars, commenting that "Like the French comedies of Jacques Tati, it's a bemused meditation on human nature in which one humorous situation flows into another offhandedly, as if life were a series of smiles."[3]

Hal Hinson of The Washington Post wrote, "The movie, which Itami calls a 'noodle Western,' is a rambunctious mixture of the bawdy and the sublime...Tampopo is perhaps the funniest movie about the connection between food and sex ever made."[4]

Andrew Johnston writing in Time Out New York commented: "This film is his broadest comedy by far, and its principal subjects are those great global constants, food and sex. That, combined with the plot's sly evocation of movie Westerns, made it widely accessible to foreign audiences."[5]

Vincent Canby provided a somewhat dissenting, though still positive, opinion in his New York Times review, stating, "Though it's not consistently funny... Tampopo is one of the more engaging films to be shown in this year's [New Directors/New Films] series... Mr. Itami often strains after comic effects that remain elusive. The most appealing thing about Tampopo is that he never stops trying."[6]

Tampopo has received unanimous praise from critics, with a 100% approval rating and average score of 8.53/10 from Rotten Tomatoes, based on 52 reviews. The site's critical consensus states, "Thanks to director Juzo Itami's offbeat humor and sharp satirical edge, Tampopo is a funny, sexy, affectionate celebration of food and its broad influence on Japanese culture."[7]