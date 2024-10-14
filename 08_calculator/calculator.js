const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let acc = 0;
  for(let i=0; i<arr.length; i++){
    acc += arr[i];
  }
  return acc;
};

const multiply = function(arr) {
  let acc = 1;
  for(let i=0; i<arr.length; i++){
    acc *= arr[i];
  }
  return acc;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	if(a == 0 ){
    return 1;
  }
  else{
    let acc = 1;
    for (let i=1; i<=a; i++){
      acc *= i;
    }
    return acc;
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
