 #react-hook
 
 useEffect  is a built-in Hook in React that allows you to run **side-effects** in function components. 
 
  With  useEffect , you can perform data fetching, subscriptions, and timers, among other things, in a way that is similar to how class components would do it using
 `componentDidMount` ,  `componentDidUpdate` , and  `componentWillUnmount` .

  Here's a basic example of how you might use  useEffect  in your React
  component:

```js
    import React, { useEffect } from 'react'

    function MyComponent() {
      useEffect(() => {
        // This code will run after the component has mounted
        // and whenever its dependencies update.

        fetchData().then(data => {
          setData(data)
        })

        // You can also specify a cleanup function that will
        // run when the component unmounts.
        return () => {
          // Clean up any resources that were created
          // during the execution of this effect.
        }
      }, [dependency1, dependency2])
    }
```

  The first argument to  `useEffect`  is a callback function that contains the
  code you want to run as a side-effect. This code will run after the component
  has mounted, and whenever its **dependencies update**.

  You can specify a second argument to  useEffect  that lists the dependencies
  that will trigger the effect to run again. In the example above, the effect
  will run **after the component has mounted and every time either  dependency1**
  **or  dependency2  updates.**

  You can also specify a cleanup function that will run when the component
  unmounts. This is useful for cleaning up any resources that were created
  during the execution of the effect.

  Overall,  useEffect  is a powerful and flexible Hook that can help you
  manage **side-effects** in your `function` components in a way that is easy to
  understand and maintain.
