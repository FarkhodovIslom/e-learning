const express = require("express");
const morgan = require("morgan");
const ejs = require("ejs");
const path = require("path");
const env = require("dotenv").config();
const router = require("./routes/index");

const app = express();
         

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 


app.use(express.static(path.join(__dirname, 'public')));


app.use("/", router);

const port = process.env.PORT;  
app.listen(port, () => {
    console.log(`Server started at ${port}`);   
});