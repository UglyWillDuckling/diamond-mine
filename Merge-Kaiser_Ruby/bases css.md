
```
	cssclasses:
    - wide-bases

2. Prefix every rule in the snippet with that class:

  .wide-bases .block-language-base {
    --bases-embed-height: 420px;
  }

  .wide-bases .bases-view[data-view-type="table"] {
    --bases-embed-border-width: 0;
  }
```