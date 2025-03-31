---
source: https://www.makeuseof.com/write-mathematical-notation-obsidian/
author:
  - "[[MUO]]"
published: 2023-07-31
created: 2025-03-18
tags:
  - howto/obsidian/math
related:
  - "[[Probability study]]"
---
Obsidian is a powerful note-taking app that allows you to organize and structure your notes. But what if you need to jot down notes about a subject that involves mathematical formulas?

Mathematical notations are essential in many fields. Luckily, Obsidian has built-in support for math notations. Read on to find out how you can write mathematical notations in Obsidian.

## How to Write Math Notations in Obsidian

Despite their extensive user interfaces, even text editors like Microsoft Word can make inputting mathematical notations difficult. Given Obsidian's lack of a user interface, one might assume writing math in it would be nearly impossible. However, this is untrue.

In reality, writing math in Obsidian is more straightforward than in Word, thanks to its native support for MathJax, a JavaScript library that enables users to input math notations.

![Math syntax in Obsidian](https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/obsidian-math-syntax.jpg)

Thanks to MathJax, you can write math notations in Obsidian effortlessly, without even moving your mouse. All the necessary tools are already available on your keyboard. To begin a math notation, all you have to do is enclose your formula in dollar signs (**$**). Using double dollar signs (**$$**) dedicates an entire line.

![Basic MathJax codes in Obsidian](https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/obsidian-math-codes.jpg)

MathJax uses specific codes for inputting symbols. To type special characters, you can enter the code for a symbol after a backslash (**\\**). When writing math notations, the circumflex (^) indicates a superscript, and the underscore (**\_**) indicates a subscript.

You can efficiently input math formulas in Obsidian by understanding the fundamentals of math syntax and MathJax-specific code. For instance, to input the formula for the area of a circle, you can use the syntax below:

```latex
$$A = \pi r^2$$
```

In this syntax, **\\pi** summons the symbol for pi, and **r^2** displays **r** as a power of two. You can input other Greek characters similarly: a backslash and the symbol's name.

![obsidian-math-fractions](https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/obsidian-math-fractions.jpg)

Another usage of MathJax is typing fractions in Obsidian:

```latex
$$\frac{numerator}{denominator}$$
```

After typing **\\frac** in the syntax, you must include two sets of curly brackets. The content of the first set will be the numerator, while the content of the second set will be the denominator.

![Math notations in Obsidian](https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/obsidian-math-advanced.jpg)

With knowledge of MathJax in Obsidian and the code for a specific symbol, you can also input more complex mathematical symbols such as sum, limit, integral, and much more. You can use math notations with other [Markdown elements in Obsidian](https://www.makeuseof.com/formatting-notes-in-obsidian-a-beginners-guide/).

## Speeding Up Math Notations in Obsidian With the Latex Suite

With practice, typing math notations in Obsidian becomes easier and quicker. However, there is another way to increase speed further.

The Latex Suite plugin makes math even easier. This plugin simplifies the process by listening inside math notations once you initiate one with dollar signs ($), and it quickly replaces snippets with their MathJax form.

You can install Latex Suite as you would [install any Obsidian plugin](https://www.makeuseof.com/install-obsidian-plugins/). It is available both on [GitHub](https://github.com/artisticat1/obsidian-latex-suite) and the Obsidian community plugins page.

![Auto fraction with Latex Suite in Obsidian](https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/auto-fraction-anim.gif)

Once you've installed Latex Suite, enable it from the settings and review the designated snippets. For instance, if you type a slash after a number, Latex Suite automatically initiates a fraction. From there, all you have to do is type the numerator and denominator, press **Tab** to exit the fraction, and continue typing the rest of your expression.

Latex Suite replaces complex MathJax codes with their preview format to simplify your code. Once you move your cursor to the preview inside the code, it'll display the original MathJax code for you to edit. As a result, your MathJax code becomes more concise and easier to navigate.

![Latex Suite settings in Obsidian](https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/latex-suite-settings.jpg)

For more information on Latex Suite's capabilities, visit its GitHub page. If you want to know all the snippets, view the complete snippet code in the plugin's settings inside Obsidian.

## Write Math Efficiently With Obsidian

Writing math notations in Obsidian is not only possible, but with adequate practice, it's actually simpler than on most other platforms. Thanks to Obsidian's native support for MathJax, initiating a math notation only requires you to enclose the formula in dollar signs.

MathJax uses specific codes for inputting symbols, and a knowledge of relevant codes will swiftly bring you up to speed.

The Latex Suite plugin further simplifies the process by automatically replacing snippets with their MathJax form. This plugin replaces complex MathJax codes with their preview format to simplify the code, making it shorter and easier to navigate.