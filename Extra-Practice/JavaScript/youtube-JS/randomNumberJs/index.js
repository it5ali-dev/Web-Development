let rand = document.getElementById('random');
let reset = document.getElementById('reset');
let content = document.getElementById('random-content');
let randomNumber;

// rand.onclick = function() {
//     randomNumber = Math.round(Math.random() * 100);
//     content.textContent = randomNumber;
// }
rand.addEventListener('click', function() {
    randomNumber = Math.round(Math.random() * 100);
    content.textContent = randomNumber;
});
reset.addEventListener('click', function() {
    randomNumber = 0;
    content.textContent = randomNumber;
});
