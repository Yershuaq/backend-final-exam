const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('dashboard'));
router.get('/qr-code', (req, res) => res.render('qr-code'));
router.get('/nodemailer', (req, res) => res.render('nodemailer'));
router.get('/bmi', (req, res) => res.render('bmi'));
router.get('/weather', (req, res) => res.render('weather'));
router.get('/crud', (req, res) => res.render('crud'));
router.get('/todo', (req, res) => res.render('todo'));

module.exports = router;