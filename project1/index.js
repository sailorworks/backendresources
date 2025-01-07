// Import the express module
const express = require("express");
const fs = require("fs")
const users = require("./MOCK_DATA.json");

// Create an instance of an Express application
const app = express();

//middleware-plugin
app.use(express.urlencoded({ extended: false }))

app.get("/users", (req, res) => {
    return res.json(users);
})
// Define a route for the root URL
app.route("/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        return res.json({ status: "Pending" });
    })
    .delete((req, res) => {
        return res.json({ status: "Pending" });
    });

app.post("/users", (req, res) => {
    const body = req.body
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length + 1 });
    })
})
// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});