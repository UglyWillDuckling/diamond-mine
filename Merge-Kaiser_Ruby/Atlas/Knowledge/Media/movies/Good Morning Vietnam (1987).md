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
actors:
  - Forest Whitaker
  - Tom T. Tran
  - "[[Robin Williams]]"
onlineRating: 7.3
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

`$= '![Image|200](' + dv.current().image + ')'`

# `$= dv.current().title`

```dataviewjs
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:watched]\` watched \n last watched on ${dv.current().lastWatched || '---'}`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:watched]\` not yet watched`);
}
```

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

## other 

In 1992, [Mark Frost](https://en.m.wikipedia.org/wiki/Mark_Frost "Mark Frost") wrote a sequel screenplay, *Good Morning, Chicago*.[^41] [^42] The film would have featured Williams, reprising his role as Cronauer, as a journalist at the [1968 Democratic National Convention](https://en.m.wikipedia.org/wiki/1968_Democratic_National_Convention "1968 Democratic National Convention"). The project was eventually scrapped, due to disagreements between Williams, Levinson and [Disney](https://en.m.wikipedia.org/wiki/The_Walt_Disney_Company "The Walt Disney Company"), over the film's direction.[^43]