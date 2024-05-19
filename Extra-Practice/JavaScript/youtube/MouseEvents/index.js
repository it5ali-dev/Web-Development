// eventLister (click, mouseover, mouseout)

const myBox = document.getElementById('box1')
const btn = document.getElementById('btn')

// Change BackgroundColor
// myBox.addEventListener('click', function() {
//     myBox.style.background = 'skyblue'
//     myBox.textContent = 'Ouch! 🤕'
// })

// Using Arrow Function
btn.addEventListener('click', event => {
    myBox.style.background = 'pink'
    myBox.textContent = 'Ouch! 🤕'
})

btn.addEventListener('mouseover', event => {
    myBox.style.background = 'yellow'
    myBox.textContent = "Don't do it 🙄"
})

btn.addEventListener('mouseout', event => {
    myBox.style.background = 'lightgreen'
    myBox.textContent = "Click me 😃"
})

// -------------------------------------------

// btn.addEventListener('click', event => {
//     event.target.style.background = 'pink'
//     event.target.textContent = 'Ouch! 🤕'
// })

// btn.addEventListener('mouseover', event => {
//     event.target.style.background = 'yellow'
//     event.target.textContent = "Don't do it 🙄"
// })

// btn.addEventListener('mouseout', event => {
//     event.target.style.background = 'lightgreen'
//     event.target.textContent = "Click me 😃"
// })

// Alternate of above
// function clickMe(event) {
//     // Way 1 (without using event)
//     // myBox.style.background = 'skyblue'
//     // Way 2 (with using event)
//     event.target.style.background = 'pink'
//     event.target.textContent = 'Ouch! 🤕'

//     // console.log(event);
// }
// myBox.addEventListener('click', clickMe)