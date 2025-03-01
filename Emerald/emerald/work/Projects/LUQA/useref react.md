---
aliases:
  - useref
---
#react/hook

   useRef  is a built-in user hook in React that allows you to create a **mutable**
  reference to a value that **persists across renders**. 
  
  It is often used to create **references to DOM elements** or to **store mutable state** that should not trigger a `re-render` when it changes.

### **DOM** example

  Here is an example that demonstrates how to use  `useRef`  to create a
  reference to a [[DOM]] element:

```js
    import React, { useRef } from 'react';

    function MyComponent() {
      const inputRef = useRef(null);

      function handleClick() {
        inputRef.current.focus();
      }

      return (
        <div>
          <input type="text" ref={inputRef} />
          <button onClick={handleClick}>Focus input</button>
        </div>
      );
    }
```

  In this example,  `inputRef`  is a reference to the  <input>  element. When
  the  `handleClick`  function is called, it simply calls the  focus  method on
  the  <input>  element using the reference.

### **mutable** state

  Here is an example that demonstrates how to use  useRef  to **store mutable**
  **state**:

```js
    import React, { useRef } from 'react';

    function MyComponent() {
      const countRef = useRef(0);

      function increment() {
        countRef.current++;
      }

      return (
        <div>
          <p>Count: {countRef.current}</p>
          <button onClick={increment}>Increment</button>
        </div>
      );
    }
```

  In this example,  `countRef`  is a **reference** to a number that is initialized
  to 0. When the  increment  function is called, it simply increments the number stored in the reference. 
  Since the reference is not part of the component's state, the component will not re-render when the number is incremented.

___

- [ ] try the second example - mutable state