// Dependencies //
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
// const dreams = require('./models/dreams.js');
const PORT = 3000

// Mongoose Database Connection //
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
});
const db = mongoose.connection

// Database connection error/success, defined callback functions for various events //
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
const dreamsController = require('./controllers/dream.js');
app.use('/', dreamsController);

// Listen //
app.listen(PORT, () => {
    console.log(`I can hear it..is that port ${PORT}?`);
})