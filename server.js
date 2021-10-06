// Dependencies //
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const dreams = require('./models/dreams.js');
const PORT = 3000

// Mongoose Database Connection //
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Database connection error/success, defined callback functions for various events //
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware //
app.use((req, res, next) => {
    console.log('Middleware active');
    next();
})
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//Routes //
app.get('/dreamly', (req, res) => {
    res.render('home.ejs');
});

//Route handler
app.post

// Index route
app.get('/dreamly/logs', (req, res) => {
    dreams.find({}, (error, foundDreams) => {
        res.send(foundDreams);
    });
});

// New route
app.get('/dreamly/newlog', (req, res) => {
    res.render('newlog.ejs');
})

// Delete route
app.delete('/dreamly/logs/:indexOfDreamsArray', (req, res) => {
    dreams.splice(req.params.indexOfDreamsArray, 1);
    res.redirect('/dreamly/logs');
})

// Create route
app.post('/dreamly/logs', (req, res) => {
    if (req.body.completed === 'on') {
        req.body.completed = true;
    } else {
        req.body.completed = false;
    }
    dreams.create(req.body, (error, createdDream) => {
        res.send(createdDream);
        // res.redirect('/dreamly/logs');
    });
});


// Show route
app.get('/dreamly/logs/:indexOfDreamsArray', (req, res) => {
    res.render('show.ejs', {allDreams: dreams[req.params.indexOfDreamsArray]})
})


//Edit route
app.get('/dreamly/logs/:indexOfDreamsArray/edit', (req, res) => {
    res.render('editlog.ejs')
})

// Listen //
app.listen(PORT, () => {
    console.log(`I can hear it..is that port ${PORT}?`);
})