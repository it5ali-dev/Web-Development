// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     behalf: {
//         type: String,
//         required: true
//     },
//     fname: {
//         type: String,
//         required: true
//     },
//     lname: {
//         type: String,
//         required: true
//     },
//     gender: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     passwords: {
//         type: String,
//         required: true
//     },
//     confirmPass: {
//         type: String,
//         required: true
//     },
//     address: {
//         type: String,
//         required: true
//     },
//     phonenumbers: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: number,
//         required: true
//     },
//     martialStatus: {
//         type: String,
//         required: true
//     },
    
// });


// const Userinfo = mongoose.model('Userinfo', userSchema);

// module.exports = Userinfo;

//  ============================

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
}) 


    const Userinfo = mongoose.model('Userinfo', userSchema);

    module.exports = Userinfo;    