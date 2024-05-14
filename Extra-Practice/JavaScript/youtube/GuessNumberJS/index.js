const min = 50;
const max = 100;

const answer = Math.floor(Math.random() * (max - min) + min);
let attempt = 0;
let guess;
let running = true;

// console.log(guess);

while (running) {
    guess = Number(prompt('Guess a number between 50 and 100'));
    guess = Number(guess);
    if(isNaN(guess)) {
        window.alert('Please enter a number');
    } else if(guess < min || guess > max) {
        window.alert('Please enter a number between 50 and 100');
    } else {
        attempt++;
        if(guess < answer) {
            window.alert('Too low! Try Again');
        } else if(guess > answer) {
            window.alert('Too high! Try Again');
        } else if(guess === answer) {
            window.alert(`You got it! It took you ${attempt} attempt(s)`);
            running = false;
    }
    }
}

// console.log(`Random answer: ${answer}`);