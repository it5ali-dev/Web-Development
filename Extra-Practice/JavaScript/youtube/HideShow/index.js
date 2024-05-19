const img = document.getElementById('box')
const btn = document.getElementById('btn')

btn.addEventListener('click', event => {
    if (btn.textContent === 'Hide') {
        img.style.visibility = 'hidden'
        btn.textContent = 'Show'
    } else {
        img.style.visibility = 'visible'
        btn.textContent = 'Hide'
    }
})
