const Blog = require('../models/blog');

//blog_index,
const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
    .then(result => {
        res.render('blogs/index', { title: 'All Blogs', blogs: result })
    })
    .catch(err => console.error(err))
}

//blog_details
const blog_details = (req, res) => {
    const id = req.params.id
    Blog.findById(id)
    .then(result => {
        res.render('blogs/details', { title: 'Blog details', blog: result })
    })
    .catch(err => console.error(err))
}

//blog_create_get
const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create Blog' })
}

//blog_create_post
const blog_create_post = (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
    .then(result => {
        res.redirect('/blogs')
    })
    .catch(err => console.error(err))
}

//blog_delete
const blog_delete = (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/blogs'})
    })
    .catch(err => console.error(err))
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}