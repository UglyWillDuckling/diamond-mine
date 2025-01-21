
## state handling

```tsx
import { useState } from 'react';

function MyButton() {
// getter/setter pair
  const [count, setCount] = useState(0);

  function handleClick() {
//call the setter
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>Clicked {count} times</button>
  );
}
```

## Hooks

Functions starting with use are called Hooks. **useState** is a built-in Hook provided by React. You can find other built-in Hooks in the API reference. You can also write your own Hooks by combining the existing ones.

Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). If you want to use **useState** in a condition or a loop, extract a new component and put it there.


## Sharing Data

### current data flow 

![[sharing_data_parent.webp]]


- each button has its own counter


### sharing the state

![[sharing_data_parent_clicked.webp]]


#### steps

1. First, move the state up from MyButton into MyApp:

```jsx
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
```


2. Then, pass the state down from MyApp to each MyButton, together with the shared click handler. You can pass information to MyButton using the JSX curly braces, just like you previously did with built-in tags like <img>:

```jsx
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
```


3. Change `MyButton`

```jsx
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
```