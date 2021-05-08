const { Schema, model } = require('mongoose');

// shape of your document
const blogSchema = new Schema({
    title: {type: String, required: true},
    snippet: {type: String, required: true},
    body: {type: String, required: true}
}, {timestamps: true})

// will compile model and make colleciton plural
module.exports = model('Blog', blogSchema);