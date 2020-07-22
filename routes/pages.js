const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const Contact = require('../models/contact');
const Article = require('../models/article');

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
    const contacts = new Contact(name, email, subject, message);
    contacts.save();
    res.render('submitContact', {contact: contacts});
});

router.get('/createArticle', (req, res) => {
    res.render('createArticle');
});

router.post('/submitArticle', (req, res) => {
    const title = req.body.title;
    const date = new Date();
    const content = req.body.content;
    const categories = req.body.categories;
    const mainImage = req.body.mainImage;
    const tags = req.body.tags;
    const articles = new Article(title, date, content, categories, mainImage, tags);
    articles.save();
    res.render('submitArticle', {article: articles});
});

module.exports = router;