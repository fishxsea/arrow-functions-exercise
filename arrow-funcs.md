
**ES5 Map Callback**
```js
function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}
```

**ES2015 Arrow Functions Shorthand**

```js
const double = (arr) => arr.map(val => val * 2)
```

---

**Refactor the following function to use arrow functions:**
```js
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
```

**Refactored**

```js
const squareFindEvens = (numbers) => numbers.map(num => num * num ).filter(sqr => sqr % 2 === 0)
```



