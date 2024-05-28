const express = require("express")
const app = express();
const port = 2000

// Using Express

// app.get('/', (req, res) => {
//     return res.send("Hello from Home Page")
// })
// app.get('/home', (req, res) => {
//     return res.send("Hello from Home Page")
// })

// Alternative of above
app.get(['/', '/home'], (req, res) => {
    res.send("Hello from Home Page");
});

app.get("/about", (req, res) => {
    if(req.query.name !== undefined)
        return res.send(`Hello from About Page. Hey, ${req.query.name}`)
    else
        return res.send(`Hello from About Page.`)

})

app.get("/contact", (req, res) => {
    return res.send("Welcome to the Contact Us Page")
})

app.listen(port, () => {
    console.log(`Server listening at ${port} port !`);
})


// ----------------------------------------


// ========================================
// Using Simple Node
// ========================================

// const http = require("http")
// const fs = require("fs")
// const url = require("url")

// function myHandler(req, res) {
    //     if(req.url === "/favicon.ico") return res.end()
    //         const log = `${new Date().toISOString().split('T')[0]}: ${req.method}: ${req.url} New Request Arrived !\n`
    //         const myUrl = url.parse(req.url, true)
    //         // console.log(myUrl);
    //         fs.appendFile("log.txt", log, error => {
    //             console.error(`Error: ${error}`)
    //         })
    //         switch (myUrl.pathname) {
    //             case '/':
    //             case '/home':
    //                 if(req.method === 'GET')
    //                     res.end("Welcome to Home Page")
    //                 break
    //             case '/about':
    //                 const qp = myUrl.query.myName
    //                 res.end(`Welcome to About Us Page\nHi, ${qp} !`)
    //                 break
    //             case '/contact':
    //                 res.end("Welcome to Contact Us Page\nYou can contact me at: ali@gmail.com")
    //                 break
    //             case '/search':
    //                 const search = myUrl.query.search
    //                 res.end(`Here are you result for: ${search}`)
    //                 break
    //             case '/signup':
    //                 if(req.method === "GET")
    //                     res.end(`This is SignUp form`)
    //                 else if(req.method === "POST")
    //                     // DB query
    //                     req.end("Success !")
    //                 break
    //             default:
    //                 res.end("404 Not Found")
    //         }
// }

// const server = http.createServer(myhandler)

// server.listen(2000, () => {
//     console.log("Server is listening very well  at port 2000!");
// })
    
// ========================================