//Input
const numbers = [ 3, 56, 23, 78, 23, 78, 100, 123, 
    148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50,
    59, 89, 87, 230, 210, 100, 23, 980
]

//lowest to highest
numbers.sort((a, b) => a - b);
console.log(numbers)

//highest to lowest
numbers.sort((a, b) => b - a);
console.log(numbers)

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


const info = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600]

//const numbersOnly = info.filter(item => typeof item === 'number');
//const numbersOnly = info.filter(item => typeof item === 'string');

//For loopeturning values that are numbers only from the array
const numbersOnly = [];
for (let i = 0; i < info.length; i++) {
    if (typeof info[i] === 'number') {
        numbersOnly.push(info[i]);
    }
}
console.log(numbersOnly)

//While loopeturning values that are strings only from the array
const stringsOnly = [];
let i = 0;
while (i < info.length) {
    if (typeof info[i] === 'string') {
        stringsOnly.push(info[i]);
    }
    i++;
}
console.log(stringsOnly)

//Do while loop returning sum of all numbers in the array
let total = 0;
let j = 0;
do{
    total += numbersOnly[j];
    j++;
}while(j < numbersOnly.length);
console.log(total)

//Loop combining all strings in array
let combinedString = "Hello ";
for (let k = 0; k < stringsOnly.length; k++) {
    combinedString += stringsOnly[k] + " ";
}
console.log(combinedString)

//Removing all strings in array
let l = 0;
while (l < info.length) {
    if (typeof info[l] === 'string') {
        info.splice(l, 1);
    } else {
        l++;
    }
}
console.log(info)

const developers = [
  {
    name: "Vee",
    laptops: [
      "Dell"
    ],
    phones: [
      "Samsung",
      "Xiaomi"
    ],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  },
  {
    name: "Katlego",
    laptops: [
      "HP",
      "Samsung"
    ],
    phones: [
      "Apple",
      "Samsung",
      "Tecno",
      "Samsung"
    ],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  },
  {
    name: "Rethabile",
    laptops: [
      "Samsung"
    ],
    phones: [
      "Samsung",
      "Huawei",
      "Poco"
    ],
    computerSetups: [
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }, 
      {
        brand: "Acer",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }
    ]
  },
  {
    name: "Gift",
    laptops: [],
    phones: [
      "Samsung"
    ],
    computerSetups: [
      {
        brand: "Acer",
        monitors: 3,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "HP",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }
    ]
  },
  {
    name: "Thokozile",
    laptops: [
      "Lenovo"
    ],
    phones: [
      "Apple"
    ],
    computerSetups: [
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 0,
        mice: 1,
        speakers: 1
      }, 
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  }
]

//Returning names of developers only from the array of objects
const namesOnly = developers.map(developer => developer.name);
console.log(namesOnly); 

//Total phones owned by all developers
const totalPhones = developers.reduce((sum, developer) => sum + developer.phones.length, 0);
console.log(totalPhones);

// Count how many values are missing/falsy
const computerSetups = developers.flatMap(developer => developer.computerSetups);
const zeroCount = computerSetups.reduce((count, obj) => {
  return count + Object.values(obj).filter(value => value === 0).length;
}, 0);

console.log(zeroCount);

//Most trusted phone brand among developers
const phoneBrands = developers.flatMap(developer => developer.phones);
const phoneBrandCount = phoneBrands.reduce((count, brand) => {
  count[brand] = (count[brand] || 0) + 1;
  return count;
}, {});
const mostTrustedPhoneBrand = Object.keys(phoneBrandCount).reduce((a, b) => phoneBrandCount[a] > phoneBrandCount[b] ? a : b);
console.log(mostTrustedPhoneBrand);

//Least trusted phone brand among developers
const leastTrustedPhoneBrand = Object.keys(phoneBrandCount).reduce((a, b) => phoneBrandCount[a] < phoneBrandCount[b] ? a : b);
console.log(leastTrustedPhoneBrand);

//How many people do not have a phone
const peopleWithoutPhone = developers.filter(developer => developer.phones.length === 0).length;
console.log(peopleWithoutPhone);

//How many people do not have a laptop
const peopleWithoutLaptop = developers.filter(developer => developer.laptops.length === 0).length;
console.log(peopleWithoutLaptop);

//How many people do not have a computer setup
const peopleWithoutComputerSetup = developers.filter(developer => developer.computerSetups.length === 0).length;
console.log(peopleWithoutComputerSetup);

//Which developer has the most gadgets (laptops, phones, computer setups)
const developerWithMostGadgets = developers.reduce((maxDeveloper, currentDeveloper) => {
  const maxGadgets = maxDeveloper.laptops.length + maxDeveloper.phones.length + maxDeveloper.computerSetups.length;
  const currentGadgets = currentDeveloper.laptops.length + currentDeveloper.phones.length + currentDeveloper.computerSetups.length;
  return currentGadgets > maxGadgets ? currentDeveloper : maxDeveloper;
});
console.log(developerWithMostGadgets.name);
console.log("Computer Setups:", developerWithMostGadgets.computerSetups);
console.log("Laptops: ",developerWithMostGadgets.laptops)
console.log("Phones: ",developerWithMostGadgets.phones)

//Developer with most phones
const developerWithMostPhones = developers.reduce((maxDeveloper, currentDeveloper) => {
  return currentDeveloper.phones.length > maxDeveloper.phones.length ? currentDeveloper : maxDeveloper;
});
console.log(developerWithMostPhones.name);
console.log("Phones: ", developerWithMostPhones.phones);

//Developer with most computer setups
const developerWithMostComputerSetups = developers.reduce((maxDeveloper, currentDeveloper) => {
  return currentDeveloper.computerSetups.length > maxDeveloper.computerSetups.length ? currentDeveloper : maxDeveloper;
});
console.log(developerWithMostComputerSetups.name);
console.log("Computer Setups: ", developerWithMostComputerSetups.computerSetups);

//Developer with most monitors
const developerWithMostMonitors = developers.reduce((maxDeveloper, currentDeveloper) => {
  const maxMonitors = maxDeveloper.computerSetups.reduce((sum, setup) => sum + setup.monitors, 0);
  const currentMonitors = currentDeveloper.computerSetups.reduce((sum, setup) => sum + setup.monitors, 0);
  return currentMonitors > maxMonitors ? currentDeveloper : maxDeveloper;
});
console.log(developerWithMostMonitors.name);
console.log("Monitors: ", developerWithMostMonitors.computerSetups.reduce((sum, setup) => sum + setup.monitors, 0));