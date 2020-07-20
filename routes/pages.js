const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Contact = require('../models/contact');


const router = express.Router();

router.get('/', (req, res) => {
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

router.post('/submitContact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const contact = new Contact(name, email, subject, message);
    contact.save();
    res.render('submitContact', {contact: contact});
});

module.exports = router;