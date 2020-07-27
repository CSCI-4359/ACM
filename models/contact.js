const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema ({
    firstName: {
        type: String
        },
    lastName: {
        type: String
        },
    email: {
        type: String
        },
    subject: {
        type: String
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model('Contact', contactSchema);


/*
const contacts = [];

class Contact {
    constructor(name, email, subject, message) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }

    save() {
        contacts.push(this);
    }
}

module.exports = Contact;
*/