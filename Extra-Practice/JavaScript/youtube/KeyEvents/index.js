// events (keydown, keyup, (keypress) => (Have Compatibility issues))

// const box = document.getElementById('box')

// document.addEventListener('keydown', event => {
//     // console.log(`Key down = ${event.key}`);
//     box.textContent = '😲'
//     box.style.background = 'skyblue'
// })

// document.addEventListener('keyup', event => {
    //     // console.log(`Key up = ${event.key}`);
    //     box.textContent = '😃'
    //     box.style.background = 'lightgreen'
    // })
    
// =============================================

let box = document.getElementById('box')
const moveAmount = 30
let x = 0
let y = 0

document.addEventListener('keydown', event => {
    box.textContent = '😲'
    box.style.background = 'skyblue'
    if(event.key.startsWith('Arrow')) {
        
        event.preventDefault()
        
        switch(event.key) {
        case "ArrowUp":
            y -= moveAmount
            break
        case "ArrowDown":
            y += moveAmount
            break
        case "ArrowLeft":
            x -= moveAmount
            break
        case "ArrowRight":
            x += moveAmount
            break
        }
        // console.log(x, y);
        box.style.top = `${y}px`
        box.style.left = `${x}px`
    }
})

document.addEventListener('keyup', event => {
    box.textContent = '😃'
    box.style.background = 'lightgreen'
})

