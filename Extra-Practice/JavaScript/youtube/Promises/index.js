// Apromise is an object that manages asynchronous operations. It promise to return a value
// Pending -> Resolved or Rejected
// new Promise((resolve, reject) => {async code})

// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = true
//             if(dogWalked) {
//             resolve(`You walk the dog`);
//             } else {
//                 reject(`You didn't walk the dog`)
//             }
//         }, 1500);
//     })
// }
// function cleanKitchen(callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchenCleaned = true
//             if(kitchenCleaned) {
//             resolve(`You clean the kitchen`);
//             } else {
//                 reject(`You didn't clean the kitchen`)
//             }
//         }, 2500);
//     })
// }
// function takeOutTrash(callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const outTrash = true
//             if(outTrash) {
//             resolve(`You take out the trash`);
//             } else {
//                 reject(`You didn't take out the trash`)
//             }
//         }, 500);
//     })

// }

// walkDog().then(value => {
//     console.log(value);
//     return cleanKitchen()
// }).then(value => {
//     console.log(value);
//     return takeOutTrash()
// }).then(value => {
//     console.log(value);
//     console.log(`You finished`);
// }).catch(error => {
//     console.error(error)
// })

// ===============================
// task 1 Promise Basics

// const myBirthDay = (isKayoSick) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!isKayoSick) {
//                 resolve(1)
//             } else {
//                 reject(new Error(`I am sad`))
//             }
//         }, 2000);
//     })
// }

// console.time("Timer: ")

// myBirthDay(true).then((result) => {
//     console.timeLog("Timer: ")
//     console.log(result);
// }).catch((err) => {
//     console.timeLog("Timer: ")
//     console.error(err);
// }).finally(() => {
//     console.timeLog("Timer: ")
//     console.log(`Party!`);
// });

// ===============================
// task 1 Promise Basics

const enterNumber = () => {
    return new Promise((resolve, reject) => {
        const userNumber = Number(window.prompt("Enter Number (1 - 6): "))
        const randomNumber = Math.floor(Math.random() * 6 + 1)

        if(isNaN(userNumber)) {
            reject(new Error('Wrong Input Type'))
        }
        if(userNumber === randomNumber) {
            resolve({
                points: 2,
                randomNumber,
            })
        } else if(userNumber === randomNumber - 1 || userNumber === randomNumber + 1) {
            resolve({
                points: 1,
                randomNumber,
            })
        } else {
            resolve({
                points: 0,
                randomNumber,
            })
        }
    })
}

const continueGame = () => {
    return new Promise((resolve) => {
        if(window.confirm('Do you want to continue')) {
            resolve(true)
        } else {
            resolve(false)
        }
    })
}

// const handleGuess = () => {
//     enterNumber().then((result) => {
//         alert(`Dice: ${result.randomNumber}: you got ${result.points}`)

//         continueGame().then((result) => {
//             if(result == true) {
//                 handleGuess()
//             } else {
//                 alert("Game End")
//             }
//         })
//     }).catch((error) => {
//         alert(error)
//     })
// }

const handleGuess = async () => {
    try {
        const result = await enterNumber()
    alert(`Dice: ${result.randomNumber}: you got ${result.points}`)

    const isContinue = await continueGame()

    if(isContinue) {
        handleGuess;
    } else {
        alert(`Game End`)
    }
    } catch (error) {
        console.error(error)
    }
    
}

const Start = () => {
    handleGuess()
}

Start()
