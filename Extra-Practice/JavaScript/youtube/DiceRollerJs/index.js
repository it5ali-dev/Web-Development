let roll = document.getElementById('roll')

roll.onclick = function() {
    let diceNo = document.getElementById('dice').value
    const diceResult = document.getElementById('diceResult')
    const diceImages = document.getElementById('diceImages')
    let values = []
    const images = []
    for(let i=0; i < diceNo; i++) {
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value)
        images.push(`<img src='./assets/${value}.png' alt='Dice ${value}' width='200'>`)
    }
    diceResult.textContent = `dice: ${values.join(', ')}`
    diceImages.innerHTML = images.join('')
}

