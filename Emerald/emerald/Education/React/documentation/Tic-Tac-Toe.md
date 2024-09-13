#react
#javascript 
#tic-tac-toe
#game

[link](https://react.dev/learn/tutorial-tic-tac-toe)
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
> By this point, you have all the basic building blocks for your tic-tac-toe game. To have a complete game, you now need to alternate placing “X”s and “O”s on the board, and you need a way to determine a winner.

### lifting the state

Currently, each Square component maintains a part of the game’s state. To check for a winner in a tic-tac-toe game, the Board would need to somehow know the state of each of the 9 Square components.

How would you approach that? At first, you might guess that the Board needs to “ask” each Square for that Square’s state. Although this approach is **technically possible** in React, we discourage it because the code becomes difficult to understand, susceptible to bugs, and hard to refactor. Instead, the best approach is to store the game’s state in the parent Board component instead of in each Square. The Board component can tell each Square what to display by passing a prop, like you did when you passed a number to each Square.

```jsx
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    // ...
  );
}
```

....

```jsx
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    // ...
  
```

The `handleClick` function creates a copy of the squares array (**nextSquares**) with the JavaScript `slice()` Array method. Then, `handleClick` updates the **nextSquares** array to add **X** to the first ([0] index) square.

Calling the `setSquares` function lets React know the state of the component has **changed**. This will trigger a **re-render** of the components that use the squares state (`Board`) as well as its **child components** (the **Square** components that make up the board).

> [!NOTE] Note
> JavaScript supports closures which means an inner function (e.g. handleClick) has access to variables and functions defined in a outer function (e.g. Board). The handleClick function can read the squares state and call the setSquares method because they are both defined inside of the Board function.

---

```jsx
import { useState } from 'react'

function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick}>{value}</button>
  )
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i) {
    const nextSquares = squares.slice()
    nextSquares[i] = 'X'
    setSquares(nextSquares)
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

```

Now that your state handling is in the Board component, the parent Board component passes props to the child Square components so that they can be displayed correctly. When clicking on a Square, the child Square component now asks the parent Board component to update the state of the board. When the Board’s state changes, both the Board component and every child Square re-renders automatically. Keeping the state of all squares in the Board component will allow it to determine the winner in the future.

Let’s recap what happens when a user clicks the top left square on your board to add an X to it:

1. 
2. Clicking on the upper left square runs the function that the button received as its onClick prop from the Square. 
3. 
4. The Square component received that function as its onSquareClick prop from the Board. The Board component defined that function directly in the JSX. 
5. 
6. It calls handleClick with an argument of 0.
7. 
8. handleClick uses the argument (0) to update the first element of the squares array from null to X.
9. 
10. The squares state of the Board component was updated, so the Board and all of its children re-render. This causes the value prop of the Square component with index 0 to change from null to X.

In the end the user sees that the upper left square has changed from empty to having a X after clicking it.


---

## Adding time travel ⏲


### Storing a history of moves 

If you mutated the `squares` array, implementing time travel would be very difficult.

However, you used `slice()` to create a new copy of the `squares` array after every move, and treated it as immutable. This will allow you to store every past version of the `squares` array, and navigate between the turns that have already happened.

You’ll store the past `squares` arrays in another array called `history`, which you’ll store as a new state variable. The `history` array represents all board states, from the first to the last move, and has a shape like this:
```js
const moves = [
  // Beginning
  [null, null, null, null, null, null, null, null, null],
  // After first move
  [null, null, null, null, 'X', null, null, null, null],
  // After second move
  [null, null, null, null, 'X', null, null, null, 'O'],
  // After n'th moves
]
```

### Lifting state up, again 
You will now write a new top-level component called Game to display a list of past moves. That’s where you will place the history state that contains the entire game history.

Placing the history state into the **Game component** will let you remove the squares state from its <mark style="background: #ABF7F7A6;">child</mark> **Board** component. Just like you “lifted state up” from the Square component into the Board component, you will now lift it up from the Board into the **top-level** Game component. This gives the Game component `full control` over the Board’s data and lets it <mark style="background: #BBFABBA6;">instruct</mark> the **Board** to render previous turns from the <mark style="background: #FFB86CA6;">history</mark>.

First, add a **Game component** with `export default.` Have it render the **Board** component and some markup:
```jsx
export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
```

Add some state to the Game component to track which player is next and the history of moves:
```jsx
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // ...
```
> Notice how [Array(9).fill(null)] is an array with a **single item**, which itself is an array of **9** `nulls`.

Next, create a handlePlay function inside the Game component that will be called by the Board component to update the game. Pass xIsNext, currentSquares and handlePlay as props to the Board component:

```jsx
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    // TODO:
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        //...
  )
}
```


Update the **Board**
```jsx
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  //...
}
```

The **Board** component is <mark style="background: #ABF7F7A6;">fully controlled </mark>by the props passed to it by the Game component. You need to implement the `handlePlay` function **in the Game component** to get the game working again.

What should `handlePlay` do when called? Remember that **Board** used to call `setSquares` with an updated array; now it passes the <mark style="background: #FFF3A3A6;">updated squares</mark> `array` to `onPlay`.

**The handlePlay function needs to update Game’s state to trigger a re-render**, but you don’t have a `setSquares` function that you can call any more—you’re now using the `history` <mark style="background: #FFB86CA6;">state</mark> variable to store this information. You’ll want to update history by `appending` the updated squares array as a **new history entry**. You also want to <mark style="background: #BBFABBA6;">toggle</mark> `xIsNext`, just as **Board** used to do:

```jsx
export default function Game() {
  //...
  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares])
    setXIsNext(!xIsNext)
  }
  //...
}
```
> Here, [...history, nextSquares] creates a new array that contains all the items in history, followed by nextSquares. (You can read the ...history spread syntax as “enumerate all the items in history”.

### Showing the past moves 
> Since you are recording the tic-tac-toe game’s history, you can now display a list of past moves to the player.

React elements like `<button>` are regular JavaScript objects; you can pass them around in your application. To render multiple items in React, you can use an `array` of **React elements**.

You already have an **array of history** moves in `state`, so now you need to transform it to an array of React elements. In JavaScript, to transform one array into another, you can use the array map method:
```jsx
[1, 2, 3].map((x) => x * 2) // [2, 4, 6]
```

You’ll use map to transform your history of moves into React elements representing buttons on the screen, and display a list of buttons to “jump” to past moves. Let’s map over the history in the Game component:

```jsx
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
```

As you `iterate` through history array inside the function you passed to map, the squares argument goes through <mark style="background: #FFB8EBA6;">each element </mark>of **history**, and the **move** argument goes through each array index: 0, 1, 2, ….
*In most cases, you’d need the actual array elements, but to render a list of moves you will only need indexes.)*

For each move in the tic-tac-toe game’s **history**, you create a list item `<li>` which contains a button `<button>`. The button has an onClick handler which calls a function called jumpTo (that you haven’t implemented yet).

For now, you should see a list of the moves that occurred in the game and an error in the developer tools console. Let’s discuss what the “key” error means.

### Picking a key
When you render a list, React stores some information about each rendered list item. When you update a list, React needs to determine what has changed. You could have added, removed, re-arranged, or updated the list’s items.

Imagine transitioning from
```jsx
<li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>
```

to:
```jsx
<li>Ben: 9 tasks left</li>
<li>Claudia: 8 tasks left</li>
<li>Alexa: 5 tasks left</li>
```

In addition to the updated counts, a human reading this would probably say that you swapped Alexa and Ben’s ordering and inserted Claudia between Alexa and Ben. However, React is a computer program and does not know what you intended, so you need to specify a key property for each list item to differentiate each list item from its siblings. If your data was from a database, Alexa, Ben, and Claudia’s database IDs could be used as keys.
```jsx
<li key={user.id}>
  {user.name}: {user.taskCount} tasks left
</li>
```

When a list is re-rendered, React takes each list item’s key and searches the previous list’s items for a matching key. If the current list has a key that didn’t exist before, React creates a component. If the current list is missing a key that existed in the previous list, React destroys the previous component. If two keys match, the corresponding component is moved.

Keys tell React about the <mark style="background: #ABF7F7A6;">identity</mark> of each **component**, which allows React to **maintain state** between `re-renders`. If a component’s key changes, **the component will be destroyed and re-created with a new state.**

`key` is a special and reserved property in React. When an element is created, React extracts the key property and stores the key directly on the returned element. Even though key may look like it is passed as `props`, React automatically uses key to decide which components to update. There’s no way for a component to ask what key its parent specified.

> It’s strongly recommended that you assign proper keys whenever you build <mark style="background: #ABF7F7A6;">dynamic</mark> lists. If you don’t have an appropriate key, you may want to consider restructuring your data so that you do.

If no key is specified, React will report an error and **use the array index as a key by default**. Using the array `index` as a key is problematic when trying to re-order a list’s items or <mark style="background: #BBFABBA6;">inserting/removing</mark> list items. 
* ! Explicitly passing key={i} silences the error but has the same problems as array indices and is not recommended in most cases.

**Keys do not need to be globally unique**; they only need to be unique between components and their siblings.

### Time travel ⏲

In the tic-tac-toe game’s history, each past move has a unique **ID** associated with it: it’s the <mark style="background: #FFF3A3A6;">sequential number of the move.</mark> Moves will never be re-ordered, deleted, or inserted in the middle, so it’s **safe to use the move index as a key.**

In the **Game** function, you can add the key as `<li key={move}>`, and if you reload the rendered game, React’s “`key`” error should disappear:

```jsx
const moves = history.map((squares, move) => {
  //...
  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
});
```


Before you can implement jumpTo, you need the Game component to keep track of which step the user is currently viewing. To do this, define a new state variable called currentMove, defaulting to `0`:
```jsx
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[history.length - 1];
  //...
}
```



