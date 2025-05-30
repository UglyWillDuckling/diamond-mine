#note/dev/git

 In Git, there are two separate entities: the author and the committer. While
  they are often the same person, they can be different, and understanding the
  distinction between them is important for collaboration and attribution in
  version control.

  **Author**: The author is the person who originally wrote the code or made the
  changes. They are the ones who created the content or made the
  modifications. The author is typically the person who is credited with
  creating the intellectual property or making the contributions to the
  project.

 When you create a commit, Git records your username and email address as the
  author of the commit. This information is stored in the commit object and is
  used to identify who made the changes.

**Committer**: The committer is the person who actually applies the changes to
  the repository. They are the ones who commit the changes **on behalf of the**
  **author**. In many cases, the committer is the same person as the author, but
  they don't have to be.
## scenarios

  Here are some **scenarios** where the author and committer might be **different**:

  1. `Patch` submission: An author sends a patch to a project maintainer, who
  then applies the patch and commits it.
  2. `Code` `review`: A developer submits code for review, and another developer
  **reviews and commits** the changes on their behalf.
  3. **Automated commits**: A script or bot commits changes on behalf of an
  author, such as when automating deployments or builds.

  To illustrate the difference, let's look at an example:

    git log -1
    commit abc12345
    Author: John Doe <john.doe@example.com>
    Committer: Jane Smith <jane.smith@example.com>
    Date:   Wed Mar 22 14:30:00 2023 +0000

        Fixed typo in README

  In this example, John Doe is the author of the commit, but Jane Smith is the
  committer who applied the change to the repository.

## In summary

  **• The author is the person who originally wrote the code or made the**
  changes.
  **• The committer is the person who applies the changes to the repository.**