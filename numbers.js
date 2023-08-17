console.log('hi')

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

console.log(squareAndFindEvens([1,2,3,4,5]))


const sfe = (numbers) => numbers.map(num => num * num ).filter(sqr => sqr % 2 === 0)


console.log(sfe([2,3,4,5,6,7,8,9]))