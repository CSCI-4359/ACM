const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();

router.get('/index', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/team', (req, res) => {
    res.render('team');
});

router.get('/groups', (req, res) => {
    res.render('groups');
});

router.get('/calendar', (req, res) => {
    res.render('calendar');
});

router.get('/blog', (req, res) => {
    res.render('blog');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;