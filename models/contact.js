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