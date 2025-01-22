---
source: https://obsidian.rocks/creating-dynamic-graphs-in-obsidian/
author:
  - "[[Tim Miller]]"
  - "[[Obsidian Rocks]]"
published: 2023-02-10
created: 2025-01-21
tags:
  - graphs
  - visualisation
  - obsidian
  - article
  - howto
related:
  - "[[Plotting Task Completions]]"
---
- [ ] remind me (@2025-01-24) **plan** for the weekend
	- [ ] see about plotting tasks article[[Plotting Task Completions]]
---

Obsidian has an [incredible plugin ecosystem](https://obsidian.rocks/super-powers-for-obsidian-nine-of-the-best-obsidian-plugins/). Not only are the plugins individually impressive, but sometimes they integrate with each other in unexpected and wonderful ways. One of my favorites gives us the ability to create graphs in Obsidian.

This trick involves two [community plugins](https://obsidian.rocks/how-to-use-community-plugins-in-obsidian/): [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) and [Obsidian Charts](https://charts.phibr0.de/). Dataview gives you ability to query almost anything you could want, and Charts allows you to plot that data on a graph. We can get into all *kinds* of trouble if we connect those two things.

On This Page \[[hide](https://obsidian.rocks/creating-dynamic-graphs-in-obsidian/#)\]

- [1 What graphs in Obsidian look like](https://obsidian.rocks/creating-dynamic-graphs-in-obsidian/#What-graphs-in-Obsidian-look-like)
- [2 Basic bar charts in Obsidian](https://obsidian.rocks/creating-dynamic-graphs-in-obsidian/#Basic-bar-charts-in-Obsidian)
- [3 Visualizing writing projects with graphs](https://obsidian.rocks/creating-dynamic-graphs-in-obsidian/#Visualizing-writing-projects-with-graphs)
- [4 Creating a daily habits graph in Obsidian](https://obsidian.rocks/creating-dynamic-graphs-in-obsidian/#Creating-a-daily-habits-graph-in-Obsidian)
- [5 Tracking task completions with graphs](https://obsidian.rocks/creating-dynamic-graphs-in-obsidian/#Tracking-task-completions-with-graphs)
- [6 Tracking the growth of a Zettelkasten with graphs](https://obsidian.rocks/creating-dynamic-graphs-in-obsidian/#Tracking-the-growth-of-a-Zettelkasten-with-graphs)
- [7 In conclusion](https://obsidian.rocks/creating-dynamic-graphs-in-obsidian/#In-conclusion)

## What graphs in Obsidian look like

If you’re like me, you might not get how useful dynamic graphs are until you’re given some concrete examples. Fair enough!

There are all sorts of things you can track in Obsidian using these two plugins. In my own vault, here are a few of the things I use it for:

- Visualizing writing projects
- Tracking daily habits
- Tracking task completions
- Tracking the growth of my Zettelkasten

We’ll talk about each of these in more depth below. For the purposes of this article I’m not going to go into *how* to set up these individual graphs. I’d just like to show you some of what is possible using these two plugins.

## Basic bar charts in Obsidian

In order to create a chart with these plugins, you need to be familiar with *DataviewJS* and *chart.js*.

[DataviewJS](https://blacksmithgu.github.io/obsidian-dataview/queries/dql-js-inline/) is a JavaScript API provided by Dataview. It allows you to query your vault using JavaScript, which gives you a *ton* of power and flexibility. If you know JavaScript, then this should be pretty easy to pick up.

As for *chart.js*, that is the library that Obsidian Charts uses, you can see the [full chart.js documentation here](https://www.chartjs.org/). You can do some incredibly complex things with this library, but we’re going to start simple.

In my experience, the easiest chart to start with is the basic bar chart. Here’s the code required to create a bar chart, and what it looks like in Obsidian:

```
\`\`\`dataviewjs
const labels = ['One', 'Two', 'Three'];
const data = [1, 2, 3];

const chartData = {  
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Numbers',
            data: data
        }]
    }
}

window.renderChart(chartData, this.container);
\`\`\`
```
![A simple bar chart in Obsidian.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/02/image-1.png?resize=768%2C396&ssl=1)

In order to create this type of chart, you need two pieces of data: *labels* and *data*. In the example above, those are stored in the variables called *labels* and *data*. They are both arrays that contain three items, and our chart represents that in the manner above.

The trick is creating those two variables *dynamically* instead of statically. I manually typed out the arrays above, but we can do better, and that is where DataviewJS comes in.

## Visualizing writing projects with graphs

DataviewJS is the key to making *dynamic* graphs in Obsidian. The trick is *formatting* it so that Obsidian Charts can process it.

One way you can use a bar chart is to track the relative sizes of writing projects. This is a quick-and-dirty way to gauge how far along different projects are.

We’ll start by fetching notes with a certain tag in them:

```
const tagPages = dv.pages('#writing/idea');
```

Next we need to format the data for the chart. To do that, we create two different arrays and use a loop:

```
var labels = [],
    wordCount = [];

// Loop through every note and add data to the above arrays
tagPages.forEach(note => {
    // add the name of the note
    labels.push(note.file.name);
    // add the word count for the note
    wordCount.push(note.file.size);
});
```

Then we use that data in our chart:

```
const chartData = {  
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'File Size',
            data: wordCount
        }]
    }
}

window.renderChart(chartData, this.container);
```

In my own vault, the results of that code look something like this:

![A dynamic bar chart in Obsidian that shows the relative lengths of articles I've been writing.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/02/image-2.png?resize=768%2C396&ssl=1)

Pretty neat, eh? You can use this same code to display any of the [built in values that Dataview indexes](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-pages/).

## Creating a daily habits graph in Obsidian

Another great use for graphs in Obsidian is tracking daily habits.

There are a few more prerequisites for this one:

- You must be using the core [Daily Notes](https://obsidian.rocks/supercharge-your-daily-notes-in-obsidian/ "Daily Notes") plugin
- You must add your own metadata to each note

I add the metadata to a *template* for my daily notes, which looks something like this:

```
## Daily Questions
Today did I...
- Read::0
- Workout::0
- Pray::0

## Journal Entries
```

> *Note:* Dataview allows you to create *metadata* by adding two colons after any text. Examples above include “Read”, “Workout”, and “Pray”, all of which have the value “0”. To complete a habit, I change the 0 to a 1.

Once you have this metadata in your notes, you can start to pull it into graphs.

There are a couple of different ways you can visualize this information. If you have multiple habits you want to track, then perhaps the simplest method would be to use a bar chart:

![An example bar chart showing habit completions.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/02/image-3.png?resize=768%2C364&ssl=1)

Uh oh: looks like I better get back on my workout game.

I also like a line chart for habits. You can either design the chart to be cumulative, or you can do a “streak counter”, where your progress goes back to zero if you miss a day (I find this method is more motivating):

![An example streak counter in Obsidian.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/02/image-4.png?resize=768%2C364&ssl=1)

My longest streak this year is only eight days: another thing I should try to improve!

These two graphs are more complicated to set up, but it’s a great way to visualize how consistent you are at completing habits over time.

See [Streamline Your Day: Enhance Focus and Productivity with RescueTime and Obsidian](https://obsidian.rocks/streamline-your-day-enhance-focus-and-productivity-with-rescuetime-and-obsidian/) if you want to set up this kind of a graph.

![An example of a RescueTime bar graph in Obsidian.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/07/Screenshot-from-2023-07-07-11-25-03.png?resize=1024%2C849&ssl=1)

## Tracking task completions with graphs

I’m a big fan of [managing tasks in Obsidian](https://obsidian.rocks/how-to-manage-tasks-in-obsidian/). One reason why is the *flexibility* that Obsidian provides. You can fine-tune your task system to work exactly how you want it to work.

You can also create your own custom data visualizations. For task management, I’m a big fan of tracking *task completions over time*. This allows you to get a rough idea of whether your task system is working or not.

I like to track both *daily* task completions and *monthly*. I find both of these visualizations useful, and I reference them frequently:

![An example graph that shows completed tasks in Obsidian.](https://i0.wp.com/obsidian.rocks/wp-content/uploads/2023/02/image-5.png?resize=768%2C747&ssl=1)

Learn how to make this graph in [Plotting Task Completions with DataviewJS and Obsidian Charts](https://obsidian.rocks/plotting-task-completions-with-dataviewjs-and-obsidian-charts/).

## Tracking the growth of a Zettelkasten with graphs

A while back I wrote about [Getting Started with Zettelkasten](https://obsidian.rocks/getting-started-with-zettelkasten-in-obsidian/). When I started building a Zettelkasten, I wanted a concrete way to visualize how my atomic notes grew over time. To do that, I turned to charts.

I ended up with two charts: one is cumulative and the other is a daily report. Here’s what each looks like:

![Zettelkasten analytics in Obsidian.](https://i0.wp.com/forum.obsidian.md/uploads/default/original/3X/c/9/c9f54706d675588ab4d0716be9be2861758f5b40.png?ssl=1)

In this case I also added a *table* above the graphs that gives me more direct access to recently created notes. I find this useful, as there’s no way to *explore* notes within the graphs. They are strictly visualizations.

For more details, see [A Graph for Zettelkasten: Measuring growth in Obsidian](https://obsidian.rocks/a-graph-for-zettelkasten-measuring-growth-in-obsidian/).

## In conclusion

Dynamic graphs can be a little complex to set up, but they’re a great way to get extra value out of all the data you’re creating within your vault. Hopefully this article has given you some ideas for how graphs could help in *your* vault.

If you want more details about any of the above graphs, let me know, and we can provide a deeper dive into the details.

We won't send you spam. Unsubscribe at any time.