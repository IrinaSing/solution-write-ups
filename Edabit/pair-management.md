# [Pair Management](https://edabit.com/challenge/BFnsRqe8PFvEwcRNt)

```
Given two arguments, return an array which contains these two arguments.
```

## Syntax

> makePair(`number`, `number`) -> `array`

### Parameters

**Num1**, **Num2**: `number`

```
Numbers that taken as parameters are used to fill in the new array.
```

### Return Value: `array`

```
Return value should be an array with two numbers inside (taken from parameters).
```

## Test Cases

```JS
Test.assertSimilar(makePair(1, 2), [1, 2])
Test.assertSimilar(makePair(21, 82), [21, 82])
Test.assertSimilar(makePair(4213, 526), [4213, 526])
```

## Use Cases

```JS
const makePair = (a, b) => [a, b];

let result = makePair(34, 11);
console.log(result);
```

```JS
function makePair(num1, num2) {
  return [...arguments]
}

let result = makePair(34, 11);
console.log(result);
```

---

<!-- copy this section for every solution you study -->

## [Dan Barrick](https://edabit.com/user/jcPZ5ySXseCB7Ec3x)

```JS
const makePair = (a,b) => [a,b];
```

### Strategy

```
Straightforward solution. If arguments should be inside an array, just return them inside an array.
```

### Implementation

```
In return statement, user creates an array  with arguments inside. Interesting that it is not even a function but a variable (const).
```

### Possible Refactors

Instead of returning array explicitly, firstly create a variable for the array, then return this variable.  
[NotPseudo](https://edabit.com/user/btwF9LpbvXs8evFPA)

```JS
function makePair(num1, num2) {
	var arr = [num1, num2]
	return arr
}
```

### References

```
---
```

---

## [aman khan](https://edabit.com/user/QRv96jmNaYsWkxQEG)

```JS
function makePair(num1, num2) {
	return [...arguments]
}
```

### Strategy

```
Aman decides to return the array explicitly, but instead of listing arguments, defines them as a general thing.
```

### Implementation

**Spread syntax (...)** - this operator expands an iterable to its individual elements (here to all the number arguments).
It works with any quantity of values inside an array.

### Possible Refactors

Instead of returning array explicitly, firstly create a variable for the array, then return this variable.

```JS
function makePair(num1, num2) {
  var arr = [...arguments];
  return arr;
}
```

### References

[Spread syntax (...)](https://www.freecodecamp.org/news/an-introduction-to-spread-syntax-in-javascript-fba39595922c/) om FreeCodeCamp.

---

## [Caleb Miller](https://edabit.com/user/2QziknsznNeMPRh3g)

```JS
const makePair = (...a) => a;
```

### Strategy

```
Looks very minimalistic, but not really clear. The strategy is to use possibilities of spread syntax.
```

### Implementation

Spread syntax creates array and fill it with the range of arguments. It is written as a variable (const), not as function.

```
(...a) => a;
```

### Possible Refactors

We can write it as a function

```JS
function makePair(...a) {
  return a;
}

let result = makePair(34, 11, 23, 44444);
console.log(result);
```

### References

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)  
[Spread syntax](https://www.freecodecamp.org/news/an-introduction-to-spread-syntax-in-javascript-fba39595922c/)

---

## [dirksterg30](https://edabit.com/user/MATsqGvdZgvQ4JwCo)

```JS
const makePair = (num1, num2) => {
  const result = [];
  result.push(num1, num2);
  return result;
}
```

### Strategy

```
This solution takes more lines of code but is quite clear and has traditional approach to arrays.
```

### Implementation

Author creates `const` and assigns empty `array` to it.
`Array.push` to add arguments into array.
Then just returns variable with array.

### Possible Refactors

We can push arguments to an empty array one by one.

```JS
function makePair(num1, num2) {
	let arr = [];
	arr.push(num1)
	arr.push(num2)
	return arr
}
```

[thomasvannevel2](https://edabit.com/user/kL6CcRmefz9BLLF2X)

### References

[Array.push() method](https://www.w3schools.com/jsref/jsref_push.asp)

### Remix

```js
// paste your remixed solution here
```

### Strategy

### Implementation

### Possible Refactors

### Inspired By

```
which solutions inspired your solution?
what did you take from each one?
```

### References

---

## Retrospective

- Spread syntax works as magic, I want to investigate further how does it work.
- A simple task but can be solved in quite a few different ways.
