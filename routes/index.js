const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/authentication');

// User model
const User = require('../models/Users');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => 
    res.render('dashboard', {
        name: req.user.name,
        wins: req.user.wins,
        losses: req.user.losses,
}));

// Game
router.get('/game', ensureAuthenticated, (req, res) => 
    res.render('game', {
        name: req.user.name,
}));

// Technologies Used
router.get('/infoTechUsed', ensureAuthenticated, (req, res) => 
    res.render('infoTechUsed', {
        name: req.user.name,
}));

// Technologies Used
router.get('/makingTheGame', ensureAuthenticated, (req, res) => 
    res.render('makingTheGame', {
        name: req.user.name,
}));

// Incrementing Wins
router.post('/win', ensureAuthenticated, (req, res) => {
    User.updateOne({email: req.user.email}, {'$inc': {'wins': 1}}, (err, item) => {
        if(err) {
            console.log(err);
        }
    });
    res.render('game', { name: req.user.name,}
)});

// Incrementing Losses
router.post('/losses', ensureAuthenticated, (req, res) => {
    User.updateOne({email: req.user.email}, {'$inc': {'losses': 1}}, (err, item) => {
        if(err) {
            console.log(err);
        }
    });

    res.render('game', { name: req.user.name,})
});



module.exports = router;