const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const languageSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    greeting: {
        type: String
    },
    pangram: {
        type: String
    },
    filler: {
        type: String
    }
})

const Language = model('Language', languageSchema)


module.exports = Language;