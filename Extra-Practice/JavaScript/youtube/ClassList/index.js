// ClassList
// Add()
// remove()
// toggle() (it removes the class if present if not then add that class )
// replace()
// contains()

// const myH1 = document.getElementById('myH1')
// const btn = document.getElementById('btn')

// myH1.classList.add('enabled')
// btn.classList.add('enabled')
// btn.classList.remove('enabled')

// btn.addEventListener('mouseover', event => {
//     event.target.classList.toggle('hover')
// })
// btn.addEventListener('mouseout', event => {
//     event.target.classList.toggle('hover')
// })

// btn.addEventListener('click', event => {

//     if(event.target.classList.contains('disabled')) {
//         // event.target.textContent += "🤬"
//     } else {
//         btn.classList.replace('enabled', 'disabled')
//         btn.style.cursor = 'none'
//     }

// })
// console.log(btn);

// myH1.addEventListener('click', event => {

//     if(event.target.classList.contains('disabled')) {
//         event.target.textContent += "🤬"
//     } else {
//         event.target.classList.replace('enabled', 'disabled')
//     }

// })

// ----------- Quiz -------------

let btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
    btn.classList.add('enabled')
})

btns.forEach(btn => {
    btn.addEventListener('mouseover', event => {
        event.target.classList.toggle('hover')
    })
})
btns.forEach(btn => {
    btn.addEventListener('mouseout', event => {
        event.target.classList.toggle('hover')
    })
})
btns.forEach(btn => {
    btn.addEventListener('click', event => {
        if (event.target.classList.contains('disabled')) {
            event.target.classList.replace('disabled', 'enabled')
            event.target.textContent += '😋'
        } else {
            event.target.classList.replace('enabled', 'disabled')
        }
    })
}) 