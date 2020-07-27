const mongoose = require('mongoose');

var articleSchema = new mongoose.Schema ({
    title: {
        type: String
        },
    date: {
        type: String
        },
    content: {
        type: String
    },
    category: {
        type: Array,
        default: []
    },
    mainImage: {
        type: String
    },
    tags: {
        type: String
    }
});

module.exports = mongoose.model('Article', articleSchema);


/*
const articles = [];

class Article {
    constructor(title, date, content, category, mainImage, tags) {
        this.title = title;
        this.date = date;
        this.content = content;
        this.category = category;
        this.mainImage = mainImage;
        this.tags = tags;
    }

    save() {
        articles.push(this);
    }

    findAll() {
        return articles;
    }
}

module.exports = Article;
*/