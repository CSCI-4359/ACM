const mongoose = require('mongoose');

var mailingListSchema = new mongoose.Schema ({
    email: {
        type: String
    }
});

module.exports = mongoose.model('MailingList', mailingListSchema);