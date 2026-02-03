---
source: https://simpleisbetterthancomplex.com/references/2016/10/10/url-patterns.html
author:
  - "[[Vitor Freitas]]"
published: 2016-10-10
created: 2025-07-05
tags:
  - howto/django
  - urls
about:
  - "[[Django]]"
related:
  - "[[A Complete Beginner's Guide to Django - Part 3]]"
---
[Subscribe to our YouTube Channel!](https://www.youtube.com/VitorFreitas?sub_confirmation=1)  
[\[Jul 12, 2021\] New Video: How to Use Django Rest Framework Permissions (DRF Tutorial - Part 7)](https://youtu.be/Udf4VbtM92Y)

![[~/×/6868de0f6a6453945c46d36cedecb5d5_MD5.jpg|400]] 

The ability to create beautiful and meaningful urls is certainly something I love about the Django Framework. But truth is, it’s very hard to get it right. Honestly I always have to refer to the documentation or to past projects I’ve developed, just to grab the regex I need.

So that’s why I thought about creating this post, to serve as a reference guide for common urls.

---
#### Primary Key AutoField

Regex: `(?P<pk>\d+)`

```python
url(r'^questions/(?P<pk>\d+)/$', views.question_details, name='question_details'),
```

Match

| URL | Captures |
| --- | --- |
| `/questions/0/` | `{'pk': '0'}` |
| `/questions/1/` | `{'pk': '1'}` |
| `/questions/934/` | `{'pk': '934'}` |

Won't match

| URL |
| --- |
| `/questions/-1/` |
| `/questions/test-1/` |
| `/questions/abcdef/` |

---

#### Slug Fields

Regex: `(?P<slug>[-\w]+)`

```python
url(r'^posts/(?P<slug>[-\w]+)/$', views.post, name='post'),
```

Match

| URL | Captures |
| --- | --- |
| `/posts/0/` | `{'slug': '0'}` |
| `/posts/hello-world/` | `{'slug': 'hello-world'}` |
| `/posts/-hello-world_/` | `{'slug': '-hello-world_'}` |

Won't match

| URL |
| --- |
| `/posts/hello world/` |
| `/posts/hello%20world/` |
| `/posts/@hello-world*/` |

---

#### Slug with Primary Key

Regex: `(?P<slug>[-\w]+)-(?P<pk>\d+)`

```python
url(r'^blog/(?P<slug>[-\w]+)-(?P<pk>\d+)/$', views.blog_post, name='blog_post'),
```

Match

| URL | Captures |
| --- | --- |
| `/blog/hello-world-159/` | `{'slug': 'hello-world', 'pk': '159'}` |
| `/blog/a-0/` | `{'slug': 'a', 'pk': '0'}` |

Won't match

| URL |
| --- |
| `/blog/hello-world/` |
| `/blog/1/` |
| `/blog/helloworld1/` |
| `/hello-world-1-test/` |

---

#### Usernames

Regex: `(?P<username>[\w.@+-]+)`

```python
url(r'^profile/(?P<username>[\w.@+-]+)/$', views.user_profile),
```

Match

| URL | Captures |
| --- | --- |
| `/profile/vitorfs/` | `{'username': 'vitorfs'}` |
| `/profile/vitor.fs/` | `{'username': 'vitor.fs'}` |
| `/profile/@vitorfs/` | `{'username': '@vitorfs'}` |

Won't match

| URL |
| --- |
| `/profile/*vitorfs/` |
| `/profile/$vitorfs/` |
| `/profile/vitor fs/` |

---

#### Dates

##### Year

Regex: `(?P<year>[0-9]{4})`

```python
url(r'^articles/(?P<year>[0-9]{4})/$', views.year_archive)
```

Match

| URL | Captures |
| --- | --- |
| `/articles/2016/` | `{'year': '2016'}` |
| `/articles/9999/` | `{'year': '9999'}` |

Won't match

| URL |
| --- |
| `/articles/999/` |

##### Year / Month

Regex: `(?P<year>[0-9]{4})/(?P<month>[0-9]{2})`

```python
url(r'^articles/(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/$', views.month_archive),
```

Match

| URL                  | Captures                          |
| -------------------- | --------------------------------- |
| `/articles/2016/01/` | `{'year': '2016', 'month': '01'}` |
| `/articles/2016/12/` | `{'year': '2016', 'month': '12'}` |
|                      |                                   |

Won't match

| URL                 |
| ------------------- |
| `/articles/2016/1/` |
|                     |

##### Year / Month / Day

Regex: `(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/(?P<day>[0-9]{2})`

```python
url(r'^articles/(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/(?P<day>[0-9]{2})/$', views.article_detail)
```

Match

| URL | Captures |
| --- | --- |
| `/articles/2016/01/01/` | `{'year': '2016', 'month': '01', day: '01'}` |
| `/articles/2016/02/28/` | `{'year': '2016', 'month': '02', 'day': '28'}` |
| `/articles/9999/99/99/` | `{'year': '9999', 'month': '99', 'day': '99'}` |

Won't match

| URL |
| --- |
| `/articles/2016/01/9/` |
| `/articles/2016/01/290/` |

---

#### Flattened Index

```python
url(r'^questions/(?P<pk>\d+)/$', views.question_details, name='question_details'),
url(r'^posts/(?P<slug>[-\w]+)/$', views.post, name='post'),
url(r'^blog/(?P<slug>[-\w]+)-(?P<pk>\d+)/$', views.blog_post, name='blog_post'),
url(r'^profile/(?P<username>[\w.@+-]+)/$', views.user_profile),
url(r'^articles/(?P<year>[0-9]{4})/$', views.year_archive),
url(r'^articles/(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/$', views.month_archive),
url(r'^articles/(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/(?P<day>[0-9]{2})/$', views.article_detail)
```

---

Wanna share some useful URL pattern you use? Leave a comment below and I will update the post!

---

---