// Working with Divs
// Step 1: Create Element
// const newH1 = document.createElement('h1')

// // Step 2: Add Attributes / Properties
// newH1.textContent = 'i like burger'

// Step 3: Append Element to the DOM
// document.body.append(newH1)
// newH1.id = 'myH1'
// newH1.style.color = 'red'
// newH1.style.textAlign = 'center'
// console.log(newH1);

// Step 3: Append Element to the DOM
// document.body.append(newH1) // Appends as a last child of DOM / Web Page
// document.body.prepend(newH1) // Appends as a first child of DOM / Web Page
// document.getElementById('box1').prepend(newH1)

// const box2 = document.getElementById('box2')
// console.log(box2);
// document.body.insertBefore(newH1, box2)

// Step 4: Remove Html Element
// document.getElementById('myH1').remove()
// document.body.removeChild(newH1)

// ========================================

// ========================================
// working and creating listElements

// Step 1: Create the Element
const newElement = document.createElement('li')

// Step 2: Add Attributes / Properties
newElement.textContent = 'Coconut'
newElement.id = 'coconut'
newElement.style.fontWeight = 'bold'
newElement.style.background = 'lightgreen'

// Step 3: Append Element to DOM
// document.getElementById('banana').append(newElement)
// document.getElementById('fruits').append(newElement)
// document.getElementById('fruits').prepend(newElement)
// document.getElementById('banana').prepend(newElement)

// const orange = document.getElementById('orange')
// document.getElementById('fruits').insertBefore(newElement, orange)
// console.log(newElement);

// Using QuerySelector
const listItems = document.querySelectorAll('#fruits li')
document.getElementById('fruits').insertBefore(newElement, listItems[2])

// ========================================
// ========================================



