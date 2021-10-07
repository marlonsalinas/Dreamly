const express = require('express');
const router = express.Router();
const dreams = require('../models/dreams');

// Controllers //
router.get('/dreamly', (req, res) => {
    res.render('home.ejs');
});

// Index route
router.get('/dreamly/logs', (req, res) => {
    dreams.find({}, (error, foundDreams) => {
        res.render('index.ejs', {
            dreams: foundDreams
        });
    });
});

// New route
router.get('/dreamly/newlog', (req, res) => {
    res.render('newlog.ejs');
});

// Delete Route
router.delete('/dreamly/logs/:id', (req, res) => {
    dreams.findByIdAndRemove(req.params.id, (error, deleteDreams) => {
        res.redirect('/dreamly/logs');
    });
});

// Update Route
router.put('/dreamly/logs/:id', (req, res) => {
    dreams.findByIdAndUpdate(
        req.params.id, req.body, () => {
            res.redirect('/dreamly/logs');
        });
});

// Create route
router.post('/dreamly/logs', (req, res) => {
    if (req.body.completed === 'on') {
        req.body.completed = true;
    } else {
        req.body.completed = false;
    }
    
    dreams.create(req.body, (error, createdDream) => {
        res.redirect('/dreamly/logs');
    });
});

//Edit route
router.get('/dreamly/logs/:id/edit', (req, res) => {
    dreams.findById(req.params.id, (error, foundDreams) => {
        res.render('editlog.ejs', {
            dreams: foundDreams
        });
    });
});

// Show route
router.get('/dreamly/logs/:id', (req, res) => {
    dreams.findById(req.params.id, (error, foundDreams) => {
        res.render('show.ejs');
    })
})

module.exports = router;