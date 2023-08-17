

const double = (arr) => arr.map(val => val * 2)

const squareFindEvens = (numbers) => numbers.map(num => num * num ).filter(sqr => sqr % 2 === 0)

const arr = [1,3,4,5,6,8,9]

console.log(double(arr))
console.log(squareFindEvens(arr))