1. Use the command line interface: use `lpq` to see jobs, `lprm` to remove. Refer to `man lprm` for more information.

[Share](https://askubuntu.com/a/350337 "Short permalink to this answer")

Share a link to this answer

[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ "The current license for this post: CC BY-SA 3.0")

[Improve this answer](https://askubuntu.com/posts/350337/edit)

 

Follow this answer to receive notifications

answered Sep 26, 2013 at 13:35

[

![[~/×/98df686c48c9522f93ace494b24e4919_MD5.jpg]]

](https://askubuntu.com/users/134479/zwets)

[zwets](https://askubuntu.com/users/134479/zwets)zwets

12.7k22 gold badges3737 silver badges4646 bronze badges

2

- Is there something like `lprm *` that will cancel all jobs? Or do we have to go piecemeal?
	– [MichaelChirico](https://askubuntu.com/users/362864/michaelchirico "113 reputation")
	[Commented Apr 30, 2015 at 3:15](https://askubuntu.com/questions/350334/#comment868556_350337)
- @MichaelChirico `man lprm | grep "cancel all jobs"`
	– [zwets](https://askubuntu.com/users/134479/zwets "12,670 reputation")
	[Commented Feb 12, 2016 at 8:16](https://askubuntu.com/questions/350334/#comment1087874_350337)

[Add a comment](https://askubuntu.com/questions/350334/# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.")  | This answer is useful

18

Save this answer.Show activity on this post.

Use

```
lpstat -W completed -o
```

to view list of completed jobs.  
Use

```
lpstat -o
```

to view list of not-completed jobs.

And to delete job list,just use this command:

```
cancel -a -x
```

This will cancel all pending jobs, as well as deleting them.

[Share](https://askubuntu.com/a/673349 "Short permalink to this answer")

Share a link to this answer

[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ "The current license for this post: CC BY-SA 3.0")

[Improve this answer](https://askubuntu.com/posts/673349/edit)

 

Follow this answer to receive notifications

answered Sep 12, 2015 at 16:11

[

![[~/×/df48694af166ac3c9a3d77d3931eda44_MD5.png]]

](https://askubuntu.com/users/180452/php-learner)

[PHP Learner](https://askubuntu.com/users/180452/php-learner)PHP Learner

2,9181010 gold badges3333 silver badges5050 bronze badges

1

- 5
	This should be the accepted answer.
	– [vcarel](https://askubuntu.com/users/271187/vcarel "101 reputation")
	[Commented Mar 4, 2018 at 16:54](https://askubuntu.com/questions/350334/#comment1639990_673349)

[Add a comment](https://askubuntu.com/questions/350334/# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.")  | This answer is useful

2

Save this answer.Show activity on this post.

Well, answers given here didn't work for me so here's what I did -

```
ps aux | grep printer
kill {printer job}
```

[Share](https://askubuntu.com/a/474389 "Short permalink to this answer")

Share a link to this answer

[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/ "The current license for this post: CC BY-SA 3.0")

[Improve this answer](https://askubuntu.com/posts/474389/edit)

 

Follow this answer to receive notifications

answered May 30, 2014 at 11:18

[

![[~/×/e342bd089bbbddbd4b86ed39760d1d4c_MD5.jpg]]

](https://askubuntu.com/users/83900/some-other-guy)

[some\_other\_guy](https://askubuntu.com/users/83900/some-other-guy)some\_other\_guy

12144 bronze badges

[Add a comment](https://askubuntu.com/questions/350334/# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.")  | This answer is useful

2

Save this answer.Show activity on this post.

I tried using `lpstat` and `lprm` but was unable to figure out basic things like the job number and stuff. Instead, I used the command:

```
lpq
```

This produced:

```
zac@computer:~$ lpq
lpq: Error - no default destination available.
```

A quick Internet search and then I tried:

```
zac@computer:~$ lpq -a
Rank    Owner   Job     File(s)                     Total Size
1st     zac     85      TorahNT.odt                 59392 bytes
```

FINALLY I find the all important Job number: 85!

NOW I run `lprm`:

```
zac@computer:~$ lprm 85
zac@computer:~$
```

And to confirm I did this:

```
zac@computer:~$ lpq -a
no entries
zac@computer:~$
```

Finally, the printer queue is empty.

[Share](https://askubuntu.com/a/1400235 "Short permalink to this answer")

Share a link to this answer

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ "The current license for this post: CC BY-SA 4.0")

[Improve this answer](https://askubuntu.com/posts/1400235/edit)

 

Follow this answer to receive notifications

[edited Apr 6, 2022 at 8:40](https://askubuntu.com/posts/1400235/revisions "show all edits to this post")

[

![[~/×/e563e72dd9b13a0af1000593200828eb_MD5.jpg]]

](https://askubuntu.com/users/527764/zanna)

[Zanna](https://askubuntu.com/users/527764/zanna)♦

72k6060 gold badges223223 silver badges331331 bronze badges

answered Mar 31, 2022 at 17:51

[

![[~/×/6563087fbf3b901b481f7d839183af59_MD5.png]]

](https://askubuntu.com/users/935748/zac-helmberger)

[Zac Helmberger](https://askubuntu.com/users/935748/zac-helmberger)Zac Helmberger

3133 bronze badges

1

- Really nice clear answer - very helpful for people unfamiliar with the commands, thanks!
	– [Zanna](https://askubuntu.com/users/527764/zanna "71,985 reputation") ♦
	[Commented Apr 6, 2022 at 8:41](https://askubuntu.com/questions/350334/#comment2431013_1400235)

[Add a comment](https://askubuntu.com/questions/350334/# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.")  | ## You must [log in](https://askubuntu.com/users/login?ssrc=question_page&returnurl=https%3a%2f%2faskubuntu.com%2fquestions%2f350334) to answer this question.

**[Highly active question](https://askubuntu.com/help/privileges/protect-questions)**. Earn 10 reputation (not counting the [association bonus](https://meta.stackexchange.com/questions/141648/what-is-the-association-bonus-and-how-does-it-work)) in order to answer this question. The reputation requirement helps protect this question from spam and non-answer activity.

Start asking to get answers

Find the answer to your question by asking.

[Ask question](https://askubuntu.com/questions/ask)

Explore related questions

- [printing](https://askubuntu.com/questions/tagged/printing "show questions tagged 'printing'")

See similar questions with these tags.

- The Overflow Blog
- [“The power of the humble embedding”](https://stackoverflow.blog/2025/03/25/the-power-of-the-humble-embedding/?cb=1)
- [“Are AI agents ready for the enterprise?”](https://stackoverflow.blog/2025/03/28/are-ai-agents-ready-for-the-enterprise/?cb=1)
- Upcoming Events
- [2025 Community Moderator Election](https://askubuntu.com/election?cb=1)
	ends April 9
- Featured on Meta
- [Community Asks Sprint Announcement - March 2025](https://meta.stackexchange.com/questions/407321/community-asks-sprint-announcement-march-2025?cb=1)
- [Experimenting with a new experiment opt-out option](https://meta.stackexchange.com/questions/407547/experimenting-with-a-new-experiment-opt-out-option?cb=1)
- [2025 Community Moderator Election](https://meta.askubuntu.com/questions/20668/2025-community-moderator-election?cb=1)

#### Related

[

47

](https://askubuntu.com/q/37247?rq=1 "Question score (upvotes - downvotes)")[Is there an easy way to view the print queue?](https://askubuntu.com/questions/37247/is-there-an-easy-way-to-view-the-print-queue?rq=1)

[

2

](https://askubuntu.com/q/146494?rq=1 "Question score (upvotes - downvotes)")[How do I get an Canon Pixma MP150 to print?](https://askubuntu.com/questions/146494/how-do-i-get-an-canon-pixma-mp150-to-print?rq=1)

[

2

](https://askubuntu.com/q/226953?rq=1 "Question score (upvotes - downvotes)")[Documents queue to shared printer but won't print](https://askubuntu.com/questions/226953/documents-queue-to-shared-printer-but-wont-print?rq=1)

[

0

](https://askubuntu.com/q/734897?rq=1 "Question score (upvotes - downvotes)")[Access a print queue on a Windows print server on a different network](https://askubuntu.com/questions/734897/access-a-print-queue-on-a-windows-print-server-on-a-different-network?rq=1)

[

2

](https://askubuntu.com/q/972989?rq=1 "Question score (upvotes - downvotes)")[How to control and clear the print spooler in Ubuntu 16.04?](https://askubuntu.com/questions/972989/how-to-control-and-clear-the-print-spooler-in-ubuntu-16-04?rq=1)

[

1

](https://askubuntu.com/q/1073150?rq=1 "Question score (upvotes - downvotes)")[Is there any simple "one click" solution to clear print queue in KDE?](https://askubuntu.com/questions/1073150/is-there-any-simple-one-click-solution-to-clear-print-queue-in-kde?rq=1)

[

2

](https://askubuntu.com/q/1111267?rq=1 "Question score (upvotes - downvotes)")[What controls the print queue expiry timeout?](https://askubuntu.com/questions/1111267/what-controls-the-print-queue-expiry-timeout?rq=1)

#### [Hot Network Questions](https://stackexchange.com/questions?tab=hot)

- [How quickly should a journal article be corrected after an error is found?](https://academia.stackexchange.com/questions/217594/how-quickly-should-a-journal-article-be-corrected-after-an-error-is-found)
- [Help identifying the full name of the journal "Bull. soc. roumaine phys."](https://academia.stackexchange.com/questions/217595/help-identifying-the-full-name-of-the-journal-bull-soc-roumaine-phys)
- [What could be a possible translation of vibe coding in French?](https://french.stackexchange.com/questions/55675/what-could-be-a-possible-translation-of-vibe-coding-in-french)
- [Are there logics where you can quantify over quantifiers?](https://math.stackexchange.com/questions/5050448/are-there-logics-where-you-can-quantify-over-quantifiers)
- [Error for figure caption: you cannot use \\prevdepth & improper \\prevdepth](https://tex.stackexchange.com/questions/739826/error-for-figure-caption-you-cannot-use-prevdepth-improper-prevdepth)
- [A dominoes puzzle I created](https://puzzling.stackexchange.com/questions/131121/a-dominoes-puzzle-i-created)
- [Where is the idea of "Keter Shem Tov" discussed?](https://judaism.stackexchange.com/questions/148499/where-is-the-idea-of-keter-shem-tov-discussed)
- [How do I keep my party from advancing through the story too quickly?](https://rpg.stackexchange.com/questions/215111/how-do-i-keep-my-party-from-advancing-through-the-story-too-quickly)
- [Dynamic NVARCHAR(MAX) Being Truncated When 'inlining' a NVARCHAR(MAX) Parameter](https://dba.stackexchange.com/questions/345913/dynamic-nvarcharmax-being-truncated-when-inlining-a-nvarcharmax-parameter)
- [Is there any other Buddhism factions, that believe we are in an Ending Era of Buddhism (末法/Saddharma Vipralopa), except Jingtu?](https://buddhism.stackexchange.com/questions/52133/is-there-any-other-buddhism-factions-that-believe-we-are-in-an-ending-era-of-bu)
- [What is the physics behind the silicon diode and the Zener diode?](https://electronics.stackexchange.com/questions/742521/what-is-the-physics-behind-the-silicon-diode-and-the-zener-diode)
- [Convergence of Continuum-ly many functions](https://math.stackexchange.com/questions/5050540/convergence-of-continuum-ly-many-functions)
- [Encryption to use when limited data for a chosen plaintext attack is available](https://security.stackexchange.com/questions/280954/encryption-to-use-when-limited-data-for-a-chosen-plaintext-attack-is-available)
- [After Jan 2025 do airlines deny boarding to UK citizens flying to UK with only a US passport?](https://travel.stackexchange.com/questions/194127/after-jan-2025-do-airlines-deny-boarding-to-uk-citizens-flying-to-uk-with-only-a)
- [Is every nonconstant group scheme morphism of elliptic curves an isogeny?](https://mathoverflow.net/questions/490162/is-every-nonconstant-group-scheme-morphism-of-elliptic-curves-an-isogeny)
- [Does the host of Would I Lie To You always know whether a given claim is true or false?](https://movies.stackexchange.com/questions/124946/does-the-host-of-would-i-lie-to-you-always-know-whether-a-given-claim-is-true-or)
- [What statistical test should be used? (binomially distributed variable, low probability, insufficient number of tries)](https://stats.stackexchange.com/questions/663213/what-statistical-test-should-be-used-binomially-distributed-variable-low-prob)
- [Mesh analysis method](https://electronics.stackexchange.com/questions/742527/mesh-analysis-method)
- [By what natural process could a triangular lake form?](https://worldbuilding.stackexchange.com/questions/265535/by-what-natural-process-could-a-triangular-lake-form)
- [Translating "Incorporated" in a book title](https://german.stackexchange.com/questions/78999/translating-incorporated-in-a-book-title)
- [Mathematically understanding the effects of class imbalance in logistic regression](https://stats.stackexchange.com/questions/663226/mathematically-understanding-the-effects-of-class-imbalance-in-logistic-regressi)
- [Finding electric field from finite object using Gauss law](https://physics.stackexchange.com/questions/846306/finding-electric-field-from-finite-object-using-gauss-law)
- [New official LaTeX3 packages like ltproperties](https://tex.stackexchange.com/questions/739821/new-official-latex3-packages-like-ltproperties)
- [Is there a German word for "life" as in "life in the universe"?](https://german.stackexchange.com/questions/78996/is-there-a-german-word-for-life-as-in-life-in-the-universe)

[Question feed](https://askubuntu.com/feeds/question/350334 "Feed of this question and its answers")

# Subscribe to RSS

Question feed

To subscribe to this RSS feed, copy and paste this URL into your RSS reader.![](/posts/350334/ivc/c152?prg=3fff3945-ffae-43e3-a01e-2b7103823912)

 

##### [Ask Ubuntu](https://askubuntu.com/)

- [Tour](https://askubuntu.com/tour)
- [Help](https://askubuntu.com/help)
- [Chat](https://chat.stackexchange.com/?tab=site&host=askubuntu.com)
- [Contact](https://askubuntu.com/contact)
- [Feedback](https://meta.askubuntu.com/)

##### [Company](https://stackoverflow.co/)

- [Stack Overflow](https://stackoverflow.com/)
- [Teams](https://stackoverflow.co/teams/)
- [Advertising](https://stackoverflow.co/advertising/)
- [Talent](https://stackoverflow.co/advertising/employer-branding/)
- [About](https://stackoverflow.co/)
- [Press](https://stackoverflow.co/company/press/)
- [Legal](https://stackoverflow.com/legal)
- [Privacy Policy](https://stackoverflow.com/legal/privacy-policy)
- [Terms of Service](https://stackoverflow.com/legal/terms-of-service/public)
- 
- [Cookie Policy](https://stackoverflow.com/legal/cookie-policy)

##### [Stack Exchange Network](https://stackexchange.com/)

- [Technology](https://stackexchange.com/sites#technology)
- [Culture & recreation](https://stackexchange.com/sites#culturerecreation)
- [Life & arts](https://stackexchange.com/sites#lifearts)
- [Science](https://stackexchange.com/sites#science)
- [Professional](https://stackexchange.com/sites#professional)
- [Business](https://stackexchange.com/sites#business)
- [API](https://api.stackexchange.com/)
- [Data](https://data.stackexchange.com/)

- [Blog](https://stackoverflow.blog/?blb=1)
- [Facebook](https://www.facebook.com/officialstackoverflow/)
- [Twitter](https://twitter.com/stackoverflow)
- [LinkedIn](https://linkedin.com/company/stack-overflow)
- [Instagram](https://www.instagram.com/thestackoverflow)

Site design / logo © 2025 Stack Exchange Inc; user contributions licensed under [CC BY-SA](https://stackoverflow.com/help/licensing) . rev 2025.3.27.24496

Ubuntu and the circle of friends logo are trade marks of Canonical Limited and are used under licence.