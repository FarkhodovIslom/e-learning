const express = require("express");
const morgan = require("morgan");
const ejs = require("ejs");
const path = require("path");
const env = require("dotenv").config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

app.get("/", (req, res) => {
    res.render("index");
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started at ${port}`)
})