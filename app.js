const express = require('express')

const app = express()

//Register view engine
app.set('view engine', 'ejs')

//listen for requests
app.listen(3000)

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>')
    res.render('index', { title: 'Home' })
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