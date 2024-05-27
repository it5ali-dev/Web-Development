const fs = require("fs")

// Sync
// fs.writeFileSync("./text.txt", "Hey there! this is getting started with NodeJs")

// Give output that can be stored in a variable and error handling is done by try catch blocks
// const result = fs.readFileSync("./contact.txt", "utf-8")
// console.log(result);

// fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString())
// fs.appendFileSync("./text.txt", "\nFirst Update")
// fs.copyFileSync("./text.txt", "./new.txt")

// fs.unlinkSync("./new.txt")

// console.log(fs.statSync("./text.txt").isFile());
// console.log(fs.statSync("./text.txt").isDirectory());

// fs.mkdirSync("my-docs")
// fs.mkdirSync("my-docs/a/b", {recursive: true})
// fs.rmdirSync("./my-docs/a/b")
// fs.rmdirSync("./my-docs")

// ====================================================

// Async
// fs.writeFile("./text.txt","Hello There! This is Ali Hassan", (error) => {
//     console.error(error)
// })

// Give output that can;t be stored in a variable and error handled in arrow function with result output
// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if(!err) {
//         console.log(result)
//     } else {
//         console.log(err);
//     }
// })

// fs.copyFile("./contact.txt", "./text.txt", (error) => {
//     console.log(error);
// })

// fs.unlink("./contact.txt", err => {
//     console.log(err);
// })

