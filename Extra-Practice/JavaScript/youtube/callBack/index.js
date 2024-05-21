
// for(let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 3000);
// }
// function hello() {
//     setTimeout(() => {
//         console.log('Hello');
//     }, 3000);
// }
// function hello(callback) {
//     console.log('Hello');
//     callback();
// }

// function goodBye() {
//     console.log("GoodBye");
// }

// function wait() {
//     console.log('Wait');
// }

// function leave() {
//     console.log('Leave');
// }

// hello(wait)
// // goodBye();

// =======================================

// function sum(callback, x, y) {
//     let result = x + y
//     callback(result)
// }

// function displayResult(result) {
//     console.log(result);
// }

// function displayPage(result) {
//     document.getElementById('myHead1').textContent = result
// }

// sum(displayPage, 3, 5)

// =======================================

// =======================================
// Callback Hell
// =======================================

// Works fine
// function task1(task2) {
//     setTimeout(() => {
//         console.log(`Task 1 Complete`);
//         task2(task3)
//     }, 2000);
// }
// function task2(task3) {
//     setTimeout(() => {
//         console.log(`Task 2 Complete`);
//         task3(task4)
//     }, 1000);
// }
// function task3(task4) {
//     setTimeout(() => {
//         console.log(`Task 3 Complete`);
//         task4()
//     }, 3000);
// }
// function task4() {
//     setTimeout(() => {
//         console.log(`Task 4 Complete`);
//     }, 1500);
// }

// task1(task2)

// Alternate way to write callback hell

function task1(callback) {
    setTimeout(() => {
        console.log(`Task 1 Complete`);
        callback()
    }, 2000);
}
function task2(callback) {
    setTimeout(() => {
        console.log(`Task 2 Complete`);
        callback()
    }, 1000);
}
function task3(callback) {
    setTimeout(() => {
        console.log(`Task 3 Complete`);
        callback()
    }, 3000);
}
function task4(callback) {
    setTimeout(() => {
        console.log(`Task 4 Complete`);
        callback()
    }, 1500);
}
function task5(callback) {
    setTimeout(() => {
        console.log(`Task 5 Complete`);
        callback()
    }, 2000);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    console.log(`All Tasks Complete`);
                })
            })
        })
    })
})



// =======================================

// =======================================


