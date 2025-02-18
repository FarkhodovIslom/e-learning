const express = require("express");
const morgan = require("morgan");
const ejs = require("ejs");
const path = require("path");

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, views));

app.get("/", (req, res) => {
    res.render("")
})