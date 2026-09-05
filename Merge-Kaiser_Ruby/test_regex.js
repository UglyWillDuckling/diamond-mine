let text = "1997-06-28";
const pattern = /\d\d\d\d(?=-)/;

// console.log(pattern.test(text)); // Output: true
// console.log(pattern.exec(text)); // Output: Hello
console.log(text.match(pattern)); // Output: Hello
match = text.match(pattern);

console.warn(match[0]);

text.match(/\d\d\d\d(?=-)/);
