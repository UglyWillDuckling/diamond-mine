---
source: "https://stackoverflow.com/questions/72904063/how-to-copy-specific-files-from-directory-into-new-directory-zsh#72904108"
author:
  - "[[codingcatcodingcat                    3511 silver badge55 bronze badges]]"
  - "[[BarmarBarmar                    787k5757 gold badges552552 silver badges663663 bronze badges]]"
  - "[[Diego Torres MilanoDiego Torres Milano                    69.8k99 gold badges116116 silver badges145145 bronze badges]]"
published: 2022-07-07
created: 2025-08-17
tags:
---
##### Collectives™ on Stack Overflow

Find centralized, trusted content and collaborate around the technologies you use most.

[Learn more about Collectives](https://stackoverflow.com/collectives)

Asked

Modified [3 years, 1 month ago](https://stackoverflow.com/questions/72904063/?lastactivity "2022-07-08 08:42:21Z")

Viewed 3k times

This question shows research effort; it is useful and clear

1

Save this question.

Show activity on this post.

I have a list of file names contained within a text file (a.txt). I want to extract from a directory (b) the files listed in **a.txt** to a new directory (c). The syntax of the filenames in **a.txt** and **b** match. The files in **a.txt** are empty and the files in **b** contain the json message of interest.

For example, the contents of **a.txt** look like:

```
ML3DBHCN___005.json
OCO2_L2_Standard___10r.json
GPM_3IMERGM___06.json
```

and **b**:

```
b/ML3DBHCN___005.json
b/OCO2_L2_Standard___10r.json
b/GPM_3IMERGM___06.json
```

Do i need to write a small.sh file that iterates through **a.txt** and extracts from **b** or can this be completed at once via command line?

[Add a comment](https://stackoverflow.com/questions/72904063/# "Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.") |

This answer is useful

2

Save this answer.

Show activity on this post.

If you know the filenames don't contain whitespace or wildcard characters, you can do it as a simple one-liner:

```
cp $(<a.txt) b/
```

If they can contain special characters, you can read them into an array:

```
readarray files <a.txt
cp "${files[@]}" b/
```

3

[Add a comment](https://stackoverflow.com/questions/72904063/# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.") |

This answer is useful

0

Save this answer.

Show activity on this post.

If you want to move from `b` to `c` the files named in `a.txt` (*and they don't have spaces or wildcards*):

```
(cd /path/to/b && mv $(< /path/to/a.txt) /path/to/c/)
```

[Add a comment](https://stackoverflow.com/questions/72904063/# "Use comments to ask for more information or suggest improvements. Avoid comments like “+1” or “thanks”.") |