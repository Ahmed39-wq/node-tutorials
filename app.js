const express = require('express')
const morgan = require('morgan'); // third party middleware,  http request logger middleware function

const app = express()

//Register view engine
app.set('view engine', 'ejs')

//listen for requests
app.listen(3000)

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
app.use(express.static('public')) //making this file public to the browser

app.use(morgan('dev')) //can be used similar to the above function

//Route handlers
app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>')
    const blogs = [
        { title: 'Marina Bay', snippet: 'lorem ipsum dolor sit amet, consectetur adip'},
        { title: 'Seychelles', snippet: 'lorem ipsum dolor sit amet, consectetur adip'},
        { title: 'Ibiza', snippet: 'lorem ipsum dolor sit amet, consectetur adip'},
        { title: 'Miami', snippet: 'lorem ipsum dolor sit amet, consectetur adip'}
    ]
    res.render('index', { title: 'Home', blogs})
})

app.get('/about', (req, res) => {
    // res.send('<p>Home Page</p>')
    res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blog' })
})

//redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about')
// })


//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})

//Middleware runs between requests and responses, thus, functions that are executed in the middle of processing an http request-response cycle