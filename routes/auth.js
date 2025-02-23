const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/User');

const router = express.Router();

router.get('/login', (req, res) => res.render('login'));
router.post('/login', passport.authenticate('local', {
    successRedirect: '/projects',
    failureRedirect: '/login'
}));

router.get('/register', (req, res) => res.render('register'));
router.post('/register', async(req, res) => {
    const user = new User({ username: req.body.username, password: req.body.password });
    await user.save();
    res.redirect('/login');
});

module.exports = router;