---
type: movie
subType: ""
title: I'm Not There
year: "2007"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0368794/
id: tt0368794
plot: Ruminations on the life of Bob Dylan, where six characters embody a different aspect of the musician's life and work.
genres:
  - Biography
  - Drama
  - Music
director:
  - Todd Haynes
onlineRating: 6.8
actors:
  - Christian Bale
  - Cate Blanchett
  - Heath Ledger
image: https://m.media-amazon.com/images/M/MV5BMTY4MzM2MjcwNV5BMl5BanBnXkFtZTcwODg3MDU1MQ@@._V1_SX300.jpg
released: true
premiere: 07.12.2007
watched: false
lastWatched: ""
personalRating: 0
tags: mediaDB/tv/movie
plan-to-watch: false
---

`$= '![Image|360](' + dv.current().image + ')'`

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

- [Article](https://en.m.wikipedia.org/wiki/I%27m_Not_There)
- [Talk](https://en.m.wikipedia.org/wiki/Talk:I%27m_Not_There)

# more 

***I'm Not There*** is a 2007 [musical](https://en.m.wikipedia.org/wiki/Musical_film "Musical film") [drama film](https://en.m.wikipedia.org/wiki/Drama_\(film_and_television\) "Drama (film and television)") directed by [Todd Haynes](https://en.m.wikipedia.org/wiki/Todd_Haynes "Todd Haynes"), who co-wrote the screenplay with [Oren Moverman](https://en.m.wikipedia.org/wiki/Oren_Moverman "Oren Moverman"), based on a story by Haynes. An experimental [biographical](https://en.m.wikipedia.org/wiki/Biographical_film "Biographical film") film, it is inspired by the life and music of American singer-songwriter [Bob Dylan](https://en.m.wikipedia.org/wiki/Bob_Dylan "Bob Dylan"), with six actors depicting different facets of Dylan's public personas: [Christian Bale](https://en.m.wikipedia.org/wiki/Christian_Bale "Christian Bale"), [Cate Blanchett](https://en.m.wikipedia.org/wiki/Cate_Blanchett "Cate Blanchett"), [Marcus Carl Franklin](https://en.m.wikipedia.org/wiki/Marcus_Carl_Franklin "Marcus Carl Franklin"), [Richard Gere](https://en.m.wikipedia.org/wiki/Richard_Gere "Richard Gere"), [Heath Ledger](https://en.m.wikipedia.org/wiki/Heath_Ledger "Heath Ledger") (his final film to be released during his lifetime), and [Ben Whishaw](https://en.m.wikipedia.org/wiki/Ben_Whishaw "Ben Whishaw").

A caption at the start of the film declares it to be "inspired by the music and the many lives of Bob Dylan"; this is the only mention of Dylan in the film apart from song credits, and his only appearance in it is concert footage from 1966. The film's title is taken from the 1967 Dylan *[Basement Tape](https://en.m.wikipedia.org/wiki/List_of_Basement_Tapes_songs "List of Basement Tapes songs")* recording of "I'm Not There", a song that had not been officially released until it appeared on the film's [soundtrack album](https://en.m.wikipedia.org/wiki/I%27m_Not_There_\(soundtrack\) "I'm Not There (soundtrack)").

*I'm Not There* premiered at the [64th Venice International Film Festival](https://en.m.wikipedia.org/wiki/64th_Venice_International_Film_Festival "64th Venice International Film Festival") on September 3, 2007, and was released in the United States on November 21 and in Germany on February 28, 2008. It received generally positive reviews from critics, with praise for its acting (particularly Blanchett's), directing, and musical score. It underperformed at the box office, grossing $11 million worldwide on the budget of $20 million. *I'm Not There* appeared on multiple publications' top ten films lists for 2007. Blanchett won the [Volpi Cup for Best Actress](https://en.m.wikipedia.org/wiki/Volpi_Cup_for_Best_Actress "Volpi Cup for Best Actress") and the [Golden Globe Award for Best Supporting Actress](https://en.m.wikipedia.org/wiki/Golden_Globe_Award_for_Best_Supporting_Actress_%E2%80%93_Motion_Picture "Golden Globe Award for Best Supporting Actress – Motion Picture"), and received a nomination for the [Academy Award for Best Supporting Actress](https://en.m.wikipedia.org/wiki/Academy_Award_for_Best_Supporting_Actress "Academy Award for Best Supporting Actress").

## Plot

*I'm Not There* uses a [nonlinear narrative](https://en.m.wikipedia.org/wiki/Nonlinear_narrative "Nonlinear narrative"), shifting between six characters in separate storylines "inspired by the music and many lives of [Bob Dylan](https://en.m.wikipedia.org/wiki/Bob_Dylan "Bob Dylan") ". Each character represents a different facet of Dylan's public persona: poet (Arthur Rimbaud), prophet (Jack Rollins/Father John), outlaw (Billy McCarty), fake (Woody Guthrie), "rock and roll martyr" (Jude Quinn), and "star of electricity" (Robbie Clark).

Production notes published by distributor [The Weinstein Company](https://en.m.wikipedia.org/wiki/The_Weinstein_Company "The Weinstein Company") explain that the film "dramatizes the life and music of Bob Dylan as a series of shifting personae, each performed by a different actor—poet, prophet, outlaw, fake, star of electricity, rock and roll martyr, born-again Christian—six identities braided together, six organs pumping through one life story." [^3]

19-year-old [Arthur Rimbaud](https://en.m.wikipedia.org/wiki/Arthur_Rimbaud "Arthur Rimbaud") is questioned by interrogators. His cryptic responses are interspersed throughout the film, including remarks on [fatalism](https://en.m.wikipedia.org/wiki/Fatalism "Fatalism"), the nature of poets, "seven simple rules for life in hiding," and chaos.

In 1959, an 11-year-old African American boy calling himself Woody Guthrie is [freighthopping](https://en.m.wikipedia.org/wiki/Freighthopping "Freighthopping") through the [Midwestern United States](https://en.m.wikipedia.org/wiki/Midwestern_United_States "Midwestern United States"). Carrying a guitar in a case bearing the slogan " [this machine kills fascists](https://en.m.wikipedia.org/wiki/This_machine_kills_fascists "This machine kills fascists") ", he plays [blues](https://en.m.wikipedia.org/wiki/Blues "Blues") music and sings about topics such as trade unionism. Part of a conversation on a freight train between Woody and two [hobos](https://en.m.wikipedia.org/wiki/Hobo "Hobo") about his life in a town called "Riddle" is directly lifted from another film, *[A Face in the Crowd](https://en.m.wikipedia.org/wiki/A_Face_in_the_Crowd_\(film\) "A Face in the Crowd (film)")* (1957). Taken in briefly by an African American family, the mother advises him to sing about the issues of his own time instead. In another boxcar, Woody wakes to find himself menaced by other hobos and after a fight falls off the train into a river. He nearly drowns, but is rescued by a white couple who take him in. They are impressed with his musical talents, but Woody runs off when they receive a telephone call from a juvenile corrections center in [Minnesota](https://en.m.wikipedia.org/wiki/Minnesota "Minnesota") telling them he is an escaped fugitive. Upon learning that the real [Woody Guthrie](https://en.m.wikipedia.org/wiki/Woody_Guthrie "Woody Guthrie") is deathly ill, the boy travels to [New Jersey](https://en.m.wikipedia.org/wiki/New_Jersey "New Jersey") to visit Guthrie in the hospital.

The career of [folk musician](https://en.m.wikipedia.org/wiki/Folk_music "Folk music") Jack Rollins is framed as a documentary film, told by interviewees including folk singer Alice Fabian. Jack becomes a star of the [Greenwich Village](https://en.m.wikipedia.org/wiki/Greenwich_Village "Greenwich Village") folk scene in the early 1960s, praised by fans for his [protest songs](https://en.m.wikipedia.org/wiki/Protest_song "Protest song"). He signs to [Columbia Records](https://en.m.wikipedia.org/wiki/Columbia_Records "Columbia Records"), but in 1963, just as the [Vietnam War](https://en.m.wikipedia.org/wiki/Vietnam_War "Vietnam War") is escalating, he stops singing protest songs and turns away from folk music, believing that neither affects real social or political change. Following the [assassination of John F. Kennedy](https://en.m.wikipedia.org/wiki/Assassination_of_John_F._Kennedy "Assassination of John F. Kennedy"), Jack gets drunk at a ceremony where he is receiving an award from a civil rights organization. Remarking in his acceptance speech that he saw something of himself in Kennedy's assassin [Lee Harvey Oswald](https://en.m.wikipedia.org/wiki/Lee_Harvey_Oswald "Lee Harvey Oswald"), he is booed and derided by the audience. He goes into hiding and in 1974 enters a [bible study](https://en.m.wikipedia.org/wiki/Bible_study_\(Christian\) "Bible study (Christian)") course in [Stockton, California](https://en.m.wikipedia.org/wiki/Stockton,_California "Stockton, California"). He emerges a [born-again Christian](https://en.m.wikipedia.org/wiki/Born_again_\(Christianity\) "Born again (Christianity)"), denouncing his past and becoming an ordained minister performing [gospel music](https://en.m.wikipedia.org/wiki/Gospel_music "Gospel music") under the name "Father John."

Robbie Clark is a 22-year-old actor who plays Jack Rollins in the 1965 biographical film *Grain of Sand*. During filming in Greenwich Village in January 1964, he falls in love with French artist Claire, and they soon marry. *Grain of Sand* is a hit and Robbie becomes a star, but their relationship is strained and Claire observes Robbie flirting with other women. She is particularly offended when, during an argument in 1968 over whether the evils of the world can be changed, he opines that women can never be poets. Eventually Robbie moves out of their house, then goes to London for four months to film a [thriller](https://en.m.wikipedia.org/wiki/Thriller_\(genre\) "Thriller (genre)") and has an affair with his female co-star. [Richard Nixon](https://en.m.wikipedia.org/wiki/Richard_Nixon "Richard Nixon") 's January 1973 announcement of the [Paris Peace Accords](https://en.m.wikipedia.org/wiki/Paris_Peace_Accords "Paris Peace Accords") inspires Claire to ask for a divorce. She gains custody of their two daughters, but allows Robbie to take them on a boating trip.

Jude Quinn is a popular former folk singer whose performance with a full band and electric guitars at a [New England jazz and folk festival](https://en.m.wikipedia.org/wiki/Newport_Folk_Festival "Newport Folk Festival") outrages his fans, who accuse him of [selling out](https://en.m.wikipedia.org/wiki/Electric_Dylan_controversy "Electric Dylan controversy"). Travelling to London, Jude fields ignorant questions from journalists, frolics with [the Beatles](https://en.m.wikipedia.org/wiki/The_Beatles "The Beatles"), encounters his former lover [Coco Rivington](https://en.m.wikipedia.org/wiki/Edie_Sedgwick "Edie Sedgwick"), and meets poet [Allen Ginsberg](https://en.m.wikipedia.org/wiki/Allen_Ginsberg "Allen Ginsberg"), who suggests that Jude "sold out to God." Interviewing Jude, journalist Keenan Jones notes that Jude's songs are being used as recruitment tools by the [Black Panther Party](https://en.m.wikipedia.org/wiki/Black_Panther_Party "Black Panther Party") and opines that Jude refuses to feel deeply about anything while simultaneously being very self-conscious. Jude is offended and walks out of the interview. At a concert performing " [Ballad of a Thin Man](https://en.m.wikipedia.org/wiki/Ballad_of_a_Thin_Man "Ballad of a Thin Man")," Jude is booed and called a " [Judas](https://en.m.wikipedia.org/wiki/Judas_Iscariot "Judas Iscariot") " by the audience. Keenan reveals on television that, despite his claims of a rough-and-tumble vagabond past, Jude is actually Aaron Jacob Edelstein, the suburban, middle-class, educated son of a [Brookline, Massachusetts](https://en.m.wikipedia.org/wiki/Brookline,_Massachusetts "Brookline, Massachusetts") department store owner. Faced with a long string of upcoming European tour dates, Jude spirals into drug use and is apparently killed in a motorcycle accident.

The outlaw [Billy the Kid](https://en.m.wikipedia.org/wiki/Billy_the_Kid "Billy the Kid"), believed to have been killed by [Pat Garrett](https://en.m.wikipedia.org/wiki/Pat_Garrett "Pat Garrett"), lives in hiding and solitude as "Billy McCarty" in a shack outside the rural town of Riddle, Missouri. Searching for his lost dog, he has a premonition of the [Vietnam War](https://en.m.wikipedia.org/wiki/Vietnam_War "Vietnam War"). Learning that Commissioner Garrett plans to demolish the town to build a highway, which has caused several townspeople to commit suicide, Billy rides into the centre of town and confronts Garrett, who is attempting to mollify the townsfolk. Garrett recognizes Billy but can't place him as the outlaw he supposedly killed. When the townsfolk threaten to riot, Billy is arrested by police driving modern cars and is thrown in jail for being a troublemaker. He is broken out by his friend Homer and hops a passing train. He finds Woody's guitar in the boxcar and plays it as he rides away, musing on the nature of freedom and identity.

The film concludes with footage of Dylan playing a harmonica solo during a live performance in 1966.[^4]

These six characters represent different aspects of Dylan's life and music.[^5] [^6] Some of these share names with real historical figures or artists, some are wholly fictional characters.

- [Christian Bale](https://en.m.wikipedia.org/wiki/Christian_Bale "Christian Bale") as Jack Rollins / Pastor John
- [Cate Blanchett](https://en.m.wikipedia.org/wiki/Cate_Blanchett "Cate Blanchett") as Jude Quinn
- [Marcus Carl Franklin](https://en.m.wikipedia.org/wiki/Marcus_Carl_Franklin "Marcus Carl Franklin") as [Woody Guthrie](https://en.m.wikipedia.org/wiki/Woody_Guthrie "Woody Guthrie")
- [Richard Gere](https://en.m.wikipedia.org/wiki/Richard_Gere "Richard Gere") as [Billy the Kid](https://en.m.wikipedia.org/wiki/Billy_the_Kid "Billy the Kid")
- [Heath Ledger](https://en.m.wikipedia.org/wiki/Heath_Ledger "Heath Ledger") as Robbie Clark, an actor who portrays Jack Rollins in a biographical film and becomes as famous as the person he portrays
- [Ben Whishaw](https://en.m.wikipedia.org/wiki/Ben_Whishaw "Ben Whishaw") as [Arthur Rimbaud](https://en.m.wikipedia.org/wiki/Arthur_Rimbaud "Arthur Rimbaud")
- [Charlotte Gainsbourg](https://en.m.wikipedia.org/wiki/Charlotte_Gainsbourg "Charlotte Gainsbourg") as Claire Clark, wife of Robbie Clark
- [David Cross](https://en.m.wikipedia.org/wiki/David_Cross "David Cross") as [Allen Ginsberg](https://en.m.wikipedia.org/wiki/Allen_Ginsberg "Allen Ginsberg")
- Eugene Brotto as [Peter Orlovsky](https://en.m.wikipedia.org/wiki/Peter_Orlovsky "Peter Orlovsky")
- [Bruce Greenwood](https://en.m.wikipedia.org/wiki/Bruce_Greenwood "Bruce Greenwood") as Keenan Jones, a fictional reporter who investigates Jude Quinn, and [Pat Garrett](https://en.m.wikipedia.org/wiki/Pat_Garrett "Pat Garrett"), nemesis of [Billy the Kid](https://en.m.wikipedia.org/wiki/Billy_the_Kid "Billy the Kid").
- [Julianne Moore](https://en.m.wikipedia.org/wiki/Julianne_Moore "Julianne Moore") as Alice Fabian, a singer
- [Michelle Williams](https://en.m.wikipedia.org/wiki/Michelle_Williams_\(actress\) "Michelle Williams (actress)") as Coco Rivington
- [Mark Camacho](https://en.m.wikipedia.org/wiki/Mark_Camacho "Mark Camacho") as Norman, the manager of Jude Quinn
- [Benz Antoine](https://en.m.wikipedia.org/wiki/Benz_Antoine "Benz Antoine") as [Bobby Seale](https://en.m.wikipedia.org/wiki/Bobby_Seale "Bobby Seale"), the [Black Panther](https://en.m.wikipedia.org/wiki/Black_Panther_Party "Black Panther Party") leader, and Rabbit Brown
- Craig Thomas as [Huey Newton](https://en.m.wikipedia.org/wiki/Huey_Newton "Huey Newton"), the Black Panther leader
- [Richie Havens](https://en.m.wikipedia.org/wiki/Richie_Havens "Richie Havens") as Old Man Arvin
- Kim Roberts as Mrs. Arvin
- [Kris Kristofferson](https://en.m.wikipedia.org/wiki/Kris_Kristofferson "Kris Kristofferson") as The Narrator
- [Don Francks](https://en.m.wikipedia.org/wiki/Don_Francks "Don Francks") as Hobo Joe
- Vito DeFilippo and [Susan Glover](https://en.m.wikipedia.org/wiki/Susan_Glover "Susan Glover") as Mr. and Mrs. Peacock, a middle-class couple who take "Woody Guthrie" in after a near-drowning incident
- [Paul Spence](https://en.m.wikipedia.org/wiki/Paul_Spence "Paul Spence") as Homer, Billy the Kid's friend

[Richard Gere](https://en.m.wikipedia.org/wiki/Richard_Gere "Richard Gere"), [Todd Haynes](https://en.m.wikipedia.org/wiki/Todd_Haynes "Todd Haynes"), [Charlotte Gainsbourg](https://en.m.wikipedia.org/wiki/Charlotte_Gainsbourg "Charlotte Gainsbourg") and [Heath Ledger](https://en.m.wikipedia.org/wiki/Heath_Ledger "Heath Ledger") at the [64th Venice International Film Festival](https://en.m.wikipedia.org/wiki/64th_Venice_International_Film_Festival "64th Venice International Film Festival"), September 2007.

[Todd Haynes](https://en.m.wikipedia.org/wiki/Todd_Haynes "Todd Haynes") and his producer, [Christine Vachon](https://en.m.wikipedia.org/wiki/Christine_Vachon "Christine Vachon"), approached Dylan's manager, Jeff Rosen, to obtain permission to use Dylan's music and to fictionalize elements of Dylan's life. Rosen suggested that Haynes should send a one-page synopsis of his film for submission to Dylan. Rosen advised Haynes not to use the word "genius" or "voice of a generation".[^6] [^7] The page Haynes submitted began with a quote from [Arthur Rimbaud](https://en.m.wikipedia.org/wiki/Arthur_Rimbaud "Arthur Rimbaud"): "I is someone else", and then continued:

> If a film were to exist in which the breadth and flux of a creative life could be experienced, a film that could open up, as opposed to consolidating, what we think we already know walking in, it could never be within the tidy arc of a master narrative. The structure of such a film would have to be a fractured one, with numerous openings and a multitude of voices, with its prime strategy being one of refraction, not condensation. Imagine a film splintered between six separate faces – old men, young men, women, children – each standing in for spaces in a single life.[^6]

Dylan gave Haynes permission to proceed with his project. Haynes developed his screenplay with writer [Oren Moverman](https://en.m.wikipedia.org/wiki/Oren_Moverman "Oren Moverman"). In the course of writing, Haynes has acknowledged that he became uncertain whether he could successfully carry off a film which deliberately confused biography with fantasy in such an extreme way. According to the account of the film that Robert Sullivan published in the *[New York Times](https://en.m.wikipedia.org/wiki/New_York_Times "New York Times")*: "Haynes called Jeff Rosen, Dylan's right hand, who was watching the deal-making but staying out of the scriptwriting. Rosen, he said, told him not to worry, that it was just his own crazy version of what Dylan is." [^6]

In a comment on why six actors were employed to portray different facets of Dylan's personality, Haynes wrote:

> The minute you try to grab hold of Dylan, he's no longer where he was. He's like a flame: If you try to hold him in your hand you'll surely get burned. Dylan's life of change and constant disappearances and constant transformations makes you yearn to hold him, and to nail him down. And that's why his fan base is so obsessive, so desirous of finding the truth and the absolutes and the answers to him – things that Dylan will never provide and will only frustrate.... Dylan is difficult and mysterious and evasive and frustrating, and it only makes you identify with him all the more as he skirts identity.[^8]

A further Dylan-based character named Charlie, based on [Charlie Chaplin](https://en.m.wikipedia.org/wiki/Charlie_Chaplin "Charlie Chaplin"), was dropped before filming began. Haynes described him as "a little tramp, coming to Greenwich Village and performing feats of magic and being an arbiter of peace between the [beats](https://en.m.wikipedia.org/wiki/Beat_Generation "Beat Generation") and the [folkies](https://en.m.wikipedia.org/wiki/American_folk_music_revival "American folk music revival")." [^9] Actors including [Adrien Brody](https://en.m.wikipedia.org/wiki/Adrien_Brody "Adrien Brody") and [Colin Farrell](https://en.m.wikipedia.org/wiki/Colin_Farrell "Colin Farrell") were attached to play characters representing Dylan early in development; [Heath Ledger](https://en.m.wikipedia.org/wiki/Heath_Ledger "Heath Ledger") replaced the latter, who dropped out for undisclosed reasons, as Robbie Clark.[^10] [^11]

The film within a film, *Grain of Sand*, is not only important for the plot of *I'm Not There* but also for the film's connection to Bob Dylan's life. Larry Gross suggests that *Grain of Sand* actor Robbie may be the film's most accurate portrayal of Dylan despite being "a fictional actor playing a fictional alternative version of a real person" because of his tumultuous relationship with Claire.[^12] Gross also notes parallels between Robbie and Claire's ultimately failed marriage and Dylan's relationship with [Suze Rotolo](https://en.m.wikipedia.org/wiki/Suze_Rotolo "Suze Rotolo"), claiming that Claire's character seems to be a portrayal of Rotolo, especially considering the shot in *I'm Not There* that mimicks the photo of Rotolo and Dylan on the cover of *[The Freewheelin' Bob Dylan](https://en.m.wikipedia.org/wiki/The_Freewheelin%27_Bob_Dylan "The Freewheelin' Bob Dylan")*.[^12]

[Principal photography](https://en.m.wikipedia.org/wiki/Principal_photography "Principal photography") took place in [Montreal](https://en.m.wikipedia.org/wiki/Montreal "Montreal"), Quebec, Canada.[^6] Music festival scenes were filmed in [Chambly, Quebec](https://en.m.wikipedia.org/wiki/Chambly,_Quebec "Chambly, Quebec") in the summer of 2006.[^13]

The film features numerous songs by Dylan, performed by Dylan and also recordings by other artists. The songs feature as both foreground—performed by artists on camera (e.g. "Goin' to Acapulco", "Pressing On")—and background accompaniment to the action. A notable non-Dylan song in the movie is " [(I'm Not Your) Steppin' Stone](https://en.m.wikipedia.org/wiki/\(I%27m_Not_Your\)_Steppin%27_Stone "(I'm Not Your) Steppin' Stone") " by [The Monkees](https://en.m.wikipedia.org/wiki/The_Monkees "The Monkees"), which plays in the background of a party scene set in London.

In May 2005, [Sony Pictures Classics](https://en.m.wikipedia.org/wiki/Sony_Pictures_Classics "Sony Pictures Classics") was reportedly in negotiations to acquire North and Latin American and Spanish distribution rights to the film.[^10] January 2007, [The Weinstein Company](https://en.m.wikipedia.org/wiki/The_Weinstein_Company "The Weinstein Company") acquired North American and U.K. distribution rights to the film.[^14] *I'm Not There* had its world premiere at the [Telluride Film Festival](https://en.m.wikipedia.org/wiki/Telluride_Film_Festival "Telluride Film Festival") on August 31, 2007.[^15] The film went onto screen at the [Toronto International Film Festival](https://en.m.wikipedia.org/wiki/Toronto_International_Film_Festival "Toronto International Film Festival"),[^16] [London Film Festival](https://en.m.wikipedia.org/wiki/London_Film_Festival "London Film Festival"),[^17] and the [New York Film Festival](https://en.m.wikipedia.org/wiki/New_York_Film_Festival "New York Film Festival").[^18] The film opened in [limited release](https://en.m.wikipedia.org/wiki/Limited_release "Limited release") in the United States on November 21, 2007.[^19] It was then released in Germany on February 28, 2008, by [Tobis Film](https://en.m.wikipedia.org/wiki/Tobis_Film "Tobis Film").[^20]

*I'm Not There* was released on DVD as a 2-disc special edition on May 6, 2008.[^21] The DVD special features include [audio commentary](https://en.m.wikipedia.org/wiki/Audio_commentary "Audio commentary") from Haynes, deleted scenes, featurettes, a music video, audition tapes for certain cast members, trailers, and a Bob Dylan filmography and discography.[^21]

*I'm Not There* received generally positive reviews from critics. On [review aggregator](https://en.m.wikipedia.org/wiki/Review_aggregator "Review aggregator") website [Rotten Tomatoes](https://en.m.wikipedia.org/wiki/Rotten_Tomatoes "Rotten Tomatoes"), the film has a 76% approval rating based on 161 reviews, with an average rating of 7.06 out of 10. The site's critical consensus states: " *I'm Not There* ' s unique editing, visuals, and multiple talented actors portraying Bob Dylan make for a deliciously unconventional experience. Each segment brings a new and fresh take on Dylan's life." [^22] On [Metacritic](https://en.m.wikipedia.org/wiki/Metacritic "Metacritic"), the film has a [weighted average](https://en.m.wikipedia.org/wiki/Weighted_average "Weighted average") score of 73 out of 100, based on 35 critics, indicating "generally favorable" reviews.[^23]

Writing in *[The Chronicle of Higher Education](https://en.m.wikipedia.org/wiki/The_Chronicle_of_Higher_Education "The Chronicle of Higher Education")*, [Anthony DeCurtis](https://en.m.wikipedia.org/wiki/Anthony_DeCurtis "Anthony DeCurtis") wrote that casting six different actors, including a woman and an African-American child, to play Dylan was "a preposterous idea, the sort of self-consciously 'audacious'—or reassuringly [multi-culti](https://en.m.wikipedia.org/wiki/Multiculturalism "Multiculturalism") —gambit that, for instance, doomed [the Broadway musical](https://en.m.wikipedia.org/wiki/Lennon_\(musical\) "Lennon (musical)") based on the life and music of [John Lennon](https://en.m.wikipedia.org/wiki/John_Lennon "John Lennon"). Yet in *I'm Not There,* the strategy works brilliantly." He especially praised Blanchett:

> Her performance is a wonder, and not simply because, as Jude Quinn, she inhabits the twitchy, [amphetamine](https://en.m.wikipedia.org/wiki/Amphetamine "Amphetamine") -fired Dylan of 1965–66 with unnerving accuracy. Casting a woman in this role reveals a dimension to the acerbic Dylan of this era that has rarely been noted... Blanchett's translucent skin, delicate fingers, slight build, and pleading eyes all suggest the previously invisible vulnerability and fear that fueled Dylan's lacerating anger. It's hard to imagine that any male actor, or any less-gifted female actor for that matter, could have lent such rich texture to the role.[^24]

Several other critics also praised Blanchett's performance as the mid-1960s Dylan. *[Newsweek](https://en.m.wikipedia.org/wiki/Newsweek "Newsweek")* magazine described Blanchett as "so convincing and intense that you shrink back in your seat when she fixes you with her gaze." [^25] The *[Charlotte Observer](https://en.m.wikipedia.org/wiki/Charlotte_Observer "Charlotte Observer")* called Blanchett "miraculously close to the 1966 Dylan." [^26]

[Todd McCarthy](https://en.m.wikipedia.org/wiki/Todd_McCarthy "Todd McCarthy") of *[Variety](https://en.m.wikipedia.org/wiki/Variety_\(magazine\) "Variety (magazine)")*, concluded that the film was well-made, but was ultimately a speciality event for Dylan fans, with little mainstream appeal. He wrote: "Dylan freaks and scholars will have the most fun with *I'm Not There*, and there will inevitably be innumerable dissertations on the ways Haynes has both reflected and distorted reality, mined and manipulated the biographical record and otherwise had a field day with the essentials, as well as the esoterica, of Dylan's life. All of this will serve to inflate the film's significance by ignoring its lack of more general accessibility. In the end, it's a specialists' event." [^5] For [Roger Ebert](https://en.m.wikipedia.org/wiki/Roger_Ebert "Roger Ebert"), the film was enjoyable cinematically, yet never sought to resolve the enigmas of Dylan's life and work: "Coming away from *I'm Not There*, we have, first of all, heard some great music... We've seen six gifted actors challenged by playing facets of a complete man. We've seen a daring attempt at biography as collage. We've remained baffled by the Richard Gere cowboy sequence, which doesn't seem to know its purpose. And we have been left not one step closer to comprehending Bob Dylan, which is as it should be." [^27]

In September 2012, Dylan commented on *I'm Not There* in an interview published in *[Rolling Stone](https://en.m.wikipedia.org/wiki/Rolling_Stone "Rolling Stone")*. When journalist [Mikal Gilmore](https://en.m.wikipedia.org/wiki/Mikal_Gilmore "Mikal Gilmore") asked Dylan whether he liked the film, he responded: "Yeah, I thought it was all right. Do you think that the director was worried that people would understand it or not? I don't think he cared one bit. I just think he wanted to make a good movie. I thought it looked good, and those actors were incredible." [^28]

The film appeared on several critics' lists of the top ten films of 2007.

| - 1st – J. Hoberman, *[The Village Voice](https://en.m.wikipedia.org/wiki/The_Village_Voice "The Village Voice")* [^29] - 1st – Owen Gleiberman, *[Entertainment Weekly](https://en.m.wikipedia.org/wiki/Entertainment_Weekly "Entertainment Weekly")* [^29] - 1st – Stephanie Zacharek, *[Salon](https://en.m.wikipedia.org/wiki/Salon.com "Salon.com")* [^29] - 1st – Ty Burr, *[The Boston Globe](https://en.m.wikipedia.org/wiki/The_Boston_Globe "The Boston Globe")* [^29] - 3rd – Lisa Schwarzbaum, *[Entertainment Weekly](https://en.m.wikipedia.org/wiki/Entertainment_Weekly "Entertainment Weekly")* [^29] - 3rd – Marc Mohan, *[The Oregonian](https://en.m.wikipedia.org/wiki/The_Oregonian "The Oregonian")* [^29] - 4th – [A. O. Scott](https://en.m.wikipedia.org/wiki/A._O._Scott "A. O. Scott"), *[The New York Times](https://en.m.wikipedia.org/wiki/The_New_York_Times "The New York Times")* [^29] - 4th – Nathan Lee, *[The Village Voice](https://en.m.wikipedia.org/wiki/The_Village_Voice "The Village Voice")* [^29] - 4th – Shawn Levy, *[The Oregonian](https://en.m.wikipedia.org/wiki/The_Oregonian "The Oregonian")* [^29] | - 5th – Steven Rea, *[The Philadelphia Inquirer](https://en.m.wikipedia.org/wiki/The_Philadelphia_Inquirer "The Philadelphia Inquirer")* [^29] - 6th – Kevin Crust, *[Los Angeles Times](https://en.m.wikipedia.org/wiki/Los_Angeles_Times "Los Angeles Times")* [^29] - 7th – Marjorie Baumgarten, *[The Austin Chronicle](https://en.m.wikipedia.org/wiki/The_Austin_Chronicle "The Austin Chronicle")* [^29] - 9th – Glenn Kenny, *[Premiere](https://en.m.wikipedia.org/wiki/Premiere_\(magazine\) "Premiere (magazine)")* [^29] - 9th – Peter Travers, *[Rolling Stone](https://en.m.wikipedia.org/wiki/Rolling_Stone "Rolling Stone")* [^30] - 10th – Ann Hornaday, *[The Washington Post](https://en.m.wikipedia.org/wiki/The_Washington_Post "The Washington Post")* [^29] - 10th – Desson Thomson, *[The Washington Post](https://en.m.wikipedia.org/wiki/The_Washington_Post "The Washington Post")* [^29] - 10th – Keith Phipps, *[The A.V. Club](https://en.m.wikipedia.org/wiki/The_A.V._Club "The A.V. Club")* [^29] - 10th – Tasha Robinson, *[The A.V. Club](https://en.m.wikipedia.org/wiki/The_A.V._Club "The A.V. Club")* [^29] |
| --- | --- |

- [Academy Awards](https://en.m.wikipedia.org/wiki/80th_Academy_Awards "80th Academy Awards"):
	- Best Supporting Actress ([Cate Blanchett](https://en.m.wikipedia.org/wiki/Cate_Blanchett "Cate Blanchett"), nominee) [^31]
- [British Academy Film Awards](https://en.m.wikipedia.org/wiki/61st_British_Academy_Film_Awards "61st British Academy Film Awards")
	- Best Actress in a Supporting Role (Cate Blanchett, nominee)
- [Broadcast Film Critics](https://en.m.wikipedia.org/wiki/13th_Critics%27_Choice_Awards "13th Critics' Choice Awards"):
	- Best Supporting Actress (Cate Blanchett, nominee)
- Central Ohio Film Critics:
	- Best Supporting Actress (Cate Blanchett, **winner**)
- [Chicago Film Critics](https://en.m.wikipedia.org/wiki/Chicago_Film_Critics_Association_Awards_2007 "Chicago Film Critics Association Awards 2007"):
	- Best Supporting Actress (Cate Blanchett, **winner**)
- [Golden Globe Awards](https://en.m.wikipedia.org/wiki/65th_Golden_Globe_Awards "65th Golden Globe Awards"):
	- Best Supporting Actress (Cate Blanchett, **winner**)
- [Independent Spirit Awards](https://en.m.wikipedia.org/wiki/Independent_Spirit_Awards_2007 "Independent Spirit Awards 2007")
	- Best Film (nominee)
	- Best Director (Todd Haynes, nominee)
	- Best Supporting Actor (Marcus Carl Franklin, nominee)
	- Best Supporting Actress (Cate Blanchett, **winner**)
	- [Robert Altman Award](https://en.m.wikipedia.org/wiki/Independent_Spirit_Awards_2007#Robert_Altman_Award "Independent Spirit Awards 2007") ([Todd Haynes](https://en.m.wikipedia.org/wiki/Todd_Haynes "Todd Haynes"), Laura Rosenthal, [Christian Bale](https://en.m.wikipedia.org/wiki/Christian_Bale "Christian Bale"), [Cate Blanchett](https://en.m.wikipedia.org/wiki/Cate_Blanchett "Cate Blanchett"), [Marcus Carl Franklin](https://en.m.wikipedia.org/wiki/Marcus_Carl_Franklin "Marcus Carl Franklin"), [Charlotte Gainsbourg](https://en.m.wikipedia.org/wiki/Charlotte_Gainsbourg "Charlotte Gainsbourg"), [Richard Gere](https://en.m.wikipedia.org/wiki/Richard_Gere "Richard Gere"), [Bruce Greenwood](https://en.m.wikipedia.org/wiki/Bruce_Greenwood "Bruce Greenwood"), [Heath Ledger](https://en.m.wikipedia.org/wiki/Heath_Ledger "Heath Ledger") and [Ben Whishaw](https://en.m.wikipedia.org/wiki/Ben_Whishaw "Ben Whishaw"), **winner**)
- Las Vegas Film Critics:
	- Best Supporting Actress (Cate Blanchett, **winner**)
- [Los Angeles Film Critics](https://en.m.wikipedia.org/wiki/Los_Angeles_Film_Critics_Association_Awards_2007 "Los Angeles Film Critics Association Awards 2007"):
	- Best Supporting Actress (Cate Blanchett, runner-up)
- [New York Film Critics Circle](https://en.m.wikipedia.org/wiki/2007_New_York_Film_Critics_Circle_Awards "2007 New York Film Critics Circle Awards"):
	- Best Supporting Actress (Cate Blanchett, runner-up)
- [New York Film Critics Online](https://en.m.wikipedia.org/wiki/New_York_Film_Critics_Online "New York Film Critics Online"):
	- Best Supporting Actress (Cate Blanchett, **winner**)
- [National Society of Film Critics](https://en.m.wikipedia.org/wiki/National_Society_of_Film_Critics_Awards_2007 "National Society of Film Critics Awards 2007"):
	- Best Supporting Actress (Cate Blanchett, **winner**)
- Nilsson Awards for Film
	- Best Supporting Actress (Cate Blanchett, **winner**)
	- Best Cinematography
	- Best Compiled Soundtrack
- [Satellite Awards](https://en.m.wikipedia.org/wiki/Satellite_Awards "Satellite Awards"):
	- Best Actress – Comedy or Musical (Cate Blanchett, nominee)
- [Screen Actors Guild (SAG)](https://en.m.wikipedia.org/wiki/Screen_Actors_Guild_Awards_2007 "Screen Actors Guild Awards 2007"):
	- Best Supporting Actress (Cate Blanchett, nominee)
- Southeastern Film Critics:
	- Best Supporting Actress (Cate Blanchett, runner-up)
- [Venice Film Festival](https://en.m.wikipedia.org/wiki/64th_Venice_International_Film_Festival "64th Venice International Film Festival"):
	- Golden Lion (Todd Haynes, nominee)
	- Special Jury Prize (Todd Haynes, **winner**) [^32]
	- Volpi Cup Best Actress (Cate Blanchett, **winner**) [^32] [^33]

The character of Jack Rollins depicts Dylan during his acoustic, "protest" phase which includes *[The Freewheelin' Bob Dylan](https://en.m.wikipedia.org/wiki/The_Freewheelin%27_Bob_Dylan "The Freewheelin' Bob Dylan")* and *[The Times They Are a-Changin'](https://en.m.wikipedia.org/wiki/The_Times_They_Are_a-Changin%27_\(Bob_Dylan_album\) "The Times They Are a-Changin' (Bob Dylan album)")*. Rollins's speech mentioning [Lee Harvey Oswald](https://en.m.wikipedia.org/wiki/Lee_Harvey_Oswald "Lee Harvey Oswald") quotes from a speech Dylan made when receiving the Tom Paine Award from the [National Emergency Civil Liberties Committee](https://en.m.wikipedia.org/wiki/National_Emergency_Civil_Liberties_Committee "National Emergency Civil Liberties Committee") in December 1963.[^34] Pastor John embodies Dylan's "born-again" period when he recorded *[Slow Train Coming](https://en.m.wikipedia.org/wiki/Slow_Train_Coming "Slow Train Coming")* and *[Saved](https://en.m.wikipedia.org/wiki/Saved_\(Bob_Dylan_album\) "Saved (Bob Dylan album)")*.

Jude Quinn "closely follows Dylan's mid-sixties adventures" and his "dangerous game propels him into existential breakdown." [^3] Quinn is an embodiment of Dylan in 1965–66, when he [controversially played electric guitar](https://en.m.wikipedia.org/wiki/Electric_Dylan_controversy "Electric Dylan controversy") at the [Newport Folk Festival](https://en.m.wikipedia.org/wiki/Newport_Folk_Festival "Newport Folk Festival"), toured the UK with a band and was booed.[^35] [^36] Quinn is seen at a folk festival performing a rock version of " [Maggie's Farm](https://en.m.wikipedia.org/wiki/Maggie%27s_Farm "Maggie's Farm") " to outraged folk music fans; Dylan performed this song at the Newport Folk Festival in 1965, which provoked booing and controversy.[^37] Some of the questions Quinn is asked at a London press conference are quotes from Dylan's KQED press conference in San Francisco in December 1965.[^38] [^39] The sped-up film speed in the scene of Quinn gambolling with The Beatles echoes the style of [Richard Lester](https://en.m.wikipedia.org/wiki/Richard_Lester "Richard Lester") 's depiction in *[A Hard Day's Night](https://en.m.wikipedia.org/wiki/A_Hard_Day%27s_Night_\(film\) "A Hard Day's Night (film)")*.[^40] Quinn's reply, "How can I answer that if you've got the nerve to ask me?", to Bruce Greenwood's character comes from a similar response Dylan made to a reporter from [*Time* magazine](https://en.m.wikipedia.org/wiki/Time_magazine "Time magazine") in *[Dont Look Back](https://en.m.wikipedia.org/wiki/Dont_Look_Back "Dont Look Back")*, Pennebaker's documentary about Dylan's 1965 English tour.[^41] The scene in which Jude is called "Judas" by an audience member is based on a May 17, 1966, concert in Manchester, captured on Dylan's album *[Live 1966](https://en.m.wikipedia.org/wiki/The_Bootleg_Series_Vol._4:_Bob_Dylan_Live_1966,_The_%22Royal_Albert_Hall%22_Concert "The Bootleg Series Vol. 4: Bob Dylan Live 1966, The \"Royal Albert Hall\" Concert")*. The Jude Quinn character's death reflects a serious motorcycle accident Dylan had in 1966.[^42]

The Woody character refers to Dylan's youthful obsession with folk singer [Woody Guthrie](https://en.m.wikipedia.org/wiki/Woody_Guthrie "Woody Guthrie").[^43] The slogan " [This machine kills fascists](https://en.m.wikipedia.org/wiki/This_machine_kills_fascists "This machine kills fascists") " on Woody's guitar case mimics a label Guthrie famously had on his guitar.[^44]

Billy the Kid refers to Dylan playing the role of Alias in [Sam Peckinpah](https://en.m.wikipedia.org/wiki/Sam_Peckinpah "Sam Peckinpah") 's 1973 western *[Pat Garrett and Billy the Kid](https://en.m.wikipedia.org/wiki/Pat_Garrett_and_Billy_the_Kid "Pat Garrett and Billy the Kid")*.[^45] [^46] Billy's final monologue in the film echoes remarks Dylan made in a 1997 interview with of *[Newsweek](https://en.m.wikipedia.org/wiki/Newsweek "Newsweek")*: "I don't think I'm tangible to myself. I mean, I think one thing today and I think another thing tomorrow. I change during the course of a day. I wake and I'm one person, and when I go to sleep I know for certain I'm somebody else. I don't know who I am most of the time. It doesn't even matter to me." [^47]

The character Robbie Clark is an actor who portrays Jack Rollins in a biographical film and becomes as famous as the person he portrays; he experiences the stresses of a disintegrating marriage, reflecting Dylan's personal life around the time of 1975's *[Blood on the Tracks](https://en.m.wikipedia.org/wiki/Blood_on_the_Tracks "Blood on the Tracks")*. The scene in which Robbie and Claire run romantically through the streets of New York re-enacts the cover of the 1963 album *[The Freewheelin' Bob Dylan](https://en.m.wikipedia.org/wiki/The_Freewheelin%27_Bob_Dylan "The Freewheelin' Bob Dylan")* which depicts Dylan arm in arm with his then-girlfriend [Suze Rotolo](https://en.m.wikipedia.org/wiki/Suze_Rotolo "Suze Rotolo") in [Greenwich Village](https://en.m.wikipedia.org/wiki/Greenwich_Village "Greenwich Village").[^48] [^49] Dylan was divorced from his first wife, [Sara Dylan](https://en.m.wikipedia.org/wiki/Sara_Dylan "Sara Dylan"), in June 1977 and the divorce involved court battles over the custody of their children.[^50] In his production notes, Haynes wrote that Robbie and Claire's relationship is "doomed to a long stubborn protraction (not unlike [Vietnam](https://en.m.wikipedia.org/wiki/Vietnam_War "Vietnam War"), which it parallels)." [^6] Claire Clark, the wife of Robbie Clark, is a representation of [Sara Dylan](https://en.m.wikipedia.org/wiki/Sara_Dylan "Sara Dylan") and [Suze Rotolo](https://en.m.wikipedia.org/wiki/Suze_Rotolo "Suze Rotolo").[^6] [^40]

Arthur Rimbaud is depicted as a man being questioned and responding with quotes from Dylan's interviews and writings. Dylan wrote in his autobiography *[Chronicles](https://en.m.wikipedia.org/wiki/Chronicles:_Volume_One "Chronicles: Volume One")* that he was influenced by Rimbaud's outlook.[^51]

Keenan Jones, the name of the fictional reporter who investigates Jude Quinn and Pat Garrett, echoes Dylan's song " [Ballad of a Thin Man](https://en.m.wikipedia.org/wiki/Ballad_of_a_Thin_Man "Ballad of a Thin Man") " with its chorus: "Something is happening here/ And you don't know what it is, do you Mr. Jones?" The character's revelation of Jude's past is based on a hostile profile of Dylan published in the October 1963 issue of *[Newsweek](https://en.m.wikipedia.org/wiki/Newsweek "Newsweek")*, revealing that he was originally named Robert Zimmerman and implying that he had lied about his middle-class origins.[^52]

The character Alice Fabian is a singer who resembles folk singer [Joan Baez](https://en.m.wikipedia.org/wiki/Joan_Baez "Joan Baez").[^6] [^27]

The description of Coco Rivington as "Andy's new bird" suggests this character is modelled on [Edie Sedgwick](https://en.m.wikipedia.org/wiki/Edie_Sedgwick "Edie Sedgwick"), a socialite and actress within [Andy Warhol](https://en.m.wikipedia.org/wiki/Andy_Warhol "Andy Warhol") 's circle.[^4] [^40]

Norman, the manager of Jude Quinn, is based on [Albert Grossman](https://en.m.wikipedia.org/wiki/Albert_Grossman "Albert Grossman"), Dylan's manager until 1970.[^4]

[Huey Newton](https://en.m.wikipedia.org/wiki/Huey_Newton "Huey Newton") depicts the real-life Black Panther leader. He and [Bobby Seale](https://en.m.wikipedia.org/wiki/Bobby_Seale "Bobby Seale"), another Black Panther leader, listened "obsessively" to Dylan's song "Ballad of a Thin Man" while putting together the first issue of the *Black Panther* newspaper in 1967.[^53]

- *[A Complete Unknown](https://en.m.wikipedia.org/wiki/A_Complete_Unknown "A Complete Unknown")*, a 2024 Dylan biopic directed by [James Mangold](https://en.m.wikipedia.org/wiki/James_Mangold "James Mangold")
- [List of characters played by multiple actors in the same film](https://en.m.wikipedia.org/wiki/List_of_characters_played_by_multiple_actors_in_the_same_film "List of characters played by multiple actors in the same film")

- ["Blanchett wins top Venice award"](http://news.bbc.co.uk/2/hi/entertainment/6985422.stm). *[BBC News Online](https://en.m.wikipedia.org/wiki/BBC_News "BBC News")*. September 8, 2007. Retrieved September 8, 2007.
- ["Coppa Volpi for best actors since 1935"](http://www.labiennale.org/en/cinema/history/volpi.html?back=true). La Biennale di Venezia. Retrieved March 25, 2014.
- [Dylan, Bob](https://en.m.wikipedia.org/wiki/Bob_Dylan "Bob Dylan") (2004). *[Chronicles: Volume One](https://en.m.wikipedia.org/wiki/Chronicles:_Volume_One "Chronicles: Volume One")*. Simon and Schuster. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-7432-2815-4](https://en.m.wikipedia.org/wiki/Special:BookSources/0-7432-2815-4 "Special:BookSources/0-7432-2815-4").
- Ebert, Roger (November 21, 2007). ["I'm Not There"](https://web.archive.org/web/20121013010736/http://rogerebert.suntimes.com/apps/pbcs.dll/article?AID=%2F20071120%2FREVIEWS%2F711200304). Rogerebert.com. Archived from [the original](http://rogerebert.suntimes.com/apps/pbcs.dll/article?AID=/20071120/REVIEWS/711200304) on October 13, 2012. Retrieved July 5, 2010.
- (October 6, 1997). ["Dylan Revisited"](https://web.archive.org/web/20110924011025/http://www.thedailybeast.com/newsweek/1997/10/05/dylan-revisited.html). *Newsweek*. Archived from [the original](http://www.thedailybeast.com/newsweek/1997/10/05/dylan-revisited.html) on September 24, 2011. Retrieved May 29, 2010.
- (November 7, 2007). ["'Full-on Rave' for Dylan Film"](http://www.newsweek.com/full-rave-dylan-film-96961). *[Newsweek](https://en.m.wikipedia.org/wiki/Newsweek "Newsweek")*. Retrieved March 27, 2014.
- Gibron, Bill (May 7, 2008). ["I'm Not There: Two-Disc Collector's Edition"](http://www.dvdtalk.com/reviews/33148/im-not-there-two-disc-collectors-edition/). DVD talk. Retrieved March 26, 2014.
- [Gilmore, Mikal](https://en.m.wikipedia.org/wiki/Mikal_Gilmore "Mikal Gilmore") (September 27, 2012). ["Bob Dylan Unleashed: A Wild Ride on His New LP and Striking Back at Critics"](https://www.rollingstone.com/music/music-news/bob-dylan-unleashed-189723/). *[Rolling Stone](https://en.m.wikipedia.org/wiki/Rolling_Stone "Rolling Stone")*. Retrieved March 27, 2014.
- (2006). [*The Bob Dylan Encyclopedia*](https://archive.org/details/bobdylanencyclop00gray). Continuum International. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-8264-6933-7](https://en.m.wikipedia.org/wiki/Special:BookSources/0-8264-6933-7 "Special:BookSources/0-8264-6933-7").
- Hardy, Dominique (August 29, 2006). ["Tournage du film I'm Not There: Chambly en vedette"](https://web.archive.org/web/20140413140911/http://www.hebdosregionaux.ca/monteregie/2006/08/29/chambly-en-vedette). *Journal de Chambly* (in French). Archived from [the original](http://www.hebdosregionaux.ca/monteregie/2006/08/29/chambly-en-vedette) on April 13, 2014. Retrieved April 9, 2014.
- Hedin, Benjamin, ed. (2004). *Studio A: The Bob Dylan Reader*. W.W.Norton & Co. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-393-32742-6](https://en.m.wikipedia.org/wiki/Special:BookSources/0-393-32742-6 "Special:BookSources/0-393-32742-6").
- [Heylin, Clinton](https://en.m.wikipedia.org/wiki/Clinton_Heylin "Clinton Heylin") (1996). *Bob Dylan: A Life In Stolen Moments*. Book Sales. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-7119-5669-3](https://en.m.wikipedia.org/wiki/Special:BookSources/0-7119-5669-3 "Special:BookSources/0-7119-5669-3").
- Heylin, Clinton (2003). *Bob Dylan: Behind the Shades Revisited*. Perennial Currents. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-06-052569-X](https://en.m.wikipedia.org/wiki/Special:BookSources/0-06-052569-X "Special:BookSources/0-06-052569-X").
- Hoberman, J. (November 13, 2007). ["Like a Complete Unknown: I'm Not There and the Changing Face of Bob Dylan on Film"](https://web.archive.org/web/20140324001538/http://www.villagevoice.com/2007-11-13/film/like-a-complete-unknown-i-m-not-there-and-the-changing-face-of-bob-dylan-on-film/full/). *[The Village Voice](https://en.m.wikipedia.org/wiki/The_Village_Voice "The Village Voice")*. Archived from [the original](http://www.villagevoice.com/2007-11-13/film/like-a-complete-unknown-i-m-not-there-and-the-changing-face-of-bob-dylan-on-film/full/) on March 24, 2014. Retrieved March 23, 2014.
- Lee, C.P. (2000). [*Like a Bullet of Light: The Films of Bob Dylan*](https://archive.org/details/likebulletofligh00cple). Helter Skelter. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [1-900924-06-4](https://en.m.wikipedia.org/wiki/Special:BookSources/1-900924-06-4 "Special:BookSources/1-900924-06-4").
- Male, Andrew (December 6, 2007). ["Dylan Director Comes Clean"](https://web.archive.org/web/20071231020918/http://www.mojo4music.com/blog/2007/12/dylan_director_comes_clean.html). *[Mojo](https://en.m.wikipedia.org/wiki/Mojo_\(magazine\) "Mojo (magazine)")*. Archived from [the original](http://www.mojo4music.com/blog/2007/12/dylan_director_comes_clean.html) on December 31, 2007. Retrieved March 26, 2014.
- [McCarthy, Todd](https://en.m.wikipedia.org/wiki/Todd_McCarthy "Todd McCarthy") (September 4, 2007). ["Review: *I'm Not There* "](https://variety.com/2007/film/reviews/i-m-not-there-3-1200556650/). *[Variety](https://en.m.wikipedia.org/wiki/Variety_\(magazine\) "Variety (magazine)")*. Retrieved March 14, 2014.
- ["Metacritic: 2007 Film Critic Top Ten Lists"](https://web.archive.org/web/20080102102034/http://www.metacritic.com/film/awards/2007/toptens.shtml). *[Metacritic](https://en.m.wikipedia.org/wiki/Metacritic "Metacritic")*. Archived from [the original](https://www.metacritic.com/film/awards/2007/toptens.shtml) on January 2, 2008. Retrieved January 5, 2008.
- ["Oscar Legacy: The 80th Academy Awards (2008) Nominees and Winners"](https://web.archive.org/web/20141006093930/http://www.oscars.org/awards/academyawards/legacy/ceremony/80th-winners.html). The Academy of Motion Picture Arts and Sciences. Archived from [the original](https://www.oscars.org/awards/academyawards/legacy/ceremony/80th-winners.html) on October 6, 2014. Retrieved April 10, 2014.
- [Pennebaker, D.A.](https://en.m.wikipedia.org/wiki/D._A._Pennebaker "D. A. Pennebaker") (2006). *Dont Look Back*. New Video Group Inc. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-7670-9157-4](https://en.m.wikipedia.org/wiki/Special:BookSources/0-7670-9157-4 "Special:BookSources/0-7670-9157-4").
- [Shelton, Robert](https://en.m.wikipedia.org/wiki/Robert_Shelton_\(critic\) "Robert Shelton (critic)") (1986). *No Direction Home: The Life and Music of Bob Dylan* (2003 ed.). Da Copa Press. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-306-81287-8](https://en.m.wikipedia.org/wiki/Special:BookSources/0-306-81287-8 "Special:BookSources/0-306-81287-8").
- Sullivan, Robert (October 7, 2007). ["This Is Not a Bob Dylan Movie"](https://www.nytimes.com/2007/10/07/magazine/07Haynes.html). *[The New York Times](https://en.m.wikipedia.org/wiki/The_New_York_Times "The New York Times")*. Retrieved March 29, 2014.
- Unterberger, Richie (February 26, 2007). ["Interview with Joe Boyd"](http://www.richieunterberger.com/boydfolk.html). *Richieunterberger.com*. Retrieved April 10, 2014.
- The Weinstein Company (September 1, 2007). ["I'm Not There: Production Notes"](https://web.archive.org/web/20131208155429/http://twcpublicity.com/movie.php?id=70#production). twcpublicity.com. Archived from [the original](http://www.twcpublicity.com/movie.php?id=70#production) on December 8, 2013. Retrieved March 28, 2014.
- [Travers, Peter](https://en.m.wikipedia.org/wiki/Peter_Travers "Peter Travers") (December 19, 2007). ["Peter Travers' Best and Worst Movies of 2007: 9. I'm Not There"](https://web.archive.org/web/20071223160550/http://www.rollingstone.com/news/story/17686508/peter_travers_best_and_worst_movies_of_2007/9). *Rolling Stone*. Archived from [the original](https://www.rollingstone.com/news/story/17686508/peter_travers_best_and_worst_movies_of_2007/9) on December 23, 2007. Retrieved March 26, 2014.

- [Scott, A. O.](https://en.m.wikipedia.org/wiki/A._O._Scott "A. O. Scott") (November 21, 2007). ["Another Side of Bob Dylan, and Another, and Another..."](https://www.nytimes.com/2007/11/21/movies/21ther.html) *[The New York Times](https://en.m.wikipedia.org/wiki/The_New_York_Times "The New York Times")*. Retrieved March 29, 2014.
- Wilkins, Kim (February 2017). [""I don't know who I am most of the time": Constructed Identity in Todd Haynes' I'm Not There"](https://quod.lib.umich.edu/f/fc/13761232.0041.103?view=text;rgn=main). *Film Criticism*. **41** (1). [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.3998/fc.13761232.0041.103](https://doi.org/10.3998%2Ffc.13761232.0041.103). [hdl](https://en.m.wikipedia.org/wiki/Hdl_\(identifier\) "Hdl (identifier)"):[10852/76345](https://hdl.handle.net/10852%2F76345).

- [*I'm Not There*](https://www.imdb.com/title/tt0368794/) at [IMDb](https://en.m.wikipedia.org/wiki/IMDb_\(identifier\) "IMDb (identifier)")
- ["This Is Not a Bob Dylan Movie"](https://www.nytimes.com/2007/10/07/magazine/07Haynes.html) (*[The New York Times](https://en.m.wikipedia.org/wiki/The_New_York_Times "The New York Times")*)

[^1]: ["I'm Not There"](https://archive.today/20160804214941/http://bbfc.co.uk/releases/im-not-there-film). [British Board of Film Classification](https://en.m.wikipedia.org/wiki/British_Board_of_Film_Classification "British Board of Film Classification"). Archived from [the original](http://bbfc.co.uk/releases/im-not-there-film) on August 4, 2016. Retrieved October 31, 2015.

[^2]: ["I'm Not There"](http://www.boxofficemojo.com/movies/?id=imnotthere.htm). *[Box Office Mojo](https://en.m.wikipedia.org/wiki/Box_Office_Mojo "Box Office Mojo")*. Retrieved October 31, 2015.

[^3]: [The Weinstein Company 2007](https://en.m.wikipedia.org/wiki/#CITEREFThe_Weinstein_Company2007)

[^4]: Audio commentary by Todd Haynes, *I'm Not There* DVD, Two-Disc Collector's Edition, 2007, VIP Medienfonds 4 Gmbh & Co. Distributed by Genius Products, LLC.

[^5]: [McCarthy 2007](https://en.m.wikipedia.org/wiki/#CITEREFMcCarthy2007)

[^6]: [Sullivan 2007](https://en.m.wikipedia.org/wiki/#CITEREFSullivan2007)

[^7]: Calhoun, Dave. ["Todd Haynes on Bob Dylan"](https://web.archive.org/web/20151222115145/http://www.timeout.com/london/film/todd-haynes-on-bob-dylan-1). *[Time Out](https://en.m.wikipedia.org/wiki/Time_Out_\(magazine\) "Time Out (magazine)")*. Archived from [the original](http://www.timeout.com/london/film/todd-haynes-on-bob-dylan-1) on December 22, 2015. Retrieved December 11, 2015.

[^8]: ["Haynes in Weinstein Company press notes for "I'm Not There", quoted in *Footnote fetishism & "I'm Not There"* by Jim Emerson"](https://web.archive.org/web/20080720043705/http://blogs.suntimes.com/scanners/2007/10/how_does_it_feel_footnote_feti.html). Jim Emerson's scanners::blog. October 10, 2007. Archived from [the original](http://blogs.suntimes.com/scanners/2007/10/how_does_it_feel_footnote_feti.html) on July 20, 2008.

[^9]: [Male 2007](https://en.m.wikipedia.org/wiki/#CITEREFMale2007)

[^10]: Tartaglione, Nancy (May 31, 2005). ["Sony Classics grabs Palme winner, targets Dylan biopic"](https://www.screendaily.com/sony-classics-grabs-palme-winner-targets-dylan-biopic/4023321.article). *[Screen Daily](https://en.m.wikipedia.org/wiki/Screen_Daily "Screen Daily")*. Retrieved March 4, 2025.

[^11]: ["In brief: Farrell replaced on Dylan project"](https://www.theguardian.com/film/2006/may/05/news2). *[The Guardian](https://en.m.wikipedia.org/wiki/The_Guardian "The Guardian")*. May 5, 2006. Retrieved March 4, 2025.

[^12]: Gross, Larry. ["The Lives of Others: I'm Not There"](http://www.filmcomment.com/article/the-lives-of-others-im-not-there/). *Film Comment*. Retrieved March 30, 2016.

[^13]: [Hardy 2006](https://en.m.wikipedia.org/wiki/#CITEREFHardy2006)

[^14]: ["The Weinstein Company Acquires Bob Dylan Biopic 'I'm Not There'"](https://movieweb.com/the-weinstein-company-acquires-bob-dylan-biopic-im-not-there/). *Movieweb.com*. January 3, 2007. Retrieved April 13, 2016.

[^15]: [McCarthy 2007](https://en.m.wikipedia.org/wiki/#CITEREFMcCarthy2007).

[^16]: Germain, David. ["Looking Back"](https://web.archive.org/web/20150819093040/http://canada.aol.com/torontofilmfestival/celebrity/article.adp?article=tiff_bobdylanclones). *[AOL.com](https://en.m.wikipedia.org/wiki/AOL.com "AOL.com")*. Archived from [the original](http://canada.aol.com/torontofilmfestival/celebrity/article.adp?article=tiff_bobdylanclones) on August 19, 2015. Retrieved April 13, 2016.

[^17]: Huddelston, Tom (October 7, 2007). ["The Times BFI 51st London Film Festival"](http://www.notcoming.com/features/lff_07/). *NotComing.com*. Retrieved April 12, 2016.

[^18]: Murphy, Mekado (October 9, 2015). ["Five Questions for Todd Haynes"](https://www.nytimes.com/2015/10/10/movies/new-york-film-festival-five-questions-for-todd-haynes.html). *[The New York Times](https://en.m.wikipedia.org/wiki/The_New_York_Times "The New York Times")*. Retrieved April 13, 2016.

[^19]: Gleiberman, Owen (November 21, 2007). ["I'm Not There"](http://www.ew.com/article/2007/11/21/im-not-there). *[Entertainment Weekly](https://en.m.wikipedia.org/wiki/Entertainment_Weekly "Entertainment Weekly")*. Retrieved April 12, 2016.

[^20]: ["I'm Not There"](http://www.tobis.de/film/im-not-there). *[Tobis Film](https://en.m.wikipedia.org/wiki/Tobis_Film "Tobis Film")*. Retrieved April 13, 2016.

[^21]: [Gibron 2008](https://en.m.wikipedia.org/wiki/#CITEREFGibron2008)

[^22]: ["I'm Not There Movie Reviews, Pictures – Rotten Tomatoes"](http://www.rottentomatoes.com/m/im_not_there_suppositions_on_a_film_concerning_dylan/). *[Rotten Tomatoes](https://en.m.wikipedia.org/wiki/Rotten_Tomatoes "Rotten Tomatoes")*. November 21, 2007. Retrieved March 28, 2025.

[^23]: ["I'm Not There: Reviews"](https://www.metacritic.com/movie/im-not-there). *[Metacritic](https://en.m.wikipedia.org/wiki/Metacritic "Metacritic")*. Retrieved October 31, 2015.

[^24]: DeCurtis, Anthony (November 23, 2007). "6 Characters in Search of an Artist". *The Chronicle of Higher Education*: 15.

[^25]: [Gates 2007](https://en.m.wikipedia.org/wiki/#CITEREFGates2007)

[^26]: Lawrence, Toppman (November 23, 2007). ["Everybody's 'There' except Bob D."](http://ae.charlotte.com/entertainment/ui/charlotte/movie.html?id=987014) *The Charlotte Observer*.

[^27]: [Ebert 2007](https://en.m.wikipedia.org/wiki/#CITEREFEbert2007)

[^28]: [Gilmore 2012](https://en.m.wikipedia.org/wiki/#CITEREFGilmore2012)

[^29]: [Metacritic: 2007 Film Critic Top Ten Lists](https://en.m.wikipedia.org/wiki/#CITEREFMetacritic:_2007_Film_Critic_Top_Ten_Lists)

[^30]: [Travers 2007](https://en.m.wikipedia.org/wiki/#CITEREFTravers2007)

[^31]: [Oscar Legacy: The 80th Academy Awards (2008) Nominees and Winners](https://en.m.wikipedia.org/wiki/#CITEREFOscar_Legacy:_The_80th_Academy_Awards_\(2008\)_Nominees_and_Winners)

[^32]: [Blanchett wins top Venice award](https://en.m.wikipedia.org/wiki/#CITEREFBlanchett_wins_top_Venice_award)

[^33]: [Coppa Volpi for best actors since 1935](https://en.m.wikipedia.org/wiki/#CITEREFCoppa_Volpi_for_best_actors_since_1935)

[^34]: Part of Dylan's speech: "There's no black and white, left and right to me any more; there's only up and down and down is very close to the ground. And I'm trying to go up without thinking of anything trivial such as politics." ([Shelton 1986](https://en.m.wikipedia.org/wiki/#CITEREFShelton1986), pp. 200–205)

[^35]: [Shelton 1986](https://en.m.wikipedia.org/wiki/#CITEREFShelton1986), pp. 301–304

[^36]: [Lee 2000](https://en.m.wikipedia.org/wiki/#CITEREFLee2000), pp. 40–60

[^37]: [Unterberger 2007](https://en.m.wikipedia.org/wiki/#CITEREFUnterberger2007)

[^38]: [Heylin 1996](https://en.m.wikipedia.org/wiki/#CITEREFHeylin1996), p. 87

[^39]: Dylan's 1965 press conference reproduced in: [Hedin 2004](https://en.m.wikipedia.org/wiki/#CITEREFHedin2004), pp. 51–58

[^40]: [Hoberman 2007](https://en.m.wikipedia.org/wiki/#CITEREFHoberman2007)

[^41]: [Pennebaker 2006](https://en.m.wikipedia.org/wiki/#CITEREFPennebaker2006), p. 128

[^42]: [Heylin 2003](https://en.m.wikipedia.org/wiki/#CITEREFHeylin2003), pp. 266–267

[^43]: [Dylan 2004](https://en.m.wikipedia.org/wiki/#CITEREFDylan2004), pp. 243–246

[^44]: [Gray 2006](https://en.m.wikipedia.org/wiki/#CITEREFGray2006), pp. 287–289

[^45]: ["Full Cast and Crew, *Pat Garrett and Billy the Kid* "](https://www.imdb.com/title/tt0070518/fullcredits). IMDb.com. April 10, 1987. Retrieved September 20, 2016.

[^46]: C. P. Lee wrote: "In Garrett's ghost-written memoir, *[The Authentic Life of Billy, the Kid](https://en.m.wikipedia.org/wiki/The_Authentic_Life_of_Billy,_the_Kid "The Authentic Life of Billy, the Kid")*, published within a year of Billy's death, he wrote that 'Billy's partner doubtless had a name which was his legal property, but he was so given to changing it that it is impossible to fix on the right one. Billy always called him Alias.' " ([Lee 2000](https://en.m.wikipedia.org/wiki/#CITEREFLee2000), pp. 66–67)

[^47]: [Gates 1997](https://en.m.wikipedia.org/wiki/#CITEREFGates1997))

[^48]: Mitchell, Elizabeth (August 27, 2016). [" *The Freewheelin' Bob Dylan* cover immortalizes a budding Greenwich Village love story"](http://www.nydailynews.com/entertainment/bob-dylan-freewheelin-romance-greenwich-village-article-1.2764268). *New York Daily News*. Retrieved August 28, 2016.

[^49]: ["NYC Album Art: The Freewheelin' Bob Dylan"](https://web.archive.org/web/20100328132009/http://gothamist.com/2006/04/18/nyc_album_art_t.php). Gothamist. April 18, 2006. Archived from [the original](http://gothamist.com/2006/04/18/nyc_album_art_t.php) on March 28, 2010. Retrieved March 1, 2009.

[^50]: [Gray 2006](https://en.m.wikipedia.org/wiki/#CITEREFGray2006), pp. 198–200

[^51]: [Dylan 2004](https://en.m.wikipedia.org/wiki/#CITEREFDylan2004), p. 146

[^52]: [Heylin 2003](https://en.m.wikipedia.org/wiki/#CITEREFHeylin2003), pp. 129–130

[^53]: "One of those photos that gets called iconic shows a bare-torsoed Newton clutching his copy of *[Highway 61 Revisited](https://en.m.wikipedia.org/wiki/Highway_61_Revisited "Highway 61 Revisited")*." [Bell, Ian](https://en.m.wikipedia.org/wiki/Ian_Bell_\(journalist\) "Ian Bell (journalist)"), *Once Upon A Time: The Lives of Bob Dylan*. 2012, p. 517.