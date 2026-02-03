---
author:
  - "[[Pavel Laptev]]"
created: 2025-12-08
published: 2025-09-21
source: https://blog.gitbutler.com/responsive-item-counter-css
tags:
  - article/css
  - howto/css
category:
  - "[[CSS]]"
  - "[[Article]]"
  - "[[How To]]"
---

Learn to create dynamic "+X more" counters that update automatically without JavaScript, using CSS Container Queries, Custom Properties, and Counters for responsive components that adapt to container width.

![[~/×/aed103a3e574b24e6708af9cb8baf4d4_MD5.jpg]]

How many times have you built a component that displays a list of items with a "+X more" indicator? The typical approach involves JavaScript event listeners, ResizeObserver APIs, and manual calculations to track container dimensions and update the counter accordingly.

At GitButler, we recently launched a new Agents tab where we needed a clean way to display lists of tool calls while limiting visible items based on available space. The challenge? There could be hundreds of these call groups, and we didn't want to manage resize event listeners for each one. The solution? A pure CSS approach that's more elegant, performant, and updates automatically without any JavaScript.

![[~/×/7861e6b82daca706c652b8ec6f9ca135_MD5.gif]]

<video src="https://d2m1ukvwmu7gz4.cloudfront.net/gb-app-tools-resize.mp4" width="800" height="600" controls="">Your browser does not support the video tag.</video>

GitButler app. Responsive item counter in action

## The Magic Behind the Counter

This technique combines three modern CSS features to create something that feels like magic. **CSS Container Queries** provide responsive breakpoints based on component width rather than viewport size. **CSS Custom Properties** act as a bridge for passing data between JavaScript and CSS layers. Finally, **CSS Counters** handle the mathematical calculations needed to display the correct "+X more" count.

The result? A component that shows a limited number of items initially, hides additional items based on container width, and displays a dynamic "+X more" counter that updates automatically—all without JavaScript handling the responsive behavior.

## How It Works

The architecture separates concerns cleanly between JavaScript and CSS. On the JavaScript side, we establish the basic parameters and prepare the initial display:

```javascript
JAVASCRIPTconst totalItems = 8;
const displayLimit = 5;
const itemsToDisplay = items.slice(0, displayLimit);
const baseHiddenCount = Math.max(0, totalItems - displayLimit);
```

This is all the JavaScript logic we need—no event listeners or resize observers required. The real intelligence happens in the CSS layer.

The markup structure is straightforward, using CSS custom properties to communicate between JavaScript and CSS:

```javascript
SVELTE<div class="items-list" style="--base-hidden: {baseHiddenCount}">
    {#each itemsToDisplay as item, idx}
        <div class="item" class:hidable={totalItems >= displayLimit}>
            <span class="name">{item.name}</span>
        </div>
    {/each}

    <!-- Check if we need to show the counter -->
    {#if totalItems >= displayLimit}
        <span class="more-text">+<span class="count"></span> more</span>
    {/if}
</div>
```

Notice how the `--base-hidden` CSS custom property passes the base hidden count to CSS, while the `hidable` class marks items that can be hidden responsively. The `.count` element will be populated entirely by CSS calculations.

An important detail: we use `totalItems >= displayLimit` rather than `totalItems > displayLimit` for the `hidable` class and counter visibility. This ensures that even when all items fit initially (making `baseHiddenCount` zero), the counter can still appear and update correctly when responsive hiding kicks in due to container width constraints.

Now for the responsive magic. Container queries allow us to hide items based on the component's width rather than the entire viewport:

```javascript
CSS@container demo-container (max-width: 550px) {
  .items-list {
    --hidden-items: 1; /* Track responsive hiding */
  }
  .hidable.item:nth-child(4) {
    display: none; /* Hide specific item */
  }
}

@container demo-container (max-width: 440px) {
  .items-list {
    --hidden-items: 2;
  }
  .hidable.item:nth-child(3) {
    display: none;
  }
}
```

Each breakpoint serves a dual purpose: it sets `--hidden-items` to track how many items are hidden responsively, and it hides specific items using `:nth-child()` selectors. Since CSS cannot perform arithmetic operations directly, we use the custom property to pass the count of hidden items. Only items with the `hidable` class are affected by these responsive rules—we can't use conditional rendering because `:nth-child()` selectors require actual DOM elements to count.

The final piece brings everything together through CSS counters:

```javascript
CSS.count::after {
  content: counter(hidden-count);
  counter-reset: hidden-count calc(var(--base-hidden) + var(--hidden-items, 0));
}
```

The counter automatically calculates the total hidden count by combining the base hidden items (set by JavaScript) with the responsively hidden items (set by CSS). Since the `content` property only works with strings and cannot perform arithmetic directly, we use `counter-reset` with `calc()` to achieve the mathematical calculation.

To provide a clean user experience, the counter is automatically hidden when there are no hidden items:

```javascript
CSS/* Hide by default when base-hidden is 0 */
.items-list[style*='--base-hidden: 0'] .more-text {
  display: none;
}
```

This ensures that "+0 more" never appears—the counter only shows when there are actually hidden items, whether due to the initial display limit or responsive behavior.

This approach delivers significant performance advantages. There are no JavaScript event listeners or ResizeObserver overhead, no DOM manipulation for hiding and showing items, and the pure CSS calculations are highly optimized by the browser with automatic updates without manual state management.

You can extend this pattern with additional sophisticated features. For content-aware hiding, you might want to hide items based on their content characteristics rather than just position:

```javascript
CSS.hidable.item[data-length='long']:nth-child(n + 3) {
  display: none;
}
```

Adding smooth animations creates a more polished user experience. Instead of items disappearing abruptly, they can fade out gracefully:

```javascript
CSS.hidable.item {
  transition: opacity 0.2s ease;
}

@container demo-container (max-width: 550px) {
  .hidable.item:nth-child(4) {
    opacity: 0;
    pointer-events: none;
  }
}
```

This approach maintains the layout while providing visual feedback that items are being hidden due to space constraints.

## Try It Yourself

Explore the interactive demo: [Responsive Item Counter REPL](https://svelte.dev/playground/101b9531838d40ef8414fb3ad4877613?version=5.39.3)

Oh, and did we mention this technique is also *coincidentally* powering some shiny new features in GitButler? 😉 [Download GitButler](https://gitbutler.com/downloads) to see what we've been cooking up.

Written by

Quack! A digital designer who loves open source. Flaps around making interfaces nice and helps the design and frontend pond whenever he can.

[Website](https://pavellaptev.github.io/) | [Bluesky](https://bsky.app/profile/pavellaptev.bsky.social)

### Table of Contents

- [The Magic Behind the Counter](https://blog.gitbutler.com/#the-magic-behind-the-counter)
- [How It Works](https://blog.gitbutler.com/#how-it-works)
- [Advanced Enhancements](https://blog.gitbutler.com/#advanced-enhancements)
- [Try It Yourself](https://blog.gitbutler.com/#try-it-yourself)