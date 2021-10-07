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
router.delete('/dreamly/logs', (req, res) => {
    dreams.findByIdAndDelete(req.params.id, (error, deleteDreams) => {
        res.send({ success: true });
    });
});

// Update Route
router.put('/dreamly/logs/:id', (req, res) => {
    dreams.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (error, updatedDreams) => {
            res.send(updatedDreams);
        }
    );
});

// Create route
router.post('/dreamly/logs', (req, res) => {
    dreams.create(req.body, (error, createdDream) => {
        res.redirect('/dreamly/logs');
    });
});

//Edit route
router.get('/dreamly/logs/:id/edit', (req, res) => {
    res.render('editlog.ejs')
})

// Show route
router.get('/dreamly/logs/:id', (req, res) => {
    dreams.findById(req.params.id, (error, foundDreams) => {
        // res.send(foundDreams);
        res.redirect('show.ejs');
    })
})

module.exports = router;