---
source: "https://phpunit.expert/articles/debugging-performance-in-php.html"
published: 2026-04-23
created: 2026-10-05
tags:
---
![A glowing magnifying glass over a bug symbol, held by a hand, against a dark background of binary code and geometric patterns. A visual metaphor for the disciplined investigation of performance problems.](https://phpunit.expert/img/articles/debugging-von-performance-in-php.jpg)

A glowing magnifying glass over a bug symbol, held by a hand, against a dark background of binary code and geometric patterns. A visual metaphor for the disciplined investigation of performance problems.

*This article is based on a [presentation](https://phpunit.expert/presentations/debugging-performance-in-php.html) I gave for the first time today at the SymfonyLive conference in Berlin.*

"It feels slow."

Few sentences are as common in software development and as unhelpful at the same time. Vague complaints about performance lead to vague attempts at fixing it: guessing where the problem might be, changing code on a hunch, and hoping for the best. This approach wastes time and rarely addresses the actual cause.

What we need instead is a disciplined approach. One that replaces gut feeling with data and turns "it feels slow" into a precise statement about what is slow, why it is slow, and whether our fix actually helped.

Three complementary disciplines give us this precision: tracing, profiling, and benchmarking.

## Tracing: what happened

A trace is a complete, sequential record of every function call that occurs during the execution of a program. It captures which functions were called, in what order, with what arguments, what they returned, and how long each call took. A trace tells the full story of an execution path from beginning to end.

This level of detail is invaluable when you need to understand the actual flow of execution rather than just its aggregate cost. A trace answers questions like: "What sequence of calls led to this state?" or "Why was this function called a thousand times when I expected it to be called once?"

The challenge with traces is their size. A non-trivial application can produce trace files that are millions of lines long. Reading a raw trace file is possible for small programs, but it quickly becomes impractical. This is where visualisation becomes essential.

Flamegraphs are one of the most effective ways to make sense of trace data. In a flamegraph, the x-axis represents aggregated time and the y-axis represents call stack depth. A wide bar means a function consumed a lot of time. Flamegraphs make bottlenecks immediately visible: you look for the widest bars and follow them down the stack to find the root cause.

Flamecharts show the same data differently. Here, the x-axis represents chronological time rather than aggregated cost. This makes flamecharts better suited for understanding when things happened and in what order. If you need to know whether a bottleneck occurs at the beginning or end of a request, or whether a function is called repeatedly during a specific phase, a flamechart will show you.

[Xdebug](https://xdebug.org/) can generate trace data for PHP applications. [Inferno](https://github.com/jonhoo/inferno), a Rust-based toolset, can then turn this trace data into flamegraphs and flamecharts. Together, they form a powerful combination for understanding what your code actually does at runtime.

## Profiling: what cost the most

Where tracing records the full sequence of events, profiling answers a different question: where is the most time being spent? A profiler aggregates execution data and produces a statistical summary. Instead of showing you every single function call in order, it tells you which functions consumed the most CPU time, how many times each function was called, and what the relationship between callers and callees looks like.

Two key metrics in profiling are self time and inclusive time. Self time is the time spent in a function's own code, excluding any functions it calls. Inclusive time includes everything: the function's own code plus all the functions it calls. A function with high inclusive time but low self time is not itself the problem, it is calling something that is. Following the chain of inclusive time from the entry point down to the function with high self time is how you find the actual bottleneck.

Profiling data can be visualised in different ways. A tabular view lets you sort functions by cost and navigate between callers and callees. A directed call graph renders the same data as a visual graph where node size and edge thickness reflect cost. Hot paths become immediately visible as thick, dark lines running through the graph. Both views have their place: tables are better for precise analysis, graphs are better for getting a quick overview and for communicating findings to others.

[Xdebug](https://xdebug.org/) can generate profiling data in the cachegrind format, which can be analysed with tools like [QCacheGrind](https://kcachegrind.github.io/html/Home.html) or visualised as a directed call graph with [gprof2dot](https://github.com/jrfonseca/gprof2dot).

[PHP-SPX](https://github.com/NoiseByNorthwest/php-spx) is a lightweight alternative that takes a different approach: it has lower overhead and ships with a built-in web interface that provides both timeline views and flamegraphs without requiring external tools. Xdebug and PHP-SPX are not mutually exclusive. PHP-SPX is well suited for quick feedback, while Xdebug's cachegrind output integrates with a richer ecosystem of analysis tools for deeper investigation.

## Benchmarking: proving it

Tracing and profiling help you find and understand a performance problem. Benchmarking is what tells you whether your fix actually worked and whether the improvement holds over time.

A benchmark is a controlled, repeatable measurement. It isolates a specific piece of code and measures its execution time under defined conditions. The key word is "controlled": a benchmark that produces different results every time it runs is not useful. Consistent hardware, consistent configuration, sufficient iterations to smooth out variance, and awareness of factors like opcode caching, garbage collection, and external I/O are all necessary to produce results you can trust.

The real power of benchmarking lies in comparison. Running a benchmark before and after a change gives you a concrete answer: "This change made this operation 40% faster" or "This change made no measurable difference." Running benchmarks across commits or releases lets you detect regressions before they reach production. When benchmarks are integrated into continuous integration, performance becomes a property that is actively monitored rather than something that degrades silently.

[Hyperfine](https://github.com/sharkdp/hyperfine) is a command-line tool for benchmarking the execution time of arbitrary commands. It handles warm-up runs, statistical analysis, and comparison between multiple commands.

[PHPBench](https://github.com/phpbench/phpbench/) is specifically designed for benchmarking PHP code at the function or method level, with support for iterations, revolutions, and statistical assertions about the results.

## A coherent workflow

These three disciplines are most powerful when used together as parts of a single workflow rather than as isolated techniques. You observe a perceived slowdown. You capture a trace and visualise it to identify the suspect area. You profile to confirm the cost and pinpoint the exact bottleneck. You implement a fix. You benchmark before and after to prove the improvement and establish a baseline for regression detection.

Each step builds on the previous one and feeds into the next. Tracing narrows the search. Profiling confirms and quantifies. Benchmarking validates and protects. Skipping any of these steps means either guessing at the problem, guessing at the solution, or hoping the fix holds.

Performance debugging should not be a crisis response. It should be a regular part of how we develop software. The tools exist. The workflow is straightforward. The only thing that needs to change is the habit of waiting until something "feels slow" before reaching for them.