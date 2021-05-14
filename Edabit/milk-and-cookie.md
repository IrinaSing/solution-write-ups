# [Is it Time for Milk and Cookies?](https://edabit.com/challenge/hPWnaSckJke5FXNEH)

```
Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
```

## Syntax

> timeForMilkAndCookies(`object`) -> `boolean`

### Parameters

**Date**: `object`

```
In test cases Date includes 3 numbers that represent date in 'year, month, day' formate.
```

### Return Value: `boolean`

```
If month and day of date correspond to Christmas Eve (11, 24), than function will return 'true'. Otherwise - 'false'.
```

## Test Cases

```JS
Test.assertEquals(timeForMilkAndCookies(new Date(2013, 11, 24)), true)
Test.assertEquals(timeForMilkAndCookies(new Date(3000, 11, 24)), true)
Test.assertEquals(timeForMilkAndCookies(new Date(2154, 11, 11)), false)
Test.assertEquals(timeForMilkAndCookies(new Date(2010, 11, 2)), false)
Test.assertEquals(timeForMilkAndCookies(new Date(1980, 9, 24)), false)
```

## Use Cases

```JS
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
```

---

[Article about Date on MDN.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

[Date on W3school - more clear.](https://www.w3schools.com/js/js_dates.asp)

---

<!-- copy this section for every solution you study -->

## [blerp](https://edabit.com/user/xhztefZrh299JXeiM)

```js
function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24;
}
```

### Strategy

```
Using the date instance methods to check if it corresponds Christmas Eve date. It seem to be the shortest and most elegant solution.
```

### Implementation

The function will return 'true' if those 2 conditions will return 'true':
The result of method .getMonth() with be equal to 11 AND the result of method .getDate() will b 24.

**Instance methods**:  
Date.prototype.getMonth()  
Date.prototype.getDate()  
**Strict equality**

### Possible Refactors

Anton Hjorth's solution looks like the refactoring.
Firstly he creates variables for day and month and assign the getDate() and getMonth() methods.

Later he uses those variables in if-else loop with condition of strict equalities.
The result returns boolean.

```js
function timeForMilkAndCookies(date) {
  var day = date.getDate();
  var month = date.getMonth();

  if (day == 24 && month == 11) {
    return true;
  } else {
    return false;
  }
}
```

### References

```
Static methods vs Instance methods in Java [article](https://www.geeksforgeeks.org/static-methods-vs-instance-methods-java/#:~:text=Instance%20method%20are%20methods%20which,in%20within%20which%20it%20defined.)
```

---

## [0osh4d0wo0](https://edabit.com/user/XHngE5iScvztMpnR2)

```js
function timeForMilkAndCookies(date) {
  return /Dec 24/.test(date + "");
}
```

### Strategy

```
0osh4d0wo0 converts the date object (parameter)to strings and tests it for specific Date.
```

### Implementation

```
JavaScript .test() Method
RegExp /Dec 24/
Date to strings (date + "") (only in objects?)

Very new for me.
```

### Possible Refactors

Ada Lovecraft uses toDateString method to convert object parameter to strings.

```js
timeForMilkAndCookies = (d) => /Dec 24/.test(d.toDateString());
```

### References

[toDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString)

---

## [VeryKnave](https://edabit.com/user/RW2wFPbMQniZWPmw4)

```js
function timeForMilkAndCookies(date) {
  date = date.toString().split(" ");
  return date[1] == "Dec" && date[2] == 24;
}
```

### Strategy

```
To check if the date corresponds Christmas Eve, this user converts the date to text and considering the typical order of words in date compares them to 24 december.
```

### Implementation

```js
date.toString() - one of few ways of convertation of date to string.

.split(" ") - to split string and put them into array to access the day and month via index [i]:
date[1] == "Dec"

&& - function will only return true if both equalities will return true.
```

### Possible Refactors

```js
---
```

### References

```
[String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
```

---

---

### Remix

```js
// paste your remixed solution here
```

### Strategy

### Implementation

### Possible Refactors

### Inspired By

### References

---

## Retrospective

```
That was useful to learn about date, it's methods and convert to strings in javascript. It is definitely important.
RegExp also requires further investigation, I don't understand it in details yet although I use it by copy-paste.
```
