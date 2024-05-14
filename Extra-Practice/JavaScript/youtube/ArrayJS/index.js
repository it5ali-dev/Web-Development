// let fruits = ['apple', 'orange', 'banana'];
// // document.getElementById('newContent').textContent = fruits;
// // fruits[3] = 'coconut';
// // alternative of above
// // console.log(fruits);
// fruits.push('coconut'); // add at the end of array
// // fruits.pop(); // remove from the end of array
// // fruits.unshift('mango'); // add at the start of array
// // console.log(fruits);
// // fruits.shift(); // remove from the starting array
// // console.log(fruits);
// // document.getElementById('newContent').textContent = fruits;

// let fruitLength = fruits.length;

// fruits.forEach(element => {
//     console.log(element);
// });

// // for(let i=0; i < fruitLength; i++) {
// //     console.log(fruits[i]);
// // }

// // not working well
// for(let fruit of fruits) {
//     console.log(fruit);
// }

// fruits.sort().reverse();

// for(let fruit of fruits) {
//     console.log(fruit);
// }

// console.log(fruitLength);

// =========================================
// spread operator
// =========================================

// let nums = [1,2,3,4,5];
// let max = Math.max(...nums);
// let min = Math.min(...nums);

// console.log(max);
// console.log(min);

// let username = 'Ali Hassan';
// let letters = [...username].join("");
// console.log(letters);

// let fruits = ['apple','orange','banana'];
// let vegetables = ['carrots','celery','potato'];
// // let foods = [...fruits, ...vegetables];

// let foods = [...fruits, ...vegetables, 'eggs', 'milk'];
// // let foods = [...fruits, username];

// console.log(fruits);
// console.log(foods);

// ==========================================
// rest operator
// ==========================================

// function open(...foods) {
//     // console.log(...foods);
//     console.log(foods);
// }
// function toget(...foods) {
//     return foods;
// }
// const food1 = 'pizza';
// const food2 = 'hamburger';
// const food3 = 'hotdog';
// const food4 = 'sushi';
// const food5 = 'ramen';

// // open(food1, food2, food3, food4, food5)
// const foods = toget(food1, food2, food3, food4, food5);

// ===========================================

// function sum(...nums) {
//     let result = 0;
//     for(let number of nums) {
//         result += number;
//     }
//     return result;
// }
// function getAverage(...nums) {
//     let result = 0;
//     for(let number of nums) {
//         // console.log(nums.length);
//         result += number;
//     }
//     // console.log(result);
//     return result / nums.length;
// }
// const total = getAverage(71,83,65,77,92);
// console.log(`your total is: ${total}`);

// =============================================

// function combineString(...name) {
//     return name.join(' ');
// }

// const fullName = combineString("Mr", "Ali", "Hassan");
// console.log(fullName);

// =============================================

// =============================================
// Map function
// =============================================

// const number = [1,2,3,4,5]
// const squares = number.map(square)

// function display(element) {
//     console.log(element);
// }

// function square(element) {
//     let result = Math.pow(element, 2)
//     display(result)
//     return result
// }
// ============================================
// const student = ['Ali','Hassan','Yusuf']
// const student1 = student.map(upperCase)
// const student2 = student.map(lowerCase)

// console.log(student1);
// console.log(student2);

// function upperCase(element) {
//     return element.toUpperCase();
// }
// function lowerCase(element) {
//     return element.toUpperCase();
// }

// =============================================

// const date = ['2024-1-10','2025-4-13','2022-15-25']

// const formatDates = date.map(formatDate)

// console.log(formatDates);

// function formatDate(element) {
//     const parts = element.split('-')
//     console.log(parts);
//     return `${parts[1]}/${parts[2]}/${parts[0]}`
// }
// =============================================

// =============================================
// Filter Method of Arrays
// =============================================

// let number = [1,2,3,4,5]
// let evenNums = number.filter(isEven)
// let oddNums = number.filter(isOdd)

// console.log(evenNums)
// console.log(oddNums)

// function isEven(element) {
//     return element%2 === 0
// }
// function isOdd(element) {
//     return element%2 !== 0
// }

// const ages = [20, 15, 16,18, 19, 60]
// const adult = ages.filter(isAdult)
// const children = ages.filter(isChild)

// console.log(adult);
// console.log(children);

// function isAdult(element) {
//     return element >= 18
// }
// function isChild(element) {
//     return element <= 18
// }

// const fruits = ['apple','orange','banana','kiwi','pomegranate','coconut']
// const shortWords = fruits.filter(getShort)
// const longWords = fruits.filter(getLong)

// console.log(`Short Words: ${shortWords}`);
// console.log(`Long Words: ${longWords}`);

// function getShort(element) {
//     return element.length < 6
// }
// function getLong(element) {
//     return element.length >= 6
// }

// =============================================

// =============================================
// Reduce Function
// =============================================

// const prices = [12, 15, 25, 63, 16]

// const totalPrice = prices.reduce(sum)
// console.log(totalPrice);

// function sum(previous, next) {
//     return previous + next
// }

// const grades = [75,80, 90, 95, 60]

// const maxi = grades.reduce(getMax)
// const mini = grades.reduce(getMin)

// console.log(maxi);
// console.log(mini);

// function getMax(previous, next) {
//     return Math.max(previous, next)
// }
// function getMin(previous, next) {
//     return Math.min(previous, next)
// }

// =============================================




