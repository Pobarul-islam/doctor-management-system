const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

// rest object 
const app = express();

// middleware 
app.use(express.json());
app.use(morgan('dev'));


// routes 
app.get("/", (req, res) => {
    res.status(200).send({
        message: "server running",
    })
})

const port = process.env.PORT || 5000;

// listen on port 5000
app.listen(port, () => {
    console.log(`server running in${process.env.NODE_MODE} on port ${process.env.PORT}`)
})