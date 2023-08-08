const express = require('express')
const morgan = require('morgan'); // third party middleware,  http request logger middleware function
const mongoose = require('mongoose'); 
const blogRoutes = require('./routes/blogRoutes');

const app = express()

//connect to mongodb server
const dbURI = 'mongodb+srv://hello:test1234@cluster0.znaazhi.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(result => app.listen(3000))//listen for requests
.catch(err => console.error(err))

//Register view engine
app.set('view engine', 'ejs')

//listen for requests
// app.listen(3000)

//this leaves the current request hanging when the middleware runs without the next()
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:', req.method);
//     next(); // this tells the middleware to move on to the next request
// }) 

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next(); 
// })

//middlware and static files like a css file
app.use(express.static('public')) //making this file public to the browse
app.use(express.urlencoded()) //takes all the url encoded data and parses it into an object
app.use(morgan('dev')) //can be used similar to the above function

//mongoose and mongo sandbox routes,add a new blog
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'About Node Js',
        snippet: 'Node Js is so cool',
        body: 'Node Js is so cool. I want to see how this tuts is gonna end.'
    })
    blog.save() //save the blog to the database
    .then(result => {
        res.send(result)
    })
    .catch(err => console.error(err))
})

//retrieve all blogs from the database
app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then(result => {
        res.send(result)
    })
    .catch(err => console.error(err))
})

//retrieving a single blog by id
app.get('/single-blog', (req, res) => {
    Blog.findById('64d0e216ec3991faefbdcf6a')
    .then(result => {
        res.send(result)
    })
    .catch(err => console.error(err))
})

//Route handlers
app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    // res.send('<p>Home Page</p>')
    res.render('about', { title: 'About' })
})

//blog routes 
app.use('/blogs', blogRoutes) //scoping the blog  route handlers to make it reusable

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})


//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})

//Middleware runs between requests and responses, thus, functions that are executed in the middle of processing an http request-response cycle