const mongoose = require('mongoose');

//Schema defines the structure of the data type we want to create inside a collection
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
}, { timestamps: true })

//Models surrounds the schema to provide an interface to connect/communicate to the database
const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog