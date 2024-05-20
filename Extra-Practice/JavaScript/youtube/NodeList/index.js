// NodeLists Static Collections
// Similar to Array but they don't have (map, filter, reduce Methods)

let btns = document.querySelectorAll('.btn')
// console.log(btns);

// Add Html / Css Properties
// btns.forEach(btn => {
//     btn.style.background = 'green'
//     btn.textContent += '😎'
// })

// Add EventListener
// btns.forEach(btn => {
//     btn.addEventListener('click', event => {
//         event.target.style.backgroundColor = 'red'
//     })
// })

// Add MouseOver and MouseOut Event
// btns.forEach((btn, index) => {
//     btn.addEventListener('mouseover', event => {
//         btn.style.backgroundColor = 'yellow'
//         btn.style.color = 'black'
//         btn.textContent = 'Hay! 😋'
//     })
//     btn.addEventListener('mouseout', event => {
//         btn.style.backgroundColor = 'blue'
//         btn.style.color = 'white'
//         btn.textContent = `Button ${index+1}`
//     })
// })

// Add element to NodeList
// Step 1
const newBtn = document.createElement('button')
// Step 2
newBtn.textContent = 'Button 5'
newBtn.classList = 'btn'
// Step 3
// document.body.append(newBtn)
document.body.appendChild(newBtn)
// console.log(btns);

// Here Manually Add Button 5 to the NodeList 
btns = document.querySelectorAll('.btn')

// Remove Element
btns.forEach(btn => {
    btn.addEventListener('click', event => {
        event.target.remove()
        // Here Manually Update Button to the NodeList 
        btns = document.querySelectorAll('.btn')
        console.log(btns);
    })
})




