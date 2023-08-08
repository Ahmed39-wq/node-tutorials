const express = require('express');
const blogController = require('../controllers/blogController')
const router = express.Router();

//blog routes
router.get('/', blogController.blog_index)
router.get('/create', blogController.blog_create_get)
router.post('/', blogController.blog_create_post)
router.get('/:id', blogController.blog_details)
router.delete('/:id', blogController.blog_delete)

// router.get('/', (req, res) => {
//     Blog.find().sort({ createdAt: -1 })
//     .then(result => {
//         res.render('index', { title: 'All Blogs', blogs: result })
//     })
//     .catch(err => console.error(err))
// })

//sending a request to the database
// router.post('/', (req, res) => {
//     const blog = new Blog(req.body)
//     blog.save()
//     .then(result => {
//         res.redirect('/blogs')
//     })
//     .catch(err => console.error(err))
// })

// router.get('/create', (req, res) => {
//     res.render('create', { title: 'Create Blog' })
// })

//get a blog by id
// router.get('/:id', (req, res) => {
//     const id = req.params.id
//     Blog.findById(id)
//     .then(result => {
//         res.render('details', { title: 'Blog details', blog: result })
//     })
//     .catch(err => console.error(err))
// })

//delete request by id
// router.delete('/:id', (req, res) => {
//     const id = req.params.id
//     Blog.findByIdAndDelete(id)
//     .then(result => {
//         res.json({ redirect: '/blogs'})
//     })
//     .catch(err => console.error(err))
// })



module.exports = router