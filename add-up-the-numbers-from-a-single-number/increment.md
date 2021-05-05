``` JS
function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i; 
  }
  return sum;
}
```
**Behaviour**

We need to give a number and the function will add up terms up to this number.
GENERALLY what we will do
Takes number as an input and gives the result of adding all the numbers;

**Strategy:**(general concept of solution) HOW WE WILL APPROACH

what's input? 
number
what's output?
number

first line - variable with value 0
second line: begins for loop->
(create new var i, value 1, condition - while <= num, every loop -increments by 1);

line5: sum = sum + i;
iteration1: sum =0; i = 1; sum = sum + i -> sum =0 +1 -> sum =1;
iteration2: sum = 1; i = 2; sum = 1+2 -> sum = sum 3

**Implementation:**(steps): LITERALLY what we will do 
start with 0 to be able to add first term;
the loop creates the next term which we will add;
