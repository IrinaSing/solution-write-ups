```JS
function addUp(num) {
  var a =0;
  for(var i =num; i > 0; i--){
    a+= i;
  }
  return a;
}
```

**Behaviour**
decrements;
works from parameter to 1, decreases i(our last term, the term we give) by one;

**Strategy:**

We use for loop to iterate the numbers we add up(the terms)

**Implementation**
declare the function:
create var a = 0 - to set the start point; that's where the result goes;
create var i = num - for working with it inside the loop;
decrement i by 1 with every loop;
reassign a

**Refactoring**(alternative version)
`for(;num > 0; num --) {`

We can skip initialization part in the loop because start point is already set in this case - it is num;
BUT it is good practice to NEVER MODIFY PARAMETERS to avoid bugs/mistakes -> we intialize i to num;
