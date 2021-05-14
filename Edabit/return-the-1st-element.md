# [Return the First Element in an Array](https://edabit.com/challenge/QaApgtePE6QrCZ64o)

```
The function takes an array containing only numbers and return the first element.
```

## Syntax

> getFirstValue([number, number, number]) ➞ number

### Parameters

**arr**: `array`

```
Array that contains few numbers.
```

### Return Value: `number`

```
The first element in an array always has an index of 0.
```

## Test Cases

### Test cases from Edabit

```JS
Test.assertEquals(getFirstValue([1, 2, 3]), 1)
Test.assertEquals(getFirstValue([80, 5, 100]), 80)
Test.assertEquals(getFirstValue([-500, 0, 50]), -500)
Test.assertEquals(getFirstValue([5, 2, 3]), 5)
Test.assertEquals(getFirstValue([75675, 5, 100]), 75675)
Test.assertEquals(getFirstValue([-52320, 0, 50]), -52320)
```

## Use Cases

```JS
function getFirstValue(arr) {
  return arr[0];
}
let result = getFirstValue([45, 34, 111]);
console.log(result); //45

```

```JS
function getFirstValue(arr) {
  return arr.shift();
}
let result = getFirstValue([45, 34, 111]);
console.log(result); //45

```

---

---

<!-- copy this section for every solution you study -->

## [Paddo](<[link-to-user](https://edabit.com/user/NJCmkbH5e7qbtZYhd)>)

```js
function getFirstValue(arr) {
  return arr.shift();
}
```

### Strategy

```
This solution is not that obvious for me. Paddo uses a method that specifically removes the first first value from the array, and this value gets returned and logged.
```

### Implementation

```
The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

Paddo used this method but with focus not on the array that changed, but on removed element, that then returned and logged.
```

### Possible Refactors

```
Can be interchanged with just logging index [0].
```

### References

Article about [array.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) on MDN.

---

## [Vic KC](https://edabit.com/user/amd4teJuSgxpGwmEr)

```js
function getFirstValue(arr) {
  return arr[0];
}
```

### Strategy

```
The most obvious solution. Vic KC just directly returns the first value of the array.
```

### Implementation

```
Array access by index: to return the first value of the array just return index [0].
```

### Possible Refactors

Can be just written in one line:

```JS
const getFirstValue = arr => arr[0];
```

### References

Article about [accessing array elements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) on MDN.

---

## Retrospective

```
I learned about new method Array.shift(). It can be used in combination with a loop, if we would like to return all values of the array one by one. Thus, returning first value we remove it from array. So the value that was second becomes the first...and so on.


```
