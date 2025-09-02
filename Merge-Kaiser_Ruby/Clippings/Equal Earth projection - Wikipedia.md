---
source: "https://en.m.wikipedia.org/wiki/Equal_Earth_projection"
published: 2018-08-24
created: 2025-08-15
tags:
---
- [Article](https://en.m.wikipedia.org/wiki/Equal_Earth_projection)
- [Talk](https://en.m.wikipedia.org/wiki/Talk:Equal_Earth_projection)

The **Equal Earth map projection** is an [equal-area](https://en.m.wikipedia.org/wiki/Equal-area_projection "Equal-area projection") [pseudocylindrical](https://en.m.wikipedia.org/wiki/Pseudocylindrical "Pseudocylindrical") global [map projection](https://en.m.wikipedia.org/wiki/Map_projection "Map projection"), invented by Bojan Šavrič, Bernhard Jenny, and [Tom Patterson](https://en.m.wikipedia.org/w/index.php?title=Tom_Patterson_\(cartographer\)&action=edit&redlink=1 "Tom Patterson (cartographer) (page does not exist)") in 2018. It is inspired by the widely used [Robinson projection](https://en.m.wikipedia.org/wiki/Robinson_projection "Robinson projection"), but unlike the Robinson projection, retains the relative size of areas. The projection equations are simple to implement and fast to evaluate.[^1]

![[~/×/c0e95208f5089b1092218fef5f9d6310_MD5.jpg]]

Equal Earth projection. 15° graticule. Imagery is a derivative of NASA’s Blue Marble summer month composite with oceans lightened to enhance legibility and contrast. Image created with the Geocart map projection software.

The features of the Equal Earth projection include:[^2] [^3]

- The curved sides of the projection suggest the spherical form of Earth.
- Straight parallels make it easy to compare how far north or south places are from the equator.
- Meridians are evenly spaced along any line of latitude.
- Software for implementing the projection is easy to write and executes efficiently.

According to the creators, the projection was created in response to the decision of the Boston public schools to adopt the [Gall-Peters projection](https://en.m.wikipedia.org/wiki/Gall-Peters_projection "Gall-Peters projection") for world maps in March 2017, to accurately show the relative sizes of equatorial and non-equatorial regions. The decision generated controversy in the world of cartography due to this projection’s extreme distortion in the polar regions. At that time Šavrič, Jenny, and Patterson sought alternative map projections of equal areas for world maps, but could not find any that met their aesthetic criteria. Therefore, they created a new projection that had more visual appeal compared to existing projections of equal areas.[^3] [^4] [^5] [^6]

As with the earlier [Natural Earth projection](https://en.m.wikipedia.org/wiki/Natural_Earth_projection "Natural Earth projection") (2012) introduced by Patterson, a visual method was used to choose the parameters of the projection. A combination of Putniņš P4ʹ and [Eckert IV projections](https://en.m.wikipedia.org/wiki/Eckert_IV_projection "Eckert IV projection") was used as the basis.[^1] Mathematical formulae for the projection were derived from a polynomial used to define the spacing of parallels.

![[~/×/c193685b6cdd1985fb7882da74ae9939_MD5.png]]

Equal Earth projection distortion, using the Tissot indicatrix at 10° intervals.

The projection is formulated as the equations

$ {\\displaystyle {\\begin{aligned}x&={\\frac {2{\\sqrt {3}}\\,\\lambda \\cos {\\theta }}{3\\,(9\\,A\_{4}\\,\\theta ^{8}+7\\,A\_{3}\\,\\theta ^{6}+3\\,A\_{2}\\,\\theta ^{2}+A\_{1})}}\\\\y&=A\_{4}\\,\\theta ^{9}+A\_{3}\\,\\theta ^{7}+A\_{2}\\,\\theta ^{3}+A\_{1}\\,\\theta \\end{aligned}}} $

where

$ {\\displaystyle {\\begin{aligned}&\\sin {\\theta }={\\frac {\\sqrt {3}}{2}}\\sin {\\varphi }\\\\&A\_{1}=1.340264,\\ A\_{2}=-0.081106,\\ A\_{3}=0.000893,\\ A\_{4}=0.003796\\end{aligned}}} $

and $ \\varphi $ refers to latitude and $ \\lambda $ to longitude.

![[~/×/51cfb3b8e514b6e93d90ea48e9506cb7_MD5.png]]

The Equal Earth compared to similar equal-area pseudocylindrical projections.

The first known thematic map published using the Equal Earth projection is a map of the global mean temperature anomaly for July 2018, produced by the NASA’s [Goddard Institute for Space Studies](https://en.m.wikipedia.org/wiki/Goddard_Institute_for_Space_Studies "Goddard Institute for Space Studies").[^7]

- [Official website](https://equal-earth.com/)

[^1]: Šavrič, Bojan; Patterson, Tom; Jenny, Bernhard (2018-08-07). ["The Equal Earth map projection"](https://www.researchgate.net/publication/326879978). *[International Journal of Geographical Information Science](https://en.m.wikipedia.org/wiki/International_Journal_of_Geographical_Information_Science "International Journal of Geographical Information Science")*. **33** (3): 454– 465. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1080/13658816.2018.1504949](https://doi.org/10.1080%2F13658816.2018.1504949).

[^2]: ["Equal Earth projection"](http://shadedrelief.com/ee_proj/). *shadedrelief.com*. Retrieved 2018-08-23.

[^3]: Morales, Aurelio. ["La nueva proyección Equal Earth: todo lo que debes saber"](https://mappinggis.com/2018/09/la-nueva-proyeccion-equal-earth-todo-lo-que-debes-saber/) (in Spanish). Valladolid: MappingGIS. Retrieved January 24, 2020.

[^4]: ["Equal Earth: un mapamundi más preciso que muestra el tamaño real de África"](https://web.archive.org/web/20200124193934/https://nmas1.org/news/2018/08/22/mapa-equal-earth-ciencia) (in Spanish). N+1. August 22, 2018. Archived from the original on January 24, 2020. Retrieved January 24, 2020.

[^5]: ["Equal Earth: Idean un nuevo mapa del mundo basado en un mapa del 1569"](https://codigooculto.com/2018/08/equal-earth-idean-un-nuevo-mapa-del-mundo-basado-en-un-mapa-del-1569/) (in Spanish). Código Oculto. Retrieved January 24, 2020.

[^6]: ["Colección cartográfica - La proyección Equal-Earth"](https://visionscarto.net/la-proyeccion-equal-earth). *visionscarto* (in Spanish). Retrieved January 24, 2020.

[^7]: ["NASA GISS on Twitter"](https://twitter.com/NASAGISS/status/1029769823167963136). *Twitter*. Retrieved 2018-08-23.