#ticket/personal 

- [ ] #task Learn CSS 🔼 ⏳ 2025-03-07 📅 2025-03-01 🆔 BWJi91
	- [[CSS Mastery]]
___
# learn css
https://nikitahl.com/learn-css-by-playing-games

## Flexbox Froggy

```cardlink
url: https://flexboxfroggy.com/
title: "Flexbox Froggy"
description: "A game for learning CSS flexbox"
host: flexboxfroggy.com
image: https://flexboxfroggy.com/images/screenshot.png
```
<mark style="background: #FFB8EBA6;">playing now</mark>

### `justify-content`

 - flex-start: Items align to the left side of the container
 - flex-end: Items align to the right side of the container
 - center: Items align at the center of the container
 - space-between: Items display with equal spacing between them
 - space-around: Items display with equal spacing around them

### `align-items`

- flex-start: Items align to the top of the container.
- flex-end: Items align to the bottom of the container.
- center: Items align at the vertical center of the container.
- baseline: Items display at the baseline of the container.
- stretch: Items are stretched to fit the container.

#### **combination of justify and align**
```css
#pond {
	display: flex;
	justify-content: space-around;
	align-items: end;
}
```
> items are aligned evenly and from the bottom of the page

![[7c9e34f22aae4e0a1a1b81527716debb_MD5.jpg]]

### `flex-direction`

- row: Items are placed the same as the text direction.
- row-reverse: Items are placed opposite to the text direction.
- column: Items are placed top to bottom.
- column-reverse: Items are placed bottom to top.

#### direction **column**

[[~/x/e8c8a9311883beab07df67e9006996eb_MD5.jpg|Open: Screenshot_20250307_123835.jpg]]
![[~/x/e8c8a9311883beab07df67e9006996eb_MD5.jpg]]

#### +justify-content
```css
#pond {
  display: flex;
flex-direction: row-reverse;
justify-content: flex-end;
}
```

Help the frogs find their lilypads using `flex-direction` and `justify-content`.

```css
#pond {
  display: flex;
flex-direction: column;
justify-content: end;
}
```

![[~/x/822882a1bf88e2ad6ac4f2749abe2443_MD5.jpg|500]]


#### 3 props

```css
#pond {
  display: flex;
flex-direction: row-reverse;
justify-content: center;
align-items: end;
}
```
[[~/x/7b97f2fc8b5ea46d9df2c0613857037f_MD5.jpg|Open: Screenshot_20250307_130342.jpg]]
![[~/x/7b97f2fc8b5ea46d9df2c0613857037f_MD5.jpg]]

### `align self`
> Single item prop

 applies to **one** item; same options as [[align-items]]

### `order`

applies to **one** item; accepts an integer, forces the item to be positioned at that location
