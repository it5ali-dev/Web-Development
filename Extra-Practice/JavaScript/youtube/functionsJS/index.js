
// function HappyBirthday(name, age) {
//     console.log("Happy Birthday to you");
//     console.log("Happy Birthday to you");
//     console.log(`Happy Birthday dear ${name}`);
//     console.log(`You are ${age} years old`);
// }

// HappyBirthday('Ali Hassan', 25);

// function addition(num1, num2) {
//     return num1 + num2;
// }
// function subtraction(num1, num2) {
//     return num1 - num2;
// }
// function multiplication(num1, num2) {
//     return num1 * num2;
// }
// function division(num1, num2) {
//     return num1 / num2;
// }

// console.log(`Addition of number: ${addition(10, 20)}`);
// console.log(`Subtraction of number: ${subtraction(10, 20)}`);
// console.log(`Multiplication of number: ${multiplication(10, 20)}`);
// console.log(`Division of number: ${division(10, 20)}`);

// function isEven(num1) {
//     return num1%2 == 0 ? true : false;
// }
// console.log(`number is even: ${isEven(13)}`);

// function isValidEmail(email) {
//     return email.includes('@') ? true : false;
// }
// console.log(`email is valid: ${isValidEmail('ali@fake.com')}`);
// console.log(`email is valid: ${isValidEmail('alifake.com')}`);

// ========================================
// function Expression
// const hello = function() {
//     console.log('Hello');
// }

// setTimeout(hello, 3000);

// setTimeout(() => {
//     console.log('World');
// }, 3000);

// =======================================

// const number = [1,2,3,4,5]
// const numSquare = number.map(square)

// console.log(numSquare);

// function square(element) {
//     return Math.pow(element, 2)
// }

// Alternate of above
const number = [1, 2, 3, 4, 5, 6]
const numSquare = number.map(function (element) {
    return Math.pow(element, 2)
})

const isEven = number.filter(function(e) {
    return e%2 === 0
})

console.log(isEven);


