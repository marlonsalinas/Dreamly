// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000

// Mongoose Database Connection //
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Database connection error/success, defined callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


//Routes
app.get('/dreamly', (req, res) => {
    res.render('home.ejs');
});

// Index
app.get('/dreamly/logs0')


// Listen
app.listen(PORT, () => {
    console.log("I'm listening to what Josie said on port:", PORT);
})