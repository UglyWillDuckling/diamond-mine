---
type: movie
subType: ""
title: Life Is Beautiful
year: "1997"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0118799/
id: tt0118799
plot: When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.
genres:
  - Comedy
  - Drama
  - Romance
director:
  - Roberto Benigni
actors:
  - Roberto Benigni
  - Nicoletta Braschi
  - Giorgio Cantarini
image: https://m.media-amazon.com/images/M/MV5BZTBhOGYzZjQtYzE0Mi00MGIwLWE0MWYtNzMxNTM2OTFkM2NjXkEyXkFqcGc@._V1_SX300.jpg
onlineRating: 8.6
released: true
premiere: 12/20/1997
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
**Premiered**: `$= dv.current().premiere`

___

# more

***Life Is Beautiful*** ([Italian](https://en.wikipedia.org/wiki/Italian_language "Italian language"): *La vita è bella*, Italian:[\[laˈviːtaˈɛbˈbɛlla\]](https://en.wikipedia.org/wiki/Help:IPA/Italian "Help:IPA/Italian")) is a 1997 Italian [period](https://en.wikipedia.org/wiki/Period_drama "Period drama") [comedy-drama](https://en.wikipedia.org/wiki/Comedy_drama "Comedy drama") film directed by and starring [Roberto Benigni](https://en.wikipedia.org/wiki/Roberto_Benigni "Roberto Benigni"), who co-wrote the film with [Vincenzo Cerami](https://en.wikipedia.org/wiki/Vincenzo_Cerami "Vincenzo Cerami"). Benigni plays Guido Orefice, a [Jewish Italian](https://en.wikipedia.org/wiki/Italian_Jews "Italian Jews") bookshop owner, who employs his imagination to shield his son from the horrors of internment in a [Nazi concentration camp](https://en.wikipedia.org/wiki/Nazi_concentration_camp "Nazi concentration camp"). The film was partially inspired by the book *[In the End, I Beat Hitler](https://en.wikipedia.org/wiki/In_the_End,_I_Beat_Hitler "In the End, I Beat Hitler")* by [Rubino Romeo Salmonì](https://en.wikipedia.org/wiki/Rubino_Romeo_Salmon%C3%AC "Rubino Romeo Salmonì") and by Benigni's father, who spent two years in the [Bergen-Belsen concentration camp](https://en.wikipedia.org/wiki/Bergen-Belsen_concentration_camp "Bergen-Belsen concentration camp") during [World War II](https://en.wikipedia.org/wiki/World_War_II "World War II").

The film was an overwhelming critical and commercial success. Despite some criticisms of using the subject matter for comedic purposes, it received widespread acclaim, with critics praising its story, performances and direction, and the union of drama and comedy. The movie grossed over $230 million worldwide, including $57.6 million in the United States, is the second highest-grossing foreign language film in the U.S. (after *[Crouching Tiger, Hidden Dragon](https://en.wikipedia.org/wiki/Crouching_Tiger,_Hidden_Dragon "Crouching Tiger, Hidden Dragon")*) [^4] and one of the [highest-grossing non-English language movies of all time](https://en.wikipedia.org/wiki/List_of_highest-grossing_non-English_films "List of highest-grossing non-English films").[^5] The [National Board of Review](https://en.wikipedia.org/wiki/National_Board_of_Review "National Board of Review") included it in the top five best foreign films of 1998.[^6]

The movie won the [Grand Prix](https://en.wikipedia.org/wiki/Grand_Prix_\(Cannes_Film_Festival\) "Grand Prix (Cannes Film Festival)") at the [1998 Cannes Film Festival](https://en.wikipedia.org/wiki/1998_Cannes_Film_Festival "1998 Cannes Film Festival"), nine [David di Donatello Awards](https://en.wikipedia.org/wiki/David_di_Donatello "David di Donatello") (including [Best Film](https://en.wikipedia.org/wiki/David_di_Donatello_for_Best_Film "David di Donatello for Best Film")), five [Nastro d'Argento](https://en.wikipedia.org/wiki/Nastro_d%27Argento "Nastro d'Argento") Awards in Italy, two [European Film Awards](https://en.wikipedia.org/wiki/European_Film_Awards "European Film Awards"), and three [Academy Awards](https://en.wikipedia.org/wiki/71st_Academy_Awards "71st Academy Awards"), including [Best Foreign Language Film](https://en.wikipedia.org/wiki/Academy_Award_for_Best_Foreign_Language_Film "Academy Award for Best Foreign Language Film") and [Best Actor](https://en.wikipedia.org/wiki/Academy_Award_for_Best_Actor "Academy Award for Best Actor") for Benigni, the first for a male non-English performance.[^7]

## Plot

Part I

In 1939, in [Fascist Italy](https://en.wikipedia.org/wiki/Fascist_Italy "Fascist Italy"), young [Italian Jew](https://en.wikipedia.org/wiki/History_of_the_Jews_in_Italy "History of the Jews in Italy") Guido Orefice arrives to work in [Arezzo](https://en.wikipedia.org/wiki/Arezzo "Arezzo"), [Tuscany](https://en.wikipedia.org/wiki/Tuscany "Tuscany"), with his uncle Eliseo in a hotel restaurant. He is comical and sharp, and falls in love with the gentile girl Dora. Later, Guido sees her again in the city where she is a teacher and set to be engaged to Rodolfo, a rich but arrogant local government official with whom he regularly clashes. Guido sets up many "coincidental" incidents to show his interest in Dora.

Eventually, Dora gives in to Guido's affection and promise. Guido steals her from her engagement party on Uncle Eliseo's horse, Robin Hood, humiliating Dora's fiancé and mother. They are later married, have a son, Giosuè, and run a bookstore. Dora's mother visits once, meeting her grandson.

Part II

In 1944, at the height of [World War II](https://en.wikipedia.org/wiki/World_War_II "World War II"), [Nazi Germany](https://en.wikipedia.org/wiki/Nazi_Germany "Nazi Germany") occupies [Northern Italy](https://en.wikipedia.org/wiki/Italian_Social_Republic "Italian Social Republic"). Guido, his uncle Eliseo, and Giosuè are arrested on Giosuè's birthday. They and many other Italian Jews are forced onto a train bound for a concentration camp. After confronting a guard about her husband and son and being told there is no mistake, Dora insists on boarding the train to stay with her family.

However, as men and women are separated in the camp, Dora never sees her family during their internment. Guido pulls off various stunts, such as hijacking the camp's loudspeaker to send messages, symbolic or literal, to Dora to assure her that he and Giosuè are safe. Eliseo is murdered in a [gas chamber](https://en.wikipedia.org/wiki/Gas_chamber "Gas chamber") shortly after their arrival. Giosuè narrowly avoids being gassed himself as he hates to bathe, and did not follow the other children when they had been ordered to "take a shower".

Guido consistently hides the true situation from Giosuè. He convinces him that the camp is a complicated game in which he must perform the tasks given to him. Each task earns them points and whoever reaches one thousand points first wins a tank. He is told that if he cries, complains for his mother, or says that he is hungry, he will lose points, while quiet boys who hide from the guards earn extra points. Giosuè is at times reluctant to go along with the game, but Guido continually encourages him.

One day, Guido takes advantage of the appearance of visiting German officers and their families to show Giosuè that other children are hiding as part of the game. Then he tricks a German nanny into thinking Giosuè is one of her charges to feed him while Guido serves the German officers. Giosuè must stay quiet at all times for this part of the game and simply follow the other children, as he cannot speak German.

Giosuè is almost exposed as a prisoner when he accidentally says "thank you" in Italian to another server at dinner. However, when they return with his superior, Guido provides a ruse by teaching all of the German children how to say "thank you" in Italian, saving Giosuè.

Guido maintains this story through the end when, in the chaos of shutting down the camp as the [Allied forces](https://en.wikipedia.org/wiki/Allies_of_World_War_II "Allies of World War II") approach, he tells his son to stay hidden until everybody has left, the final task in the competition before the promised tank is his.

Guido goes to find Dora, but is caught by a German soldier. An officer orders his execution, so he is led off by the soldier. As he is walking to his death, Guido passes by Giosuè one last time and winks, still in character and playing the game. Guido is then shot dead in an alleyway.

The next morning, Giosuè emerges from hiding, just as a U.S. Army unit led by a [Sherman tank](https://en.wikipedia.org/wiki/M4_Sherman "M4 Sherman") arrives and the camp is liberated. An overjoyed Giosuè, unaware of his father's death, believes he won the tank, and an American soldier allows him to ride with him on it.

While traveling to safety, Giosuè soon spots Dora in the procession leaving the camp and reunites with her. While the young boy excitedly tells his mother about how he had won a tank, just as his father had promised. The adult Giosuè reveals himself to be the narrator, reminisces on the sacrifices his father made for him.

## Cast

- [Roberto Benigni](https://en.wikipedia.org/wiki/Roberto_Benigni "Roberto Benigni") as Guido Orefice, an Italian-Jewish waiter, later owner of a bookstore and Giosuè's father
- [Nicoletta Braschi](https://en.wikipedia.org/wiki/Nicoletta_Braschi "Nicoletta Braschi") as Dora, a Gentile school teacher, Guido's wife, and Giosuè's mother
- [Giorgio Cantarini](https://en.wikipedia.org/wiki/Giorgio_Cantarini "Giorgio Cantarini") as Giosuè Orefice, Guido and Dora's son
- [Giustino Durano](https://en.wikipedia.org/wiki/Giustino_Durano "Giustino Durano") as Uncle Eliseo, an Italian-Jewish [maître](https://en.wikipedia.org/wiki/Ma%C3%AEtre_d%27h%C3%B4tel "Maître d'hôtel"), Giosuè's granduncle and Guido's uncle
- [Horst Buchholz](https://en.wikipedia.org/wiki/Horst_Buchholz "Horst Buchholz") as Doctor Lessing, a regular customer at Eliseo's restaurant who often tries to solve riddles when with Guido, later a doctor at the concentration camp
- [Marisa Paredes](https://en.wikipedia.org/wiki/Marisa_Paredes "Marisa Paredes") (dubbed by [Paila Pavese](https://en.wikipedia.org/w/index.php?title=Paila_Pavese&action=edit&redlink=1 "Paila Pavese (page does not exist)")) as Dora's mother, a rich socialite
- Sergio Bustric as Ferruccio, Guido's friend and bumbling partner
- Amerigo Fontani as Rodolfo, Dora's first fiancé and a government official
- [Lydia Alfonsi](https://en.wikipedia.org/wiki/Lydia_Alfonsi "Lydia Alfonsi") as Guicciardini
- [Giuliana Lojodice](https://en.wikipedia.org/wiki/Giuliana_Lojodice "Giuliana Lojodice") as the Headmistress
- Pietro Desilva as Bartolomeo
- Francesco Guzzo as Vittorino
- [Raffaella Lebboroni](https://en.wikipedia.org/wiki/Raffaella_Lebboroni "Raffaella Lebboroni") as Elena
- Claudio Alfonsi as Rodolfo's friend
- [Richard Sammel](https://en.wikipedia.org/wiki/Richard_Sammel "Richard Sammel") as [Waffen-SS](https://en.wikipedia.org/wiki/Waffen-SS "Waffen-SS") Officer
- Aaron Craig as the American Tank Driver
- [Omero Antonutti](https://en.wikipedia.org/wiki/Omero_Antonutti "Omero Antonutti") as older Giosuè who serves as the narrator *(voice, uncredited)*

## Production

![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Badia_delle_sante_flora_e_lucilla%2C_arezzo%2C_02.JPG/250px-Badia_delle_sante_flora_e_lucilla%2C_arezzo%2C_02.JPG)

The film was shot in Arezzo, Tuscany, including by the Badia delle Sante Flora e Lucilla.

Director [Roberto Benigni](https://en.wikipedia.org/wiki/Roberto_Benigni "Roberto Benigni"), who wrote the screenplay with [Vincenzo Cerami](https://en.wikipedia.org/wiki/Vincenzo_Cerami "Vincenzo Cerami"), was inspired by the story of [Rubino Romeo Salmonì](https://en.wikipedia.org/wiki/Rubino_Romeo_Salmon%C3%AC "Rubino Romeo Salmonì") and his book *In the End, I Beat Hitler*, which incorporates elements of irony and [black comedy](https://en.wikipedia.org/wiki/Black_comedy "Black comedy").[^8] Salmoni was an Italian Jew who was deported to Auschwitz, survived and was reunited with his parents, but found his brothers were murdered. Benigni stated he wished to commemorate Salmoni as a man who wished to live in the right way.[^9] He also based the story on that of his father Luigi Benigni, who was a member of the [Italian Army](https://en.wikipedia.org/wiki/Italian_Army "Italian Army") after Italy became a co-belligerent of the Allies in 1943.[^10] Luigi Benigni spent two years in a Nazi labour camp, and to avoid scaring his children, told about his experiences humorously, finding this helped him cope.[^11] Roberto Benigni explained his philosophy, "to laugh and to cry comes from the same point of the soul, no? I'm a storyteller: the crux of the matter is to reach beauty, poetry, it doesn't matter if that is comedy or tragedy. They're the same if you reach the beauty." [^12] The names of the protagonists are instead taken from Dora De Giovanni and Guido Vittoriano Basile, uncles of Nicoletta Braschi; Basile, arrested for his anti-fascist activity, died in the [Mauthausen concentration camp](https://en.wikipedia.org/wiki/Mauthausen_concentration_camp "Mauthausen concentration camp"), a fate similar to that of the protagonist of the film of the same name, a fact that turned Dora's life upside down.[^13]

His friends advised against making the film, as he is a comedian and not Jewish, and the Holocaust was not of interest to his established audience.[^14] Because he is [Gentile](https://en.wikipedia.org/wiki/Gentile "Gentile"), Benigni consulted with the Center for Documentation of Contemporary Judaism, based in [Milan](https://en.wikipedia.org/wiki/Milan "Milan"), throughout production.[^15] Benigni incorporated historical inaccuracies in order to distinguish his story from the true Holocaust, about which he said only documentaries interviewing survivors could provide "the truth".[^12]

The film was shot in the *centro storico* (historic centre) of [Arezzo](https://en.wikipedia.org/wiki/Arezzo "Arezzo"), [Tuscany](https://en.wikipedia.org/wiki/Tuscany "Tuscany"). The scene where Benigni falls off a bicycle and lands on [Nicoletta Braschi](https://en.wikipedia.org/wiki/Nicoletta_Braschi "Nicoletta Braschi") was shot in front of [Badia delle Sante Flora e Lucilla](https://en.wikipedia.org/wiki/Badia_delle_Sante_Flora_e_Lucilla "Badia delle Sante Flora e Lucilla") in Arezzo.[^16] The concentration camp was set in an old abandoned factory near [Papigno](https://en.wikipedia.org/wiki/Papigno "Papigno") ([Terni](https://en.wikipedia.org/wiki/Terni "Terni")) that was converted into a concentration camp for filming.[^17] [^18] [^19] The "prize" tank is an [M4 Sherman](https://en.wikipedia.org/wiki/M4_Sherman "M4 Sherman").

### Music

The original [score](https://en.wikipedia.org/wiki/Film_score "Film score") to the film was composed by [Nicola Piovani](https://en.wikipedia.org/wiki/Nicola_Piovani "Nicola Piovani"),[^20] with the exception of a classical piece which figures prominently: the [barcarolle](https://en.wikipedia.org/wiki/Barcarolle "Barcarolle") " [Belle nuit, ô nuit d'amour](https://en.wikipedia.org/wiki/Belle_nuit,_%C3%B4_nuit_d%27amour "Belle nuit, ô nuit d'amour") " by [Jacques Offenbach](https://en.wikipedia.org/wiki/Jacques_Offenbach "Jacques Offenbach"). The soundtrack album won the [Academy Award for Best Original Dramatic Score](https://en.wikipedia.org/wiki/Academy_Award_for_Best_Original_Score "Academy Award for Best Original Score") [^21] and was nominated for a [Grammy Award](https://en.wikipedia.org/wiki/Grammy_Award "Grammy Award") for [Best Instrumental Composition Written for a Motion Picture, Television or Other Visual Media](https://en.wikipedia.org/wiki/Grammy_Award_for_Best_Score_Soundtrack_for_Visual_Media "Grammy Award for Best Score Soundtrack for Visual Media").

## Release

In Italy, the film was released in 1997 by Cecchi Gori Distribuzione.[^20] The film was screened in the [Cannes Film Festival](https://en.wikipedia.org/wiki/1998_Cannes_Film_Festival "1998 Cannes Film Festival") in May 1998, where it was a late addition to the selection of films.[^22] In the United States, it was released on 23 October 1998,[^14] by [Miramax Films](https://en.wikipedia.org/wiki/Miramax_Films "Miramax Films").[^23] In Germany, it was released on 12 November 1998. In Austria, it was released on 13 November 1998. In the United Kingdom, it was released on 12 February 1999.[^12] After the Italian, English subtitled version became a hit in English speaking territories, Miramax Films reissued *Life Is Beautiful* in an English dubbed version, but it was less successful than the subtitled Italian version.[^24]

The film was aired on the Italian television station [RAI](https://en.wikipedia.org/wiki/RAI "RAI") on 22 October 2001 and was viewed by 16 million people. This made it the most watched Italian film on Italian television.[^25]

## Reception

### Box office

*Life Is Beautiful* was commercially successful, making 92 billion  [lire](https://en.wikipedia.org/wiki/Italian_lira "Italian lira") ($48.7 million) in Italy.[^26] It was the [highest-grossing Italian film](https://en.wikipedia.org/wiki/List_of_highest-grossing_films_in_Italy "List of highest-grossing films in Italy") in its native country until 2011, when surpassed by [Checco Zalone](https://en.wikipedia.org/wiki/Checco_Zalone "Checco Zalone") 's *[What a Beautiful Day](https://en.wikipedia.org/wiki/What_a_Beautiful_Day_\(film\) "What a Beautiful Day (film)")*.[^27]

The film was also successful in the rest of the world, grossing $57.6 million in the United States and Canada and $123.8 million in other territories, for a worldwide gross of $230.1 million.[^3] It surpassed fellow Italian film *[Il Postino: The Postman](https://en.wikipedia.org/wiki/Il_Postino:_The_Postman "Il Postino: The Postman")* as the highest-grossing foreign language film in the United States until *[Crouching Tiger, Hidden Dragon](https://en.wikipedia.org/wiki/Crouching_Tiger,_Hidden_Dragon "Crouching Tiger, Hidden Dragon")* (2000).[^28] [^29]

### Critical response

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Roberto_Benigni_Nicoletta_Braschi.jpg/250px-Roberto_Benigni_Nicoletta_Braschi.jpg)

Roberto Benigni received positive reviews for his film and performance, which he starred in with his wife Nicoletta Braschi.

The film was praised by the Italian press, with Benigni treated as a "national hero." [^15] [Pope John Paul II](https://en.wikipedia.org/wiki/Pope_John_Paul_II "Pope John Paul II"), who received a private screening with Benigni, placed it in his top five favourite films.[^15] It holds a "Fresh" 81% approval rating on review aggregation website [Rotten Tomatoes](https://en.wikipedia.org/wiki/Rotten_Tomatoes "Rotten Tomatoes"), based on 93 reviews with an average rating of 7.5/10. The site's consensus reads: "Benigni's earnest charm, when not overstepping its bounds into the unnecessarily treacly, offers the possibility of hope in the face of unflinching horror".[^30] [Metacritic](https://en.wikipedia.org/wiki/Metacritic "Metacritic") assigned the film a weighted average score of 59 out of 100, based on 32 critics, indicating "mixed or average reviews".[^31]

[Roger Ebert](https://en.wikipedia.org/wiki/Roger_Ebert "Roger Ebert") gave the film 3.5/4 stars, stating: "\[According to Benigni\] the movie has stirred up venomous opposition from the right wing in Italy \[and at\] Cannes, it offended some left-wing critics with its use of [humor in connection with the Holocaust](https://en.wikipedia.org/wiki/Holocaust_humor "Holocaust humor"). What may be most offensive to both wings is its sidestepping of politics in favor of simple human ingenuity. The film finds the right notes to negotiate its delicate subject matter... The movie actually softens the Holocaust slightly, to make the humor possible at all. In the real death camps there would be no role for Guido. But *Life Is Beautiful* is not about Nazis and Fascists, but about the human spirit. It is about rescuing whatever is good and hopeful from the wreckage of dreams. About hope for the future. About the necessary human conviction, or delusion, that things will be better for our children than they are right now." [^32] Michael Wilmington of the *[Chicago Tribune](https://en.wikipedia.org/wiki/Chicago_Tribune "Chicago Tribune")* gave the movie a score of 100/100, calling it: "A deeply moving blend of cold terror and rapturous hilarity. Lovingly crafted by Italy's top comedian and most popular filmmaker, it's that rare comedy that takes on a daring and ambitious subject and proves worthy of it." [^33]

[Richard Schickel](https://en.wikipedia.org/wiki/Richard_Schickel "Richard Schickel"), writing for *[Time](https://en.wikipedia.org/wiki/Time_\(magazine\) "Time (magazine)")*, argued, "There are references to mass extermination, but that brutal reality is never vividly presented". He concluded that "even a hint of the truth about the Holocaust would crush \[Benigni\]'s comedy." [^34] [Owen Gleiberman](https://en.wikipedia.org/wiki/Owen_Gleiberman "Owen Gleiberman") of *[Entertainment Weekly](https://en.wikipedia.org/wiki/Entertainment_Weekly "Entertainment Weekly")* gave it a B−, calling it "undeniably some sort of feat—the first feel-good Holocaust weepie. It's been a long time coming." However, Glieberman stated: "There's only one problem. As shot, it looks like a game".[^35]

Michael O'Sullivan, writing for *[The Washington Post](https://en.wikipedia.org/wiki/The_Washington_Post "The Washington Post")*, called it "sad, funny and haunting." [^36]

Nell Minow of *[Common Sense Media](https://en.wikipedia.org/wiki/Common_Sense_Media "Common Sense Media")* gave it 5/5 stars, saying: "This magnificent film gives us a glimpse of the Holocaust, but it is really about love, and the indomitability of humanity even in the midst of inhumanity." [^37] [Janet Maslin](https://en.wikipedia.org/wiki/Janet_Maslin "Janet Maslin") wrote in *[The New York Times](https://en.wikipedia.org/wiki/The_New_York_Times "The New York Times")* that the film took "a colossal amount of gall" but "because Mr. Benigni can be heart-rending without a trace of the maudlin, it works." [^23] *[The Los Angeles Times](https://en.wikipedia.org/wiki/The_Los_Angeles_Times "The Los Angeles Times")* ' s [Kenneth Turan](https://en.wikipedia.org/wiki/Kenneth_Turan "Kenneth Turan") noted the film had "some furious opposition" at Cannes, but said "what is surprising about this unlikely film is that it succeeds as well as it does. Its sentiment is inescapable, but genuine poignancy and pathos are also present, and an overarching sincerity is visible too." [^38]

David Rooney of *[Variety](https://en.wikipedia.org/wiki/Variety_\(magazine\) "Variety (magazine)")* said the film had "mixed results," with "surprising depth and poignancy" in Benigni's performance but "visually rather flat" camera work by [Tonino Delli Colli](https://en.wikipedia.org/wiki/Tonino_Delli_Colli "Tonino Delli Colli").[^20] In 2002, [BBC](https://en.wikipedia.org/wiki/BBC "BBC") critic Tom Dawson wrote "the film is presumably intended as a tribute to the powers of imagination, innocence, and love in the most harrowing of circumstances," but "Benigni's sentimental fantasy diminishes the suffering of Holocaust victims." [^39]

In 2006, [Jewish American](https://en.wikipedia.org/wiki/Jewish_American "Jewish American") comedic filmmaker [Mel Brooks](https://en.wikipedia.org/wiki/Mel_Brooks "Mel Brooks") spoke negatively of the film in *[Der Spiegel](https://en.wikipedia.org/wiki/Der_Spiegel "Der Spiegel")*, saying it trivialized the suffering in concentration camps.[^40]

By contrast, Nobel Laureate [Imre Kertész](https://en.wikipedia.org/wiki/Imre_Kert%C3%A9sz "Imre Kertész") argues that those who take the film to be a comedy, rather than a tragedy, have missed the point of the film. He draws attention to what he terms 'Holocaust conformism' in cinema to rebuff detractors of *Life Is Beautiful*.[^41]

Israeli screenwriter, author and art critic Kobi Niv published the book *Life Is Beautiful, but Not for Jews* (in 2000 in Hebrew and an English translation in 2003), in which he analyzed the movie from a highly critical perspective, suggesting that the film's underlining narrative is harmful for Jews.[^42]

Another academic analysis of the movie was undertaken by Ilona Klein, who analyzes the film's success and refers to the "ambiguous themes hidden within." Klein suggests that one of the reasons the movie was so successful was its appeal of "sentimental optimism". At the same time, she points out that "Miramax's hype billed this film as a fable about 'love, family, and the power of imagination,' yet most Jewish victims of the Nazis' 'Final Solution' were loving, concerned, devoted parents. No amount of love, family, and power of imagination helped their children survive the gas chambers." [^43]

David Sterritt of *[The Christian Science Monitor](https://en.wikipedia.org/wiki/The_Christian_Science_Monitor "The Christian Science Monitor")* highlighted that "Enthusiasm for the movie has not been as unanimous as its ad campaign suggests, however, and audiences would do well to ponder its implicit attitudes." He pointed out that the movie implicitly suggests quick-witted confidence was a match for the terrors of fascist death camps, then added that "\[Benigni's\] fable ultimately obscures the human and historical events it sets out to illuminate." [^44]

The movie received some criticism for the scene of the [US Army](https://en.wikipedia.org/wiki/United_States_Army "United States Army") [Sherman M4 Tank](https://en.wikipedia.org/wiki/M4_Sherman "M4 Sherman") coming to liberate the concentration camp, although [Auschwitz](https://en.wikipedia.org/wiki/Auschwitz_concentration_camp "Auschwitz concentration camp") was liberated by the [Red Army](https://en.wikipedia.org/wiki/Red_Army "Red Army"); however, as stated by Benigni, the camp of the movie is not Auschwitz: "… Around the camp there are mountains, which in Auschwitz there are not. That is "the" concentration camp, because any camp contains the horror of Auschwitz, not one or another".[^45] [^46]

### Accolades

*Life Is Beautiful* was shown at the [1998 Cannes Film Festival](https://en.wikipedia.org/wiki/1998_Cannes_Film_Festival "1998 Cannes Film Festival"), and went on to win the [Grand Prix](https://en.wikipedia.org/wiki/Grand_Prix_\(Cannes_Film_Festival\) "Grand Prix (Cannes Film Festival)").[^47] Upon receiving the award, Benigni kissed the feet of jury president [Martin Scorsese](https://en.wikipedia.org/wiki/Martin_Scorsese "Martin Scorsese").[^38]

At the [71st Academy Awards](https://en.wikipedia.org/wiki/71st_Academy_Awards "71st Academy Awards"), Benigni won [Best Actor](https://en.wikipedia.org/wiki/Academy_Award_for_Best_Actor "Academy Award for Best Actor") for his role, with the film winning two more awards for [Best Music, Original Dramatic Score](https://en.wikipedia.org/wiki/Academy_Award_for_Best_Original_Score "Academy Award for Best Original Score") and [Best Foreign Language Film](https://en.wikipedia.org/wiki/Academy_Award_for_Best_Foreign_Language_Film "Academy Award for Best Foreign Language Film").[^21] Benigni jumped on top of the seats as he made his way to the stage to accept his first award, and upon accepting his second, said, "This is a terrible mistake because I used up all my English!" [^48]

<table><thead><tr><th>Award</th><th>Date of ceremony</th><th>Category</th><th>Recipient(s)</th><th>Result</th><th><abbr>Ref(s)</abbr></th></tr></thead><tbody><tr><th rowspan="7"><a href="https://en.wikipedia.org/wiki/Academy_Awards">Academy Awards</a></th><td rowspan="7"><a href="https://en.wikipedia.org/wiki/71st_Academy_Awards">21 March 1999</a></td><td><a href="https://en.wikipedia.org/wiki/Academy_Award_for_Best_Picture">Best Picture</a></td><td><a href="https://en.wikipedia.org/wiki/Elda_Ferri">Elda Ferri</a> and <a href="https://en.wikipedia.org/wiki/Gianluigi_Braschi">Gianluigi Braschi</a></td><td>Nominated</td><td rowspan="7"><sup><a href="https://en.wikipedia.org/wiki/#fn:21">21</a></sup></td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Academy_Award_for_Best_Director">Best Director</a></td><td rowspan="2"><a href="https://en.wikipedia.org/wiki/Roberto_Benigni">Roberto Benigni</a></td><td>Nominated</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Academy_Award_for_Best_Actor">Best Actor</a></td><td>Won</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Academy_Award_for_Best_Original_Screenplay">Best Original Screenplay</a></td><td>Roberto Benigni and <a href="https://en.wikipedia.org/wiki/Vincenzo_Cerami">Vincenzo Cerami</a></td><td>Nominated</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Academy_Award_for_Best_Foreign_Language_Film">Best Foreign Language Film</a></td><td><a href="https://en.wikipedia.org/wiki/Italy">Italy</a></td><td>Won</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Academy_Award_for_Best_Film_Editing">Best Film Editing</a></td><td><a href="https://en.wikipedia.org/wiki/Simona_Paggi">Simona Paggi</a></td><td>Nominated</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Academy_Award_for_Best_Original_Score">Best Music, Original Dramatic Score</a></td><td><a href="https://en.wikipedia.org/wiki/Nicola_Piovani">Nicola Piovani</a></td><td>Won</td></tr><tr><th><a href="https://en.wikipedia.org/wiki/AACTA_Awards">Australian Film Institute Awards</a></th><td>1999</td><td><a href="https://en.wikipedia.org/wiki/Australian_Film_Institute_Award_for_Best_Foreign_Film">Best Foreign Film</a></td><td>Roberto Benigni, Elda Ferri and Gianluigi Braschi</td><td>Won</td><td rowspan="1"><sup><a href="https://en.wikipedia.org/wiki/#fn:49">49</a></sup></td></tr><tr><th rowspan="3"><a href="https://en.wikipedia.org/wiki/British_Academy_Film_Awards">BAFTA Awards</a></th><td rowspan="3"><a href="https://en.wikipedia.org/wiki/52nd_British_Academy_Film_Awards">11 April 1999</a></td><td><a href="https://en.wikipedia.org/wiki/BAFTA_Award_for_Best_Film_Not_in_the_English_Language">Best Film Not in the English Language</a></td><td>Roberto Benigni, Elda Ferri and Gianluigi Braschi</td><td>Nominated</td><td rowspan="3"><sup><a href="https://en.wikipedia.org/wiki/#fn:50">50</a></sup></td></tr><tr><td><a href="https://en.wikipedia.org/wiki/BAFTA_Award_for_Best_Original_Screenplay">Best Film Original Screenplay Writing</a></td><td>Roberto Benigni and Vincenzo Cerami</td><td>Nominated</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/BAFTA_Award_for_Best_Actor_in_a_Leading_Role">Best Film Actor in a Leading Role</a></td><td rowspan="3">Roberto Benigni</td><td>Won</td></tr><tr><th><a href="https://en.wikipedia.org/wiki/Cannes_Film_Festival">Cannes Film Festival</a></th><td rowspan="1"><a href="https://en.wikipedia.org/wiki/1998_Cannes_Film_Festival">13–24 May 1998</a></td><td><a href="https://en.wikipedia.org/wiki/Grand_Prix_(Cannes_Film_Festival)">Grand Prize</a></td><td>Won</td><td rowspan="1"><sup><a href="https://en.wikipedia.org/wiki/#fn:47">47</a></sup></td></tr><tr><th><a href="https://en.wikipedia.org/wiki/C%C3%A9sar_Awards">César Awards</a></th><td rowspan="1"><a href="https://en.wikipedia.org/wiki/24th_C%C3%A9sar_Awards">6 March 1999</a></td><td><a href="https://en.wikipedia.org/wiki/C%C3%A9sar_Award_for_Best_Foreign_Film">Best Foreign Film</a></td><td>Won</td><td rowspan="1"><sup><a href="https://en.wikipedia.org/wiki/#fn:51">51</a></sup></td></tr><tr><th rowspan="2"><a href="https://en.wikipedia.org/wiki/Critics%27_Choice_Awards">Critics' Choice Awards</a></th><td rowspan="2"><a href="https://en.wikipedia.org/wiki/4th_Critics%27_Choice_Awards">19 January 1999</a></td><td><a href="https://en.wikipedia.org/wiki/Critics%27_Choice_Movie_Award_for_Best_Picture">Best Movie</a></td><th></th><td>Nominated</td><td rowspan="2"><sup><a href="https://en.wikipedia.org/wiki/#fn:52">52</a></sup></td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Critics%27_Choice_Movie_Award_for_Best_Foreign_Language_Film">Best Movie in a Foreign Language</a></td><td rowspan="3">Roberto Benigni</td><td>Won</td></tr><tr><th rowspan="13"><a href="https://en.wikipedia.org/wiki/David_di_Donatello">David di Donatello Awards</a></th><td rowspan="13">1998</td><td><a href="https://en.wikipedia.org/wiki/David_di_Donatello_for_Best_Film">Best Film</a></td><td>Won</td><td rowspan="13"><sup><a href="https://en.wikipedia.org/wiki/#fn:53">53</a></sup></td></tr><tr><td><a href="https://en.wikipedia.org/wiki/David_di_Donatello_for_Best_Director">Best Director</a></td><td>Won</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/David_di_Donatello_for_Best_Producer">Best Producer</a></td><td>Elda Ferri and Gianluigi Braschi</td><td>Won</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/David_di_Donatello_for_Best_Script">Best Script</a></td><td>Roberto Benigni and Vincenzo Cerami</td><td>Won</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/David_di_Donatello_for_Best_Actor">Best Actor in a Leading Role</a></td><td>Roberto Benigni</td><td>Won</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/David_di_Donatello_for_Best_Supporting_Actor">Best Actor in a Supporting Role</a></td><td>Sergio Bustric</td><td>Nominated</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/David_di_Donatello_for_Best_Cinematography">Best Cinematography</a></td><td><a href="https://en.wikipedia.org/wiki/Tonino_Delli_Colli">Tonino Delli Colli</a></td><td>Won</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/David_di_Donatello_for_Best_Editing">Best Editing</a></td><td><a href="https://en.wikipedia.org/wiki/Simona_Paggi">Simona Paggi</a></td><td>Nominated</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/David_di_Donatello_for_Best_Sound">Best Sound</a></td><td>Tullio Morganti</td><td>Nominated</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/David_di_Donatello_for_Best_Score">Best Score</a></td><td>Nicola Piovani</td><td>Nominated</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/David_di_Donatello_Award">Best Production Design</a></td><td rowspan="2"><a href="https://en.wikipedia.org/wiki/Danilo_Donati">Danilo Donati</a></td><td>Won</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/David_di_Donatello_for_Best_Costumes">Best Costumes</a></td><td>Won</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/David_di_Donatello_Award">Scholars Jury David</a></td><td>Roberto Benigni</td><td>Won</td></tr><tr><th rowspan="2"><a href="https://en.wikipedia.org/wiki/European_Film_Awards">European Film Awards</a></th><td rowspan="2"><a href="https://en.wikipedia.org/wiki/11th_European_Film_Awards">7 December 1998</a></td><td><a href="https://en.wikipedia.org/wiki/European_Film_Award_for_Best_Film">Best Film</a></td><td>Elda Ferri and Gianluigi Braschi</td><td>Won</td><td rowspan="2"><sup><a href="https://en.wikipedia.org/wiki/#fn:54">54</a></sup></td></tr><tr><td><a href="https://en.wikipedia.org/wiki/European_Film_Award_for_Best_Actor">Best Leading Actor</a></td><td>Roberto Benigni</td><td>Won</td></tr><tr><th><a href="https://en.wikipedia.org/wiki/Jerusalem_Film_Festival">Jerusalem Film Festival</a></th><td>1998</td><td>Best Jewish Experience</td><th></th><td>Won</td><td rowspan="1"><sup><a href="https://en.wikipedia.org/wiki/#fn:12">12</a></sup></td></tr><tr><th rowspan="2"><a href="https://en.wikipedia.org/wiki/Screen_Actors_Guild_Awards">Screen Actors Guild Awards</a></th><td rowspan="2"><a href="https://en.wikipedia.org/wiki/5th_Screen_Actors_Guild_Awards">7 March 1999</a></td><td><a href="https://en.wikipedia.org/wiki/Screen_Actors_Guild_Award_for_Outstanding_Performance_by_a_Cast_in_a_Motion_Picture">Outstanding Performance by an Ensemble in a Motion Picture</a></td><td><a href="https://en.wikipedia.org/wiki/#Cast">Cast</a></td><td>Nominated</td><td rowspan="2"><sup><a href="https://en.wikipedia.org/wiki/#fn:55">55</a></sup></td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Screen_Actors_Guild_Award_for_Outstanding_Performance_by_a_Male_Actor_in_a_Leading_Role">Outstanding Performance by a Male Actor in a Leading Role in a Motion Picture</a></td><td rowspan="2">Roberto Benigni</td><td>Won</td></tr><tr><th><a href="https://en.wikipedia.org/wiki/Toronto_International_Film_Festival">Toronto International Film Festival</a></th><td rowspan="1"><a href="https://en.wikipedia.org/wiki/1998_Toronto_International_Film_Festival">10–19 September 1998</a></td><td><a href="https://en.wikipedia.org/wiki/Toronto_International_Film_Festival_People%27s_Choice_Award">People's Choice Award</a></td><td>Won</td><td rowspan="1"><sup><a href="https://en.wikipedia.org/wiki/#fn:22">22</a></sup></td></tr></tbody></table>


## External links

- [*Life Is Beautiful*](https://www.imdb.com/title/tt0118799/) at [IMDb](https://en.wikipedia.org/wiki/IMDb_\(identifier\) "IMDb (identifier)")
- [*Life Is Beautiful*](https://www.tcm.com/tcmdb/title/332145/enwp) at the [TCM Movie Database](https://en.wikipedia.org/wiki/Turner_Classic_Movies "Turner Classic Movies")
- [*Life Is Beautiful*](https://www.boxofficemojo.com/movies/?id=lifeisbeautiful.htm) at [Box Office Mojo](https://en.wikipedia.org/wiki/Box_Office_Mojo "Box Office Mojo")
- *[Life Is Beautiful](https://www.metacritic.com/movie/life-is-beautiful)* at [Metacritic](https://en.wikipedia.org/wiki/Metacritic "Metacritic")
- [*Life Is Beautiful*](https://www.rottentomatoes.com/m/1084398-life_is_beautiful) at [Rotten Tomatoes](https://en.wikipedia.org/wiki/Rotten_Tomatoes "Rotten Tomatoes")
- *[Life Is Beautiful](https://web.archive.org/web/20060422151505/http://www.artsandfaith.com/t100/2005/entry.php?film=95)* at the [Arts & Faith Top 100 Spiritually Significant Films](https://web.archive.org/web/20060720142105/http://artsandfaith.com/top100/) list

[^1]: [" *La Vita E Bella (Life Is Beautiful)* (12A)"](https://web.archive.org/web/20131231003345/http://www.bbfc.co.uk/releases/la-vita-e-bella-life-beautiful-1970). *[Buena Vista International](https://en.wikipedia.org/wiki/Buena_Vista_International "Buena Vista International")*. [British Board of Film Classification](https://en.wikipedia.org/wiki/British_Board_of_Film_Classification "British Board of Film Classification"). 26 November 1998. Archived from [the original](https://bbfc.co.uk/releases/la-vita-e-bella-life-beautiful-1970) on 31 December 2013. Retrieved 23 August 2013.

[^2]: ["La vita è bella: crolla il fienile di "Buongiorno Principessa", appello a Roberto Benigni"](https://movieplayer.it/news/la-vita-e-bella-crolla-fienile-buongiorno-principessa-roberto-benigni_92920/). *Movieplayer.it* (in Italian). Retrieved 11 August 2023.

[^3]: ["Life Is Beautiful"](https://boxofficemojo.com/movies/?id=lifeisbeautiful.htm). *[Box Office Mojo](https://en.wikipedia.org/wiki/Box_Office_Mojo "Box Office Mojo")*. [Archived](https://web.archive.org/web/20160606164906/http://www.boxofficemojo.com/movies/?id=lifeisbeautiful.htm) from the original on 6 June 2016. Retrieved 11 September 2016.

[^4]: ["Top grossing foreign films in the US"](https://www.rttnews.com/slideshow/3671/top-grossing-foreign-films-in-us-crouching-tiger-la-cage-aux-folles-postino-life-is-beautiful-fearless.aspx?Slide=9). *RTT News*.

[^5]: John, Adriana (21 September 2016). ["Top 10 Highest Grossing Non-English Movies of All Time"](https://www.wonderslist.com/10-highest-grossing-non-english-movies/). *Wonderslist*. Retrieved 7 January 2018.

[^6]: ["1998 Archives"](https://nationalboardofreview.org/award-years/1998/). *National Board of Review*.

[^7]: ["Roberto Benigni: Dante is Beautiful"](https://marymanning.net/lingua-e-cultura/roberto-benigni-dante-is-beautiful/). *Mary Manning*.

[^8]: Squires, Nick (11 July 2011). ["Life Is Beautiful Nazi death camp survivor dies aged 91"](https://web.archive.org/web/20160323074652/http://www.telegraph.co.uk/history/world-war-two/8631266/Life-Is-Beautiful-Nazi-death-camp-survivor-dies-aged-91.html). *[The Daily Telegraph](https://en.wikipedia.org/wiki/The_Daily_Telegraph "The Daily Telegraph")*. Archived from [the original](https://www.telegraph.co.uk/history/world-war-two/8631266/Life-Is-Beautiful-Nazi-death-camp-survivor-dies-aged-91.html) on 23 March 2016. Retrieved 11 September 2016.

[^9]: Paradiso, Stefania (10 July 2011). ["E' morto Romeo Salmonì: l'uomo che ispirò Benigni per La vita è bella"](http://www.unmondoditaliani.com/e-morto-romeo-salmoni-luomo-che-ispiro-benigni-per-la-vita-e-bella.htm). *Un Mondo di Italiani*. [Archived](https://web.archive.org/web/20160304105919/http://www.unmondoditaliani.com/e-morto-romeo-salmoni-luomo-che-ispiro-benigni-per-la-vita-e-bella.htm) from the original on 4 March 2016. Retrieved 11 September 2016.

[^10]: [Norden 2007](https://en.wikipedia.org/wiki/#CITEREFNorden2007), p. 146.

[^11]: [Piper 2003](https://en.wikipedia.org/wiki/#CITEREFPiper2003), p. 12.

[^12]: Logan, Brian (29 January 1999). ["Does this man really think the Holocaust was a big joke?"](https://www.theguardian.com/culture/1999/jan/29/awardsandprizes). *[The Guardian](https://en.wikipedia.org/wiki/The_Guardian "The Guardian")*. [Archived](https://web.archive.org/web/20160924162505/https://www.theguardian.com/culture/1999/jan/29/awardsandprizes) from the original on 24 September 2016. Retrieved 11 September 2016.

[^13]: ["Dora de Giovanni, un soprano cesenate per Pietro Mascagni by Franco dell'Amore - Issuu"](https://issuu.com/franco.dellamore/docs/dora_de_giovanni). 12 April 2015.

[^14]: Okwu, Michael (23 October 1998). ["'Life Is Beautiful' through Roberto Benigni's eyes"](https://web.archive.org/web/20160918151408/http://edition.cnn.com/SHOWBIZ/Movies/9810/23/life.is.beautiful/index.html). *[CNN](https://en.wikipedia.org/wiki/CNN "CNN")*. Archived from [the original](http://edition.cnn.com/SHOWBIZ/Movies/9810/23/life.is.beautiful/index.html) on 18 September 2016. Retrieved 11 September 2016.

[^15]: Stone, Alan A. (1 April 1999). ["Escape from Auschwitz"](https://bostonreview.net/film/alan-stone-escape-auschwitz). *[Boston Review](https://en.wikipedia.org/wiki/Boston_Review "Boston Review")*. [Archived](https://web.archive.org/web/20160904170335/http://bostonreview.net/film/alan-stone-escape-auschwitz) from the original on 4 September 2016. Retrieved 11 September 2016.

[^16]: Warkentin, Elizabeth (30 May 2016). ["Life truly is beautiful in Tuscany's underappreciated Arezzo"](https://www.theglobeandmail.com/life/travel/destinations/life-truly-is-beautiful-in-tuscanys-underappreciated-arezzo/article30201417/). *[The Globe and Mail](https://en.wikipedia.org/wiki/The_Globe_and_Mail "The Globe and Mail")*. [Archived](https://web.archive.org/web/20160912044941/http://www.theglobeandmail.com/life/travel/destinations/life-truly-is-beautiful-in-tuscanys-underappreciated-arezzo/article30201417/) from the original on 12 September 2016. Retrieved 12 September 2016.

[^17]: ["Filming Locations for la Vita e Bella (Life is Beautiful)"](https://movie-locations.com/movies/l/Life-Is-Beautiful.php).

[^18]: ["Papigno, dalle fabbriche inquinanti a la vita è bella e quel salto da Oscar"](https://www.vivoumbria.it/papigno-dalle-fabbriche-inquinanti-a-la-vita-e-bella-e-quel-salto-da-oscar/). 21 March 2020.

[^19]: ["8 localizaciones de la vida es bella en Arezzo: Tras los pasos de Benigni…"](https://saltaconmigo.com/blog/2017/11/arezzo-localizaciones-la-vida-es-bella/). 22 November 2017.

[^20]: Rooney, David (3 January 1998). ["Review: 'Life Is Beautiful'"](https://variety.com/1998/film/reviews/life-is-beautiful-1200452780/). *[Variety](https://en.wikipedia.org/wiki/Variety_\(magazine\) "Variety (magazine)")*. [Archived](https://web.archive.org/web/20170305040046/http://variety.com/1998/film/reviews/life-is-beautiful-1200452780/) from the original on 5 March 2017. Retrieved 12 September 2016.

[^21]: ["The 71st Academy Awards (1999) Nominees and Winners"](http://www.oscars.org/oscars/ceremonies/1999). *oscars.org*. [Archived](https://web.archive.org/web/20150402004536/http://www.oscars.org/oscars/ceremonies/1999) from the original on 2 April 2015. Retrieved 20 October 2015.

[^22]: [Piper 2003](https://en.wikipedia.org/wiki/#CITEREFPiper2003), p. 11.

[^23]: Maslin, Janet (23 October 1998). ["Giving a Human (and Humorous) Face to Rearing a Boy Under Fascism"](https://www.nytimes.com/movie/review?res=9905EFDF113DF930A15753C1A96E958260). *[The New York Times](https://en.wikipedia.org/wiki/The_New_York_Times "The New York Times")*. [Archived](https://web.archive.org/web/20161129192029/http://www.nytimes.com/movie/review?res=9905EFDF113DF930A15753C1A96E958260) from the original on 29 November 2016. Retrieved 11 September 2016.

[^24]: ["Benigni's 'Pinocchio' Out With Subtitles"](https://www.myplainview.com/news/article/Benigni-s-Pinocchio-Out-With-Subtitles-8826037.php). *Plainview Herald*. 8 February 2003. [Archived](https://web.archive.org/web/20181121021917/https://www.myplainview.com/news/article/Benigni-s-Pinocchio-Out-With-Subtitles-8826037.php) from the original on 21 November 2018. Retrieved 17 November 2018.

[^25]: ["Benigni, audience da record oltre 16 milioni di spettatori"](http://www.repubblica.it/online/spettacoli/ascolti/ascolti/ascolti.html). *[La Repubblica](https://en.wikipedia.org/wiki/La_Repubblica "La Repubblica")*. 23 October 2001. [Archived](https://web.archive.org/web/20160304215750/http://www.repubblica.it/online/spettacoli/ascolti/ascolti/ascolti.html) from the original on 4 March 2016. Retrieved 11 September 2016.

[^26]: [Perren 2012](https://en.wikipedia.org/wiki/#CITEREFPerren2012), p. 274.

[^27]: ["Checco Zalone supera Benigni"](https://web.archive.org/web/20161220085441/http://www.tgcom24.mediaset.it/spettacolo/articoli/articolo500748.shtml). *tgcom24.mediaset.it*. Archived from [the original](http://www.tgcom24.mediaset.it/spettacolo/articoli/articolo500748.shtml) on 20 December 2016. Retrieved 11 September 2016.

[^28]: ["Foreign Language"](https://boxofficemojo.com/genres/chart/?id=foreign.htm). *[Box Office Mojo](https://en.wikipedia.org/wiki/Box_Office_Mojo "Box Office Mojo")*. [Archived](https://web.archive.org/web/20100724001435/http://www.boxofficemojo.com/genres/chart/?id=foreign.htm) from the original on 24 July 2010. Retrieved 11 September 2016.

[^29]: Carver, Benedict; Cox, Dan (21 March 1999). ["'Life' shows there's life for foreign pix"](https://variety.com/1999/film/news/life-shows-there-s-life-for-foreign-pix-1117492549/). *[Variety](https://en.wikipedia.org/wiki/Variety_\(magazine\) "Variety (magazine)")*. Retrieved 4 September 2022.

[^30]: ["Life Is Beautiful"](https://rottentomatoes.com/m/1084398-life_is_beautiful/). *[Rotten Tomatoes](https://en.wikipedia.org/wiki/Rotten_Tomatoes "Rotten Tomatoes")*. [Archived](https://web.archive.org/web/20110413013903/http://www.rottentomatoes.com/m/1084398-life_is_beautiful/) from the original on 13 April 2011. Retrieved 26 December 2022.

[^31]: ["Life is Beautiful"](https://www.metacritic.com/movie/life-is-beautiful?ftag=MCD-06-10aaa1c). *[Metacritic](https://en.wikipedia.org/wiki/Metacritic "Metacritic")*.

[^32]: Ebert, Roger (30 October 1998). ["Life Is Beautiful"](https://rogerebert.com/reviews/life-is-beautiful-1998). *Rogerebert.com*. [Archived](https://web.archive.org/web/20160925213925/http://www.rogerebert.com/reviews/life-is-beautiful-1998) from the original on 25 September 2016. Retrieved 11 September 2016.

[^33]: ["Life Is Beautiful"](https://moviemonitor.com/watch/life-is-beautiful). *Moviemonitor*.

[^34]: Schickel, Richard (9 November 1998). ["Cinema: Fascist Fable"](https://content.time.com/time/subscriber/article/0,33009,989504,00.html). *Time*. [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [0040-781X](https://search.worldcat.org/issn/0040-781X). Retrieved 7 February 2022.

[^35]: Glieberman, Owen (6 November 1998). ["Life Is Beautiful"](https://ew.com/article/1998/11/06/life-beautiful). *[Entertainment Weekly](https://en.wikipedia.org/wiki/Entertainment_Weekly "Entertainment Weekly")*. [Archived](https://web.archive.org/web/20161118063516/http://www.ew.com/article/1998/11/06/life-beautiful) from the original on 18 November 2016. Retrieved 12 September 2016.

[^36]: O'Sullivan, Michael (30 October 1998). ["'Life's' Surprisingly Graceful Turn'"](https://www.washingtonpost.com/wp-srv/style/movies/reviews/lifeisbeautifulosullivan.htm). *[The Washington Post](https://en.wikipedia.org/wiki/The_Washington_Post "The Washington Post")*. [Archived](https://web.archive.org/web/20160919153705/http://www.washingtonpost.com/wp-srv/style/movies/reviews/lifeisbeautifulosullivan.htm) from the original on 19 September 2016. Retrieved 11 September 2016.

[^37]: ["Life Is Beautiful"](https://www.commonsensemedia.org/movie-reviews/life-is-beautiful). *Common Sense Media*. 24 August 2009.

[^38]: Turan, Kenneth (23 October 1998). ["The Improbable Success of 'Life Is Beautiful'"](https://www.latimes.com/archives/la-xpm-1998-oct-23-ca-35479-story.html). *[The Los Angeles Times](https://en.wikipedia.org/wiki/The_Los_Angeles_Times "The Los Angeles Times")*. [Archived](https://web.archive.org/web/20170305013821/http://articles.latimes.com/1998/oct/23/entertainment/ca-35479) from the original on 5 March 2017. Retrieved 12 September 2016.

[^39]: Dawson, Tom (6 June 2002). ["La Vita è Bella (Life is Beautiful) (1998)"](https://www.bbc.co.uk/films/2002/06/06/la_vita_e_bella_1997_review.shtml). *[BBC](https://en.wikipedia.org/wiki/BBC "BBC")*. [Archived](https://web.archive.org/web/20160726215746/http://www.bbc.co.uk/films/2002/06/06/la_vita_e_bella_1997_review.shtml) from the original on 26 July 2016. Retrieved 12 September 2016.

[^40]: Brooks, Mel (16 March 2006). ["SPIEGEL Interview with Mel Brooks: With Comedy, We Can Rob Hitler of his Posthumous Power"](http://www.spiegel.de/international/spiegel/spiegel-interview-with-mel-brooks-with-comedy-we-can-rob-hitler-of-his-posthumous-power-a-406268.html). *[Spiegel Online](https://en.wikipedia.org/wiki/Spiegel_Online "Spiegel Online")*. [Archived](https://web.archive.org/web/20170610031938/http://www.spiegel.de/international/spiegel/spiegel-interview-with-mel-brooks-with-comedy-we-can-rob-hitler-of-his-posthumous-power-a-406268.html) from the original on 10 June 2017. Retrieved 3 June 2017.

[^41]: MacKay, John; Kertész, Imre (1 April 2001). ["Who Owns Auschwitz?"](https://muse.jhu.edu/article/36875). *The Yale Journal of Criticism*. **14** (1): 267– 272. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1353/yale.2001.0010](https://doi.org/10.1353%2Fyale.2001.0010). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [1080-6636](https://search.worldcat.org/issn/1080-6636). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [145532698](https://api.semanticscholar.org/CorpusID:145532698).

[^42]: Niv, Ḳobi (2003). [*Life is beautiful, but not for Jews: another view of the film by Benigni*](https://rowman.com/ISBN/9780810848757/Life-is-Beautiful-But-Not-for-Jews-Another-View-of-the-Film-by-Benigni) (1st ed.). Landham, Md.: Scarecrow Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-8108-4875-9](https://en.wikipedia.org/wiki/Special:BookSources/0-8108-4875-9 "Special:BookSources/0-8108-4875-9"). [OCLC](https://en.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [52312653](https://search.worldcat.org/oclc/52312653).

[^43]: Klein, Ilona (2010). [""Life Is Beautiful, Or Is It?" Asked Jakob the Liar"](https://scholarsarchive.byu.edu/cgi/viewcontent.cgi?article=4801&context=facpub). *Brigham Young University Scholars Archive Faculty Publications*. **3836**: 16– 31 – via BYU ScholarsArchive.

[^44]: ["'Life Is Beautiful': Too Light For Heavy Subject Matter?"](https://www.csmonitor.com/1998/1030/103098.feat.feat.5.html). *[The Christian Science Monitor](https://en.wikipedia.org/wiki/The_Christian_Science_Monitor "The Christian Science Monitor")*. 30 October 1998. [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [0882-7729](https://search.worldcat.org/issn/0882-7729). Retrieved 7 February 2022.

[^45]: David Puente (28 January 2023). ["No! Il film "La Vita è bella" di Roberto Benigni non è ambientato ad Auschwitz"](https://www.open.online/2023/01/28/la-vita-e-bella-roberto-benigni-auschwitz-fc/) (in Italian). Open.

[^46]: ["La vita è bella: il capolavoro di Roberto Benigni compie 20 anni"](https://www.cinematographe.it/rubriche-cinema/focus/la-vita-e-bella-roberto-benigni-20-anni/). *Cinematographe.it*. 20 December 2017. [Archived](https://web.archive.org/web/20230130115956/https://www.cinematographe.it/rubriche-cinema/focus/la-vita-e-bella-roberto-benigni-20-anni/) from the original on 30 January 2023. Retrieved 9 March 2024.

[^47]: ["La vita è bella"](http://www.festival-cannes.com/en/archives/ficheFilm/id/4903/year/1998.html). *festival-cannes.com*. [Archived](https://web.archive.org/web/20120118100749/http://www.festival-cannes.com/en/archives/ficheFilm/id/4903/year/1998.html) from the original on 18 January 2012. Retrieved 1 October 2009.

[^48]: Higgins, Bill (24 February 2012). ["How 'Life Is Beautiful's' Roberto Benigni Stole the Oscars Show in 1999"](https://hollywoodreporter.com/news/oscars-roberto-benigni-life-is-beautiful-294906). *[The Hollywood Reporter](https://en.wikipedia.org/wiki/The_Hollywood_Reporter "The Hollywood Reporter")*. [Archived](https://web.archive.org/web/20161012020648/http://www.hollywoodreporter.com/news/oscars-roberto-benigni-life-is-beautiful-294906) from the original on 12 October 2016. Retrieved 11 September 2016.

[^49]: ["1999 Winners & Nominees"](http://www.aacta.org/winners-nominees/1990-1999/1999.aspx). *AACTA.org*. [Archived](https://web.archive.org/web/20161116051219/http://www.aacta.org/winners-nominees/1990-1999/1999.aspx) from the original on 16 November 2016. Retrieved 11 September 2016.

[^50]: Lister, David (11 April 1999). ["Good night at Baftas for anyone called Elizabeth"](https://www.independent.co.uk/news/good-night-at-baftas-for-anyone-called-elizabeth-1086740.html). *[The Independent](https://en.wikipedia.org/wiki/The_Independent "The Independent")*. [Archived](https://web.archive.org/web/20170305002139/https://www.independent.co.uk/news/good-night-at-baftas-for-anyone-called-elizabeth-1086740.html) from the original on 5 March 2017. Retrieved 11 September 2016.

[^51]: ["César du Meilleur film étranger – César"](http://www.allocine.fr/festivals/festival-128/palmares/prix-18350743/). *[AlloCiné](https://en.wikipedia.org/wiki/AlloCin%C3%A9 "AlloCiné")*. [Archived](https://web.archive.org/web/20160918153327/http://www.allocine.fr/festivals/festival-128/palmares/prix-18350743/) from the original on 18 September 2016. Retrieved 11 September 2016.

[^52]: Clinton, Paul (26 January 1999). ["Broadcast Film critics name 'Saving Private Ryan' best film"](http://www.cnn.com/SHOWBIZ/Movies/9901/26/broadcast.film.awards/). *[CNN](https://en.wikipedia.org/wiki/CNN "CNN")*. [Archived](https://web.archive.org/web/20170305021108/http://www.cnn.com/SHOWBIZ/Movies/9901/26/broadcast.film.awards/) from the original on 5 March 2017. Retrieved 11 September 2016.

[^53]: ["La vita è bella – Premi vinti: 9"](https://web.archive.org/web/20161110081657/http://www.daviddidonatello.it/cercafilmvincitori2.php?idfilm=271&vinfilm=). *[David di Donatello](https://en.wikipedia.org/wiki/David_di_Donatello "David di Donatello")*. Archived from [the original](http://www.daviddidonatello.it/cercafilmvincitori2.php?idfilm=271&vinfilm=) on 10 November 2016. Retrieved 11 September 2016.

[^54]: ["European Film Awards Winners 1998"](https://www.europeanfilmacademy.org/European-Film-Awards-Winners-1998.75.0.html). *[European Film Academy](https://en.wikipedia.org/wiki/European_Film_Academy "European Film Academy")*. [Archived](https://web.archive.org/web/20171012052543/https://www.europeanfilmacademy.org/European-Film-Awards-Winners-1998.75.0.html) from the original on 12 October 2017. Retrieved 11 September 2016.

[^55]: Madigan, Nick (7 March 1999). ["SAG tells Benigni 'Life' is beautiful"](https://variety.com/1999/film/news/sag-tells-benigni-life-is-beautiful-1117492031/). *[Variety](https://en.wikipedia.org/wiki/Variety_\(magazine\) "Variety (magazine)")*. [Archived](https://web.archive.org/web/20170305080012/http://variety.com/1999/film/news/sag-tells-benigni-life-is-beautiful-1117492031/) from the original on 5 March 2017. Retrieved 11 September 2016.