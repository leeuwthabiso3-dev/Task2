//Input
const numbers = [ 3, 56, 23, 78, 23, 78, 100, 123, 
    148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50,
    59, 89, 87, 230, 210, 100, 23, 980
]

//highest to lowest
numbers.sort((a, b) => b - a);
console.log(numbers)

//lowest to highest
numbers.sort((a, b) => a - b);
console.log(numbers)

//Unique values
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers)  

//Sum of all numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)

//< or = 100
const filteredNumbers = numbers.filter(num => num <= 100);
console.log(filteredNumbers)

//> than 50
const greaterThanFifty = numbers.filter(num => num > 50);
console.log(greaterThanFifty)

//Numbers divisible by 2
const divisibleByTwo = numbers.filter(num => num % 2 === 0);
console.log(divisibleByTwo)

//Numbers divisible by 3
const divisibleByThree = numbers.filter(num => num % 3 === 0);
console.log(divisibleByThree)   

//Neither divisible by 2 nor 3
const number = numbers.filter(num => num % 2 !== 0 && num % 3 !== 0);
console.log(number)

//Number of elements in the array
const numberOfElements = numbers.length;
console.log(numberOfElements)   

//New array same elements but in reverse order
const reversedArray = [...numbers].reverse();
console.log(reversedArray)

