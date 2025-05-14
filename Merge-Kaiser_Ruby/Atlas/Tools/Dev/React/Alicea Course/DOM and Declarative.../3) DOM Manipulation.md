---
part of:
  - "[[Alicea Course]]"
previous: "[[2) HTML, The Browser, and the DOM]]"
next: "[[4) Conceptual Aside - Imperative vs. Declarative Programming]]"
---
#note/course

## Important
- The [[DOM]] can be `manipulated`
	- changed after it is `rendered`
	- the browser #re-render 's the **DOM**
- Browser [[API]]
	- `appendChild`
	- `getElementById`

![[API]]

## Notes
- the scripts js link needs to be at the bottom of the page, **after** all of the HTML elements have been <mark style="background: #ABF7F7A6;">declared</mark>
- the [[DOM]] is not part of the [[javascript]] itself, it is provided by the [[Browser]]
- `setTimeout` also comes from the [[Browser]] **API**

## API examples
```js
appendChild()
```
> provided by the [[Browser]]

## Real world example

### adding new **DOM** elements dynamically
```html
<html>
	<head></head>
	<body>
		<main id="app">
			<ul id="list">
				<li>One</li>
				<li>Two</li>
			</ul>
		</main>
		<script src="app.js"></script>
	</body>
</html>
```

```js
const listEL = document.getElementById('list')
const newItem = document.createElement('li')
newItem.textContent = 'Item 3'
listEL.appendChild(newItem)
```


## questions

1. How do we manipulate the [[DOM]]
	1. how difficult should it be?
2. Saving work?
