const express = require("express")
const fs = require("fs")
const users = require("./MOCK_DATA.json")
const app = express()
const port = 2001

// Middleware
app.use(express.urlencoded({extended: false}))

// defining routes
app.get("/users", (req, res) => {
    const html = `
        <ol>
            ${users.map((user, index) => `<li>${user.first_name}</li>`).join("")}
        </ol>
    `
    return res.send(html)
})

// Rest API

app.get("/", (req, res) => {
    return res.send(`Welcome to RESTFUL API`)
})

app.get("/api/users", (req, res) => {
    return res.json(users)
})

// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id)
//     const user = users.find((user) => user.id === id)
//     return res.json(user)
// })
// app.patch("/api/user/:id", (req, res) => {
//     // todo : Edit the user with ID
//     res.json({status: "pending"})
// })
// app.delete("api/user/:id", (req, res) => {
//     // todo : Delete the user with specific ID
//     res.json({status: "pending"})
// })

// Alternate of above commented code snippet

app
    .route("/api/users/:id").get((req, res) => {
        const id = Number(req.params.id)
        const user = users.find(user => user.id === id)
        return res.json(user)
    })
    .patch((req, res) => {
        // Edit user
        const id = Number(req.params.id);
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
            const updatedUser = { ...users[userIndex], ...req.body };
            users[userIndex] = updatedUser;
            fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
                if (err) {
                    return res.status(500).json({ status: "500 Internal Server Error" });
                }
                return res.json({ status: "success", user: updatedUser });
            });
        } else {
            return res.status(404).json({ status: "404 Not Found" });
        }
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
                if (err) {
                    return res.status(500).json({ status: "500 Internal Server Error" });
                }
                return res.json({ status: "success" });
            });
        } else {
            return res.status(404).json({ status: "404 Not Found" });
        }
    });

app.post("/api/user", (req, res) => {
    const body = req.body;
    // console.log(`Body: ${JSON.stringify(body)}`);
    users.push({...body, id: users.length+1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({status: "success", id: users.length})
    })
})


app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
})