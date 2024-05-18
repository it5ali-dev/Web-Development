
// console.log(document);
// document.title = 'Ali Hassan'
// document.body.style.background = '#c23cf3'
// document.body.style.color = '#fff'
// console.dir(document);

// const username = 'Ali Hassan'
// const msg = document.getElementById('h1')
// msg.textContent += username === '' ? 'Guest' : username

// =====================================
// Element Selector
// =====================================

// getElementById

// const myHeading = document.getElementById('h1')
// myHeading.style.background = 'red'
// myHeading.style.color = 'white'
// myHeading.style.textAlign = 'center'
// console.log(myHeading);

// -------------------------------------
// getElementByClassName

const fruits = document.getElementsByClassName('fruit')

// fruits[0].style.background = 'red'
// fruits[1].style.background = 'orange'
// fruits[2].style.background = 'yellow'

// ------------------------------------
// Work Well

// for(let fruit of fruits) {
//     fruit.style.background = 'yellow'
// }

// ------------------------------------
// Not Work Well

// fruits.forEach(element => {
//     element.style.backgroundColor = 'red'
// });

// Alternate
// Array.from(fruits).forEach(fruit => {
//     fruit.style.background = 'red'
// })

// -------------------------------------
// getElementByTagName

// const h4Elements = document.getElementsByTagName('h4')
// const liElements = document.getElementsByTagName('li')

// h4Elements[0].style.background = 'red'
// h4Elements[1].style.background = 'yellow'

// for(let h4 of h4Elements) {
//     h4.style.background = 'yellow'
// }
// for(let li of liElements) {
//     li.style.background = 'lightgreen'
// }

// alternate
// Array.from(h4Elements).forEach(h4 => {
//     h4.style.background = 'yellow'
// })
// Array.from(liElements).forEach(li => {
//     li.style.background = 'lightgreen'
// })

// -------------------------------------
// querySelector (that will select first of all)

// const element = document.querySelector(".fruit")
// console.log(element); // Select first element of same class
// element.style.background = 'yellow'

// -------------------------------------
// querySelectorAll

// const element = document.querySelectorAll(".fruit")

// console.log(element); 

// element.forEach(el => {
//     el.style.background = 'lightgreen'
// })

// =====================================
// .firstElementChild

// const element = document.getElementById('root')
// const firstChild = element.firstElementChild
// firstChild.style.backgroundColor = 'yellow'

// Using QuerySelectorAll
// const element = document.querySelectorAll('ul')
// element.forEach(el => {
//     const first = el.firstElementChild
//     first.style.background = 'lightgreen'
// })

// =====================================
// .lastElementChild

// const root = document.getElementById('root')
// const last = root.lastElementChild
// last.style.background = 'yellow'

// const root = document.querySelectorAll('ul')
// root.forEach(el => {
//     const last = el.lastElementChild
//     last.style.background = 'yellow'
// })

// =====================================
// .nextElementSibling

// const element = document.getElementById('apple')
// const nextSibling = element.nextElementSibling
// nextSibling.style.background = 'red'
// const element = document.getElementById('fruits')
// const nextSibling = element.nextElementSibling
// nextSibling.style.background = 'red'

// =====================================
// .nextElementSibling

// const element = document.getElementById('orange')
// const prevSibling = element.previousElementSibling
// prevSibling.style.background = 'red'
// const element = document.getElementById('root')
// const prevSibling = element.previousElementSibling
// prevSibling.style.background = 'red'

// =====================================
// .parentElement

// const element = document.getElementById('apple')
// const parent = element.parentElement
// parent.style.background = 'lightgreen'

// =====================================
// .children

// const element = document.getElementById('fruits')
// const child = element.children

// child[0].style.background = 'yellow'
// child[1].style.background = 'skyblue'
// child[2].style.background = 'lightgreen'

// Array.from(child).forEach(el => {
//     el.style.background = 'lightgreen'
// })

// =====================================
// =====================================
// =====================================

