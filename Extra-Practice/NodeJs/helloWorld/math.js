function add(a, b) {
    return a+b;
}

function sub(a, b) {
    return a-b;
}

// module.exports = "Ali"
module.exports = {add, sub}
// module.exports = {addFun: add, subFun: sub}


// exports.add = (a, b) => a+b
// exports.sub = (a, b) => a-b