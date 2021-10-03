// Dependencies
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const mongoose = require('mongoose');
const dream = require('./models/dreams');
const PORT = 3000

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
app.get('/dreamly/logs', (req, res) => {
    res.send('this is where logged dreams will go!');
})

// NEW
app.get('/dreamly/newlog', (req, res) => {
    res.send('this is where new logs will be created!')
})


// Listen
app.listen(PORT, () => {
    console.log(`I can hear it..is that port ${PORT}?`);
})