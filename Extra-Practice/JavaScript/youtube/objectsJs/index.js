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

// function Car(make, model, year, color) {
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function() {
//         console.log(`you drive the ${this.model}`);
//     }
// }

// const car1 = new Car('fort', 'Mustang', 2023, 'black')
// const car2 = new Car('Chevrolet', 'Camaro', 2024, 'blue')
// const car3 = new Car('Dodge', 'Charger', 2023, 'white')

// console.log(car1);
// car1.drive()
// console.log(car2);
// car2.drive()
// console.log(car3);
// car3.drive()

// function Product(name, price) {
//     this.name = name
//     this.price = price

//     this.display = function() {
//         console.log(`Product : ${this.name}`);
//         console.log(`Price : $${this.price.toFixed(2)}`);
//     }

//     this.total = function(salesTax) {
//         return this.price + (this.price * salesTax
//         )
//     }
// }

// const salesTax = 0.05

// const product1 = new Product('shirt', 19.99)
// const product2 = new Product('pants', 29.99)
// const product3 = new Product('underware', 49.99)

// product1.display()
// product1.total(salesTax)
// product2.display()
// product2.total(salesTax)
// product3.display()
// product3.total(salesTax)


// ========================================

// ========================================
// class in js

// class Products {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }
//     // inside of class we don't need to write function keyword with functions
//     displayProduct() {
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     }

//     total(saleTax) {
//         return this.price + (this.price * saleTax)
//     }
// }

// const salesTax = 0.05

// const product1 = new Products('shirt', 19.99)
// const product2 = new Products('pants', 29.99)
// const product3 = new Products('underwear', 49.99)

// product1.displayProduct()
// console.log(`total price (with tax): ${product1.total(salesTax)}`);

// product2.displayProduct()
// console.log(`total price (with tax): ${product2.total(salesTax)}`);

// product3.displayProduct()
// console.log(`total price (with tax): ${product3.total(salesTax)}`);

// ========================================

// ========================================
// static Keyword

// class MathUtil {
//     // static keyword
//     static PI = 3.14159

//     // static Method
//     static diameter(radius) {
//         return radius * 2
//     }
//     static getCircumference(radius) {
//         return radius * 2 * this.PI
//     }
//     static getArea(radius) {
//         return radius * radius * this.PI
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.diameter(5));
// console.log(MathUtil.getCircumference(5));
// console.log(MathUtil.getArea(5));

// class User {
//     static userCount = 0
//     constructor(userName) {
//         this.userName = userName
//         User.userCount++
//     }

//     static getUserCount() {
//         console.log(`there are ${User.userCount} users online`);
//     }

//     sayHello() {
//         console.log(`Hello, my username is : ${this.userName}`);
//     }
// }

// const user1 = new User('ali')
// const user2 = new User('hassan')

// console.log(user1.userName);
// user1.sayHello();

// console.log(user2.userName);
// user2.sayHello();

// console.log(User.getUserCount());

// ========================================

// ========================================

// class Animal {
//     alive = true

//     eat() { 
//         console.log(`this ${this.name} is eating`);
//     }
//     sleep() { 
//         console.log(`this ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal {
//     name = 'rabbit'
//     run() {
//         console.log(`this ${this.name} is running`);
//     }
// }

// class Fish extends Animal {
//     name = 'fish'
//     swim() {
//         console.log(`this ${this.name} is swimming`);
//     }
// }

// class Hawk extends Animal {
//     name = 'hawk'
//     fly() {
//         console.log(`this ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit()
// const fish = new Fish()
// const hawk = new Hawk()

// rabbit.alive = false
// console.log(rabbit.alive);
// rabbit.eat()
// rabbit.sleep()

// rabbit.run()
// fish.swim()
// hawk.fly()

// ========================================

// ========================================
// Super Keywords

// class Animal {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     move(speed) {
//         console.log(`the ${this.name} moves at a speed of ${speed} mph`);
//     }
// }
// class Rabbit extends Animal {
//     constructor(name, age, runSpeed) {
//         super(name, age)
//         this.runSpeed = runSpeed
//     }
//     run() {
//         console.log(`the ${this.name} can run`);
//         super.move(this.runSpeed)
//     }
// }
// class Fish extends Animal {
//     constructor(name, age, swimSpeed) {
//         super(name, age)
//         this.swimSpeed = swimSpeed
//     }
//     swim() {
//         console.log(`the ${this.name} can swim`);
//         super.move(this.swimSpeed)
//     }
// }
// class Hawk extends Animal {
//     constructor(name, age, flySpeed) {
//         super(name, age)
//         this.flySpeed = flySpeed
//     }
//     fly() {
//         console.log(`the ${this.name} can fly`);
//         super.move(this.flySpeed)
//     }
// }

// const rabbit = new Rabbit('rabbit', 2, 25)
// const fish = new Fish('fish', 0.8, 12)
// const hawk = new Hawk('hawk', 1.5, 79)

// console.log(rabbit);
// console.log(fish);
// console.log(hawk);

// // rabbit.move(rabbit.runSpeed)
// rabbit.run();

// // fish.move(fish.swimSpeed)
// fish.swim();

// // hawk.move(hawk.flySpeed)
// hawk.fly();

// ========================================

// ========================================
// getter and setter

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }

//     // setters
//     set width(newWidth) {
//         if(newWidth > 0) {
//             this._width = newWidth
//         } else {
//             console.error('Width must be Positive number');
//         }
//     }
//     set height(newHeight) {
//         if(newHeight > 0) {
//             this._height = newHeight
//         } else {
//             console.error('Height must be Positive number');
//         }
//     }

//     // getters
//     get width() {
//         return this._width
//     }
//     get height() {
//         return this._height
//     }

//     get area() {
//         return this._height * this._width
//     }
// }

// const rectangle = new Rectangle(3, 4)

// console.log(rectangle);
// console.log(rectangle.area);

// class Person {
//     constructor(fName, lName, age) {
//         this.fName = fName
//         this.lName = lName
//         this.age = age
//     }
    
//     // here at setter function Name Must Be Same as of Class Attribute
//     set fName(newFName) {
//         if(typeof newFName === 'string' && newFName.length > 0) {
//             // below both experssions would work
//             this._firstName = newFName
//             // this._fName = newFName
//         } else {
//             console.error('Wrong data type. it must be String')
//         }
//     }
//     set lName(newLName) {
//         if(typeof newLName === 'string' && newLName.length > 0) {
//             this._lastName = newLName
//         } else {
//             console.error('Wrong data type. it must be String')
//         }
//     }
//     set age(newAge) {
//         if(typeof newAge === 'number' && newAge >= 0) {
//             this._age = newAge
//         } else {
//             console.error('Wrong data type. it must be integer')
//         }
//     }

//     // getters
//     // Here getter function name shuold also be same as of attribute
//     get fName() {
//         return this._firstName
//     }
//     get lName() {
//         return this._lastName
//     }
//     get age() {
//         return this._age
//     }
//     get fullName() {
//         return this._firstName + " " + this._lastName
//     }
// }

// let person1 = new Person("ali", 'hassan', 20)

// // console.log(typeof(person1.fName));
// console.log(person1.fName);
// console.log(person1.lName);
// console.log(person1.fullName);
// console.log(person1.age);

// ========================================

// ========================================
// Destructuring

// Swap the value of two variables

// let a=1
// let b=2
// console.log(`Before Destructuring: a is ${a} and b is ${b}`);
// [a, b] = [b, a]
// console.log(`After Destructuring: a is ${a} and b is ${b}`);

// Swap 2 elements in an array
// const colors = ['red','green','blue','black','white']
// console.log(`Before destructuring \n${colors}`);

// [colors[0], colors[4]] = [colors[4], colors[0]]

// console.log(`After destructuring \n${colors}`);

// assign array elements to variables
// const colors = ['red','green','blue','black','white']
// // const [firstColor, secondColor, thirdColor, fourthColor, fifthColor] = colors
// // Below rest operator is used that combines the elements on a single array
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// extract values from objects
// const person1 = {
//     fName: 'Ali',
//     lName: 'Hassan',
//     age: 20,
//     job: 'Frontend Dev',
// }
// const person2 = {
//     fName: 'Hassan',
//     lName: 'Ali',
//     age: 22,
// }
// Here destructuring variable name must be same as of attributes
// const {fName, lName, age, job} = person1
// console.log(fName);
// console.log(lName);
// console.log(age);
// console.log(job);
// console.log('=========================');
// const {fName: firstName, lName: lastName, age: myAge, job: myJob = 'unEmployeed'} = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(myAge);
// console.log(myJob);

// destructure in function Parameters
// function displayPerson({fName, lName, age, job='unemployeed'}) {
//     console.log(`name: ${fName} ${lName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }

// displayPerson(person1)
// displayPerson(person2)

// ========================================

// ========================================
// nested Objects
// const person = {
//     fullName: "Ali Hassan",
//     age: 30,
//     isStudent: true,
//     hobbies: ['karate','jellyfishing','cooking'],
//     address: {
//         street: '123 conch st.',
//         city: 'sialkot',
//         country: 'Pakistan',
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies);

// for(let property in person.address) {
//     console.log(person.address[property]);
// }

// console.log(person.address.country);
// console.log(person.address.city);
// console.log(person.address.street);

// class Address {
//     constructor(street, city, country) {
//         this.street = street
//         this.city = city
//         this.country = country
//     }
// }

// class Person {
//     constructor(name, age, ...address) {
//         this.name = name
//         this.age = age
//         this.address = new Address(...address)
//     }
// }

// const person1 = new Person('ali', 30, 'fateh', 'sialkot', 'pakistan')
// const person2 = new Person('hassan', 20, 'garh', 'sialkot', 'pakistan')
// const person3 = new Person('ali hassan', 50, 'fateh garh', 'sialkot', 'pakistan')

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.address);

// console.log(person2.name);
// console.log(person2.age);
// console.log(person2.address);

// console.log(person3.name);
// console.log(person3.age);
// console.log(person3.address);

// ========================================

// ========================================
// array of objects
// const fruits = [
//     {name: 'apple', color: 'red', calories: 95},
//     {name: 'orange', color: 'orange', calories: 45},
//     {name: 'banana', color: 'yellow', calories: 95},
//     {name: 'coccnut', color: 'white', calories: 159},
//     {name: 'pineapple', color: 'yellow', calories: 57},
// ]

// foreach
// the sequence of parameter of function remains same reverse of it won't work
// fruits.forEach((fruit, index) => console.log(`Index ${index} : ${fruit.name}`))

// map 
// const fruitName = fruits.map(fruit => fruit.name)
// console.log(fruitName);
// const fruitColor = fruits.map(fruit => fruit.color)
// console.log(fruitColor);
// const fruitCalories = fruits.map(fruit => fruit.calories)
// console.log(fruitCalories);

// filter
// const yellowFruit = fruits.filter(fruit => fruit.color === 'yellow')
// const lowCal = fruits.filter(fruit => fruit.calories < 100)
// const highCal = fruits.filter(fruit => fruit.calories >= 100)
// console.log(yellowFruit);
// console.log(lowCal);
// console.log(highCal);

// reduce Method
// const maxFruit = fruits.reduce((previous, next) => {
//     return previous.calories > next.calories ?
//     previous : next
// })
// const minFruit = fruits.reduce((previous, next) => {
//     return previous.calories < next.calories ?
//     previous : next
// })

// console.log(maxFruit);
// console.log(minFruit);


// console.log("Original array:", [...fruits]); // Log a copy of the array
// fruits.pop(); // Remove the last element from the array
// console.log("Updated array:", fruits); // Log the updated array
// console.log(fruits); // Splice method make changes in the original array
// won't work well
// console.log(fruits.splice(-2, 2, {name:"guava", color: 'green', calories: 64}));


// fruits.push({name: 'grapes', color: 'green', calories: 65})

// console.log(fruits[0].name);
// console.log(fruits[0].color);
// console.log(fruits[0].calories);

// console.log(fruits[3].name);
// console.log(fruits[3].color);
// console.log(fruits[3].calories);

// // console.log(fruits.length);

// console.log(fruits[fruits.length-1].name);
// console.log(fruits[fruits.length-1].color);
// console.log(fruits[fruits.length-1].calories);

// ========================================

// ========================================

// let fruit = ['apple','orange','banana','coconut','pineapple']
// let fruit = [1, 12, 41, 53, 4, 5]

// let ascen = fruit.sort((n1, n2) => n1 - n2)
// console.log(ascen);
// // for reverse order
// let descen = fruit.sort((n1, n2) => n2 - n1)
// console.log(descen);

// const people = [
//     {name: 'ali', age: 30, gpa: 3.0},
//     {name: 'hassan', age: 20, gpa: 3.3},
//     {name: 'ali Hassan', age: 22, gpa: 2.5},
//     {name: 'sandy', age: 21, gpa: 4.0},
// ]

// console.log([...people]);

// sort according to their age
// let ageSort = people.sort((a, b) => a.age - b.age)
// console.log([...ageSort]);

// sort according to their gpa
// let gpaSort = people.sort((a, b) => a.gpa - b.gpa)
// console.log(gpaSort);

// sort according to their name
// let nameSort = people.sort((a, b) => a.name.localeCompare(b.name))
// console.log(nameSort);

// ========================================

// ========================================
// shuffle an array
// cards.sort(() => Math.random() - 0.5)
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]];
    }
    return array; // Return the shuffled array
}

console.log("Original array:", cards);
const shuffledCards = shuffle(cards);
console.log("Shuffled array:", shuffledCards);

// ========================================
// ========================================
// ========================================




