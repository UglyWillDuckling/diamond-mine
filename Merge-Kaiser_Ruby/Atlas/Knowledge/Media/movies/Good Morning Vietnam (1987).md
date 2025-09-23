---
type: movie
subType: ""
title: Good Morning, Vietnam
year: "1987"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0093105/
genres:
  - Biography
  - Comedy
  - Drama
director:
  - Barry Levinson
onlineRating: 7.3
actors:
  - Robin Williams
  - Forest Whitaker
  - Tom T. Tran
image: https://m.media-amazon.com/images/M/MV5BYThiZTU4N2UtYWU2Mi00ZGUyLWI2ZmEtM2U1ZmJmOGY1ZTc3XkEyXkFqcGc@._V1_SX300.jpg
premiere: 15.01.1988
released: true
plan-to-watch: true
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film
interest: 7
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

  <iframe src="https://geo.dailymotion.com/player.html?video=x8ljxf7"
    style="width:600; height:400px" allowfullscreen>
  </iframe>
	
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

# more

***Good Morning, Vietnam*** is a 1987 American [war](https://en.m.wikipedia.org/wiki/War_film "War film") [comedy](https://en.m.wikipedia.org/wiki/Comedy_film "Comedy film") film written by [Mitch Markowitz](https://en.m.wikipedia.org/wiki/Mitch_Markowitz "Mitch Markowitz") and directed by [Barry Levinson](https://en.m.wikipedia.org/wiki/Barry_Levinson "Barry Levinson"). Set in [Saigon](https://en.m.wikipedia.org/wiki/Saigon "Saigon") in 1965, during the [Vietnam War](https://en.m.wikipedia.org/wiki/Vietnam_War "Vietnam War"), the film stars [Robin Williams](https://en.m.wikipedia.org/wiki/Robin_Williams "Robin Williams") as an [Armed Forces Radio Service](https://en.m.wikipedia.org/wiki/American_Forces_Network "American Forces Network") (AFRS) [DJ](https://en.m.wikipedia.org/wiki/Disc_jockey "Disc jockey") who proves hugely popular with the troops, but infuriates his superiors with what they call his "irreverent tendency". The story is loosely based on the experiences of AFRS DJ [Adrian Cronauer](https://en.m.wikipedia.org/wiki/Adrian_Cronauer "Adrian Cronauer").[^3]

Most of Williams's performances portraying Cronauer's radio broadcasts were [improvisations](https://en.m.wikipedia.org/wiki/Improvisational_theatre "Improvisational theatre"). The film was released by [Buena Vista Pictures](https://en.m.wikipedia.org/wiki/Walt_Disney_Studios_Motion_Pictures "Walt Disney Studios Motion Pictures") (under its [Touchstone Pictures](https://en.m.wikipedia.org/wiki/Touchstone_Pictures "Touchstone Pictures") banner) to critical and commercial success; for his work in the film, Williams won a [Golden Globe Award for Best Actor – Motion Picture Musical or Comedy](https://en.m.wikipedia.org/wiki/Golden_Globe_Award_for_Best_Actor_%E2%80%93_Motion_Picture_Musical_or_Comedy "Golden Globe Award for Best Actor – Motion Picture Musical or Comedy"), and was nominated for an [Academy Award for Best Actor](https://en.m.wikipedia.org/wiki/Academy_Award_for_Best_Actor "Academy Award for Best Actor") and a [BAFTA Award for Best Actor in a Leading Role](https://en.m.wikipedia.org/wiki/BAFTA_Award_for_Best_Actor_in_a_Leading_Role "BAFTA Award for Best Actor in a Leading Role"). In 2000, the film ranked number 100 on the [American Film Institute](https://en.m.wikipedia.org/wiki/American_Film_Institute "American Film Institute") 's " [100 Years...100 Laughs](https://en.m.wikipedia.org/wiki/AFI%27s_100_Years...100_Laughs "AFI's 100 Years...100 Laughs") " list, containing 100 movies considered the funniest in [American cinema](https://en.m.wikipedia.org/wiki/Cinema_of_the_United_States "Cinema of the United States").

In 1965, [Airman First Class](https://en.m.wikipedia.org/wiki/Airman_first_class "Airman first class") [Adrian Cronauer](https://en.m.wikipedia.org/wiki/Adrian_Cronauer "Adrian Cronauer") arrives in [Saigon](https://en.m.wikipedia.org/wiki/Saigon "Saigon") to work as a [DJ](https://en.m.wikipedia.org/wiki/Disc_jockey "Disc jockey") for the [Armed Forces Radio Service](https://en.m.wikipedia.org/wiki/American_Forces_Network "American Forces Network"). [Private](https://en.m.wikipedia.org/wiki/Private_\(rank\) "Private (rank)") Edward Garlick takes him to the radio station, where his attitude and demeanor contrast sharply with those of many staff members. Cronauer's show starts with his signature, "Good morning, Vietnam!", and consists of reading strictly censored news and irreverent humor segments, mixed with [rock and roll](https://en.m.wikipedia.org/wiki/Rock_and_roll "Rock and roll") music, which is frowned on by his superiors, Second Lieutenant Steven Hauk and Sergeant Major Phillip Dickerson. Hauk adheres to strict Army guidelines with humor and music programming, while Dickerson is generally abusive to all enlisted men. However, Brigadier General Taylor and the other DJs quickly grow to like Cronauer and his eccentric brand of comedy.

Cronauer follows Trinh, a [Vietnamese](https://en.m.wikipedia.org/wiki/South_Vietnam "South Vietnam") girl, to an English class. After bribing the teacher to let him take over, Cronauer instructs the students in American slang and profanity. When the class is dismissed, he tries to talk to Trinh, but is stopped by her brother, Tuan. Realizing the futility of pursuing her, Cronauer befriends Tuan and takes him to Jimmy Wah's, a local [G.I.](https://en.m.wikipedia.org/wiki/G.I. "G.I.") bar. Two racist soldiers, angered at Tuan's presence, initiate a confrontation that escalates into a brawl. Dickerson reprimands Cronauer for the incident, although his broadcasts continue as normal, gaining popularity from many listeners, in spite of Dickerson and Hauk's dislike.

One afternoon, while relaxing in Jimmy Wah's, Cronauer is pulled outside by Tuan, saying that Trinh wants to see him. Moments later, the building explodes, killing two soldiers and leaving Cronauer shaken. The cause of the explosion is determined to be a bomb. Dickerson declares the news censored, but Cronauer locks himself in the studio and reports it, anyway, to Dickerson's outrage. Dickerson cuts off the broadcast, and Cronauer is suspended, to the delight of Hauk and Dickerson. Hauk takes over the show, but his poor attempts at humor and choices of [polka](https://en.m.wikipedia.org/wiki/Polka "Polka") music lead to a flood of letters and phone calls demanding that Cronauer be reinstated.

Demoralized, Cronauer spends his time drinking and pursuing Trinh, only to be repeatedly rebuffed by her. At the radio station, Taylor intervenes, ordering Hauk to reinstate Cronauer, but he refuses to go back to work. Garlick and Cronauer's vehicle is stopped in a congested street, amid a convoy of soldiers from the [1st Infantry Division](https://en.m.wikipedia.org/wiki/1st_Infantry_Division_\(United_States\) "1st Infantry Division (United States)") heading for [Nha Trang](https://en.m.wikipedia.org/wiki/Nha_Trang "Nha Trang"), where Garlick persuades him to do an impromptu "broadcast" before they go off to fight. The soldiers' appreciation reminds Cronauer why his job is important, and he returns to work.

Dickerson seizes an opportunity to be permanently rid of Cronauer by approving his request to interview soldiers in the field, and routing him through the [Viet Cong](https://en.m.wikipedia.org/wiki/Viet_Cong "Viet Cong") -controlled highway to [An Lộc](https://en.m.wikipedia.org/wiki/An_L%E1%BB%99c,_B%C3%ACnh_Ph%C6%B0%E1%BB%9Bc "An Lộc, Bình Phước"). Cronauer and Garlick's [Jeep](https://en.m.wikipedia.org/wiki/Willys_MB "Willys MB") hits a [mine](https://en.m.wikipedia.org/wiki/Land_mine "Land mine"), and they are forced to hide from Viet Cong patrols. In Saigon, Tuan learns of the trip after Cronauer fails to show up for English class, and steals a van to go after them. After he finds them, the van breaks down, and they flag down a Marine helicopter to take them back to the city.

Back at the base, Dickerson reveals to Cronauer that Tuan is a VC operative and the one responsible for the bombing at Jimmy Wah's; Dickerson has arranged for Cronauer's redeployment and honorable discharge. Taylor regretfully supports the decision, knowing the risk Cronauer's friendship with Tuan would have on the Army's reputation; aware that Dickerson’s actions were purely self-serving out of dislike for Cronauer, though, Taylor informs Dickerson that he is being transferred to [Guam](https://en.m.wikipedia.org/wiki/Guam "Guam").

Cronauer chases down Tuan, decrying his actions against American soldiers. Emerging from the shadows, Tuan retorts that the U.S. Army devastated his village, thereby making the United States his enemy, but before disappearing again, he comments that he still chose to save Cronauer's life at An Lộc, implying that he valued their friendship. On his way to the [Tan Son Nhut Air Base](https://en.m.wikipedia.org/wiki/Tan_Son_Nhut_Air_Base "Tan Son Nhut Air Base") with Garlick under [military police](https://en.m.wikipedia.org/wiki/Military_police "Military police") escort, Cronauer sets up a quick [softball](https://en.m.wikipedia.org/wiki/Softball "Softball") game for the students in his English class, and says goodbye to Trinh. He gives a taped farewell message to Garlick and boards the plane; Garlick — taking Cronauer's place as DJ the next morning — plays the tape on the air. It begins with Cronauer exclaiming, "Goodbye, Vietnam!".

The film was made on a budget of $13 million.[^2] Robin Williams was paid "less than $2 million", plus [gross participation points](https://en.m.wikipedia.org/wiki/Hollywood_accounting "Hollywood accounting").[^4]

In 1979, [Adrian Cronauer](https://en.m.wikipedia.org/wiki/Adrian_Cronauer "Adrian Cronauer") [pitched](https://en.m.wikipedia.org/wiki/Pitch_\(filmmaking\) "Pitch (filmmaking)") a [sitcom](https://en.m.wikipedia.org/wiki/Sitcom "Sitcom") based on his experiences as an [AFRS](https://en.m.wikipedia.org/wiki/Armed_Forces_Radio_Service "Armed Forces Radio Service") [DJ](https://en.m.wikipedia.org/wiki/Disc_jockey "Disc jockey"). Although one of the most popular television programs of the era was the [Korean War](https://en.m.wikipedia.org/wiki/Korean_War "Korean War") period piece, *[M\*A\*S\*H](https://en.m.wikipedia.org/wiki/M*A*S*H_\(TV_series\) "M*A*S*H (TV series)")*, the networks were not interested, because they did not see war as comedy material.[^3] Cronauer revamped his sitcom into a script for a TV movie of the week, which eventually got the attention of Robin Williams.[^3] Very little of Cronauer's original treatment remained after writer [Mitch Markowitz](https://en.m.wikipedia.org/wiki/Mitch_Markowitz "Mitch Markowitz") was brought in.[^5]

Commenting on the accuracy of the film, the real-life Cronauer commented, "I'm very happy with it. Of course, it was never intended to be an accurate point-by-point biography. It was intended as a piece of entertainment, and (Williams) was playing a character named Adrian Cronauer who shared a lot of my experiences. But actually, he was playing Robin Williams." [^6]

Williams stated that his portrayal of Cronauer in the film was only about 5% character, 95% himself.[^7] Commenting on his portrayal in the film, Cronauer said, "Anybody who has been in the military will tell you that if I did half the things in that movie, I'd still be in [Leavenworth](https://en.m.wikipedia.org/wiki/United_States_Disciplinary_Barracks "United States Disciplinary Barracks") right now. A lot of Hollywood imagination went into the movie. I was a disc jockey in Vietnam and I did teach English in my spare time. I was not thrown out of Vietnam; I stayed for my full one-year tour and I was [honorably discharged](https://en.m.wikipedia.org/wiki/Honorably_discharged#Honorable "Honorably discharged")."

None of the people in the film are based on actual people who Cronauer met, although he described them as [stereotypes](https://en.m.wikipedia.org/wiki/Stereotype "Stereotype") of military personnel who existed at the time. For the scenes in which Cronauer teaches his class to swear and use "street slang", his pursuit of a Vietnamese woman, and his Jeep being blown up in the jungle, among others, are constructs for the plot and never happened to Cronauer. He did, however, witness the bombing of a restaurant that he had only recently left, and clash with Army censors when prevented from reporting it.[^8]

According to Cronauer, he and Williams were forbidden by Barry Levinson to meet each other because Levinson "was afraid that if Robin and I met, that Robin would somehow start to do an unconscious imitation of me, which would change his characterization". Williams and Cronauer eventually met at the film's New York premiere.[^9]

Filming took place entirely in Thailand, where temperatures exceeded 100 degrees Fahrenheit. Although filmmakers had considered shooting in the Philippines, they decided against it due to a discouraging political climate. Locations included a meteorological station in Bangkok, Thailand, which doubled as military headquarters and dormitories.[^10]

[Rotten Tomatoes](https://en.m.wikipedia.org/wiki/Rotten_Tomatoes "Rotten Tomatoes") gives *Good Morning, Vietnam* a score of 90%, based on reviews from 48 critics, with an average rating of 7.4/10. The website's critical consensus states: "A well-calibrated blend of manic comedy and poignant drama, *Good Morning, Vietnam* offers a captivating look at a wide range of Robin Williams' cinematic gifts." [^11] On [Metacritic](https://en.m.wikipedia.org/wiki/Metacritic "Metacritic"), the film has a score of 67%, based on reviews from 15 critics, indicating "generally favorable" reviews.[^12] Audiences surveyed by [CinemaScore](https://en.m.wikipedia.org/wiki/CinemaScore "CinemaScore") gave the film a grade of A−, on a scale of A+ to F.[^13]

Williams's portrayal of Adrian Cronauer received widespread critical acclaim, earning him a nomination for the [Academy Award for Best Actor](https://en.m.wikipedia.org/wiki/Academy_Award_for_Best_Actor "Academy Award for Best Actor").

*Good Morning, Vietnam* was one of the most successful films of the year, becoming the fourth highest-grossing film of 1987.

The film received acclaim from [film critics](https://en.m.wikipedia.org/wiki/Film_critic "Film critic"). [Roger Ebert](https://en.m.wikipedia.org/wiki/Roger_Ebert "Roger Ebert") of the *[Chicago Sun-Times](https://en.m.wikipedia.org/wiki/Chicago_Sun-Times "Chicago Sun-Times")* and [Gene Siskel](https://en.m.wikipedia.org/wiki/Gene_Siskel "Gene Siskel") of the *[Chicago Tribune](https://en.m.wikipedia.org/wiki/Chicago_Tribune "Chicago Tribune")* of the TV review show, *[Siskel and Ebert](https://en.m.wikipedia.org/wiki/At_the_Movies_\(1986_TV_program\) "At the Movies (1986 TV program)")*, awarded the film "Two Thumbs Up", with Ebert giving the film four stars out of four.[^14]

[Richard Corliss](https://en.m.wikipedia.org/wiki/Richard_Corliss "Richard Corliss") of *[Time](https://en.m.wikipedia.org/wiki/Time_\(magazine\) "Time (magazine)")* called the film "the best military comedy since *M\*A\*S\*H* ", and named it one of the best films of the year.[^15]

[Vincent Canby](https://en.m.wikipedia.org/wiki/Vincent_Canby "Vincent Canby") of *[The New York Times](https://en.m.wikipedia.org/wiki/The_New_York_Times "The New York Times")* called the film a cinematic "tour de force", and described Williams's performance as "the work of an accomplished actor".[^16] Much of the acclaim went to Williams's performance, a role that earned him an [Oscar](https://en.m.wikipedia.org/wiki/Academy_Awards "Academy Awards") nomination for [Best Actor](https://en.m.wikipedia.org/wiki/Academy_Award_for_Best_Actor "Academy Award for Best Actor").

The film was not without detractors. [Hal Hinson](https://en.m.wikipedia.org/wiki/Hal_Hinson "Hal Hinson") of *[The Washington Post](https://en.m.wikipedia.org/wiki/The_Washington_Post "The Washington Post")* gave the film a negative review. While praising Williams, he felt that the film was "compulsory and condescending", and that the film was merely "a Robin Williams concert movie welded clumsily onto the plot from an old [Danny Kaye](https://en.m.wikipedia.org/wiki/Danny_Kaye "Danny Kaye") picture".[^17]

<table><tbody><tr><th>Award <sup><a href="https://en.m.wikipedia.org/wiki/#fn:18">18</a></sup></th><th>Category</th><th>Nominee(s)</th><th>Result</th></tr><tr><td><a href="https://en.m.wikipedia.org/wiki/60th_Academy_Awards">Academy Awards</a> <sup><a href="https://en.m.wikipedia.org/wiki/#fn:19">19</a></sup></td><td><a href="https://en.m.wikipedia.org/wiki/Academy_Award_for_Best_Actor">Best Actor</a></td><td rowspan="2">Robin Williams</td><td>Nominated</td></tr><tr><td><a href="https://en.m.wikipedia.org/wiki/American_Comedy_Awards#1988_awards">American Comedy Awards</a></td><td>Funniest Actor in a Motion Picture (Leading Role)</td><td>Won</td></tr><tr><td><a href="https://en.m.wikipedia.org/wiki/American_Society_of_Composers,_Authors_and_Publishers">ASCAP Film and Television Music Awards</a></td><td>Top Box Office Films</td><td><a href="https://en.m.wikipedia.org/wiki/Alex_North">Alex North</a></td><td>Won</td></tr><tr><td rowspan="2"><a href="https://en.m.wikipedia.org/wiki/42nd_British_Academy_Film_Awards">British Academy Film Awards</a> <sup><a href="https://en.m.wikipedia.org/wiki/#fn:20">20</a></sup></td><td><a href="https://en.m.wikipedia.org/wiki/BAFTA_Award_for_Best_Actor_in_a_Leading_Role">Best Actor in a Leading Role</a></td><td>Robin Williams</td><td>Nominated</td></tr><tr><td><a href="https://en.m.wikipedia.org/wiki/BAFTA_Award_for_Best_Sound">Best Sound</a></td><td>Bill Phillips, Clive Winter and <a href="https://en.m.wikipedia.org/wiki/Terry_Porter_(sound_engineer)">Terry Porter</a></td><td>Nominated</td></tr><tr><td><a href="https://en.m.wikipedia.org/wiki/45th_Golden_Globe_Awards">Golden Globe Awards</a> <sup><a href="https://en.m.wikipedia.org/wiki/#fn:21">21</a></sup></td><td><a href="https://en.m.wikipedia.org/wiki/Golden_Globe_Award_for_Best_Actor_-_Motion_Picture_Musical_or_Comedy">Best Actor in a Motion Picture – Musical or Comedy</a></td><td rowspan="2">Robin Williams</td><td>Won</td></tr><tr><td><a href="https://en.m.wikipedia.org/wiki/31st_Annual_Grammy_Awards">Grammy Awards</a> <sup><a href="https://en.m.wikipedia.org/wiki/#fn:22">22</a></sup></td><td><a href="https://en.m.wikipedia.org/wiki/Grammy_Award_for_Best_Comedy_Album">Best Comedy Recording</a></td><td>Won</td></tr><tr><td rowspan="2">Political Film Society Awards <sup><a href="https://en.m.wikipedia.org/wiki/#fn:23">23</a></sup></td><td colspan="2"><a href="https://en.m.wikipedia.org/wiki/Political_Film_Society_Award_for_Peace">Peace</a></td><td>Won</td></tr><tr><td colspan="2">Special Award</td><td>Won</td></tr><tr><td rowspan="2"><a href="https://en.m.wikipedia.org/wiki/Sant_Jordi_Awards">Sant Jordi Awards</a></td><td rowspan="2">Best Foreign Actor</td><td><a href="https://en.m.wikipedia.org/wiki/Forest_Whitaker">Forest Whitaker</a> <span>(Also for <i><a href="https://en.m.wikipedia.org/wiki/Bird_(1988_film)">Bird</a></i>)</span></td><td>Won</td></tr><tr><td>Robin Williams</td><td>Nominated</td></tr></tbody></table>

- [AMC](https://en.m.wikipedia.org/wiki/AMC_\(TV_channel\) "AMC (TV channel)") named *Good Morning, Vietnam* one of the 20 greatest war movies of all time.[^24]
- In 2000, [American Film Institute](https://en.m.wikipedia.org/wiki/American_Film_Institute "American Film Institute") included the film in AFI's 100 Years...100 Laughs (#100).[^25]

[Alex North](https://en.m.wikipedia.org/wiki/Alex_North "Alex North") 's score was released by [Intrada Records](https://en.m.wikipedia.org/wiki/Intrada_Records "Intrada Records") in 2017. As the complete work runs for just 17 minutes, it was paired with [David Newman](https://en.m.wikipedia.org/wiki/David_Newman_\(composer\) "David Newman (composer)") 's *[Operation Dumbo Drop](https://en.m.wikipedia.org/wiki/Operation_Dumbo_Drop "Operation Dumbo Drop")*.[^26]

The [soundtrack](https://en.m.wikipedia.org/wiki/Soundtrack "Soundtrack") [album](https://en.m.wikipedia.org/wiki/Album "Album") was certified platinum in the US.[^27] [Louis Armstrong](https://en.m.wikipedia.org/wiki/Louis_Armstrong "Louis Armstrong") 's " [What a Wonderful World](https://en.m.wikipedia.org/wiki/What_a_Wonderful_World "What a Wonderful World") " was re-released as a single because the film and reached #32 on the US [Top 40](https://en.m.wikipedia.org/wiki/Mainstream_Top_40_\(Pop_Songs\) "Mainstream Top 40 (Pop Songs)"), 20 years after its original release.[^28] The album won the [Grammy Award for Best Comedy Album](https://en.m.wikipedia.org/wiki/Grammy_Award_for_Best_Comedy_Album "Grammy Award for Best Comedy Album") in 1989.[^29]

Track list

1. Robin Williams – "Adrian Cronauer" (2:09)
2. [Martha Reeves & The Vandellas](https://en.m.wikipedia.org/wiki/Martha_Reeves_%26_The_Vandellas "Martha Reeves & The Vandellas") – " [Nowhere to Run](https://en.m.wikipedia.org/wiki/Nowhere_to_Run_\(song\) "Nowhere to Run (song)") " (2:55)
3. [The Beach Boys](https://en.m.wikipedia.org/wiki/The_Beach_Boys "The Beach Boys") – " [I Get Around](https://en.m.wikipedia.org/wiki/I_Get_Around "I Get Around") " (2:09)
4. [Wayne Fontana](https://en.m.wikipedia.org/wiki/Wayne_Fontana "Wayne Fontana") & [The Mindbenders](https://en.m.wikipedia.org/wiki/The_Mindbenders "The Mindbenders") – " [The Game of Love](https://en.m.wikipedia.org/wiki/The_Game_of_Love_\(Wayne_Fontana_song\) "The Game of Love (Wayne Fontana song)") " (2:04)
5. Robin Williams – "Adrian Cronauer" (0:15)
6. [The Searchers](https://en.m.wikipedia.org/wiki/The_Searchers_\(band\) "The Searchers (band)") – " [Sugar and Spice](https://en.m.wikipedia.org/wiki/Sugar_and_Spice_\(The_Searchers_song\) "Sugar and Spice (The Searchers song)") " (2:13)
7. Robin Williams – "Adrian Cronauer" (0:47)
8. [The Castaways](https://en.m.wikipedia.org/wiki/The_Castaways_\(band\) "The Castaways (band)") – " [Liar, Liar](https://en.m.wikipedia.org/wiki/Liar,_Liar_\(The_Castaways_song\) "Liar, Liar (The Castaways song)") " (1:51)
9. The Beach Boys – " [The Warmth of the Sun](https://en.m.wikipedia.org/wiki/The_Warmth_of_the_Sun "The Warmth of the Sun") " (2:47)
10. Robin Williams – "Adrian Cronauer" (0:34)
11. [James Brown](https://en.m.wikipedia.org/wiki/James_Brown "James Brown") – " [I Got You (I Feel Good)](https://en.m.wikipedia.org/wiki/I_Got_You_\(I_Feel_Good\) "I Got You (I Feel Good)") " (2:44)
12. Robin Williams – "Adrian Cronauer" (0:08)
13. [Them](https://en.m.wikipedia.org/wiki/Them_\(band\) "Them (band)") – " [Baby, Please Don't Go](https://en.m.wikipedia.org/wiki/Baby,_Please_Don%27t_Go "Baby, Please Don't Go") " (2:40)
14. Robin Williams – "Adrian Cronauer" (0:33)
15. [The Marvelettes](https://en.m.wikipedia.org/wiki/The_Marvelettes "The Marvelettes") – "Danger Heartbreak Dead Ahead" (2:28)
16. [The Vogues](https://en.m.wikipedia.org/wiki/The_Vogues "The Vogues") – " [Five O'Clock World](https://en.m.wikipedia.org/wiki/Five_O%27Clock_World "Five O'Clock World") " (2:19)
17. [The Rivieras](https://en.m.wikipedia.org/wiki/The_Rivieras "The Rivieras") – " [California Sun](https://en.m.wikipedia.org/wiki/California_Sun "California Sun") " (2:22)
18. Robin Williams – "Adrian Cronauer" (1:21)
19. [Louis Armstrong](https://en.m.wikipedia.org/wiki/Louis_Armstrong "Louis Armstrong") – " [What a Wonderful World](https://en.m.wikipedia.org/wiki/What_a_Wonderful_World "What a Wonderful World") " (2:17)

The tracks titled "Adrian Cronauer" are comedy monologues performed by Williams, in character from the film.[^30]

Charts

| Chart (1988) | Peak   position |
| --- | --- |
| Australia ([Kent Music Report](https://en.m.wikipedia.org/wiki/Kent_Music_Report "Kent Music Report")) [^31] | 1 |
| Canada Top Albums/CDs (*[RPM](https://en.m.wikipedia.org/wiki/RPM_\(magazine\) "RPM (magazine)")*) [^32] | 9 |
| New Zealand Albums ([RMNZ](https://en.m.wikipedia.org/wiki/Official_New_Zealand_Music_Chart "Official New Zealand Music Chart")) [^33] | 8 |
| [UK Albums](https://en.m.wikipedia.org/wiki/UK_Albums_Chart "UK Albums Chart") ([OCC](https://en.m.wikipedia.org/wiki/Official_Charts_Company "Official Charts Company")) [^34] | 50 |
| US [*Billboard* 200](https://en.m.wikipedia.org/wiki/Billboard_200 "Billboard 200") [^35] | 10 |

Certifications and sales

<table><thead><tr><th>Region</th><th>Certification</th><th><a href="https://en.m.wikipedia.org/wiki/List_of_music_recording_certifications">Certified units</a> /sales</th></tr></thead><tbody><tr><th>Australia</th><td>—</td><td>150,000 <sup><a href="https://en.m.wikipedia.org/wiki/#fn:36">36</a></sup></td></tr><tr><th>New Zealand (<a href="https://en.m.wikipedia.org/wiki/Recorded_Music_NZ">RMNZ</a>) <sup><a href="https://en.m.wikipedia.org/wiki/#fn:37">37</a></sup></th><td>Gold</td><td>7,500 <sup>^</sup></td></tr><tr><th>United Kingdom (<a href="https://en.m.wikipedia.org/wiki/British_Phonographic_Industry">BPI</a>) <sup><a href="https://en.m.wikipedia.org/wiki/#fn:38">38</a></sup><br><small><i>2000 release</i></small></th><td>Gold</td><td>100,000 <sup>^</sup></td></tr><tr><th>United Kingdom (<a href="https://en.m.wikipedia.org/wiki/British_Phonographic_Industry">BPI</a>) <sup><a href="https://en.m.wikipedia.org/wiki/#fn:39">39</a></sup><br><small><i>1988 release</i></small></th><td>Gold</td><td>100,000 <sup>^</sup></td></tr><tr><th>United States (<a href="https://en.m.wikipedia.org/wiki/Recording_Industry_Association_of_America">RIAA</a>) <sup><a href="https://en.m.wikipedia.org/wiki/#fn:40">40</a></sup></th><td>Platinum</td><td>1,000,000 <sup>^</sup></td></tr><tr><td colspan="3"><p><small><sup>^</sup> Shipments figures based on certification alone.</small></p></td></tr></tbody></table>

In 1992, [Mark Frost](https://en.m.wikipedia.org/wiki/Mark_Frost "Mark Frost") wrote a sequel screenplay, *Good Morning, Chicago*.[^41] [^42] The film would have featured Williams, reprising his role as Cronauer, as a journalist at the [1968 Democratic National Convention](https://en.m.wikipedia.org/wiki/1968_Democratic_National_Convention "1968 Democratic National Convention"). The project was eventually scrapped, due to disagreements between Williams, Levinson and [Disney](https://en.m.wikipedia.org/wiki/The_Walt_Disney_Company "The Walt Disney Company"), over the film's direction.[^43]

- [*Good Morning, Vietnam*](https://www.imdb.com/title/tt0093105/) at [IMDb](https://en.m.wikipedia.org/wiki/IMDb_\(identifier\) "IMDb (identifier)")
- [*Good Morning, Vietnam*](https://www.tcm.com/tcmdb/title/76712/enwp) at the [TCM Movie Database](https://en.m.wikipedia.org/wiki/Turner_Classic_Movies "Turner Classic Movies")
- [*Good Morning, Vietnam*](https://catalog.afi.com/Catalog/moviedetails/57630) at the *[AFI Catalog of Feature Films](https://en.m.wikipedia.org/wiki/AFI_Catalog_of_Feature_Films "AFI Catalog of Feature Films")*
- [*Good Morning, Vietnam*](https://www.boxofficemojo.com/movies/?id=goodmorningvietnam.htm) at [Box Office Mojo](https://en.m.wikipedia.org/wiki/Box_Office_Mojo "Box Office Mojo")

[^1]: ["Good Morning, Vietnam"](https://www.bbfc.co.uk/release/good-morning-vietnam-q29sbgvjdglvbjpwwc0yotm0nty). *bbfc.co.uk*. British Board of Film Classification. Retrieved June 30, 2024.

[^2]: ["Good Morning Vietnam (1987)"](https://www.the-numbers.com/movie/Good-Morning-Vietnam#tab=summary). *[The Numbers](https://en.m.wikipedia.org/wiki/The_Numbers_\(website\) "The Numbers (website)")*. [Archived](https://web.archive.org/web/20180718030710/https://www.the-numbers.com/movie/Good-Morning-Vietnam#tab=summary) from the original on July 18, 2018. Retrieved July 17, 2018.

[^3]: Barthold, Jim (March 1, 2005). ["The Real Life of Adrian Cronauer"](https://web.archive.org/web/20120509103859/http://urgentcomm.com/mag/radio_real_life_adrian/). *Urgent Communications*. Archived from [the original](http://urgentcomm.com/mag/radio_real_life_adrian/) on May 9, 2012. Retrieved December 5, 2016.

[^4]: ["Good Morning Mail!"](https://www.latimes.com/archives/la-xpm-1988-02-14-ca-42434-story.html). *[Los Angeles Times](https://en.m.wikipedia.org/wiki/Los_Angeles_Times "Los Angeles Times")*. February 14, 1988. [Archived](https://web.archive.org/web/20211002080859/https://www.latimes.com/archives/la-xpm-1988-02-14-ca-42434-story.html) from the original on October 2, 2021. Retrieved October 2, 2021.

[^5]: Harris, Paul. [Adrian Cronauer interview](http://paulharrisonline.blogspot.co.uk/2006/04/adrian-cronauer.htm), April 28, 2006, *The Paul Harris Show*, [Archived](https://web.archive.org/web/20171225203157/http://paulharrisonline.blogspot.co.uk/2006/04/adrian-cronauer.htm) 2017-12-25 at the [Wayback Machine](https://en.m.wikipedia.org/wiki/Wayback_Machine "Wayback Machine") [KMOX](https://en.m.wikipedia.org/wiki/KMOX "KMOX")

[^6]: Mullen, Rodger (November 10, 2011). ["Heroes Homecoming: For 'Good Morning' guy Adrian Cronauer, Vietnam feels like yesterday"](https://web.archive.org/web/20120526081434/http://fayobserver.com/articles/2011/11/10/1122748?sac=Mil). *[Fay Observer](https://en.m.wikipedia.org/wiki/Fay_Observer "Fay Observer") (The Fayetteville Observer)*. Fayetteville, North Carolina. Archived from [the original](http://fayobserver.com/articles/2011/11/10/1122748?sac=Mil) on May 26, 2012. Retrieved December 26, 2011.

[^7]: Cooper, James (March 15, 1988). ["The life and laughs of Robin Williams"](https://archive.org/details/GAT_1988031501/page/16/mode/2up). *[The Varsity](https://en.m.wikipedia.org/wiki/The_Varsity_\(newspaper\) "The Varsity (newspaper)")*. Retrieved May 23, 2023.

[^8]: Beck, Barbara (January 19, 1988). ["Good Morning to the Real Adrian Cronauer"](https://www.chicagotribune.com/news/ct-xpm-1988-01-19-8803230431-story.html). *[Chicago Tribune](https://en.m.wikipedia.org/wiki/Chicago_Tribune "Chicago Tribune")*. [Archived](https://web.archive.org/web/20210614015000/https://www.chicagotribune.com/news/ct-xpm-1988-01-19-8803230431-story.html) from the original on June 14, 2021. Retrieved March 1, 2021.

[^9]: Schogol, Jeff (August 12, 2014). ["Real-life 'Vietnam' DJ recalls Williams' portrayal"](https://www.usatoday.com/story/life/people/2014/08/12/good-morning-vietnam-airman-reacts-robin-williams-death/13954271/). *[USA Today](https://en.m.wikipedia.org/wiki/USA_Today "USA Today")*. [Archived](https://web.archive.org/web/20171107044237/https://www.usatoday.com/story/life/people/2014/08/12/good-morning-vietnam-airman-reacts-robin-williams-death/13954271/) from the original on November 7, 2017. Retrieved October 31, 2017.

[^10]: ["Good Morning, Vietnam (1987)"](https://catalog.afi.com/Catalog/moviedetails/57630). *AFI Catalog*. Retrieved May 10, 2025.

[^11]: ["Good Morning, Vietnam"](http://www.rottentomatoes.com/m/good_morning_vietnam/). *[Rotten Tomatoes](https://en.m.wikipedia.org/wiki/Rotten_Tomatoes "Rotten Tomatoes")*. [Fandango Media](https://en.m.wikipedia.org/wiki/Fandango_Media "Fandango Media"). [Archived](https://web.archive.org/web/20231210141226/https://www.rottentomatoes.com/m/good_morning_vietnam) from the original on December 10, 2023. Retrieved March 12, 2024.

[^12]: ["Good Morning Vietnam"](https://www.metacritic.com/movie/good-morning-vietnam). *[Metacritic](https://en.m.wikipedia.org/wiki/Metacritic "Metacritic")*. [CBS Interactive](https://en.m.wikipedia.org/wiki/CBS_Interactive "CBS Interactive"). [Archived](https://web.archive.org/web/20181008110340/https://www.metacritic.com/movie/good-morning-vietnam) from the original on October 8, 2018. Retrieved October 8, 2018.

[^13]: ["Cinemascore"](https://web.archive.org/web/20181220122629/https://www.cinemascore.com/publicsearch/index/title/). Archived from [the original](https://www.cinemascore.com/publicsearch/index/title/) on December 20, 2018.

[^14]: Ebert, Roger. ["Good Morning, Vietnam Movie Review (1988)"](http://www.rogerebert.com/reviews/good-morning-vietnam-1988). *www.rogerebert.com*. [Archived](https://web.archive.org/web/20140818161851/http://www.rogerebert.com/reviews/good-morning-vietnam-1988) from the original on August 18, 2014. Retrieved May 18, 2018.

[^15]: Schickel, Richard (December 28, 1987). ["Cinema: Motormouth In Saigon – Good Morning, Vietnam"](https://content.time.com/time/subscriber/article/0,33009,966337,00.html). *Time*. [ISSN](https://en.m.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [0040-781X](https://search.worldcat.org/issn/0040-781X). [Archived](https://web.archive.org/web/20220518184104/https://content.time.com/time/subscriber/article/0,33009,966337,00.html) from the original on May 18, 2022. Retrieved May 18, 2022.

[^16]: [Canby, Vincent](https://en.m.wikipedia.org/wiki/Vincent_Canby "Vincent Canby") (December 23, 1987). ["Film: 'Good Morning, Vietnam'"](https://www.nytimes.com/movie/review?res=9B0DE0D8173FF930A15751C1A961948260). *[The New York Times](https://en.m.wikipedia.org/wiki/The_New_York_Times "The New York Times")*. [Archived](https://web.archive.org/web/20180217024203/http://www.nytimes.com/movie/review?res=9B0DE0D8173FF930A15751C1A961948260) from the original on February 17, 2018. Retrieved May 18, 2018.

[^17]: Hinson, Hal. ["'Good Morning Vietnam'"](https://www.washingtonpost.com/wp-srv/style/longterm/movies/videos/goodmorningvietnam.htm). *washingtonpost.com*. [Archived](https://web.archive.org/web/20200925094231/https://www.washingtonpost.com/wp-srv/style/longterm/movies/videos/goodmorningvietnam.htm) from the original on September 25, 2020. Retrieved May 18, 2018.

[^18]: ["Awards for *Good Morning, Vietnam* "](https://web.archive.org/web/20170313224722/http://www.imdb.com/title/tt0093105/awards?). *IMDb.com*. Archived from [the original](https://www.imdb.com/title/tt0093105/awards) on March 13, 2017. Retrieved April 17, 2012.

[^19]: ["The 60th Academy Awards (1988) Nominees and Winners"](http://www.oscars.org/oscars/ceremonies/1988). *oscars.org*. [Archived](https://web.archive.org/web/20171102051937/https://www.oscars.org/oscars/ceremonies/1988) from the original on November 2, 2017. Retrieved July 31, 2011.

[^20]: ["BAFTA Awards: Film in 1989"](http://awards.bafta.org/award/1989/film). *awards.[BAFTA](https://en.m.wikipedia.org/wiki/BAFTA "BAFTA").org*. 1989. [Archived](https://web.archive.org/web/20220309224835/http://awards.bafta.org/award/1989/film) from the original on March 9, 2022. Retrieved September 16, 2016.

[^21]: ["Good Morning, Vietnam – Golden Globes"](https://www.goldenglobes.com/film/good-morning-vietnam). *[HFPA](https://en.m.wikipedia.org/wiki/HFPA "HFPA")*. [Archived](https://web.archive.org/web/20210629155836/https://www.goldenglobes.com/film/good-morning-vietnam) from the original on June 29, 2021. Retrieved July 5, 2021.

[^22]: ["1988 Grammy Award Winners"](https://www.grammy.com/grammys/awards/31st-annual-grammy-awards-1988). *Grammy.com*. [Archived](https://web.archive.org/web/20210713084323/https://www.grammy.com/grammys/awards/31st-annual-grammy-awards-1988) from the original on July 13, 2021. Retrieved May 1, 2011.

[^23]: ["Previous Winners"](https://web.archive.org/web/20091028135432/http://www.geocities.com/~polfilms/previous.html). Political Film Society. Archived from [the original](http://www.geocities.com/~polfilms/previous.html) on October 28, 2009. Retrieved June 15, 2010.

[^24]: ["Top 20 Greatest War Movies"](https://web.archive.org/web/20141010210459/http://movies.amctv.com/movie-guide/twenty-war-movies-youll-never-forget). *movies.amctv.com*. AMC. Archived from [the original](http://movies.amctv.com/movie-guide/twenty-war-movies-youll-never-forget/) on October 10, 2014. Retrieved October 6, 2014.

[^25]: ["AFI's 100 Years...100 Laughs"](https://web.archive.org/web/20160624052741/http://afi.com/Docs/100Years/laughs100.pdf) (PDF). *AFI.com*. [American Film Institute](https://en.m.wikipedia.org/wiki/American_Film_Institute "American Film Institute"). 2002. Archived from [the original](http://www.afi.com/Docs/100Years/laughs100.pdf) (PDF) on June 24, 2016. Retrieved August 22, 2016.

[^26]: ["Good Morning, Vietnam / Operation Dumbo Drop"](http://store.intrada.com/s.nl/it.A/id.10677/.f). *store.intrada.com*. [Archived](https://web.archive.org/web/20180518200748/http://store.intrada.com/s.nl/it.A/id.10677/.f) from the original on May 18, 2018. Retrieved May 18, 2018.

[^27]: Whitburn, Joel. *Top Pop Albums 1955–2001* (Menomonee Falls, Wisconsin: Record Research, 2001), p. 1016.

[^28]: ["What A Wonderful World – Song Information"](http://www.oracleband.net/Lyrics/what_a_wonderful_world.htm). *oracleband.net*. Oracle Band. [Archived](https://web.archive.org/web/20180316023515/http://www.oracleband.net/Lyrics/what_a_wonderful_world.htm) from the original on March 16, 2018. Retrieved August 13, 2014.

[^29]: ["31st Annual Grammy Awards"](https://www.grammy.com/grammys/awards/31st-annual-grammy-awards-1988). *Grammy.com*. November 28, 2017. [Archived](https://web.archive.org/web/20210713084323/https://www.grammy.com/grammys/awards/31st-annual-grammy-awards-1988) from the original on July 13, 2021. Retrieved November 24, 2021.

[^30]: Itzkoff, Dave (2018). [*Robin*](https://books.google.com/books?id=nfQ4DwAAQBAJ&dq=%22good+morning+vietnam%22+soundtrack&pg=PA527). New York: Henry Holt. p. 225. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9781627794251](https://en.m.wikipedia.org/wiki/Special:BookSources/9781627794251 "Special:BookSources/9781627794251"). Retrieved October 24, 2021.

[^31]: [Kent, David](https://en.m.wikipedia.org/wiki/David_Kent_\(historian\) "David Kent (historian)") (1993). *Australian Chart Book 1970–1992* (illustrated ed.). St Ives, N.S.W.: Australian Chart Book. p. 284. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-646-11917-6](https://en.m.wikipedia.org/wiki/Special:BookSources/0-646-11917-6 "Special:BookSources/0-646-11917-6").

[^32]: ["Top RPM Albums: Issue 8951"](https://www.bac-lac.gc.ca/eng/discover/films-videos-sound-recordings/rpm/Pages/image.aspx?Image=nlc008388.8951&URLjpg=http%3a%2f%2fwww.collectionscanada.gc.ca%2fobj%2f028020%2ff4%2fnlc008388.8951.gif&Ecopy=nlc008388.8951). *[RPM](https://en.m.wikipedia.org/wiki/RPM_\(magazine\) "RPM (magazine)")*. [Library and Archives Canada](https://en.m.wikipedia.org/wiki/Library_and_Archives_Canada "Library and Archives Canada"). Retrieved April 17, 2025.

[^33]: ["Charts.nz – Soundtrack – Good Morning, Vietnam"](https://charts.nz/showitem.asp?interpret=Soundtrack&titel=Good+Morning,+Vietnam&cat=a). Hung Medien. Retrieved April 17, 2025.

[^34]: ["Official Albums Chart Top 100"](https://www.officialcharts.com/charts/albums-chart/19881106/7502/). [Official Charts Company](https://en.m.wikipedia.org/wiki/Official_Charts_Company "Official Charts Company"). Retrieved April 17, 2025.

[^35]: "Top Pop Albums". *[Billboard](https://en.m.wikipedia.org/wiki/Billboard_\(magazine\) "Billboard (magazine)")*. April 2, 1988. p. 70.

[^36]: Baker, Glenn A. (January 28, 1989). ["Australia '89"](https://worldradiohistory.com/Archive-All-Music/Billboard/80s/1989/BB-1989-01-28.pdf) (PDF). *[Billboard](https://en.m.wikipedia.org/wiki/Billboard_\(magazine\) "Billboard (magazine)")*. Vol. 101, no. 4. p. A-4. [Archived](https://web.archive.org/web/20210628012209/https://worldradiohistory.com/Archive-All-Music/Billboard/80s/1989/BB-1989-01-28.pdf) (PDF) from the original on June 28, 2021. Retrieved June 22, 2021 – via World Radio History.

[^37]: ["New Zealand album certifications – Various – Good Morning Vietnam"](https://aotearoamusiccharts.co.nz/archive/albums/1988-10-14). [Recorded Music NZ](https://en.m.wikipedia.org/wiki/Recorded_Music_NZ "Recorded Music NZ"). Retrieved November 20, 2024.

[^38]: ["British album certifications – Soundtrack – Good Morning Vietnam"](https://www.bpi.co.uk/award/12334-1509-2). [British Phonographic Industry](https://en.m.wikipedia.org/wiki/British_Phonographic_Industry "British Phonographic Industry"). Retrieved June 22, 2021.

[^39]: ["British album certifications – Soundtrack – Good Morning Vietnam"](https://www.bpi.co.uk/award/2600-1140-2). [British Phonographic Industry](https://en.m.wikipedia.org/wiki/British_Phonographic_Industry "British Phonographic Industry"). Retrieved June 22, 2021.

[^40]: ["American album certifications – Soundtrack – Good Morning Vietnam"](https://www.riaa.com/gold-platinum/?tab_active=default-award&ar=Soundtrack&ti=Good+Morning+Vietnam&format=Album&type=#search_section). [Recording Industry Association of America](https://en.m.wikipedia.org/wiki/Recording_Industry_Association_of_America "Recording Industry Association of America"). Retrieved June 22, 2021.

[^41]: Brennan, Patricia (September 2, 1990). ["Magic? Voodoo?"](https://www.washingtonpost.com/archive/lifestyle/tv/1990/09/02/magic-voodoo/86a1e0a6-084e-4350-ba69-20f1bdb4cc64/). *The Washington Post*. [Archived](https://web.archive.org/web/20170731121123/https://www.washingtonpost.com/archive/lifestyle/tv/1990/09/02/magic-voodoo/86a1e0a6-084e-4350-ba69-20f1bdb4cc64/) from the original on July 31, 2017. Retrieved July 6, 2017.

[^42]: Mabery, D.L. (June 6, 1992). ["For writer-director Mark Frost, life after David Lynch and 'Twin Peaks' goes on"](http://www.postbulletin.com/for-writer-director-mark-frost-life-after-david-lynch-and/article_f793f76f-3aec-57d0-bfc7-d965527e9a04.html). *Post Bulletin*. [Archived](https://web.archive.org/web/20191209203726/http://www.postbulletin.com/for-writer-director-mark-frost-life-after-david-lynch-and/article_f793f76f-3aec-57d0-bfc7-d965527e9a04.html) from the original on December 9, 2019. Retrieved July 6, 2017.

[^43]: Clint, Caffeinated (December 7, 2011). ["Exclusive: Williams on Mrs Doubtfire, Birdcage, Good Morning Vietnam sequels"](https://web.archive.org/web/20170731114549/http://www.moviehole.net/201150015-exclusive-williams-on-mrs-doubtfire-birdcage-good-morning-vietnam-sequels). *Moviehole*. Archived from [the original](http://www.moviehole.net/201150015-exclusive-williams-on-mrs-doubtfire-birdcage-good-morning-vietnam-sequels) on July 31, 2017. Retrieved July 6, 2017.