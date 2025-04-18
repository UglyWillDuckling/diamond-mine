#concept/development/git 

 In Git, a commit is a snapshot  [^1] [^2] of your project's state at a particular point
  in time. It's a way to **save and record changes** you've made to your code,
  along with a **description** of what those changes were.

  When you commit, you're essentially creating a **new version** of your project's
  history [^3]. This new version includes:

  1. **Changes**: The modifications you've made to your code, such as added,
  modified, or deleted files.
  2. Commit **message**: A brief description of the changes you've made, which
  helps others understand the purpose and context of the commit.
  3. **Author** information: Your name and email address, which identifies who
  made the commit.
  4. **Timestamp** [^6]: The date and time when the commit was created.

  Here's what happens when you commit:

  1. Git creates a new **commit object**, which represents the snapshot of your
  project's state.
  2. The commit object contains a reference to the **parent** commit, which
  establishes a link between the current commit and the previous one.
  %% not for the root commit %%
  3. Git updates the branch ref (e.g.,  master ) to point to the new commit
  object.

  Commits are the building blocks of your project's history, and they serve
  several purposes:

  1. Version control: Commits allow you to track changes over time and revert
  to previous versions if needed.
  2. Collaboration: Commits enable multiple developers to work on the same
  project by creating a shared history of changes.
  3. Rollback: Commits make it possible to undo mistakes or experiment with
  new ideas without affecting the rest of the project.

  Some key aspects of commits:

  • **Atomicity** [^4]: Commits are atomic, either all changes are applied, or none are. 
	  This ensures that the **project remains in a consistent state**
  • **Immutable** [^5]: Commits are immutable, meaning that once created, they cannot
  be altered. This ensures that the project's history is preserved
  • **Local**: Commits are initially stored `locally` on your machine 
	  You can push them to a remote repository to share with others

see also: [[Git Branching]] chapter, [[git branch]], [[git tag]]

[^1]: [[snapshot -development]]
[^2]: [[git snapshot]]
[^3]: [[versioning]], [[git versioning]]
[^4]: [[atomicity]]
[^5]: [[immutable]]
[^6]: [[timestamp - concept]]