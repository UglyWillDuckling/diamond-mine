   <!\[CDATA\[ document.addEventListener('DOMContentLoaded', function(event, reader) { if (!(reader = navigator.epubReadingSystem)) { if (navigator.userAgent.indexOf(' calibre/') >= 0) reader = { name: 'calibre-desktop' }; else if (window.parent == window || !(reader = window.parent.navigator.epubReadingSystem)) return; } document.body.setAttribute('class', reader.name.toLowerCase().replace(/ /g, '-')); }); \]\]>

# Introduction

You’re about to spend several hours of your life reading about Git. Let’s take a minute to explain what we have in store for you. Here is a quick summary of the ten chapters and three appendices of this book.

In **Chapter 1**, we’re going to cover Version Control Systems (VCSs) and Git basics — no technical stuff, just what Git is, why it came about in a land full of VCSs, what sets it apart, and why so many people are using it. Then, we’ll explain how to download Git and set it up for the first time if you don’t already have it on your system.

In **Chapter 2**, we will go over basic Git usage — how to use Git in the 80% of cases you’ll encounter most often. After reading this chapter, you should be able to clone a repository, see what has happened in the history of the project, modify files, and contribute changes. If the book spontaneously combusts at this point, you should already be pretty useful wielding Git in the time it takes you to go pick up another copy.

**Chapter 3** is about the branching model in Git, often described as Git’s killer feature. Here you’ll learn what truly sets Git apart from the pack. When you’re done, you may feel the need to spend a quiet moment pondering how you lived before Git branching was part of your life.

**Chapter 4** will cover Git on the server. This chapter is for those of you who want to set up Git inside your organization or on your own personal server for collaboration. We will also explore various hosted options if you prefer to let someone else handle that for you.

**Chapter 5** will go over in full detail various distributed workflows and how to accomplish them with Git. When you are done with this chapter, you should be able to work expertly with multiple remote repositories, use Git over email and deftly juggle numerous remote branches and contributed patches.

**Chapter 6** covers the GitHub hosting service and tooling in depth. We cover signing up for and managing an account, creating and using Git repositories, common workflows to contribute to projects and to accept contributions to yours, GitHub’s programmatic interface and lots of little tips to make your life easier in general.

**Chapter 7** is about advanced Git commands. Here you will learn about topics like mastering the scary 'reset' command, using binary search to identify bugs, editing history, revision selection in detail, and a lot more. This chapter will round out your knowledge of Git so that you are truly a master.

**Chapter 8** is about configuring your custom Git environment. This includes setting up hook scripts to enforce or encourage customized policies and using environment configuration settings so you can work the way you want to. We will also cover building your own set of scripts to enforce a custom committing policy.

**Chapter 9** deals with Git and other VCSs. This includes using Git in a Subversion (SVN) world and converting projects from other VCSs to Git. A lot of organizations still use SVN and are not about to change, but by this point you’ll have learned the incredible power of Git — and this chapter shows you how to cope if you still have to use a SVN server. We also cover how to import projects from several different systems in case you do convince everyone to make the plunge.

**Chapter 10** delves into the murky yet beautiful depths of Git internals. Now that you know all about Git and can wield it with power and grace, you can move on to discuss how Git stores its objects, what the object model is, details of packfiles, server protocols, and more. Throughout the book, we will refer to sections of this chapter in case you feel like diving deep at that point; but if you are like us and want to dive into the technical details, you may want to read Chapter 10 first. We leave that up to you.

In **Appendix A**, we look at a number of examples of using Git in various specific environments. We cover a number of different GUIs and IDE programming environments that you may want to use Git in and what is available for you. If you’re interested in an overview of using Git in your shell, your IDE, or your text editor, take a look here.

In **Appendix B**, we explore scripting and extending Git through tools like libgit2 and JGit. If you’re interested in writing complex and fast custom tools and need low-level Git access, this is where you can see what that landscape looks like.

Finally, in **Appendix C**, we go through all the major Git commands one at a time and review where in the book we covered them and what we did with them. If you want to know where in the book we used any specific Git command you can look that up here.

Let’s get started.