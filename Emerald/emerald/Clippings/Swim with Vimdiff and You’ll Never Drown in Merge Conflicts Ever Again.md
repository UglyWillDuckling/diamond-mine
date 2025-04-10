---
author:
  - "[[Eduardo Rodrigues]]"
created: 2025-04-10
published: 2023-05-05
source: "https://medium.com/@EduardoRodriguesF/swim-with-vimdiff-and-youll-never-drown-in-merge-conflicts-ever-again-71df98d4a84c"
tags:
---
![](https://miro.medium.com/v2/resize:fit:449/1*0bfko6CmhE08XYO-isS8-Q.png)

Screenshot by me

Knowing the tools you use changes the way you approach problems. Merge conflicts can already get complicated enough, so we need to stay sharp on our arsenal choice.

For those who already follow me, it’s probably obvious that I am about to talk more about Vim.## [The Groundbreaking Vim Experience](https://medium.com/@EduardoRodriguesF/the-groundbreaking-vim-experience-88b267dd2f67?source=post_page-----71df98d4a84c---------------------------------------)

It is April 20th as I am writing this and it has been exactly 300 days since I ditched VS Code for Vim! It was not a…

Personally, I prefer **NeoVim** for daily usage. However, I chose to go with Vim for this article.

Not only that, but I’ll be doing things that way because I want to show you that **no extra configuration is needed.** No plugins, no remaps, just plain Vim. Everything works out-of-the-box this exact way — *and works great*. So we’re not talking about Fugitive or any game changing implementation, just plain Vim tools.

## Our Project

Any good article has its loyal examples to help further introduce key-points and problems in practice. Let’s get used to ours. I created a simple program in Rust about cats. Don’t worry, you don’t have to know Rust to follow the article, it won’t matter that much.

We have our `lib.rs` file where most our logic will be:

```c
pub struct Cat {
    pub name: String,
}

impl Cat {
    pub fn new(name: &str) -> Self {
        Self {
            name: name.to_string(),
        }
    }

    pub fn meow(&\`) {
        println!("{}: Meow!", self.name);
    }
}
```

Although the actual implementation doesn’t matter: `Cat` can have a `name`. It also comes with two methods for creating new cats (`new`) and a `meow` method, which will simply print `"{name}: Meow!"`.

So far so good. Now the file that makes everything run, the `main.rs` file:

```c
use hello_medium::Cat;

fn main() {
    let chanel = Cat::new("Chanel");

    chanel.meow();
}
```

It imports `Cat`, creates a new one named Chanel and makes it meow.

## Inspiration

This simple 30 lines program is inspired by my cat named Coco Chanel:

![My cat lying between my notebook and keyboard](https://miro.medium.com/v2/resize:fit:560/1*INc-jZjZKWz0igLASLN7EQ.png)

That’s her asking for attention regardless of what I’m doing.

## Conflicting Times

Working in a team comes with ups and downs. Some of them are well known as merge conflicts. Let’s generate some for us to tinker with.

## That one branch which got merged a little too late to go clean

Features often take a long time to be properly implemented. It’s normal. We are used to it. Our task is to implement a pet owner system so those cats can have a place to stay.

Let’s start off switching to a new branch:

```c
git switch -c pet-owners
```

After working on it for a while, we ended up with the following diff from our original master:

```c
diff --git a/src/lib.rs b/src/lib.rs
index e179811..bf2bbb5 100644
--- a/src/lib.rs
+++ b/src/lib.rs
@@ -1,15 +1,34 @@
+#[derive(Default)]
 pub struct Cat {
     pub name: String,
+    pub owner: Option<Person>,
 }
 
 impl Cat {
     pub fn new(name: &str) -> Self {
         Self {
             name: name.to_string(),
+            ..Default::default()
         }
     }
 
     pub fn meow(&self) {
         println!("{}: Meow!", self.name);
     }
+
+    pub fn assign_owner(&mut self, person: Person) {
+        self.owner = Some(person);
+    }
+}
+
+pub struct Person {
+    pub name: String,
+}
+
+impl Person {
+    pub fn new(name: &str) -> Self {
+        Self {
+            name: name.to_string(),
+        }
+    }
 }
diff --git a/src/main.rs b/src/main.rs
index bd23920..ac36c26 100644
--- a/src/main.rs
+++ b/src/main.rs
@@ -1,7 +1,10 @@
-use hello_medium::Cat;
+use hello_medium::{Cat, Person};
 
 fn main() {
-    let chanel = Cat::new("Chanel");
+    let mut chanel = Cat::new("Chanel");
+    let me = Person::new("Edu");
+
+    chanel.assign_owner(me);
 
     chanel.meow();
 }
```

Well, what a great day of hard work. Let’s review what we did:

- Created a `Person` struct that has a name, just for identification purposes;
- Added an `owner` property to `Cat` which is optional — as in `Option<Person>`. Meaning that cats can exist without owners;
- Added an `assign_owner` method to `Cat`, in which a `Person` is passed to it and attached to our `Cat` instance as its `owner`;
- Assigned `chanel` to `me`!

All looking good, its time to make the merge happen. Let’s hop back to master.

```c
git switch master
```

Also ensure you are on the latest state of master branch.

```c
git pull origin master
```

Since we’re dealing with a big product on the market (I guess), we pulled some commits that our coworkers worked on. Sometimes changes are just too much, so we are not spending any time to look through them.

Well, if we got any problem, we might find out right now…

![git merge pet-owners: it resulted in conflicts on both files.](https://miro.medium.com/v2/resize:fit:560/1*oq9rLEBg9JyMYotNP92_9g.png)

> Both files conflicted? Everything will break now. Why no one warned me they were messing with the project? Now I gotta handle this and I will mess up…

It’s all right, calm down. Nothing is lost. We are here to become very efficient at handling conflicts.

## Prepare Before Actually Diving In

A knight without a sword is nothing but a tin man. Let’s setup *our sword*, which will be Vimdiff.

> There is also `nvimdiff`, which is NeoVim’s version of Vimdiff.

## Vimdiff by itself

Now, Vimdiff is not exclusive to Git usage and it is a pretty interesting tool by itself. It can compare any files to a max of **eight files simultaneously**.

To show that, I’ll great a couple of files with dummy text and then let’s hop into Vimdiff real quick.

```c
vimdiff file-1 file-2 file-3 file-4 file-5
```
![All files compared side by side with highlightings](https://miro.medium.com/v2/resize:fit:560/1*b73p8antIU6OSDrh3e3MiA.png)

All files compared side by side with highlightings

Pretty nice, huh? It highlights all our differences between each file just like a `diff` command would do, but with all the benefits of using Vim that we love.

I want to take a step further now and teach you how to manipulate files within this diff mode — which will be important when solving conflicts.

## Messing with diffed files

To make things easier to read, I shrank it down to 2 longer files:

![](https://miro.medium.com/v2/resize:fit:560/1*COM4aOZS-IeQwOTuKllWbg.png)

We have `file-1` on the left and `file-2` on the right. Both with some random text. Our job is to fix them up. First thing I noticed is that we made a typo on line 6. We did notice that thanks to `file-2` which has the correct spelling.

Look how easy it is to exchange *hunks* between files:

![](https://miro.medium.com/v2/resize:fit:560/1*LXPTtvr4VraKqr1SmMceeQ.gif)

I have [screenkey](https://www.thregr.org/~wavexx/software/screenkey/) on the bottom right so you can take a closer look at what I am typing:

- `]c` goes to the next hunk. In case you don’t know, a hunk is basically a *block of differences*. Our example has three of those.
- `:diffget` fetches the other version of that hunk from the buffer we specify and applies it to our current buffer. Since `file-2` buffer is opened by the right side, we simply reference it by name with `diffget file-2`.

We skipped the first hunk in this case, but I actually want to make it so that all files say *good evening* for us. Let’s see how we do.

![](https://miro.medium.com/v2/resize:fit:560/1*ghKggEJCTLLzlCGX-rypuA.gif)

Although we could do everything from `file-1` buffer, I switched to `file-2` just to showcase from a different perspective. Anyways, let’s break these actions down:

- `[c` goes to the previous hunk — the opposite of `[c`;
- `:buffers` displays a list of loaded buffers. We use it to specify check what is `file-1` ’s buffer specification — which is `1` because it was the first buffer to be opened;
- `:diffput` takes the hunk of the buffer our cursor is currently onto and applies it to the specified buffer. We did that by `:diffput 1` which uses file-1’s buffer ID. We could have used the file name as we did before if we want, just keep in mind those commands are versatile.

When we did it, Vimdiff took both line 3 and 4 changes and applied them together onto `file-1` as we told it to do. We didn’t want it, but because they are the same hunk there is no way to split it.

It even folded the rest of the files, because they are of no interest to Vimdiff anymore since they are identical from before that point.

Let’s go back and change what we want manually instead.

![](https://miro.medium.com/v2/resize:fit:560/1*NdJOxXttjnZDlzOYR6bTLA.gif)

Trying to undo the change while on `file-2` didn’t work. We had to go into `file-1` first and then go back to `file-2` to make the changes.

Don’t worry. Undo still works the same. This is because `file-2` was not changed when we `diffput`, therefore there is nothing to actually revert. I got really confused when I first faced this small inconvenience. Just keep in mind that those files are not attached, they are only being compared against each other.

Now all that’s left is that accidental “:qa” I left in the file. We already know all the commands we need, so let’s get this done with.

![Using :diffg 1 to solve the last difference on the bottom of the file](https://miro.medium.com/v2/resize:fit:560/1*xhGFfMgVhfriGD49Z0n2PQ.gif)

diffg and diffpu are builtin abbreviations to diffget and diffput

## Defeating The Great Conflict Beast Once And For All

Now that you are professional Vimdiff users, let’s take this power to production.

## Making Vimdiff your Merge Tool

We can make our lives easier and let Git handle the files setup for us by configuring our `mergetool` command. We just need to specify `vimdiff` to it. Pretty straightforward.

```c
git config --global merge.tool vimdiff
```

## Now back to our conflicted project

To use our new powerful merge tool, we simply do:

```c
git mergetool
```

With that, Git takes us to each conflict with a pretty interesting panel layout let us do our thing to resolve them.

![3-way merge in panels containing a base one at the bottom](https://miro.medium.com/v2/resize:fit:560/1*ZGADaqyP3bke8cV05x5lBg.png)

3-way merge in panels containing a base one at the bottom

This screen can be pretty frightening at first. What is all that?

I want you to take a moment to look at each file name. They are on the bottom of each panel.

Keep them in mind, they are very important to distinguish them. Those names may or may not ring a bell to you, but let’s break it down to make it clearer.

Take a look at the top row first. What matters to us are the middle term of each: LOCAL, BASE and REMOTE. Each of them represent a state of our file.

- REMOTE — Our feature branch (`pet-owners` in this case). It shows the incoming changes from the branch that we are trying to merge into `master`;
- LOCAL — Target branch (`master`). Its the current state of the file that we’re trying to merge our changes *into;*
- BASE — Common ancestor. This means that we’re seeing the last most recent commit in which both branches have in their history. That’s before the diverging point. It’s LOCAL and REMOTE’s last identical commit to this file;
- src/lib.rs — Working-tree. It doesn’t have any special term because it is the actual file that currently resides in our file system. We want to apply changes to *this* file in order to resolve conflicts and continue the merge, as we can see by the markers.

At this point we are already pretty knowledgeable of the primary functionalities Vimdiff has to offer and we are aware of what each panel represents. All that’s left is to sort out our project in the desirable way.

Because we are working to fix the bottom file — the one that matters, top ones are references — we’ll keep our cursor on there the entire time, just for the convenience of being on our true file.

First things first, let’s browse through the diffs to get a grasp on what is going on from a macro perspective.

![](https://miro.medium.com/v2/resize:fit:560/1*QxHAXRwl_yAGjjj2FLBqAw.gif)

It’s important to know that `[c` and `]c` **won’t jump specifically through conflicts**. Any change from BASE will be included here. As you can see, the last hunk of change is nothing more than additions to the file and don’t have markers indicating such.

We should keep our eyes open for those *HEAD* and *feature branch* markers that start conveniently highlighted as yellow due to their conflicted nature. There is no default binding for jumping through conflicts though. Plugins like [unimpaired](https://github.com/tpope/vim-unimpaired) offer those bindings for us — but we won’t be using it.

Anyway, we have two conflicts happening on this file. Apparently, our coworkers took preliminary actions while our feature wasn’t ready by tracking which cats are wild with a `is_wild` flag.

We probably won’t need it anymore, so we’re only keeping our changes.

![](https://miro.medium.com/v2/resize:fit:560/1*4psTivN4zWOqlVD5I6yfuA.gif)

As I mentioned before, `diffget` is a versatile command. In the GIF above I did each conflict resolution by different specifications: `REMOTE` and `RE`.

This abbreviation also works for the other buffers as in:

- `LO` for `LOCAL`;
- `BA` for `BASE`;
- `RE` for `REMOTE` as we've already seen.

It saves us nothing more than 2 to 4 characters in these cases, but it is pretty damn convenient they exist and I personally use it all the time.

Once we finish it, just `:wqa` to exit. The intermediate files on the top row are temporary, so don’t worry about saving them to the working-tree by mistake. When we do it, Git immediately takes us to the next conflicted file.

Let’s move on:

![](https://miro.medium.com/v2/resize:fit:560/1*UkUUFVr1vQonMg8K0r_liA.gif)

For the `main.rs` file, we opted for the LOCAL changes instead of ours. Although controversial, it might be more practical for our team to import it all, right?

Our merge went smoothly and our history looks like this:

![](https://miro.medium.com/v2/resize:fit:560/1*nBEXdbNI0KzqlSjt2a0qIg.png)

## Conclusion?

Now that we have mastered Vimdiff and solving conflicts… Oh. Actually there is another matter we need to talk about.

## Is There Anything Out There?

My prompt kind of spoiled it, but let’s stop to do a `git status` for a moment.

![](https://miro.medium.com/v2/resize:fit:560/1*ZoLidBTQGlTviZQXlrinHw.png)

When using `mergetool` command, Git saves a backup of the original conflicted state of the files. We can further ensure it by inspecting it:

```c
<<<<<<< HEAD
use hello_medium::*;
=======
use hello_medium::{Cat, Person};
>>>>>>> pet-owners

fn main() {
    let mut chanel = Cat::new("Chanel");
    let me = Person::new("Edu");

    chanel.assign_owner(me);

    chanel.meow();
}
```

You can see it is the same as it was when we first entered the conflicted file through Vimdiff. Don’t ever commit those files. They are useless for the code base and will do nothing but clutter your work-tree and history altogether.

## How to avoid.orig files

There are ways around it though. We can straight up disable the backup files — which I recommend — by using the following config command:

```c
git config --global mergetool.keepBackup false
```

If you find it useful for some reason, you can simply add below to `.gitignore`:

```c
*.orig
```

I’d love to hear an argument in favor of the `.orig` files though, because I just see them as dirty in my work-tree.

## Conclusion

Now that we have mastered Vimdiff and solving conflicts it is much easier to work around them. I hope this article helps you become more comfortable around those situations, because I had my time where I would paralyze upon causing a conflict.

Git is an amazing tool which forces me to learn something new everyday, and combining it with Vim just makes the whole experience much nicer.

Since I wanted to show you a universal and very minimally configured environment I opted to do this entire article in Vimdiff, but you can also go straight into `nvimdiff` like I do, which is the same tool but using NeoVim as its base.

You can be certain that I’ll be coming back with more on (Neo)Vim, Git, and programming in general. It is simply a delight to just pick a subject and dig into it to later spread everything I learned.

Make sure to follow me so you don’t miss future content, and happy merging!

## More from Eduardo Rodrigues

## Recommended from Medium

[

See more recommendations

](https://medium.com/?source=post_page---read_next_recirc--71df98d4a84c---------------------------------------)