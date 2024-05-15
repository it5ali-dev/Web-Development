const display = document.getElementById('display')

let timer = null
let startTime = 0
let elapsedTime = 0
let isRunning = false

function start() {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime
        // console.log(startTime);
        timer = setInterval(update, 10)
        isRunning = true
    }
}
function stop() {
    if(isRunning) {
        clearInterval(timer)
        elapsedTime = Date.now() - startTime
        isRunning = false
    }
}
function reset() {
    clearInterval(timer)
    startTime = 0
    elapsedTime = 0
    isRunning = false
    display.textContent = `00:00:00:00`
}
function update() {
    const current = Date.now()
    elapsedTime = current - startTime

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
    let seconds = Math.floor(elapsedTime / 1000 % 60)
    let miliSeconds = Math.floor(elapsedTime % 1000 / 10)

    hours = hours.toString().padStart(2, 0)
    minutes = minutes.toString().padStart(2, 0)
    seconds = seconds.toString().padStart(2, 0)
    miliSeconds = miliSeconds.toString().padStart(2, 0)

    display.textContent = `${hours}:${minutes}:${seconds}:${miliSeconds}`
}