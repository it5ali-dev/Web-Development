// Objects in JS

// let person1 = {
//     firstName: 'Ali',
//     lastName: 'Hassan',
//     age: 20,
//     isEmployeed: true,
//     sayHello: function() { // Normal function expression
//         console.log(`Hi! I am ${this.firstName}`);
//     }
// }
// let person2 = {
//     firstName: 'Ahmad',
//     lastName: 'Hassan',
//     age: 12,
//     isEmployeed: false,
//     // this keyword can not be used with arrow functions
//     sayHello: () => { // Arrow Function
//         console.log(`Hi! I am ${this.firstName}`);
//     }
// }

// console.log(person1);
// console.log(person1.firstName + " " + person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployeed);
// person1.sayHello()

// console.log(person2);
// console.log(person2.firstName + " " + person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployeed);
// person2.sayHello()

// ========================================

// ========================================
// Contructors

function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function() {
        console.log(`you drive the ${this.model}`);
    }
}

const car1 = new Car('fort', 'Mustang', 2023, 'black')
const car2 = new Car('Chevrolet', 'Camaro', 2024, 'blue')
const car3 = new Car('Dodge', 'Charger', 2023, 'white')

console.log(car1);
car1.drive()
console.log(car2);
car2.drive()
console.log(car3);
car3.drive()


// ========================================
// ========================================




