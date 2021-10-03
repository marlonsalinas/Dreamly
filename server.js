// Dependencies //
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

// Database connection error/success, defined callback functions for various events //
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


//Routes
app.get('/dreamly', (req, res) => {
    res.render('home.ejs');
});

// Index route
app.get('/dreamly/logs', (req, res) => {
    res.render('index.ejs');
})

// New route
app.get('/dreamly/newlog', (req, res) => {
    res.render('newlog.ejs');
})

// Show route


// Delete route

//Edit route


// Listen //
app.listen(PORT, () => {
    console.log(`I can hear it..is that port ${PORT}?`);
})