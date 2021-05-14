# [What's Hiding Amongst the Crowd?](https://edabit.com/challenge/rvsvGvqZ3BzNieKqA)

```
This function tests the string and only returns lowercase letters. As a result, you see a hidden word.
```

## Syntax

> detectWord(`string`) -> `string`

### Parameters

**str**: `string`

```
String contains mixed uppercase and lowercase letters.
```

### Return Value: `string`

```
It's a string that only includes lowercase letters from str. You can read them as an English word.
```

## Test Cases

```
Test.assertEquals(detectWord("UcUNFYGaFYFYGtNUH"), "cat")
Test.assertEquals(detectWord("bEEFGBuFBRrHgUHlNFYaYr"), "burglar")
Test.assertEquals(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"), "embezzlement")
Test.assertEquals(detectWord("cLXSNVVJVOJBIQRVKIZWKJOIVHXELVReLXSNVVJVOJBIQRVKIZWKJOIVHXELVRrLXSNVVJVOJBIQRVKIZWKJOIVHXELVRtLXSNVVJVOJBIQRVKIZWKJOIVHXELVRaLXSNVVJVOJBIQRVKIZWKJOIVHXELVRiLXSNVVJVOJBIQRVKIZWKJOIVHXELVRn"), "certain")
Test.assertEquals(detectWord("cUEOYCSUXVOaUEOYCSUXVOt"), "cat")

```

## Use Cases

```
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
```

```
p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me."
```

---

---

<!-- copy this section for every solution you study -->

## [Euphonic Sounds](https://edabit.com/user/mHT2bJb5SByfJ8yKS)

```js
const detectWord = (str) => str.replace(/[A-Z]/g, "");
```

### Strategy

An elegant one-line solution - removing all upper case letters with an appropriate method.

### Implementation

```
RegExp (/[A-Z]/g, "") with .replace method simply removes upper case letters from the string.
Lower case letters are left.
```

### Possible Refactors

```
---
```

### References

[Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

---

## [Harjoth](https://edabit.com/user/aWNggJDngk9DhC4Sg)

```js
function detectWord(str) {
  let wanted = "";
  for (let letter of str) {
    if (letter === letter.toLowerCase()) {
      wanted = wanted + letter;
    }
  }
  return wanted;
}
```

### Strategy

As far as the goal is to return only lowercase letters, this solution is quite reasonable - to check every letter for being a lowercase letter.

### Implementation

- For-of loop to iterate through string.
- Control flow within the loop helps to assign only lowercase letters to a new string if they pass the test.
- Check-up by Strict equality test between letter and it's lower case version.
- .toLowercase method.

### Possible Refactors

- For-loop can be used instead of For-of loop.
  Solution by user cycha:

```js
function detectWord(str) {
  var word = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == str[i]) {
      var letter = str[i];
      word += letter;
    }
  }
  return word;
}
```

---

## [Ahmed Elgaidi](https://edabit.com/user/7kENXQQ8ABiPGfBRD)

```js
function detectWord(str) {
  return str
    .split("")
    .filter((el) => el.toLowerCase() === el)
    .join("");
}
```

### Strategy

Also quite a reasonable strategy: to filter the string for lowercase letters.

### Implementation

- .split(""), .filter(), .join("") methods are used to check up every letter as a separate string. Successful result - a newly joined string.

- .tolowerCase - Check up is done by strictly comparing the letter(string) to it's lowercase version.

### Possible Refactors

```
---
```

---

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

```
Different ways of filtering a string. Some of them could be used for filtering for symbols, not only case of letters.
```
