// console.log(`hello`)
// console.log(`i like burger`)

// window.alert("This is an alert")
// window.alert("i like pizza")


// ==========================================
// variables
/*
// Strings
let fname = 'Ali';
let lname = 'Hassan';
let food = 'Burger';
let email = 'alihassan@gmail.com';

// Numbers
let age = 22;
let price = 12.99;
let gpa = 3.33;

// Boolean
let online = 'true';
let forsale = 'true';
let student = 'true';


console.log(`this car is for sale: ${forsale}`);
console.log(`${fname} is online: ${online}`);
console.log(`your name is ${fname}`);
console.log(`you are ${age} years old`);
console.log(`your gpa is ${gpa}`);
console.log(`your email is ${email}`);

console.log(typeof(age));
console.log(typeof(fname));
console.log(typeof(gpa));

document.getElementById('myhead1').textContent = `Hello ${fname + " " + lname}`;
document.getElementById('mypara1').textContent = `i like ${food}`;
document.getElementById('mypara2').textContent = `your email is: ${email}`;

*/
// ============================================

// ============================================
// Arithmatic Operator
// let student = 30;
// student++; // student = student + 1 | student += 1 (Augmented Assignment Operator)
// student--; // student = student - 1 | student -= 1
// student *= 2; // student = student * 2
// student /= 2; // student = student / 2
// student **= 2 // student = student ** 2 (means power of 2)


// console.log(student);

// ============================================

// ============================================

// How to get input from the user
// two ways of getting input from user

// let username;

// 1. using window.prompt method

// username = window.prompt("Enter your name? ");
// console.log(`your username: ${username}`);

// 2. By using input element and tag that using js to get the input data

// document.getElementById('mybutton').onclick = function() {
//     username = document.getElementById('text').value;
//     document.getElementById('myhead1').textContent = `Hello ${username}`
// }


// ============================================

// ============================================

// type conversion
// let age = window.prompt("What's your age? ");
// age = Number(age); // convert String to number
// age += 1;
// console.log(`you are ${age} years old: `, typeof(age));

// let x = 'pizza';
// let y = 'pizza';
// let z = 'pizza';

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof(x));
// console.log(y, typeof(y));
// console.log(z, typeof(z));

// ============================================

// ============================================

// const PI = 3.14159;
// let radius;
// let circumference;

// // radius = window.prompt("Enter radius of circle?");
// // radius = Number(radius);
// // console.log(circumference);

// document.getElementById('mysubmit').onclick = function() {
//     radius = document.getElementById('mytext').value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById('newtext').textContent = circumference + "cm";
// }

// ============================================

// ============================================

// let x = 3.32;
// let y = 2.2;

// let z = x*y;

// console.log(z);
// console.log(Math.round(z));
// console.log(Math.floor(z));
// console.log(Math.ceil(z));
// console.log(Math.trunc(z));
// console.log(Math.log(z));
// console.log(Math.sign(z)); // for positive (1), zero for 0, and -1 for negative
// // console.log(Math.sin(z)); // work with radian value
// // console.log(Math.cos(z)); // work with radian value
// // console.log(Math.tan(z)); // work with radian value
// console.log(Math.pow(x, y));
// console.log(Math.max(x, y, z));
// console.log(Math.min(x, y, z));

// ============================================

// ============================================

// function showAge() {
//     let age = document.getElementById('mytext').value;
//     age = Number(age);
//     if (age >= 18) {
//         document.getElementById('newtext').textContent = "You are allowed to enter this site.";
//     } else {
//         document.getElementById('newtext').textContent = "You must be 18+ to enter this site.";
//     }
//     // Clear the input field
//     document.getElementById('mytext').value = '';
// }

// ============================================

// ============================================

let mysubmit = document.getElementById('mysubmit');

mysubmit.onclick = function() {
    // Retrieve the current value of the input field inside the click event handler
    let age = document.getElementById('mytext').value;
    age = Number(age); // Convert the value to a number

    // Use the current value of age to determine the message
    let message = age >= 18 ? "You are an adult" : "You are a minor";
    
    // Update the message displayed in the 'newtext' element
    document.getElementById('newtext').textContent = message;
    
    // Clear the input field
    document.getElementById('mytext').value = '';
}


// ============================================

// ============================================

