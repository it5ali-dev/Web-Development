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

// // for(let i=0; i < fruitLength; i++) {
// //     console.log(fruits[i]);
// // }

// // not working well
// // for(let fruit of fruits) {
// //     console.log(fruit);
// // }

// fruits.sort().reverse();

// for(let fruit of fruits) {
//     console.log(fruit);
// }

// console.log(fruitLength);

// =========================================

// spread operator
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
// console.log(foods);

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

function combineString(...name) {
    return name.join(' ');
}

const fullName = combineString("Mr", "Ali", "Hassan");
console.log(fullName);

