const { Schema, model } = require('mongoose');

// shape of the document
const userSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    bio: {type: String, required: true}
}, {timestamps: true})

// compiles the model and will make collection plural
module.exports = model('Users', userSchema); 