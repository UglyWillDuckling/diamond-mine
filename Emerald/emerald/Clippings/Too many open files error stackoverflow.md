---
source: https://stackoverflow.com/questions/18280612/ioerror-errno-24-too-many-open-files
published: 2013-08-16
created: 2025-01-29
tags:
  - unix
  - open_files
  - solution
related:
  - "[[uname command|uname]]"
  - "[[ulimit command|ulimit]]"
---
I have a **huge file** that I am writing into approximately 450 files. I am getting error as `too many files open`. I searched the web and found some solution but it is not helping.

```py
import resource
resource.setrlimit(resource.RLIMIT_NOFILE, (1000,-1))
>>> len(pureResponseNames) #Filenames 
434
>>> resource.getrlimit(resource.RLIMIT_NOFILE)
(1000, 9223372036854775807)
>>> output_files = [open(os.path.join(outpathDirTest, fname) + ".txt", "w") for fname in pureResponseNames]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IOError: [Errno 24] Too many open files: 'icd9_737.txt'
>>> 
```

I also changed `ulimit` from the command line as below:

```py
$ ulimit -n 1200
$ ulimit -a
core file size          (blocks, -c) 0
data seg size           (kbytes, -d) unlimited
file size               (blocks, -f) unlimited
max locked memory       (kbytes, -l) unlimited
max memory size         (kbytes, -m) unlimited
open files                      (-n) 1200
pipe size            (512 bytes, -p) 1
stack size              (kbytes, -s) 8192
cpu time               (seconds, -t) unlimited
max user processes              (-u) 709
virtual memory          (kbytes, -v) unlimited
$ 
```

I am still getting the same error. PS: I also restarted my system and run the program but with no success.

---

I changed my ulimit to **4096** from 1024 and it worked. Following is the procedure:

Check your num of descriptors limit using:

`ulimit -n`

For me it was 1024, and I updated it to 4096 and it worked.

`ulimit -n 4096`

---

### ==another solution==

sudo vim /etc/security/limits.conf

add

*         hard    nofile      500000
*         soft    nofile      500000
to the file.