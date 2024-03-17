const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const { connectDb, disconnectDb } = require("./dbConnection");
const app = express();

const PORT = process.env.PORT || 8000;

// welcome route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to backend</h1>");
})

// database connection
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Connected to db and server is running on PORT`, PORT);
    })
}).catch((err) => {
    console.log("db err ", err);
    disconnectDb();
})