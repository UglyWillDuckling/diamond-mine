---
interest: 8
tags:
  - article/react
---
## [[Container/Presentational Pattern]]

- Concept: Separates presentation logic (UI) from business logic (data fetching, state management).
- Benefits: Improved code organization, cleaner components, easier testing and maintenance.
- Use Case: A complex e-commerce app with dynamic product lists. The container handles data fetching and logic, while the presentational component simply displays the UI based on the provided data.

### Container Example:

```jsx
import React, { useState } from "react";

function ProductListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return <ProductList products={products} />;
}
```
export default ProductListContainer;

#### Presentational Component Example:

```jsx
function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
		<li key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  );
}
export default ProductList;
```

## [[Higher-Order Components]] (HOCs):

- Concept: Wraps a component with **additional functionality** (like authentication, data fetching) without modifying the original component.
- Benefits: Code reusability, cleaner components, reduced boilerplate code.
- Use Case: Securing multiple components in your app with an “authenticated user” requirement. The withAuth HOC can be applied to any component, saving you from writing repetitive authentication logic.

```jsx
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = useAuthHook();

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

const MyProtectedComponent = () => {
  // ... component logic
};
```

## [[Render Props Pattern]]

- Concept: Passes a function from parent to child component, allowing the child to define how it renders and interacts with the data.
- Benefits: Increased flexibility, dynamic rendering, component decoupling.
- Use Case: Building custom data visualizations or dynamic UI elements where the parent provides the data while the child controls the presentation.

```jsx
function MyComponent({ renderWith }) {
  const data = getSomeData();

  return renderWith(data);
}

function MyPage() {
  return (
    <MyComponent
      renderWith={(data) => (
        <>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
        </>
      )}
    />
  )
}
```

Remember, design patterns are **tools**, not rules. 
Choosing the right pattern depends on your specific needs and context. Experiment, find what works best for your project, and watch your React code evolve from chaotic to clean and maintainable!
