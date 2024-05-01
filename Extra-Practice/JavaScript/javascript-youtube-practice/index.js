// console.log(`hello`)
// console.log(`i like burger`)

// window.alert("This is an alert")
// window.alert("i like pizza")



// variables
let fname = 'Ali';
let lname = 'Hassan';
let age = 22;
let price = 12.99;
let gpa = 3.33;
let food = 'Burger';
let email = 'alihassan@gmail.com';


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