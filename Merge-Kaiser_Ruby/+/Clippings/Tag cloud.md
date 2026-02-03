---
source: https://en.wikipedia.org/wiki/Tag_cloud
author: 
published: 
created: 2025-04-08
tags:
  - concept
---
![[~/×/e7e3d40d0b81b4ce7a0465b8c2c74503_MD5.png]]

Tag cloud of a mailing list [^1]

![[~/×/7afc805ae26532e7aee4e9c49f82d0d6_MD5.png]]

A tag cloud with terms related to [Web 2.0](https://en.wikipedia.org/wiki/Web_2.0 "Web 2.0")

A **tag cloud** (also known as a **word cloud** or **weighted list** in visual design) is a visual representation of text data which is often used to depict [keyword metadata](https://en.wikipedia.org/wiki/Tag_\(metadata\) "Tag (metadata)") on websites, or to visualize free form text. Tags are usually single words, and the importance of each tag is shown with font size or color.[^2] [^3] When used as website navigation aids, the terms are hyperlinked to items associated with the tag.

## History

![[~/×/9f9728d4cc77eb66939de59b1e893307_MD5.jpg]]

Heidi Paris: initial cover draft for the German edition of "A Thousand Plateaus" by Gilles Deleuze and Fèlix Guattari, dated Nov 14 1991

In the language of visual design, a tag cloud (or word cloud) is one kind of "weighted list", as commonly used on geographic maps to represent the relative size of cities in terms of relative typeface size. An early printed example of a weighted list of English keywords was the "subconscious files" in [Douglas Coupland](https://en.wikipedia.org/wiki/Douglas_Coupland "Douglas Coupland") 's *[Microserfs](https://en.wikipedia.org/wiki/Microserfs "Microserfs")* (1995). A German appearance occurred in 1992.[^4]

The specific visual form and common use of the term "tag cloud" rose to prominence in the first decade of the 21st century as a widespread feature of early [Web 2.0](https://en.wikipedia.org/wiki/Web_2.0 "Web 2.0") websites and blogs, used primarily to visualize the frequency distribution of keyword metadata that describe website content, and as a navigation aid.

The first tag clouds on a high-profile website were on the photo sharing site [Flickr](https://en.wikipedia.org/wiki/Flickr "Flickr"), created by Flickr co-founder and interaction designer [Stewart Butterfield](https://en.wikipedia.org/wiki/Stewart_Butterfield "Stewart Butterfield") in 2004. That implementation was based on Jim Flanagan's Search Referral Zeitgeist,[^5] a visualization of Web site referrers. Tag clouds were also popularized around the same time by [Del.icio.us](https://en.wikipedia.org/wiki/Del.icio.us "Del.icio.us") and [Technorati](https://en.wikipedia.org/wiki/Technorati "Technorati"), among others.

Oversaturation of the tag cloud method and ambivalence about its utility as a web-navigation tool led to a decline of usage among these early adopters.[^6] Flickr gave a five-word acceptance speech for the 2006 "Best Practices" [Webby Award](https://en.wikipedia.org/wiki/Webby_Award "Webby Award"), which simply stated "sorry about the tag clouds." [^7]

A second generation of software development discovered a wider diversity of uses for tag clouds as a basic visualization method for text data. Several extensions of tag clouds have been proposed in this context.

## Types

![[~/×/954dec8461a7c2cc90c20b8d6488df54_MD5.png]]

A data cloud showing the population of each of the world's countries. Created in [R](https://en.wikipedia.org/wiki/R_\(programming_language\) "R (programming language)") with the *wordcloud* package, using data from [Country population](https://en.wikipedia.org/wiki/Country_population "Country population"). The proportional sizes of China and India were divided in half.

There are three main types of tag cloud applications in [social software](https://en.wikipedia.org/wiki/Social_software "Social software"), distinguished by their meaning rather than appearance. In the first type, there is a tag for the frequency of each item, whereas in the second type, there are global tag clouds where the frequencies are aggregated over all items and users. In the third type, the cloud contains categories, with size indicating number of subcategories.

### Frequency

In the first type, size represents the number of times that tag has been applied to a single item.[^8] This is useful as a means of displaying [metadata](https://en.wikipedia.org/wiki/Metadata "Metadata") about an item that has been [democratically](https://en.wikipedia.org/wiki/Democracy "Democracy") "voted" on and where precise results are not desired.

In the second, more commonly used type, size represents the number of items to which a tag has been applied, as a presentation of each tag's [popularity](https://en.wikipedia.org/wiki/Popularity "Popularity").

### Significance

Further information: [tf-idf](https://en.wikipedia.org/wiki/Tf-idf "Tf-idf")

Instead of frequency, the size can be used to represent the [significance](https://en.wikipedia.org/wiki/Relevance "Relevance") of words and word [co-occurrences](https://en.wikipedia.org/wiki/Co-occurrence "Co-occurrence"), compared to a background [corpus](https://en.wikipedia.org/wiki/Text_corpus "Text corpus") (for example, compared to all the text in Wikipedia).[^9] This approach cannot be used standalone, but it relies on comparing the document frequencies to expected distributions.

### Categorization

In the third type, tags are used as a categorization method for content items. Tags are represented in a cloud where larger tags represent the quantity of content items in that category.

There are some approaches to construct tag clusters instead of tag clouds, e.g., by applying tag co-occurrences in documents.[^10]

More generally, the same visual technique can be used to display non-tag data,[^11] as in a word cloud or a data cloud.

The term **keyword cloud** is sometimes used as a [search engine marketing](https://en.wikipedia.org/wiki/Search_engine_marketing "Search engine marketing") (SEM) term that refers to a group of keywords that are relevant to a specific website. In recent years tag clouds have gained popularity because of their role in [search engine optimization](https://en.wikipedia.org/wiki/Search_engine_optimization "Search engine optimization") of Web pages as well as supporting the user in navigating the content in an information system efficiently.[^12] Tag clouds as a navigational tool make the resources of a website more connected,[^13] when crawled by a search engine spider, which may improve the site's [search engine rank](https://en.wikipedia.org/wiki/PageRank "PageRank"). From a user interface perspective they are often used to summarize search results to support the user in finding content in a particular information system more quickly.[^14]

## Visual appearance

Tag clouds are typically represented using inline [HTML](https://en.wikipedia.org/wiki/HTML "HTML") elements. The tags can appear in alphabetical order, in a random order, they can be sorted by weight, and so on. Sometimes, further visual properties are manipulated in addition to font size, such as the font color, intensity, or weight.[^15] Most popular is a rectangular tag arrangement with alphabetical sorting in a sequential line-by-line layout. The decision for an optimal layout should be driven by the expected user goals.[^15] Some prefer to cluster the tags semantically so that similar tags will appear near each other [^16] [^17] [^18] or use [embedding](https://en.wikipedia.org/wiki/Word_embedding "Word embedding") techniques such as [tSNE](https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding "T-distributed stochastic neighbor embedding") to position words.[^9] Edges can be added to emphasize the co-occurrences of tags and visualize interactions.[^9] [Heuristics](https://en.wikipedia.org/wiki/Heuristics "Heuristics") can be used to reduce the size of the tag cloud whether or not the purpose is to cluster the tags.[^17]

Tag cloud visual taxonomy is determined by a number of attributes: tag ordering rule (e.g. alphabetically, by importance, by context, randomly, ordered for visual quality), shape of the entire cloud (e.g. rectangular, circle, given map borders), shape of tag bounds (rectangle, or character body), tag rotation (none, free, limited), vertical tag alignment (sticking to typographical baselines, free). A tag cloud on the web must address problems of modeling and controlling aesthetics, constructing a two-dimensional layout of tags, and all these must be done in short time on volatile browser platform. Tags clouds to be used on the web must be in [HTML](https://en.wikipedia.org/wiki/HTML "HTML"), not graphics, to make them robot-readable, they must be constructed on the client side using the fonts available in the browser, and they must fit in a rectangular box.[^19]

## Data clouds

![[~/×/d50e95383fd6c705a30b3b7687ac4a39_MD5.png]]

A data cloud showing stock price movement. Color indicates positive or negative change, font size indicates percentage change.

A **data cloud** or **cloud data** is a data display which uses font size and/or color to indicate numerical values.[^20] It is similar to a tag cloud [^21] but instead of word count, displays data such as population or [stock market](https://en.wikipedia.org/wiki/Stock_market "Stock market") prices.

## Text clouds

![[~/×/f9f9b95c2d949a8481ff5a9b9482d541_MD5.png]]

Text cloud comparing [2002 State of the Union Address](https://en.wikipedia.org/wiki/2002_State_of_the_Union_Address "2002 State of the Union Address") by U.S. President Bush and [2011 State of the Union Address](https://en.wikipedia.org/wiki/2011_State_of_the_Union_Address "2011 State of the Union Address") by President Obama [^22]

![[~/×/6e831bad3dd9ee3786290299a26f118a_MD5.png]]

Malayalam text cloud with science-related words

A **text cloud** or **word cloud** is a visualization of word frequency in a given text as a weighted list.[^23] The technique has recently been popularly used to visualize the topical content of political speeches.[^22] [^24]

## Collocate clouds

Extending the principles of a text cloud, a **collocate cloud** provides a more focused view of a document or [corpus](https://en.wikipedia.org/wiki/Text_corpus "Text corpus"). Instead of summarising an entire document, the collocate cloud examines the usage of a particular word. The resulting cloud contains the words which are often used in conjunction with the search word. These [collocates](https://en.wikipedia.org/wiki/Collocation "Collocation") are formatted to show frequency (as size) as well as collocational strength (as brightness). This provides interactive ways to browse and explore language.[^25]

## Perception

Tag clouds have been the subjects of investigation in several usability studies. The following summary is based on an overview of research results given by Lohmann et al.:[^15]

- Tag size: Large tags attract more user attention than small tags (effect influenced by further properties, e.g., number of characters, position, neighboring tags).
- Scanning: Users scan rather than read tag clouds.
- Centering: Tags in the middle of the cloud attract more user attention than tags near the borders (effect influenced by [layout](https://en.wikipedia.org/wiki/Page_layout "Page layout") ).
- Position: The upper left quadrant receives more user attention than the others (Western reading habits).
- Exploration: Tag clouds provide suboptimal support when searching for specific tags (if these do not have a very large font size).

Felix et al.[^26] compared how human reading performance differs from traditional tag clouds that map numeric values to the size of the font and alternative designs that uses for example color or additional shapes like circle and bars. They also compared how different arrangement of the words affects performance.

- Use an additional bar or circle instead of the font size increases accuracy when reading the numeric value
- However users can find specific word quicker when no additional mark is used
- The performance depends on the task, simple tasks like finding a word are highly affected by the design choice, however the effect on tasks like identify the topic of a tag cloud is much smaller.

## Creation

![[~/×/35a4d8ebdfb5a17d996d8efa7956bd76_MD5.png]]

Tag cloud constructed from Wikipedia's top 1000 vital articles sorted by number of views [^27]

In principle, the font size of a tag in a tag cloud is determined by its incidence. For a word cloud of categories like weblogs, frequency, for example, corresponds to the number of weblog entries that are assigned to a category. For smaller frequencies one can specify font sizes directly, from one to whatever the maximum font size. For larger values, a scaling should be made. In a linear normalization, the weight ${\displaystyle t_{i}}$ of a descriptor is mapped to a size scale of 1 through *f*, where ${\displaystyle t_{\min }}$ and ${\displaystyle t_{\max }}$ are specifying the range of available weights.

${\displaystyle s_{i}=\left\lceil {\frac {f_{\max }\cdot (t_{i}-t_{\min })}{t_{\max }-t_{\min }}}\right\rceil }$ for ${\displaystyle t_{i}>t_{\min }}$ ; else ${\displaystyle s_{i}=1}$
- ${\displaystyle s_{i}}$ : display fontsize
- ${\displaystyle f_{\max }}$ : max. fontsize
- ${\displaystyle t_{i}}$ : count
- ${\displaystyle t_{\min }}$ : min. count
- ${\displaystyle t_{\max }}$ : max. count

Since the number of indexed items per descriptor is usually distributed according to a [power law](https://en.wikipedia.org/wiki/Power_law "Power law"),[^28] for larger ranges of values, a [logarithmic](https://en.wikipedia.org/wiki/Logarithm "Logarithm") representation makes sense.[^29]

Implementations of tag clouds also include text parsing and filtering out unhelpful tags such as common words, numbers, and punctuation.

There are also websites creating artificially or randomly weighted tag clouds, for advertising, or for humorous results.

## See also

- [Concordance](https://en.wikipedia.org/wiki/Concordance_\(publishing\) "Concordance (publishing)")
- [Folksonomy](https://en.wikipedia.org/wiki/Folksonomy "Folksonomy")
- [Information visualization](https://en.wikipedia.org/wiki/Information_visualization "Information visualization")
- [Keywords](https://en.wikipedia.org/wiki/Index_term "Index term")
- [tf-idf](https://en.wikipedia.org/wiki/Tf-idf "Tf-idf")

## References

## External links

- [Understanding Tag Clouds](https://web.archive.org/web/20160722004350/http://joelamantia.com/ideas/tag-clouds-evolve-understanding-tag-clouds) – an information design analysis of tag clouds
- [Design tips for building tag clouds](https://web.archive.org/web/20131119070111/http://www.onlamp.com/pub/a/onlamp/2006/06/08/designing-tag-clouds.html) – software development guide from O'Reilly's ONLamp

[^1]: [Word-Cloud Generator](https://web.archive.org/web/20110719002236/http://www.alphaworks.ibm.com/tech/wordcloud) (archive)

[^2]: Martin Halvey and Mark T. Keane, [An Assessment of Tag Presentation Techniques](http://www2007.org/htmlposters/poster988/) [Archived](https://web.archive.org/web/20170514121504/http://www2007.org/htmlposters/poster988/) 2017-05-14 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"), poster presentation at WWW 2007, 2007

[^3]: Helic, Denis; Trattner, Christoph; Strohmaier, Markus; Andrews, Keith (2011). ["Are tag clouds useful for navigation? A network-theoretic analysis"](https://doi.org/10.1504%2FIJSCCPS.2011.043603). *International Journal of Social Computing and Cyber-Physical Systems*. **1** (1): 33. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1504/IJSCCPS.2011.043603](https://doi.org/10.1504%2FIJSCCPS.2011.043603). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [2040-0721](https://search.worldcat.org/issn/2040-0721).

[^4]: Gilles Deleuze, Felix Guattari (1992). *Tausend Plateaus. Kapitalismus und Schizophrenie*. Merve-Verlag. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-3-88396-094-4](https://en.wikipedia.org/wiki/Special:BookSources/978-3-88396-094-4 "Special:BookSources/978-3-88396-094-4").

[^5]: A copy of Jim Flanagan's Search *Referral Zeitgeis* t was [available at archive.org](https://web.archive.org/web/20041204231120/http://twiki.tensegrity.net/bin/view/Main/SearchReferralZeitgeist) but has since been blocked. In the comments of a [blog entry](http://www.37signals.com/svn/archives/000937.php) [Archived](https://web.archive.org/web/20060426191534/http://www.37signals.com/svn/archives/000937.php) 2006-04-26 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"), a user identified as Steve Minutillo attribute the idea to Jim Flanagan, stating that Flanagan's site had such displays in 2002.

[^6]: ["Tag Clouds R.I.P.?"](https://web.archive.org/web/20120319093314/http://www.readwriteweb.com/archives/tag_clouds_rip.php). Readwriteweb.com. 2011-03-30. Archived from [the original](http://www.readwriteweb.com/archives/tag_clouds_rip.php) on 2012-03-19.

[^7]: ["Welcome to the Webby Awards"](http://www.webbyawards.com/press/archived-speeches.php#2006). Webbyawards.com. 2011-10-28. [Archived](https://web.archive.org/web/20060703183324/http://www.webbyawards.com/press/archived-speeches.php#2006) from the original on 2006-07-03. Retrieved 2013-07-27.

[^8]: Bielenberg, K. and Zacher, M., [Groups in Social Software: Utilizing Tagging to Integrate Individual Contexts for Social Navigation](http://bielenberg.info/thesis.pdf) [Archived](https://web.archive.org/web/20071008061841/http://bielenberg.info/thesis.pdf) 2007-10-08 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"), Masters Thesis submitted to the Program of Digital Media, Universität Bremen (2006)

[^9]: Schubert, Erich; Spitz, Andreas; Weiler, Michael; Geiß, Johanna; Gertz, Michael (2017-08-11). "Semantic Word Clouds with Background Corpus Normalization and t-distributed Stochastic Neighbor Embedding". [arXiv](https://en.wikipedia.org/wiki/ArXiv_\(identifier\) "ArXiv (identifier)"):[1708.03569](https://arxiv.org/abs/1708.03569) \[ [cs.IR](https://arxiv.org/archive/cs.IR) \].

[^10]: Knautz, K., Soubusta, S., & Stock, W.G. (2010). [Tag clusters as information retrieval interfaces](http://www.phil-fak.uni-duesseldorf.de/fileadmin/Redaktion/Institute/Informationswissenschaft/stock/Knautz_Soubusta_Stock.pdf) [Archived](https://web.archive.org/web/20110717203420/http://www.phil-fak.uni-duesseldorf.de/fileadmin/Redaktion/Institute/Informationswissenschaft/stock/Knautz_Soubusta_Stock.pdf) 2011-07-17 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"). Proceedings of the 43rd Annual Hawaii International Conference on System Sciences (HICSS-43), January 5–8, 2010. IEEE Computer Society Press (10 pages).

[^11]: Aouiche, Kamel; Lemire, Daniel; Godin, Robert (2007). "Collaborative OLAP with Tag Clouds: Web 2.0 OLAP Formalism and Experimental Evaluation". [arXiv](https://en.wikipedia.org/wiki/ArXiv_\(identifier\) "ArXiv (identifier)"):[0710.2156](https://arxiv.org/abs/0710.2156) \[ [cs.DB](https://arxiv.org/archive/cs.DB) \].

[^12]: Helic, D.; Trattner, C.; Strohmaier, M.; Andrews, K. (2011). ["Are Tag Clouds Useful for Navigation? A Network-Theoretic Analysis"](http://www.markusstrohmaier.info/documents/2011_JoSCCPS-socialcom2010_extended.pdf) (PDF). *International Journal of Social Computing and Cyber-Physical Systems*. **1** (1): 33– 55. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1504/IJSCCPS.2011.043603](https://doi.org/10.1504%2FIJSCCPS.2011.043603).

[^13]: Trattner, C.:[Linking Related Content in Web Encyclopedias with search query tag clouds](http://www.austria-lexikon.at/attach/User/Trattner%20Christoph/ctrattner_IADIS_WWW_journal.pdf) [Archived](https://web.archive.org/web/20120615114901/http://www.austria-lexikon.at/attach/User/Trattner%20Christoph/ctrattner_IADIS_WWW_journal.pdf) 2012-06-15 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"). IADIS International Journal on WWW/Internet, Volume 9, Issue 2, 2011

[^14]: Tratter, C., Lin, Y., Parra, D., Yue, Z., Brusilovsky, P.: [Evaluating Tag-Based Information Access in Image Collections](http://www.austria-lexikon.at/attach/User/Trattner%20Christoph/ht076-trattner.pdf) [Archived](https://web.archive.org/web/20120615160853/http://www.austria-lexikon.at/attach/User/Trattner%20Christoph/ht076-trattner.pdf) 2012-06-15 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"). In Proceedings of the 23rd ACM Conference on Hypertext and Social Media (HT 2012). ACM, New York, NY, USA, 2012

[^15]: Lohmann, S., Ziegler, J., Tetzlaff, L. [Comparison of Tag Cloud Layouts: Task-Related Performance and Visual Exploration](http://www.uni-due.de/~s400268/Lohmann09-interact.pdf) [Archived](https://web.archive.org/web/20091007173622/http://www.uni-due.de/~s400268/Lohmann09-interact.pdf) 2009-10-07 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"), T. Gross et al. (Eds.): INTERACT 2009, Part I, LNCS 5726, pp. 392–404, 2009.

[^16]: Hassan-Montero, Y., Herrero-Solana, V. [Improving Tag-Clouds as Visual Information Retrieval Interfaces](http://www.nosolousabilidad.com/hassan/improving_tagclouds.pdf) [Archived](https://web.archive.org/web/20060813162618/http://www.nosolousabilidad.com/hassan/improving_tagclouds.pdf) 2006-08-13 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"). InSciT 2006: Mérida, Spain. October 25–28, 2006.

[^17]: Kaser, Owen; Lemire, Daniel (2007). "Tag-Cloud Drawing: Algorithms for Cloud Visualization". [arXiv](https://en.wikipedia.org/wiki/ArXiv_\(identifier\) "ArXiv (identifier)"):[cs/0703109](https://arxiv.org/abs/cs/0703109).

[^18]: Salonen, J. 2007. [Self-organising map based tag clouds – Creating spatially meaningful representations of tagging data](http://matriisi.ee.tut.fi/hypermedia/julkaisut/2007-salonen-som-clouds.pdf) [Archived](https://web.archive.org/web/20081224093118/http://matriisi.ee.tut.fi/hypermedia/julkaisut/2007-salonen-som-clouds.pdf) 2008-12-24 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"). Proceedings of the 1st OPAALS conference, 26–27 November 2007, Rome, Italy.

[^19]: Marszałkowski, J., Mokwa, D., Drozdowski, M., Rusiecki, L., Narożny, H. [Fast algorithms for online construction of web tag clouds](http://www.sciencedirect.com/science/article/pii/S0952197617301422), Engineering Applications of Artificial Intelligence 64, pp. 378–390, 2017.

[^20]: Apel, Warren. ["ManyEyes Visualization and Commentary: *World Population Data Cloud.*"](http://services.alphaworks.ibm.com/manyeyes/view/SIk76IsOtha6qFGgix3cI2-). [Archived](https://web.archive.org/web/20071029115347/http://services.alphaworks.ibm.com/manyeyes/view/SIk76IsOtha6qFGgix3cI2-) from the original on 2007-10-29. Retrieved 2007-08-26.

[^21]: Wattenberg, Martin. ["ManyEyes Visualization: *Ad cloud* "](http://services.alphaworks.ibm.com/manyeyes/view/Sh3S9FsOtha6OdUrBNWFF2-). [Archived](https://web.archive.org/web/20080214102610/http://services.alphaworks.ibm.com/manyeyes/view/Sh3S9FsOtha6OdUrBNWFF2-) from the original on 2008-02-14. Retrieved 2007-03-12.

[^22]: Steinbock, Daniel (5 March 2011). ["TagCrowd visualization: State of the Union"](http://www.tagcrowd.com/blog/2011/03/05/state-of-the-union-2002-vs-2011/). [Archived](https://web.archive.org/web/20110411071238/http://www.tagcrowd.com/blog/2011/03/05/state-of-the-union-2002-vs-2011/) from the original on 2011-04-11. Retrieved 2011-03-05.

[^23]: Lamantia, Joe. ["Text Clouds: A New Form of Tag Cloud?"](https://web.archive.org/web/20080910235655/http://www.joelamantia.com/blog/archives/tag_clouds/text_clouds_a_new_form_of_tag_cloud.html). Archived from the original on 2008-09-10. Retrieved 2008-09-11.`{{[cite web](https://en.wikipedia.org/wiki/Template:Cite_web "Template:Cite web")}}`: CS1 maint: bot: original URL status unknown ( [link](https://en.wikipedia.org/wiki/Category:CS1_maint:_bot:_original_URL_status_unknown "Category:CS1 maint: bot: original URL status unknown") )

[^24]: Mehta, Chirag. ["US Presidential Speeches Tag Cloud"](http://chir.ag/phernalia/preztags/). [Archived](https://web.archive.org/web/20071019035301/http://chir.ag/phernalia/preztags/) from the original on 2007-10-19. Retrieved 2008-09-11.

[^25]: ["Collocate cloud"](http://www.scottishcorpus.ac.uk/corpus/search/collocatecloud.php). Retrieved 2008-12-05.

[^26]: Felix, Cristian; Franconeri, Steven; Bertini, Enrico (Jan 2018). "Taking Word Clouds Apart: An Empirical Investigation of the Design Space for Keyword Summaries". *IEEE Transactions on Visualization and Computer Graphics*. **24** (1): 657– 666. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/TVCG.2017.2746018](https://doi.org/10.1109%2FTVCG.2017.2746018). [PMID](https://en.wikipedia.org/wiki/PMID_\(identifier\) "PMID (identifier)") [28866593](https://pubmed.ncbi.nlm.nih.gov/28866593). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [6570943](https://api.semanticscholar.org/CorpusID:6570943).

[^27]: . Wikistics.falsikon.de. 2009-08-31. Archived from on 2013-04-19. Retrieved 2013-07-27.

[^28]: Voss, Jakob (2006). "Collaborative thesaurus tagging the Wikipedia way". [arXiv](https://en.wikipedia.org/wiki/ArXiv_\(identifier\) "ArXiv (identifier)"):[cs/0604036](https://arxiv.org/abs/cs/0604036).

[^29]: ["Kentbyte: *Tag Cloud Font Distribution Algorithm*. June 2005"](http://www.echochamberproject.com/node/247). Echochamberproject.com. [Archived](https://web.archive.org/web/20131002095156/http://www.echochamberproject.com/node/247) from the original on 2013-10-02. Retrieved 2013-07-27.