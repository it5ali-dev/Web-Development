
// console.log("hello");
// // console.log(x);
// console.log("End of program");

// --------------------------------

// try {
//     // Network Error
//     // Promise Rejection
//     // Security Error

//     console.log('Hello');
//     // console.log(x);
// } catch(error) {
//     console.error(error);
// } finally {
//     // Close File
//     // Close Connections
//     // Release Resources
//     console.log('Finally here');
// }
// console.log('Reach End of program');

// --------------------------------
function call() {
    try {
        const dividend = Number(window.prompt("Enter a dividend: "));
        const divisor = Number(window.prompt("Enter a divisor: "));
        if(divisor == 0) {
            throw new Error(`Can't divide by zero`)
        }
        if(isNaN(dividend) || isNaN(divisor)) {
            throw new Error('Value must be number')
        }
        const result = dividend / divisor;
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(error);
    } finally {
        console.log('Reached End');
    }
}

setTimeout(() => {
    call();
}, 3000);


// --------------------------------
// --------------------------------
// --------------------------------
