let decrement = document.getElementById('dec');
let increment = document.getElementById('inc');
let reset = document.getElementById('reset');
let countlabel = document.getElementById('count');
let count = 0;

decrement.onclick = function() {
    count--;
    countlabel.textContent = count;
}
increment.onclick = function() {
    count++;
    countlabel.textContent = count;
}
reset.onclick = function() {
    count = 0;
    countlabel.textContent = count;
}