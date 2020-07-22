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