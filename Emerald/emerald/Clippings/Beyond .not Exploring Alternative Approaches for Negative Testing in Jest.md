---
author: 
created: 2025-03-12
published: 
source: https://runebook.dev/en/articles/jest/expect/not
about:
  - "[[jest Testing Framework]]"
tags:
  - howto/jest
---
```javascript
expect(result).toBe(5); // Checks if result is exactly 5
```

Adding `.not` flips the condition. So:

```javascript
expect(result).not.toBe(5); // Checks if result is anything but 5
```

This is useful for testing scenarios where a value should not be something particular.

Here are some common ways to use `.not` with `.expect` in Jest:

- `.not.toMatch`: This checks if a string doesn't match a regular expression.
- `.not.toContain`: This ensures an array or string doesn't contain a specific item.
- `.not.toBe`: This verifies that the values are not the same object in memory.
- `.not.toEqual`: This checks if the values are not strictly equal, including for nested objects or arrays.

---

## Mismatched Negation

- **Troubleshooting**  
Double-check your test logic. Are you trying to verify something should be present or a certain value, or are you checking it should not be something specific?
- **Error**  
You might see a test fail because you accidentally used `.not` when you intended a positive assertion.

**Incorrect Matcher with .not**  

- **Troubleshooting**  
Refer to the Jest documentation for supported matchers with `.not`. Common ones include `.not.toEqual`, `.not.toBe`, `.not.toContain`, and `.not.toMatch`. For other matchers, you might need to write a custom assertion.
- **Error**  
Jest might throw an error if you use a matcher that doesn't support negation with `.not`.

**Unexpected Data Types**  

- **Troubleshooting**  
Make sure you're comparing the expected data type with the actual value. For instance, `.not.toContain` works with arrays and strings, not objects. If you're unsure, use a different matcher like `.not.toEqual` for complex data structures.
- **Error**  
Sometimes, unexpected data types can lead to errors with `.not`.

**Debugging Assertion Failures**  

- **Troubleshooting**  
Jest provides detailed error messages when assertions fail. These messages often include the actual and expected values. Use these messages to understand why the negation failed and adjust your test accordingly.
- **Error**  
Test failures with `.not` assertions might not be very clear.

- Consider using clear variable names and comments in your tests to improve readability, especially when dealing with negations.

  

  

---

## Checking for Non-Equality

```javascript
// This function calculates the area of a square
function calculateArea(sideLength) {
  return sideLength * sideLength;
}

test('non-square calculation', () => {
  const result = calculateArea(5);
  expect(result).not.toEqual(27); // Fails if result is 27 (perfect square)
  expect(result).toEqual(25); // Verification for expected area
});
```

**Ensuring Absence in an Array**  

```javascript
const shoppingCart = ['apples', 'bananas', 'milk'];

test('no oranges in cart', () => {
  expect(shoppingCart).not.toContain('oranges'); // Fails if 'oranges' is present
});
```

**Verifying String Doesn't Match Regex**  

```javascript
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

test('invalid email format', () => {
  const invalidEmail = 'username';
  expect(validateEmail(invalidEmail)).not.toMatch(/@/); // Fails if email contains '@'
});
```
```javascript
const user = {
  name: 'John Doe',
  age: 30,
};

test('no password property', () => {
  expect(user).not.toHaveProperty('password'); // Fails if 'password' property exists
});
```
  

---

1. **Flipped Assertions**

This involves rewriting your test to check for the opposite scenario. For instance, instead of:

```javascript
expect(result).not.toBe(5);
```

You could write:

```javascript
expect(result).toBeGreaterThan(5); 
expect(result).toBeLessThan(5);
```

This approach works best when the positive cases are easily defined.

1. **Custom Matchers**

Jest allows creating custom matchers for specific testing needs. You can define a matcher that checks for the negation of another matcher. This offers flexibility but requires more code compared to `.not`.

1. **Descriptive Variable Names**

While not a direct replacement, using descriptive variable names for expected and actual values can improve test readability even without `.not`. This helps clarify the intended outcome without relying on negation.

| Approach | Pros | Cons |
| --- | --- | --- |
| Flipped Assertions | Simpler to understand, leverages existing matchers | Might become complex for intricate scenarios |
| Custom Matchers | Flexible for specific needs | Requires additional code to write and maintain |
| Descriptive Names | Improves test readability | Doesn't directly negate conditions |

  

---