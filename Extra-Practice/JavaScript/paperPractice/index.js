// var fruits = ['apple', 'orange', 'banana'];
// console.log(fruits[0]); // Outputs: apple
// console.log(fruits[1]); // Outputs: orange
// fruits[1] = 'grape';
// console.log(fruits);
// var numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);
// fruits.push('kiwi');
// fruits.unshift('pineapple');
// console.log(fruits);
// // fruits.pop();
// // fruits.splice(1, 2); // Removes 2 elements starting from index 1
// var moreFruits = ['grapefruit', 'mango'];
// var fruits = fruits.concat(moreFruits);
// console.log(fruits);

// var slicedFruits = fruits.slice(1, 3); // Extracts elements from index 1 to 2
// console.log(slicedFruits);
// var index = fruits.indexOf('banana');
// console.log(index);
// var fruitsString = fruits.join(', '); // Joins with commas
// console.log(fruitsString);
// fruits.forEach(function (fruit) {
//     console.log(fruit);
// });
// var uppercasedFruits = fruits.map(function (fruit) {
//     return fruit.toUpperCase();
// }); // make a new array
// console.log(uppercasedFruits);

// var myGreetFunction = (name) => {
//     return 'Hello, ' + name + '!';
//     };
// var greeting = myGreetFunction('John');    
// console.log(greeting);

// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
//     habbits: ["cooking", "fishing", "tourism"]
// };

// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person);
// console.log(person.fullName());

// function myFunction() {
//     console.log(this);
// }
// myFunction(); // In non-strict mode, logs the window object; in strict mode, logs undefined

// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//     console.log(this); // Logs the button element
// });

// Arrow function example
// button.addEventListener('click', () => {
//     console.log(this); // Logs the global object or undefined in strict mode
// });

// function greeting(age, city) {
//     console.log(`${age}, ${this.name}, from ${city}`);
// }
// const person = {name: "ali"}
// greeting.apply(person, [25, 'Lahore'])

// function greet() {
//     console.log(this.name);
// }

// const person = { name: 'Frank' };
// const boundGreet = greet.bind(person);
// boundGreet(); // Logs 'Frank'

// let head = document.createElement("h2");           
// head.id = 'head1';                                
// head.textContent = "This is heading";              
// head.style.backgroundColor = "lightgreen";        
// document.body.prepend(head);                  

// function slide() {
//     var bullet = document.getElementsByTagName("li");
//     for (let i = 0; i < bullet.length; i++) {
//         if (bullet[i].textContent.indexOf("children") >= 0) {
//             bullet[i].remove();
//             i--; // Decrement the index to account for the removed item
//         }
//     }
// }

// window.onload = () => {
//     document.querySelector("button").onclick = slide;
// }

// ---------------------------------------------
// JQuery

// $(document).ready(function() {
//     $("button").click(function() {
//         $("ul").hide()
//     })
// })

// $(document).ready(function() {
//     $("#flip").click(function() {
//         $("#panel").slideDown("slow")
//     })
// })

// Chaining
// $("#panel").css("color", "red").slideUp(2000).slideDown(2000);

// $("button").click(function(){
//     var div = $("ul");
//     div.animate({height: '300px', opacity: '0.4'}, "slow");
//     div.animate({width: '300px', opacity: '0.8'}, "slow");
//     div.animate({height: '100px', opacity: '0.4'}, "slow");
//     div.animate({width: '100px', opacity: '0.8'}, "slow");
//     })

// $("*") // Selects all elements
// $(this) // Selects the current HTML element
// $("p.intro") // Selects all <p> elements with class="intro"
// $("p:first") // Selects the first <p> element
// $("ul li:first") // Selects the first <li> element of the first <ul>
// $("ul li:first-child") // Selects the first <li> element of every <ul>
// $("[href]") // Selects all elements with an href attribute
// $("a[target='_blank']") // Selects all <a> elements with a target attribute value equal to "_blank"
// $("a[target!='_blank']") // Selects all <a> elements with a target attribute value NOT equal to "_blank"
// $(":button") // Selects all <button> elements and <input> elements of type="button"
// $("tr:even") // Selects all even <tr> elements
// $("tr:odd") // Selects all odd <tr> elements

// ----------------------------------------------
// DOM Manipulation
// ----------------------------------------------

// $("#test").html("<b>Hello world!</b>");//setter
// // $("#test").text("Hello world!"); //setter
// $("#test").text() //getter
// $("#test").html() //getter
// $("#test1").val("Dolly Duck"); //value of input element

// $(document).ready(function() {
//     $("button").click(function() {
//         alert("Button is Clicked")
//     })
// })

// $(document).ready(function() {
//     $("button").mouseenter(function() {
//         alert("Button is Clicked")
//     })
// })

// $(document).ready(function() {
//     $("button").on("click", function() {
//         $("ul").toggle()
//     })
// })

// $(document).ready(function() {
//     $("button").on("mouseenter", function() {
//         $("h1").css("background-color", "grey")
//     })
//     $("button").on("mouseleave", function() {
//         $("h1").css("background-color", "white")
//     })
// })

// Alternate of above
// $(document).ready(function () {
//     $("button").on({
//         mouseenter: function () {
//             $("h1").css("background-color", "lightgray")
//         },
//         mouseleave: function () {
//             $("h1").css("background-color", "white")
//         }
//     })
// })

// $(document).ready(function () {
//     $("li").on("click", function (event) {
//         event.preventDefault();
//         console.log($(this).text());
//     });
// })

// $(document).ready(function () {
//     // Create a new button element using jQuery
//     var btn = $("<button></button>")
//         .addClass("child")
//         .text("Child Button 3");
    
//     // Append the new button to the parent div
//     $("#parent").append(btn);
    
//     // Set up event delegation
//     $("#parent").on("click", ".child", function () {
//         alert($(this).text() + " clicked!");
//     });
// });



// ---------------------------------------------







