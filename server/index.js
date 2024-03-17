const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

// welcome route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to backend</h1>");
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT`, PORT);
})