# [Convert Minutes into Seconds](https://edabit.com/challenge/8q54MKnRrm89pSLmW)

```
This function takes an integer minutes and converts it to seconds.
```

## Syntax

> convert(`number`) -> `number`

### Parameters

**minutes**: `number`

```
TIt should be an integer representing an amount of minutes that will be converted in seconds.
```

### Return Value: `number`

```JS
The number of seconds contained in the mentioned number of minutes.
```

## Test Cases

```JS
Test.assertEquals(convert(6), 360)
Test.assertEquals(convert(4), 240)
Test.assertEquals(convert(8), 480)
Test.assertEquals(convert(60), 3600)
```

## Use Cases

```JS
const convert = (minutes) => minutes * 60;

let result = convert(10);
console.log(result);
```

```JS
function convert(minutes) {
	return  minutes * 60;
}

let result = convert(10);
console.log(result);
```

---

---

<!-- copy this section for every solution you study -->

## [rosebt](https://edabit.com/user/83SvHqzn7yZCLE2aS)

```js
function convert(minutes) {
  return minutes * 60;
}
```

### Strategy

```
rosebt uses mathematical expression. It is known that there are 60 seconds in 1 minute, so multiplying number of minutes by 60 we get the right result.
```

### Implementation

```
multiplication by 60 (*60)
```

### Possible Refactors

```
const convert = (minutes) => minutes * 60
```
