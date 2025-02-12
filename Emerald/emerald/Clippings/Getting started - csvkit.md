---
created: 2025-02-12
source: https://csvkit.readthedocs.io/en/latest/tutorial/1_getting_started.html
tags:
  - docs/csvkit
  - tutorial
---

## 1.1. About this tutorial[¶](https://csvkit.readthedocs.io/en/latest/tutorial/#about-this-tutorial "Link to this heading")

There is no better way to learn how to use a new tool than to see it applied in a real world situation. To that end, this tutorial explains how to use csvkit tools by analyzing a real dataset.

The data we will be using is a subset of the **United States Defense Logistic Agency Law Enforcement Support Office’s** (LESO) 1033 Program dataset, which describes how surplus military arms have been distributed to local police forces. This data was widely cited in the aftermath of the Ferguson, Missouri protests. The particular data we are using comes from an [NPR report](https://www.npr.org/2014/09/02/342494225/mraps-and-bayonets-what-we-know-about-the-pentagons-1033-program) analyzing the data.

This tutorial assumes you have some basic familiarity with the command line. If you don’t have much experience, fear not! This has been written with beginners in mind. No prior experience with data processing or analysis is assumed.

## 1.2. Installing csvkit[¶](https://csvkit.readthedocs.io/en/latest/tutorial/#installing-csvkit "Link to this heading")

Not working? Check [Troubleshooting](https://csvkit.readthedocs.io/en/latest/tricks.html#troubleshooting).

If you need to work with [Zstandard](https://facebook.github.io/zstd/) files with the `.zst` extension, install Zstandard support:

```bash
pip install csvkit[zstandard]
```

Do you use Homebrew? You can [install csvkit system-wide](https://formulae.brew.sh/formula/csvkit) with:

## 1.3. Getting the data[¶](https://csvkit.readthedocs.io/en/latest/tutorial/#getting-the-data "Link to this heading")

Let’s start by creating a clean workspace:

```bash
mkdir csvkit_tutorial
cd csvkit_tutorial
```

Now let’s fetch the data:

```bash
curl -L -O https://raw.githubusercontent.com/wireservice/csvkit/master/examples/realdata/ne_1033_data.xlsx
```

## 1.4. [[in2csv]]: the [[Excel]] killer[¶](https://csvkit.readthedocs.io/en/latest/tutorial/#in2csv-the-excel-killer "Link to this heading")

For purposes of this tutorial, I’ve converted this data to Excel format. (NPR published it in CSV format.) If you have Excel you can open the file and take a look at it, but really, who wants to wait for Excel to load? Instead, let’s convert it to a CSV:

You should see a CSV version of the data dumped into your terminal. All csvkit tools write to the terminal output, called “standard out”, by default. This isn’t very useful, so let’s write it to a file instead:

```bash
in2csv ne_1033_data.xlsx > data.csv
```

`data.csv` will now contain a CSV version of our original file. If you aren’t familiar with the `>` syntax, it means “redirect standard out to a file”. If that’s hard to remember it may be more convenient to think of it as “save to”.

We can verify that the data is saved to the new file by using the `cat` command to print it:
```bash
cat data.csv
```

[[in2csv - csvkit]] can convert a variety of common file formats to CSV, including both `.xls` and `.xlsx` Excel files, JSON files, and fixed-width formatted files.

## 1.5. csvlook: data periscope[¶](https://csvkit.readthedocs.io/en/latest/tutorial/#csvlook-data-periscope "Link to this heading")

Now that we have some data, we probably want to get some idea of what’s in it. We could open it in Excel or Google Docs, but wouldn’t it be nice if we could just take a look in the command line? To do that, we can use [csvlook](https://csvkit.readthedocs.io/en/latest/scripts/csvlook.html):

At first the output of [csvlook](https://csvkit.readthedocs.io/en/latest/scripts/csvlook.html) isn’t going to appear very promising. You’ll see a mess of data, pipe character and dashes. That’s because this dataset has many columns and they won’t all fit in the terminal at once. You have two options:

1. Pipe the output to `less -S` to display the lines without wrapping and use the arrow keys to scroll left and right:

```bash
csvlook data.csv | less -S
```

2. Reduce which columns of our dataset are displayed before we look at it. This is what will do in the next section.

## 1.6. [[csvcut - csvkit|csvcut]]: data scalpel[¶](https://csvkit.readthedocs.io/en/latest/tutorial/#csvcut-data-scalpel "Link to this heading")

[csvcut](https://csvkit.readthedocs.io/en/latest/scripts/csvcut.html) is the original csvkit tool. It inspired the rest. With it, we can **select, delete and reorder the columns** in our CSV. First, let’s just see what columns are in our data:

```bash
$ csvcut -n data.csv
  1: state
  2: county
  3: fips
  4: nsn
  5: item_name
  6: quantity
  7: ui
  8: acquisition_cost
  9: total_cost
 10: ship_date
 11: federal_supply_category
 12: federal_supply_category_name
 13: federal_supply_class
 14: federal_supply_class_name
```

As you can see, our dataset has fourteen columns. Let’s take a look at just columns `2`, `5` and `6`:

Now we’ve reduced our output CSV to only three columns.

We can also refer to columns by their names to make our lives easier:

```bash
csvcut -c county,item_name,quantity data.csv
```

## 1.7. Putting it together with pipes[¶](https://csvkit.readthedocs.io/en/latest/tutorial/#putting-it-together-with-pipes "Link to this heading")

Now that we understand [in2csv](https://csvkit.readthedocs.io/en/latest/scripts/in2csv.html), [csvlook](https://csvkit.readthedocs.io/en/latest/scripts/csvlook.html) and [csvcut](https://csvkit.readthedocs.io/en/latest/scripts/csvcut.html) we can demonstrate the power of csvkit’s when **combined** with the standard command-line “pipe”. Try this command:

```bash
csvcut -c county,item_name,quantity data.csv | csvlook | head
```

In addition to specifying filenames, all csvkit tools accept an input file via “standard in”. This means that, using the `|` (“pipe”) character we can **use the output of one csvkit tool as the input of the next**.

In the example above, the output of [csvcut](https://csvkit.readthedocs.io/en/latest/scripts/csvcut.html) becomes the input to [csvlook](https://csvkit.readthedocs.io/en/latest/scripts/csvlook.html). This also allow us to pipe output to standard Unix commands such as `head`, which prints only the first ten lines of its input. Here, the output of [csvlook](https://csvkit.readthedocs.io/en/latest/scripts/csvlook.html) becomes the input of `head`.

**Piping is a core feature of csvkit.** Of course, you can always write the output of each command to a file using `>`. However, it’s often faster and more convenient to use pipes to chain several commands together.

We can also pipe [in2csv](https://csvkit.readthedocs.io/en/latest/scripts/in2csv.html), allowing us to combine all our previous operations into one:

```bash
in2csv ne_1033_data.xlsx | csvcut -c county,item_name,quantity | csvlook | head
```

## 1.8. Summing up[¶](https://csvkit.readthedocs.io/en/latest/tutorial/#summing-up "Link to this heading")

All the csvkit tools work with standard input and output. Any tool can be piped into another and into another. The output of any tool can be redirected to a file. In this way they form a data processing “pipeline” of sorts, allowing you to do non-trivial, repeatable work without creating dozens of intermediary files.

Make sense? If you think you’ve got it figured out, you can move on to [[Examining the data - csvkit, csvstat]].