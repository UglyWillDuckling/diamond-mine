---
type: series
title: Cosmos - A Personal Voyage
year: "1980"
url: https://www.imdb.com/title/tt0081846/
image: https://m.media-amazon.com/images/M/MV5BOTA5MWFhMzAtOWU1OS00Yjk4LTlkNGItNGI3N2VkNzcyNGU2XkEyXkFqcGc@._V1_SX600.jpg
genres:
  - "[[Documentary]]"
writer:
  - "[[Ann Druyan]]"
  - "[[Carl Sagan]]"
  - Steven Soter
actors:
  - Carl Sagan
  - Jaromír Hanzlík
  - Jonathan Fahn
released: true
country:
  - United States
  - United Kingdom
airedFrom: 09/28/1980
watched: true
personalRating: 10
lastWatched: ""
tags:
  - tv-series
status: Watching
---

`$= '![Image|200](' + dv.current().image + ')'`

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


___

### Cosmos: A Personal Voyage

> History, Science, Technology Documentary hosted by Carl Sagan, published by PBS in 1980 - English narration

Information
------------------------------

When Cosmos was first broadcast in 1980, our world--and the context of [[Carl Sagan]]'s eloquent "personal journey"-- was a different place. The late Dr. Sagan would be pleased to witness the cooling of the cold war, the continued exploration of space, and ongoing efforts to curb our destructive dependence on fossil fuels. For Sagan's series is far more than a guided tour through "billions and billions" of stars and galaxies. It remains a profound plea for the unity of humankind, for the recognition that "we are a way for the universe to know itself," with an obligation to know our origin, our place in the universe, and our future potential. 
In the course of 13 fascinating hours, Cosmos spans its own galaxy of topics to serve Sagan's theme, each segment deepening our understanding of how we got from there (simple microbes in the primordial mud) to here (space-faring civilization in the 21st century). In his "ship of the imagination," Sagan guides us to the farthest reaches of space and takes us back into the history of scientific inquiry, from the ancient library of Alexandria to the NASA probes of our neighboring planets. Upon this vast canvas Sagan presents the "cosmic calendar," placing the 15-billion-year history of the universe into an accessible one-year framework, then filling it with a stunning chronology of events, both interstellar and earthbound. From the lives of the stars, to creation theories, functions of the human brain, and the ongoing search for extraterrestrial intelligence, Cosmos asks big questions. When appropriate, Sagan offers big answers, or asks still bigger--and yes, even spiritual--questions at the boundaries of science and religion. 
What's most remarkable about Cosmos is that it remains almost entirely fresh, with few updates needed to the science that Sagan so passionately celebrates. It is no exaggeration to say that Cosmos--for all the debate it may continue to provoke--is a vital document for humanity at a pivotal crossroads of our history.


1)  The Shores of the Cosmic Ocean 
Carl Sagan opens the program with a description of the cosmos and a "Spaceship of the Imagination" (shaped like a dandelion seed). The ship journeys through the universe's hundred billion galaxies, the Local Group, the Andromeda Galaxy, the Milky Way, the Orion Nebula, our Solar System, and finally the planet Earth. Eratosthenes' successful calculation of the circumference of Earth leads to a description of the ancient Library of Alexandria. Finally, the "Ages of Science" are described, before pulling back to the full span of the Cosmic Calendar. Note: This revised version of the series adds an introduction by Ann Druyan, in which she discusses some of the changes that occurred in the years after its broadcast.

2)  One Voice in the Cosmic Fugue 
Sagan discusses the story of the Heike crab and artificial selection of crabs resembling samurai warriors, as an opening into a larger discussion of evolution through natural selection (and the pitfalls of intelligent design). Among the topics are the development of life on the Cosmic Calendar and the Cambrian explosion; the function of DNA in growth; genetic replication, repairs, and mutation; the common biochemistry of terrestrial organisms; the creation of the molecules of life in the Miller-Urey experiment; and speculation on alien life (such as life in Jupiter's clouds). In the Cosmos Update ten years later, Sagan remarks on RNA also controlling chemical reactions and reproducing itself and the different roles of comets (potentially carrying organic molecules or causing the Cretaceous-Paleogene extinction event).

3)  Harmony of the Worlds 
Beginning with the separation of the fuzzy thinking and pious fraud of astrology from the careful observations of astronomy, Sagan follows the development of astronomical observation. Beginning with constellations and ceremonial calendars (such as those of the Anasazi), the story moves to the debate between Earth and Sun-centered models: Ptolemy and the geocentric worldview, Copernicus' theory, the data-gathering of Tycho Brahe, and the achievements of Johannes Kepler (Kepler's laws of planetary motion and the first science-fiction novel).

4)  Heaven and Hell 
Sagan discusses comets and asteroids as planetary impactors, giving recent examples of the Tunguska event and a lunar impact described by Canterbury monks in 1178. It moves to a description of the environment of Venus, from the previous fantastic theories of people such as Immanuel Velikovsky to the information gained by the Venera landers and its implications for Earth's greenhouse effect. The Cosmos Update highlights the connection to global warming.

5)  Blues for a Red Planet 
The episode, devoted to the planet Mars, begins with scientific and fictional speculation about the Red Planet during the late nineteenth and early twentieth centuries (H. G. Wells' The War of the Worlds, Edgar Rice Burroughs' science fiction books, and Percival Lowell's false vision of canals on Mars). It then moves to Robert Goddard's early experiments in rocket-building, inspired by reading science fiction, and the work by Mars probes, including the Viking, searching for life on Mars. The episode ends with the possibility of the terraforming and colonization of Mars and a Cosmos Update on the relevance of Mars' environment to Earth's and the possibility of a manned mission to Mars.

6)  Travellers Tales 
The journeys of the Voyager probes is put in the context of the Netherlands in the seventeenth century, with a centuries-long tradition of sailing ship explorers, and its contemporary thinkers (such as Constantijn Huygens and his son Christian). Their discoveries are compared to the Voyager probes' discoveries among the Jovian and Saturn systems. In Cosmos Update, image processing reconstructs Voyager's worlds and Voyager's last portrait of the Solar System as it leaves is shown.

7)  The Backbone of Night 
Carl Sagan teaches students in a classroom in his childhood home in Brooklyn, New York, which leads into a history of the different mythologies about stars and the gradual revelation of their true nature. In ancient Greece, some philosophers (Aristarchus of Samos, Thales of Miletus, Anaximander, Theodorus of Samos, Empedocles, Democritus) freely pursue scientific knowledge, while others (Plato, Aristotle, and the Pythagoreans) advocate slavery and epistemic secrecy.

8)  Journeys in Space and Time 
Ideas about time and space are explored in the changes that constellations undergo over time, the redshift and blue shift measured in interstellar objects, time dilation in Albert Einstein's theory of relativity, the designs of both Leonardo da Vinci and spacecraft that could travel near light speed, time travel and its hypothetical effects on human history, the origins of the Solar System, the history of life, and the immensity of space. In Cosmos Update, the idea of faster-than-light travel by wormholes (researched by Kip Thorne and shown in Sagan's novel Contact) is discussed.

9)  The Lives of the Stars 
The simple act of making an apple pie is extrapolated into the atoms and subatomic particles (electrons, protons, and neutrons) necessary. Many of the ingredients necessary are formed of chemical elements formed in the life and deaths of stars (such as our own Sun), resulting in massive red giants and supernovae or collapsing into white dwarfs, neutron stars, pulsars, and even black holes. These produce all sorts of phenomena, such as radioactivity, cosmic rays, and even the curving of spacetime by gravity. Cosmos Update mentions the supernova SN 1987A and neutrino astronomy.

10)  The Edge of Forever 
Beginning with the origins of the universe in the Big Bang, Sagan describes the formation of different types of galaxies and anomalies such as galactic collisions and quasars. The episodes moves further into ideas about the structure of the Universe, such as different dimensions (in the imaginary Flatland and four-dimensional hypercubes), an infinite vs. a finite universe, and the idea of an oscillating Universe (similar to that in Hindu cosmology). The search into other ideas such as dark matter and the multiverse is shown, using tools such as the Very Large Array in New Mexico. Cosmos Update shows new information about the odd, irregular surfaces of galaxies and the Milky Way perhaps being a barred spiral galaxy.

11)  The Persistence of Memory 
The idea of intelligence is explored in the concepts of computers (using bits as their basic units of information), whales (in their songs and their disruptions by human activities), DNA, the human brain (the evolution of the brain stem, frontal lobes, neurons, cerebral hemispheres, and corpus callosum under the Triune Brain Model), and man-made structures for collective intelligence (cities, libraries, books, computers, and satellites). The episode ends with speculation on alien intelligence and the information conveyed on the Voyager Golden Record.

12)  Encyclopaedia Galactica 
Questions are raised about the search for intelligent life beyond the Earth, with UFOs and other close encounters refuted in favor of communications through SETI and radio telescope such as the Arecibo Observatory. The probability of technically advanced civilizations existing elsewhere in the Milky Way is interpreted using the Drake equation and a future hypothetical Encyclopedia Galactica is discussed as a repository of information about other worlds in the galaxy. The Cosmos Update notes that there have been fewer sightings of UFOs and more stories of abductions, while mentioning the META scanning the skies for signals.

13)  Who Speaks for Earth 
Sagan reflects on the future of humanity and the question of "who speaks for Earth?" when meeting extraterrestrials. He discusses the very different meetings of the Tlingit people and explorer Jean-François de La Pérouse with the destruction of the Aztecs by Spanish conquistadors, the looming threat of nuclear warfare, and the threats shown by destruction of the Library of Alexandria and the murder of Hypatia. The episode ends with an overview of the beginning of the universe, the evolution of life, and the accomplishments of humanity and makes a plea to mankind to cherish life and continue its journey in the cosmos. The Cosmos Update notes the preliminary reconnaissance of planets with spacecraft, the fall of the Berlin Wall and the end of apartheid in South Africa, and measures towards the reduction of nuclear weapons.