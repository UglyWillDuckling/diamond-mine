---
source: https://www.thepythoncodingstack.com/p/telling-the-truthy-python-truthiness-falsiness
author:
  - "[[Stephen Gruppetta]]"
published: 2024-01-24
created: 2025-05-29
tags:
  - article/python
about:
  - "[[python language]]"
---
### There's more to true and false in Python than the Boolean \`True\` and \`False\`.

I always tell the truth. Of course I do! I'm even uncomfortable with those untruths we tell children.

> "Does Father Christmas exist?"
> 
> "What do you think? I never actually saw him but there are presents under the tree on Christmas morning. How do you think they got there?"

There's nothing untrue in my response, you see.

And sometimes, there are untruths that educators say to learners—not because they want to deceive or trick them but because the truth is too complex. The simpler "untruth" is easier to explain.

When I'm teaching a beginners' course, and I'm introducing the `if` statement or the `while` loop, I find myself using phrases such as:

> " `if` needs to be followed by something that Python understands as true or false."

Of course, it's simpler to say that `if` must be followed by `True` or `False`. But that would be an untruth. The `if` keyword can be followed by *any* object or expression. An expression evaluates to an object, and Python can 'understand every object as true or false' when used in a Boolean context. We use the quaint terms *truthy* and *falsy* to describe whether Python understands an object as true or false. I'll clarify these terms a bit later.

A few weeks ago, I asked about your views on displaying code in these articles. The options were either using images with properly formatted code with syntax highlighting (with links to GitHub Gists for longer ones to facilitate copy-paste) or Substack’s native option, with no control on formatting or syntax highlighting. The overwhelming majority of those who responded chose the properly formatted image snippets. And I agree.

I’m trying a variation of this setup starting from this article. The code is still in the same image snippets (created using [Snappify](https://snappify.com/), the brilliant tool by and Anki). However, instead of linking longer blocks to a Gist, I have an appendix with all the code in Substack’s native code blocks at the end of the article, which you can use to copy and paste (although I recommend typing the code in directly–it’s better and probably quicker!) Each code block is numbered, so you can easily find the one you need at the bottom.

## Truthiness and Falsiness

Let's start with the built-in `bool()`, which you can use to convert any object into a Boolean.

We tend to think of `bool()` as a function. However, `bool` is the class name. Therefore, `bool()` is the constructor that creates an instance of `bool` from its argument. But this is just a detail, and it's not essential for our discussion here. So let's move on.

Let's look at a few short examples to confirm this:

All code blocks are available in text format at the end of this article • #1

Every integer except for `0` is converted to `True` when you cast it to a Boolean using `bool()`. Therefore, every non-zero integer is truthy and `0` is falsy. We can extend this idea to all numeric types, not just integers. For example, `0.0` is falsy but any other float is truthy.

When Python needs to 'understand an object as true or false', it will use the value returned by `bool()` to determine what to do.

For objects that have a length (these are called *sized* objects), the object is falsy if its length is `0` and truthy for any non-zero length:

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/714b4ad2-cdfc-4f9d-a33e-cffdcae72c5b_1200x1092.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:1092,%22width%22:1200,%22resizeWidth%22:null,%22bytes%22:53264,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

#2

You can try this with other sized objects such as strings, tuples, dictionaries, and sets. These data structures are falsy when they're empty and truthy when non-empty.

And there's another object that's always falsy: `None`.

## User-Defined Classes, Truthiness, and Falsiness

How about other objects that are not numeric and don't have a length?

Let's create a simple class and test it:

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/57c2a8ea-9c81-47f1-875b-f4816c9930bd_1200x756.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:756,%22width%22:1200,%22resizeWidth%22:null,%22bytes%22:37337,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

#3

Every object is truthy by default. However, you can override this default behaviour. You can determine an object's truthiness or falsiness by defining the `__bool__()` special method in the class definition:

```python
class TestTruth:
	def __bool__(self):
		return False

test = TestTruth()

if test:
	print("YAY)
else:
	print("NAY")

"NAY"

bool(test)
False
```

#4

The class now has a `__bool__()` special method. In this example, this special method always returns `False`. All instances of this class will now be falsy.

The `__bool__()` special method can have some additional logic, of course:

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/4cfba438-5fb9-4cd3-b2aa-6001c6e47caa_1200x588.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:588,%22width%22:1200,%22resizeWidth%22:null,%22bytes%22:51680,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

#5

You added the `__init__()` special method and a data attribute `.person`. Instances of this class are now truthy if the person's name is `"Stephen"` and falsy for any other name. I realise this is a touch too egocentric! Apologies.

But there's another way to control truthiness or falsiness without defining the `__bool__()` special method. You can define `__len__()`, which makes the objects *sized* —they have a length:

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/fa7781d0-11e6-4500-8feb-e1211b5c2682_1200x672.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:672,%22width%22:1200,%22resizeWidth%22:null,%22bytes%22:57500,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

#6

You've set the length of a `TestTruthiness` object to the same value as its `.person` data attribute—in this case, this is the only attribute this class has!

In this example, the objects representing people with names `"Stephen"` and `"Jane"` are both truthy. All names are truthy. But if the empty string is used instead of a person's name, the `TestTruthiness` object is falsy.

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/39cad498-f3f8-44c0-a2c9-089ec189c435_800x400.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:400,%22width%22:800,%22resizeWidth%22:null,%22bytes%22:87797,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:%22https://thepythoncodingplace.thinkific.com/memberships/the-python-coding-place-membership%22,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

## Some Other 'Unexpected' Consequences of Truthiness and Falsiness

Let me start with an example:

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/6688c85b-db83-408c-bb86-4d5acf33d8bb_1200x378.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:378,%22width%22:1200,%22resizeWidth%22:null,%22bytes%22:34466,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

#7

What's unexpected about this? We've seen that `first_list` is falsy since it's an empty list. And `second_list` is truthy since it's not empty. You use an expression with `or` in the `if` statement, and since one of the lists is truthy, the `if` block is executed.

But what does the expression `first_list or second_list` return? No, it doesn't return `True`:

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/cb683292-0591-4e61-b557-2ad233600f14_1200x210.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:210,%22width%22:1200,%22resizeWidth%22:null,%22bytes%22:9989,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

#8

The expression starts with `first_list`, which is falsy. The `or` expression is looking for at least one truthy value. Therefore, it moves on to the object after the `or` keyword, `second_list`. And this is truthy. So, the `or` expression returns this object. It doesn't need to return `True` since it returns a truthy value, and that's good enough!

What if the truthy object came before the `or` keyword?

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/d32fd063-ce0f-4e32-b6f5-913928fc68dd_1200x210.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:210,%22width%22:1200,%22resizeWidth%22:null,%22bytes%22:10011,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

#9

You get the same output. But in this case, the first object is truthy and `or` only needs one truthy object. So, the `or` expression doesn't bother looking at what comes after the `or` keyword.

Do you want proof?

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/4f5c9e7a-2078-4bdf-b943-f61885e126d3_1200x210.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:210,%22width%22:1200,%22resizeWidth%22:null,%22bytes%22:12600,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

#10

And why is this 'weird'? Because the expression after the `or` should raise an error:

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/2a32db44-680f-4ed6-83ff-21eac7b30c72_1200x294.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:294,%22width%22:1200,%22resizeWidth%22:null,%22bytes%22:33977,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

#11

The string `"hello"` can't be converted into an integer. But when `int("hello")` is used after the `or` keyword in `second_list or int("hello")`, the expression after the `or` is never executed.

And what happens if both objects in an `or` expression are falsy?

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/b51e5179-256f-4899-8494-c024556d0a9c_1200x210.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:210,%22width%22:1200,%22resizeWidth%22:null,%22bytes%22:5052,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

#12

The first object is checked first. The integer `0` is falsy. The expression is looking for at least one truthy object. So, the second object is checked. The empty list `[]` is also falsy. But the expression doesn't need to return `False`. Instead, it returns the last element, which is falsy. That's good enough in any Boolean context in Python.

Let's summarise:

- The `or` expression returns the first object if it's truthy.
- But if the first object is falsy, the second object is returned, whatever the second object is. If the second object is falsy, then the whole expression is falsy. But if the second object is truthy, then the whole expression is truthy.

We can follow a similar logic with `and`. An `and` expression needs both objects to be truthy. So, if the first object is falsy, the expression returns this first object immediately, without evaluating the second object:

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/d0471b75-5aee-4c41-856d-4043ea299c5b_1200x294.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:294,%22width%22:1200,%22resizeWidth%22:null,%22bytes%22:13575,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

#13

There's no error raised in the second of these examples since the first object is falsy and returned immediately.

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/07838b68-19f1-4a53-a93e-f1d2576e91c3_1200x294.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:294,%22width%22:1200,%22resizeWidth%22:null,%22bytes%22:35900,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

#14

But when the first object is truthy, the `and` expression moves to whatever comes after the `and` keyword. This raises an error.

If the first object is truthy in an `and` expression, the second object is always returned, whether it's truthy or falsy:

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/7f543790-1681-4b3b-954b-6592ba5c6bb7_1200x294.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:294,%22width%22:1200,%22resizeWidth%22:null,%22bytes%22:12080,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

#15

This type of behaviour with `or` and `and` is known as *short-circuit evaluation*. Now it's your turn to play with `or` and `and` expressions and truthy and falsy objects.

## And Some Facts About True And False

This article is not about the Boolean data type and its two instances, `True` and `False`. But let me finish with a bit of trivia about these objects:

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/0a673cbe-c450-49db-9891-d59bd12e379e_1488x504.png%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:493,%22width%22:1456,%22resizeWidth%22:null,%22bytes%22:34173,%22alt%22:null,%22title%22:null,%22type%22:%22image/png%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

#16

The `bool` class is a subclass of `int`. Therefore, `True` is equal to `1` and `False` is equal to `0`. This is why `True + True` is the same as `1 + 1` (and I don't need to tell you that gives `2`). Multiplying by `False` is the same as multiplying by `0`. And since dictionaries must have unique keys, when you create the key `True`, it overrides the value of the previous key `1` since `True` is equal to `1`.

Note that `True` and `1` are not the same object, but they have the same value. `True is 1` gives `False`, which shows they're not the same object. But `True == 1` gives `True`, showing they are equal.

## Final Words

How complex can the notion of true or false be? When you extend the definition of true and false to include truthiness and falsiness, there's a bit more than meets the eye.

I hereby confirm that, to the best of my knowledge, I have provided you with the truth, the whole truth, and nothing but the truth in this article.

![](https://www.thepythoncodingstack.com/p/%7B%22src%22:%22https://substack-post-media.s3.amazonaws.com/public/images/70d03953-614d-44e0-aa33-45a0ffde8378_1024x1024.webp%22,%22srcNoWatermark%22:null,%22fullscreen%22:null,%22imageSize%22:null,%22height%22:1024,%22width%22:1024,%22resizeWidth%22:614,%22bytes%22:1090174,%22alt%22:null,%22title%22:null,%22type%22:%22image/webp%22,%22href%22:null,%22belowTheFold%22:true,%22topImage%22:false,%22internalRedirect%22:null,%22isProcessing%22:false,%22align%22:null%7D)

*Code in this article uses Python 3.12*

---

---

### Stop Stack

### #49

- If you like my style of communication and the topics I talk about, you may be interested in [The Python Coding Place](https://thepythoncodingplace.com/). This is my platform where I have plenty of video courses (with plenty more coming over the coming months), a community forum, weekly videos, and coming soon, live workshops and cohort courses. *Any questions, just reply to this email to ask.*
- If you read my articles often, and perhaps my posts on social media, too, you've heard me talk about The Python Coding Place several times. But you haven't heard me talk a lot about is [Codetoday Unlimited](https://codetodayunlimited.com/), a platform for teenagers to learn to code in Python. The beginner levels are free so everyone can start their Python journey. If you have teenage daughters or sons, or a bit younger, too, or nephews and nieces, or neighbours' children, or any teenager you know, really, send them to Codetoday Unlimited so they can start learning Python or take their Python to the next level if they've already covered some of the basics.
- **Recently published articles on The Python Coding Stack:**
	- **[My Neighbours Are Moving House • Mutating The Immutable Tuple (Sort Of)](https://www.thepythoncodingstack.com/p/mutating-the-immutable-python-tuples)** Tuples are immutable, but their contents can change. Eh?! Let me tell you the story of my neighbours moving house, and all will make sense
	- **[Put On Your Deerstalker. You're Now a Detective. It's Time For Debugging](https://www.thepythoncodingstack.com/p/deerstalker-python-debugging-detective)** Debugging Python Code Is Like Detective Work
	- **[Why Can't I Just Use A List? • Understanding NumPy's](https://www.thepythoncodingstack.com/p/python-numpy-ndarray-primer-numpy-for-numpties)** `ndarray` (A NumPy for Numpties article) From Python's native lists to NumPy's `ndarray` data type, with a glimpse at the built-in `array`. Why do we need all these similar data structures?
	- **[next(years)](https://www.thepythoncodingstack.com/p/end-of-year-review-2023-and-turtle-animation)** An end-of-year post • Some reflections • And there's some Python stuff in this post, too—a spinning globe animation
	- **[Do Not Try This At Home](https://www.thepythoncodingstack.com/p/do-not-try-this-at-home)** A bit of silliness for the holiday season • But please, don't code like this. Please • Plus some out-of-the-norm commentary • There's nothing ordinary about today's article
- **Recently published articles on Breaking the Rules**, my other substack about narrative technical writing:
	- **[The South Park Technical Writing Manual (Ep. 14)](https://breakingtherules.substack.com/p/the-south-park-technical-writing)** What can we learn from South Park? Yes, the satirical TV show
	- **[I Haven't Been Abducted by Aliens (Ep. --)](https://breakingtherules.substack.com/p/i-havent-been-abducted-by-aliens)** Why this long lull since the last Breaking The Rules post?
	- **[The Selfish Reason (Ep. 13)](https://breakingtherules.substack.com/p/the-selfish-reason-ep-13)** Another reason for authors to innovate • Enjoying the writing process
	- **[The Consequential Detail (Ep. 12).](https://breakingtherules.substack.com/p/the-consequential-detail-ep-12)** Can a single letter or one blank line make a difference? (Spoiler Alert: Yes)
	- **[The Unexpected Audience (Ep. 11).](https://breakingtherules.substack.com/p/the-unexpected-audience-ep-11)** What I'm learning from listening to Feynman's physics lectures
- **Stats on the Stack**
	- Age: 9 months, 2 weeks, and 1 day old
	- Number of articles: 49
	- Total subscribers: 1,909
		- On the *Paid* tier: 95
- Each article is the result of years of experience and many hours of work. Hope you enjoy each one and find them useful. If you're in a position to do so, you can support this Substack further with a paid subscription. In addition to supporting this work, you'll get access to the full archive of articles. Alternatively, if you become a member of [The Python Coding Place](https://thepythoncodingplace.thinkific.com/memberships/the-python-coding-place-membership), you'll get access to all articles on The Stack as part of that membership. Of course, there's plenty more at The Place, too.

---

## Appendix: Code Blocks

##### Code Block #1

```markup
# Auto-generated from an interactive REPL/Console session
if 5:
    print("Yay")
else:
    print("Nay")
   
# Yay
​
if 0:
    print("Yay")
else:
    print("Nay")
   
# Nay
​
bool(5)
# True
bool(0)
# False
```

##### Code Block #2

```markup
# Auto-generated from an interactive REPL/Console session
if [1, 2]:
    print("Yay")
else:
    print("Nay")
   
# Yay
​
if []:
    print("Yay")
else:
    print("Nay")
   
# Nay
​
len([1, 2])
# 2
bool([1, 2])
# True
​
len([])
# 0
bool([])
# False
```

##### Code Block #3

```markup
# Auto-generated from an interactive REPL/Console session
class TestTruthiness:
    pass
​
test = TestTruthiness()
​
if test:
    print("Yay")
else:
    print("Nay")
   
# Yay
​
bool(test)
# True
```

##### Code Block #4

```markup
# Auto-generated from an interactive REPL/Console session
class TestTruthiness:
    def __bool__(self):
        return False
​
​
test = TestTruthiness()
​
if test:
    print("Yay")
else:
    print("Nay")
   
# Nay
​
bool(test)
# False
```

##### Code Block #5

```markup
# Auto-generated from an interactive REPL/Console session
class TestTruthiness:
    def __init__(self, person):
        self.person = person
    def __bool__(self):
        return self.person == "Stephen"
​
bool(TestTruthiness("Stephen"))
# True
bool(TestTruthiness("Jane"))
# False
```

##### Code Block #6

```markup
# Auto-generated from an interactive REPL/Console session
class TestTruthiness:
    def __init__(self, person):
        self.person = person
    def __len__(self):
        return len(self.person)
​
bool(TestTruthiness("Stephen"))
# True
bool(TestTruthiness("Jane"))
# True
bool(TestTruthiness(""))
# False
```

##### Code Block #7

```markup
# Auto-generated from an interactive REPL/Console session
first_list = []
second_list = [5, 10]
if first_list or second_list:
    print("At least one of the lists is not empty")
   
# At least one of the lists is not empty
```

##### Code Block #8

```markup
# Auto-generated from an interactive REPL/Console session
first_list or second_list
# [5, 10]
```

##### Code Block #9

```markup
# Auto-generated from an interactive REPL/Console session
second_list or first_list
# [5, 10]
```

##### Code Block #10

```markup
# Auto-generated from an interactive REPL/Console session
second_list or int("hello")
# [5, 10]
```

##### Code Block #11

```markup
# Auto-generated from an interactive REPL/Console session
int("hello")
# Traceback (most recent call last):
#   File "<input>", line 1, in <module>
# ValueError: invalid literal for int() with base 10: 'hello'
```

##### Code Block #12

```markup
# Auto-generated from an interactive REPL/Console session
0 or []
# []
```

##### Code Block #13

```markup
# Auto-generated from an interactive REPL/Console session
0 and 10
# 0
0 and int("hello")
# 0
```

##### Code Block #14

```markup
# Auto-generated from an interactive REPL/Console session
10 and int("hello")
# Traceback (most recent call last):
#   File "<input>", line 1, in <module>
# ValueError: invalid literal for int() with base 10: 'hello'
```

##### Code Block #15

```markup
# Auto-generated from an interactive REPL/Console session
10 and [2, 3]
# [2, 3]
10 and []
# []
```

##### Code Block #16

```markup
# Auto-generated from an interactive REPL/Console session
True + True
# 2

25 * False
# 0

some_dict = {1: "This is the integer 1", True: "This is the Boolean True"}
some_dict[1]
# 'This is the Boolean True'
```