const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const Contact = require('../models/contact');
const Article = require('../models/article');

const router = express.Router();

router.get('/index', (req, res) => {
    res.render('index', {title: 'TAMUSA ACM Homepage' });
});

router.get('/about', (req, res) => {
    res.render('about', {title: 'About Us' });
});

router.get('/team', (req, res) => {
    res.render('team', {title: 'Our Team' });
});

router.get('/groups', (req, res) => {
    res.render('groups', {title: 'Our Groups' });
});

router.get('/calendar', (req, res) => {
    res.render('calendar', {title: 'Our Calendar' });
});

router.get('/blog', (req, res) => {
    res.render('blog', {title: 'Our Blog' });
});

router.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact Us' });
});

router.post('/submitContact', (req, res) => {
    // Use schema model
    const contact = new Contact ({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });

    contact.save()
        .then(result => {
            res.render('submitContact', {contact: result, title: 'Submitted Contact' }); 
        })
        .catch(err => console.log(err));
});
 

    /* Use class model
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const contacts = new Contact(name, email, subject, message);
    contacts.save();
    res.render('submitContact', {contact: contacts});
});
*/
router.get('/article', (req, res) => {
    res.render('article', {title: 'Program this to get Article title'});
});

router.get('/createArticle', (req, res) => {
    res.render('createArticle', {title: 'Create an Article' });
});

router.post('/submitArticle', (req, res) => {
    // Use schema model
    const article = new Article ({
        title: req.body.title,
        date: new Date(),
        content: req.body.content,
        categories: req.body.categories,
        mainImage: req.body.mainImage,
        tags: req.body.tags
    });

    article.save()
        .then(result => {
            res.render('submitArticle', {article: result}, {title: 'Submitted Article' }); 
        })
        .catch(err => console.log(err));
});


    /*
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
*/

module.exports = router;