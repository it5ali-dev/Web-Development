// Apromise is an object that manages asynchronous operations. It promise to return a value
// Pending -> Resolved or Rejected
// new Promise((resolve, reject) => {async code})

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true
            if(dogWalked) {
            resolve(`You walk the dog`);
            } else {
                reject(`You didn't walk the dog`)
            }
        }, 1500);
    })
}
function cleanKitchen(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true
            if(kitchenCleaned) {
            resolve(`You clean the kitchen`);
            } else {
                reject(`You didn't clean the kitchen`)
            }
        }, 2500);
    })
}
function takeOutTrash(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const outTrash = true
            if(outTrash) {
            resolve(`You take out the trash`);
            } else {
                reject(`You didn't take out the trash`)
            }
        }, 500);
    })

}

walkDog().then(value => {
    console.log(value);
    return cleanKitchen()
}).then(value => {
    console.log(value);
    return takeOutTrash()
}).then(value => {
    console.log(value);
    console.log(`You finished`);
}).catch(error => {
    console.error(error)
})
