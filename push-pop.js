var numbers = [11, 22, 33, 44, 55, 66, 77];
// console.log(numbers);

// use push(n) to add element at the end of an array
numbers.push(88);
// console.log(numbers);

// use pop to remove element from the end of an array
numbers.pop();
// console.log(numbers);

// use unshift(n) to add element at the start of an array
numbers.unshift(144);
// console.log(numbers);

// use shift() to remove element from the end of an array
numbers.shift();
// console.log(numbers);

// array.pop() returns an element also
var removeElement = numbers.pop();
console.log(removeElement);