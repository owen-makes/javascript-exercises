const add = function(x,y) {
	return Number(x) + Number(y)
  
};

const subtract = function(x,y) {
	return Number(x) - Number(y)
};

const sum = function(numbers) {
  let result = 0
  numbers.forEach(number => {
    result += number
    
  });
  return result
};

const multiply = function(...args) {
  let result = 1
  args.forEach(arg => {
    result *= arg
  })
  return result
};

const power = function(x,y) {
	return x ** y
};

const factorial = function(x) {
	let result = 1
  if (x === 0){
    return 1
  } else {
    for (let i = 1; i <= x ; i++){
      result *= i 
    }
    return result
  }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
