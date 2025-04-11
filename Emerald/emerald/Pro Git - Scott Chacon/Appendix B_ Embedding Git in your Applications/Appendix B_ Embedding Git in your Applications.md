# Appendix B: Embedding Git in your Applications

If your application is for developers, chances are good that it could benefit from integration with source control. Even non-developer applications, such as document editors, could potentially benefit from version-control features, and Git’s model works very well for many different scenarios.

If you need to integrate Git with your application, you have essentially two options: spawn a shell and call the `git` command-line program, or embed a Git library into your application. Here we’ll cover command-line integration and several of the most popular embeddable Git libraries.

## Command-line Git

One option is to spawn a shell process and use the Git command-line tool to do the work. This has the benefit of being canonical, and all of Git’s features are supported. This also happens to be fairly easy, as most runtime environments have a relatively simple facility for invoking a process with command-line arguments. However, this approach does have some downsides.

One is that all the output is in plain text. This means that you’ll have to parse Git’s occasionally-changing output format to read progress and result information, which can be inefficient and error-prone.

Another is the lack of error recovery. If a repository is corrupted somehow, or the user has a malformed configuration value, Git will simply refuse to perform many operations.

Yet another is process management. Git requires you to maintain a shell environment on a separate process, which can add unwanted complexity. Trying to coordinate many of these processes (especially when potentially accessing the same repository from several processes) can be quite a challenge.

## Libgit2

Another option at your disposal is to use Libgit2. Libgit2 is a dependency-free implementation of Git, with a focus on having a nice API for use within other programs. You can find it at [https://libgit2.org](https://libgit2.org).

First, let’s take a look at what the C API looks like. Here’s a whirlwind tour:

    // Open a repository
    git_repository *repo;
    int error = git_repository_open(&repo, "/path/to/repository");
    
    // Dereference HEAD to a commit
    git_object *head_commit;
    error = git_revparse_single(&head_commit, repo, "HEAD^{commit}");
    git_commit *commit = (git_commit*)head_commit;
    
    // Print some of the commit's properties
    printf("%s", git_commit_message(commit));
    const git_signature *author = git_commit_author(commit);
    printf("%s <%s>\n", author->name, author->email);
    const git_oid *tree_id = git_commit_tree_id(commit);
    
    // Cleanup
    git_commit_free(commit);
    git_repository_free(repo);

The first couple of lines open a Git repository. The `git_repository` type represents a handle to a repository with a cache in memory. This is the simplest method, for when you know the exact path to a repository’s working directory or `.git` folder. There’s also the `git_repository_open_ext` which includes options for searching, `git_clone` and friends for making a local clone of a remote repository, and `git_repository_init` for creating an entirely new repository.

The second chunk of code uses rev-parse syntax (see [[Git Tools|Branch References]] for more on this) to get the commit that HEAD eventually points to. The type returned is a `git_object` pointer, which represents something that exists in the Git object database for a repository. `git_object` is actually a “parent” type for several different kinds of objects; the memory layout for each of the “child” types is the same as for `git_object`, so you can safely cast to the right one. In this case, `git_object_type(commit)` would return `GIT_OBJ_COMMIT`, so it’s safe to cast to a `git_commit` pointer.

The next chunk shows how to access the commit’s properties. The last line here uses a `git_oid` type; this is Libgit2’s representation for a SHA-1 hash.

From this sample, a couple of patterns have started to emerge:

*   If you declare a pointer and pass a reference to it into a Libgit2 call, that call will probably return an integer error code. A `0` value indicates success; anything less is an error.
*   If Libgit2 populates a pointer for you, you’re responsible for freeing it.
*   If Libgit2 returns a `const` pointer from a call, you don’t have to free it, but it will become invalid when the object it belongs to is freed.
*   Writing C is a bit painful.

That last one means it isn’t very probable that you’ll be writing C when using Libgit2. Fortunately, there are a number of language-specific bindings available that make it fairly easy to work with Git repositories from your specific language and environment. Let’s take a look at the above example written using the Ruby bindings for Libgit2, which are named Rugged, and can be found at [https://github.com/libgit2/rugged](https://github.com/libgit2/rugged).

    repo = Rugged::Repository.new('path/to/repository')
    commit = repo.head.target
    puts commit.message
    puts "#{commit.author[:name]} <#{commit.author[:email]}>"
    tree = commit.tree

As you can see, the code is much less cluttered. Firstly, Rugged uses exceptions; it can raise things like `ConfigError` or `ObjectError` to signal error conditions. Secondly, there’s no explicit freeing of resources, since Ruby is garbage-collected. Let’s take a look at a slightly more complicated example: crafting a commit from scratch

    blob_id = repo.write("Blob contents", :blob) ①
    
    index = repo.index
    index.read_tree(repo.head.target.tree)
    index.add(:path => 'newfile.txt', :oid => blob_id) ②
    
    sig = {
        :email => "bob@example.com",
        :name => "Bob User",
        :time => Time.now,
    }
    
    commit_id = Rugged::Commit.create(repo,
        :tree => index.write_tree(repo), ③
        :author => sig,
        :committer => sig, ④
        :message => "Add newfile.txt", ⑤
        :parents => repo.empty? ? [] : [ repo.head.target ].compact, ⑥
        :update_ref => 'HEAD', ⑦
    )
    commit = repo.lookup(commit_id) ⑧

1.  _①_ Create a new blob, which contains the contents of a new file.
2.  _②_ Populate the index with the head commit’s tree, and add the new file at the path `newfile.txt`.
3.  _③_ This creates a new tree in the ODB, and uses it for the new commit.
4.  _④_ We use the same signature for both the author and committer fields.
5.  _⑤_ The commit message.
6.  _⑥_ When creating a commit, you have to specify the new commit’s parents. This uses the tip of HEAD for the single parent.
7.  _⑦_ Rugged (and Libgit2) can optionally update a reference when making a commit.
8.  _⑧_ The return value is the SHA-1 hash of a new commit object, which you can then use to get a `Commit` object.

The Ruby code is nice and clean, but since Libgit2 is doing the heavy lifting, this code will run pretty fast, too. If you’re not a rubyist, we touch on some other bindings in [[#_libgit2_bindings|Other Bindings]].

### Advanced Functionality

Libgit2 has a couple of capabilities that are outside the scope of core Git. One example is pluggability: Libgit2 allows you to provide custom “backends” for several types of operation, so you can store things in a different way than stock Git does. Libgit2 allows custom backends for configuration, ref storage, and the object database, among other things.

Let’s take a look at how this works. The code below is borrowed from the set of backend examples provided by the Libgit2 team (which can be found at [https://github.com/libgit2/libgit2-backends](https://github.com/libgit2/libgit2-backends)). Here’s how a custom backend for the object database is set up:

    git_odb *odb;
    int error = git_odb_new(&odb); ①
    
    git_odb_backend *my_backend;
    error = git_odb_backend_mine(&my_backend, /*…*/); ②
    
    error = git_odb_add_backend(odb, my_backend, 1); ③
    
    git_repository *repo;
    error = git_repository_open(&repo, "some-path");
    error = git_repository_set_odb(repo, odb); ④

_Note that errors are captured, but not handled. We hope your code is better than ours._

1.  _①_ Initialize an empty object database (ODB) “frontend,” which will act as a container for the “backends” which are the ones doing the real work.
2.  _②_ Initialize a custom ODB backend.
3.  _③_ Add the backend to the frontend.
4.  _④_ Open a repository, and set it to use our ODB to look up objects.

But what is this `git_odb_backend_mine` thing? Well, that’s the constructor for your own ODB implementation, and you can do whatever you want in there, so long as you fill in the `git_odb_backend` structure properly. Here’s what it _could_ look like:

    typedef struct {
        git_odb_backend parent;
    
        // Some other stuff
        void *custom_context;
    } my_backend_struct;
    
    int git_odb_backend_mine(git_odb_backend **backend_out, /*…*/)
    {
        my_backend_struct *backend;
    
        backend = calloc(1, sizeof (my_backend_struct));
    
        backend->custom_context = …;
    
        backend->parent.read = &my_backend__read;
        backend->parent.read_prefix = &my_backend__read_prefix;
        backend->parent.read_header = &my_backend__read_header;
        // …
    
        *backend_out = (git_odb_backend *) backend;
    
        return GIT_SUCCESS;
    }

The subtlest constraint here is that `my_backend_struct`’s first member must be a `git_odb_backend` structure; this ensures that the memory layout is what the Libgit2 code expects it to be. The rest of it is arbitrary; this structure can be as large or small as you need it to be.

The initialization function allocates some memory for the structure, sets up the custom context, and then fills in the members of the `parent` structure that it supports. Take a look at the `include/git2/sys/odb_backend.h` file in the Libgit2 source for a complete set of call signatures; your particular use case will help determine which of these you’ll want to support.

### Other Bindings

Libgit2 has bindings for many languages. Here we show a small example using a few of the more complete bindings packages as of this writing; libraries exist for many other languages, including C++, Go, Node.js, Erlang, and the JVM, all in various stages of maturity. The official collection of bindings can be found by browsing the repositories at [https://github.com/libgit2](https://github.com/libgit2). The code we’ll write will return the commit message from the commit eventually pointed to by HEAD (sort of like `git log -1`).

#### LibGit2Sharp

If you’re writing a .NET or Mono application, LibGit2Sharp ([https://github.com/libgit2/libgit2sharp](https://github.com/libgit2/libgit2sharp)) is what you’re looking for. The bindings are written in C#, and great care has been taken to wrap the raw Libgit2 calls with native-feeling CLR APIs. Here’s what our example program looks like:

    new Repository(@"C:\path\to\repo").Head.Tip.Message;

For desktop Windows applications, there’s even a NuGet package that will help you get started quickly.

#### objective-git

If your application is running on an Apple platform, you’re likely using Objective-C as your implementation language. Objective-Git ([https://github.com/libgit2/objective-git](https://github.com/libgit2/objective-git)) is the name of the Libgit2 bindings for that environment. The example program looks like this:

    GTRepository *repo =
        [[GTRepository alloc] initWithURL:[NSURL fileURLWithPath: @"/path/to/repo"] error:NULL];
    NSString *msg = [[[repo headReferenceWithError:NULL] resolvedTarget] message];

Objective-git is fully interoperable with Swift, so don’t fear if you’ve left Objective-C behind.

#### pygit2

The bindings for Libgit2 in Python are called Pygit2, and can be found at [https://www.pygit2.org](https://www.pygit2.org). Our example program:

    pygit2.Repository("/path/to/repo") # open repository
        .head                          # get the current branch
        .peel(pygit2.Commit)           # walk down to the commit
        .message                       # read the message

### Further Reading

Of course, a full treatment of Libgit2’s capabilities is outside the scope of this book. If you want more information on Libgit2 itself, there’s API documentation at [https://libgit2.github.com/libgit2](https://libgit2.github.com/libgit2), and a set of guides at [https://libgit2.github.com/docs](https://libgit2.github.com/docs). For the other bindings, check the bundled README and tests; there are often small tutorials and pointers to further reading there.

## JGit

If you want to use Git from within a Java program, there is a fully featured Git library called JGit. JGit is a relatively full-featured implementation of Git written natively in Java, and is widely used in the Java community. The JGit project is under the Eclipse umbrella, and its home can be found at [https://www.eclipse.org/jgit/](https://www.eclipse.org/jgit/).

### Getting Set Up

There are a number of ways to connect your project with JGit and start writing code against it. Probably the easiest is to use Maven – the integration is accomplished by adding the following snippet to the tag in your `pom.xml` file:

    
        org.eclipse.jgit
        org.eclipse.jgit
        3.5.0.201409260305-r
    

The `version` will most likely have advanced by the time you read this; check [https://mvnrepository.com/artifact/org.eclipse.jgit/org.eclipse.jgit](https://mvnrepository.com/artifact/org.eclipse.jgit/org.eclipse.jgit) for updated repository information. Once this step is done, Maven will automatically acquire and use the JGit libraries that you’ll need.

If you would rather manage the binary dependencies yourself, pre-built JGit binaries are available from [https://www.eclipse.org/jgit/download](https://www.eclipse.org/jgit/download). You can build them into your project by running a command like this:

    javac -cp .:org.eclipse.jgit-3.5.0.201409260305-r.jar App.java
    java -cp .:org.eclipse.jgit-3.5.0.201409260305-r.jar App

### Plumbing

JGit has two basic levels of API: plumbing and porcelain. The terminology for these comes from Git itself, and JGit is divided into roughly the same kinds of areas: porcelain APIs are a friendly front-end for common user-level actions (the sorts of things a normal user would use the Git command-line tool for), while the plumbing APIs are for interacting with low-level repository objects directly.

The starting point for most JGit sessions is the `Repository` class, and the first thing you’ll want to do is create an instance of it. For a filesystem-based repository (yes, JGit allows for other storage models), this is accomplished using `FileRepositoryBuilder`:

    // Create a new repository
    Repository newlyCreatedRepo = FileRepositoryBuilder.create(
        new File("/tmp/new_repo/.git"));
    newlyCreatedRepo.create();
    
    // Open an existing repository
    Repository existingRepo = new FileRepositoryBuilder()
        .setGitDir(new File("my_repo/.git"))
        .build();

The builder has a fluent API for providing all the things it needs to find a Git repository, whether or not your program knows exactly where it’s located. It can use environment variables (`.readEnvironment()`), start from a place in the working directory and search (`.setWorkTree(…).findGitDir()`), or just open a known `.git` directory as above.

Once you have a `Repository` instance, you can do all sorts of things with it. Here’s a quick sampling:

    // Get a reference
    Ref master = repo.getRef("master");
    
    // Get the object the reference points to
    ObjectId masterTip = master.getObjectId();
    
    // Rev-parse
    ObjectId obj = repo.resolve("HEAD^{tree}");
    
    // Load raw object contents
    ObjectLoader loader = repo.open(masterTip);
    loader.copyTo(System.out);
    
    // Create a branch
    RefUpdate createBranch1 = repo.updateRef("refs/heads/branch1");
    createBranch1.setNewObjectId(masterTip);
    createBranch1.update();
    
    // Delete a branch
    RefUpdate deleteBranch1 = repo.updateRef("refs/heads/branch1");
    deleteBranch1.setForceUpdate(true);
    deleteBranch1.delete();
    
    // Config
    Config cfg = repo.getConfig();
    String name = cfg.getString("user", null, "name");

There’s quite a bit going on here, so let’s go through it one section at a time.

The first line gets a pointer to the `master` reference. JGit automatically grabs the _actual_ `master` ref, which lives at `refs/heads/master`, and returns an object that lets you fetch information about the reference. You can get the name (`.getName()`), and either the target object of a direct reference (`.getObjectId()`) or the reference pointed to by a symbolic ref (`.getTarget()`). Ref objects are also used to represent tag refs and objects, so you can ask if the tag is “peeled,” meaning that it points to the final target of a (potentially long) string of tag objects.

The second line gets the target of the `master` reference, which is returned as an ObjectId instance. ObjectId represents the SHA-1 hash of an object, which might or might not exist in Git’s object database. The third line is similar, but shows how JGit handles the rev-parse syntax (for more on this, see [[Git Tools|Branch References]]); you can pass any object specifier that Git understands, and JGit will return either a valid ObjectId for that object, or `null`.

The next two lines show how to load the raw contents of an object. In this example, we call `ObjectLoader.copyTo()` to stream the contents of the object directly to stdout, but ObjectLoader also has methods to read the type and size of an object, as well as return it as a byte array. For large objects (where `.isLarge()` returns `true`), you can call `.openStream()` to get an InputStream-like object that can read the raw object data without pulling it all into memory at once.

The next few lines show what it takes to create a new branch. We create a RefUpdate instance, configure some parameters, and call `.update()` to trigger the change. Directly following this is the code to delete that same branch. Note that `.setForceUpdate(true)` is required for this to work; otherwise the `.delete()` call will return `REJECTED`, and nothing will happen.

The last example shows how to fetch the `user.name` value from the Git configuration files. This Config instance uses the repository we opened earlier for local configuration, but will automatically detect the global and system configuration files and read values from them as well.

This is only a small sampling of the full plumbing API; there are many more methods and classes available. Also not shown here is the way JGit handles errors, which is through the use of exceptions. JGit APIs sometimes throw standard Java exceptions (such as `IOException`), but there are a host of JGit-specific exception types that are provided as well (such as `NoRemoteRepositoryException`, `CorruptObjectException`, and `NoMergeBaseException`).

### Porcelain

The plumbing APIs are rather complete, but it can be cumbersome to string them together to achieve common goals, like adding a file to the index, or making a new commit. JGit provides a higher-level set of APIs to help out with this, and the entry point to these APIs is the `Git` class:

    Repository repo;
    // construct repo...
    Git git = new Git(repo);

The Git class has a nice set of high-level _builder_\-style methods that can be used to construct some pretty complex behavior. Let’s take a look at an example — doing something like `git ls-remote`:

    CredentialsProvider cp = new UsernamePasswordCredentialsProvider("username", "p4ssw0rd");
    Collection remoteRefs = git.lsRemote()
        .setCredentialsProvider(cp)
        .setRemote("origin")
        .setTags(true)
        .setHeads(false)
        .call();
    for (Ref ref : remoteRefs) {
        System.out.println(ref.getName() + " -> " + ref.getObjectId().name());
    }

This is a common pattern with the Git class; the methods return a command object that lets you chain method calls to set parameters, which are executed when you call `.call()`. In this case, we’re asking the `origin` remote for tags, but not heads. Also notice the use of a `CredentialsProvider` object for authentication.

Many other commands are available through the Git class, including but not limited to `add`, `blame`, `commit`, `clean`, `push`, `rebase`, `revert`, and `reset`.

### Further Reading

This is only a small sampling of JGit’s full capabilities. If you’re interested and want to learn more, here’s where to look for information and inspiration:

*   The official JGit API documentation can be found at [https://www.eclipse.org/jgit/documentation](https://www.eclipse.org/jgit/documentation). These are standard Javadoc, so your favorite JVM IDE will be able to install them locally, as well.
*   The JGit Cookbook at [https://github.com/centic9/jgit-cookbook](https://github.com/centic9/jgit-cookbook) has many examples of how to do specific tasks with JGit.

## go-git

In case you want to integrate Git into a service written in Golang, there also is a pure Go library implementation. This implementation does not have any native dependencies and thus is not prone to manual memory management errors. It is also transparent for the standard Golang performance analysis tooling like CPU, Memory profilers, race detector, etc.

go-git is focused on extensibility, compatibility and supports most of the plumbing APIs, which is documented at [https://github.com/go-git/go-git/blob/master/COMPATIBILITY.md](https://github.com/go-git/go-git/blob/master/COMPATIBILITY.md).

Here is a basic example of using Go APIs:

    import "github.com/go-git/go-git/v5"
    
    r, err := git.PlainClone("/tmp/foo", false, &git.CloneOptions{
        URL:      "https://github.com/go-git/go-git",
        Progress: os.Stdout,
    })

As soon as you have a `Repository` instance, you can access information and perform mutations on it:

    // retrieves the branch pointed by HEAD
    ref, err := r.Head()
    
    // get the commit object, pointed by ref
    commit, err := r.CommitObject(ref.Hash())
    
    // retrieves the commit history
    history, err := commit.History()
    
    // iterates over the commits and print each
    for _, c := range history {
        fmt.Println(c)
    }

### Advanced Functionality

go-git has few notable advanced features, one of which is a pluggable storage system, which is similar to Libgit2 backends. The default implementation is in-memory storage, which is very fast.

    r, err := git.Clone(memory.NewStorage(), nil, &git.CloneOptions{
        URL: "https://github.com/go-git/go-git",
    })

Pluggable storage provides many interesting options. For instance, [https://github.com/go-git/go-git/tree/master/_examples/storage](https://github.com/go-git/go-git/tree/master/_examples/storage) allows you to store references, objects, and configuration in an Aerospike database.

Another feature is a flexible filesystem abstraction. Using [https://pkg.go.dev/github.com/go-git/go-billy/v5?tab=doc#Filesystem](https://pkg.go.dev/github.com/go-git/go-billy/v5?tab=doc#Filesystem) it is easy to store all the files in different way i.e by packing all of them to a single archive on disk or by keeping them all in-memory.

Another advanced use-case includes a fine-tunable HTTP client, such as the one found at [https://github.com/go-git/go-git/blob/master/_examples/custom_http/main.go](https://github.com/go-git/go-git/blob/master/_examples/custom_http/main.go).

    customClient := &http.Client{
        Transport: &http.Transport{ // accept any certificate (might be useful for testing)
            TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
        },
        Timeout: 15 * time.Second,  // 15 second timeout
            CheckRedirect: func(req *http.Request, via []*http.Request) error {
            return http.ErrUseLastResponse // don't follow redirect
        },
    }
    
    // Override http(s) default protocol to use our custom client
    client.InstallProtocol("https", githttp.NewClient(customClient))
    
    // Clone repository using the new client if the protocol is https://
    r, err := git.Clone(memory.NewStorage(), nil, &git.CloneOptions{URL: url})

### Further Reading

A full treatment of go-git’s capabilities is outside the scope of this book. If you want more information on go-git, there’s API documentation at [https://pkg.go.dev/github.com/go-git/go-git/v5](https://pkg.go.dev/github.com/go-git/go-git/v5), and a set of usage examples at [https://github.com/go-git/go-git/tree/master/_examples](https://github.com/go-git/go-git/tree/master/_examples).

## Dulwich

There is also a pure-Python Git implementation - Dulwich. The project is hosted under [https://www.dulwich.io/](https://www.dulwich.io/). It aims to provide an interface to Git repositories (both local and remote) that doesn’t call out to Git directly but instead uses pure Python. It has an optional C extensions though, that significantly improve the performance.

Dulwich follows Git design and separate two basic levels of API: plumbing and porcelain.

Here is an example of using the lower level API to access the commit message of the last commit:

    from dulwich.repo import Repo
    r = Repo('.')
    r.head()
    # '57fbe010446356833a6ad1600059d80b1e731e15'
    
    c = r[r.head()]
    c
    # 
    
    c.message
    # 'Add note about encoding.\n'

To print a commit log using high-level porcelain API, one can use:

    from dulwich import porcelain
    porcelain.log('.', max_entries=1)
    
    #commit: 57fbe010446356833a6ad1600059d80b1e731e15
    #Author: Jelmer Vernooĳ 
    #Date:   Sat Apr 29 2017 23:57:34 +0000

### Further Reading

The API documentation, tutorial, and many examples of how to do specific tasks with Dulwich are available on the official website [https://www.dulwich.io](https://www.dulwich.io).