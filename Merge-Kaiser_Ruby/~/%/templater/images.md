
```dataviewjs
for (const img of dv.current().images) {
  console.log(img);
	dv.paragraph(`![Image|200](${img})`)
}
```