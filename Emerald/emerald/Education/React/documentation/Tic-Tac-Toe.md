#react
#javascript 
#tic-tac-toe
#game
## Intro

You will build a small tic-tac-toe game during this tutorial. This tutorial does not assume any existing React knowledge. The techniques you’ll learn in the tutorial are fundamental to building any React app, and fully understanding it will give you a deep understanding of React.

### The tutorial is divided into several sections:

- Setup for the tutorial will give you a starting point to follow the tutorial.
- Overview will teach you the fundamentals of React: components, props, and state.
- Completing the game will teach you the most common techniques in React development.
- Adding time travel will give you a deeper insight into the unique strengths of React.

[[use sandbox locally]]

---

## starter code

The code in App.js creates a component. In React, a component is a piece of reusable code that represents a part of a user interface. Components are used to render, manage, and update the UI elements in your application. Let’s look at the component line by line to see what’s going on:

```jsx
export default function Square() {
  return <button className="square">X</button>;
}
```

 1. The first line defines a function called Square. The export JavaScript keyword makes this function accessible outside of this file. The default keyword tells other files using your code that it’s the main function in your file.
 2. The second line returns a button. The return JavaScript keyword means whatever comes after is returned as a value to the caller of the function. < button > is a JSX element.
	 1. A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display. `className="square"` is a button property or prop that tells CSS how to style the button. X is the text displayed inside of the button and < /button> closes the JSX element to indicate that any following content shouldn’t be placed inside the button.


### passing data


#### square component


`square`
```jsx
function Square() {
  return <button className="square">1</button>;
}
```

**board**
```jsx
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}
```

### interactive

```tsx
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
```

- Each Square has its own state: the value stored in each Square is completely independent of the others. When you call a set function in a component, React automatically updates the child components inside too.

## completing the game

### lifting the state

