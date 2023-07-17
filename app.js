const express = require('express')

const app = express()

//listen for requests
app.listen(3000)

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>')
    res.sendFile('./servers/views/index.html', { root: __dirname})
})

app.get('/about', (req, res) => {
    // res.send('<p>Home Page</p>')
    res.sendFile('./servers/views/about.html', { root: __dirname})

})


//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})


//404 page
app.use((req, res) => {
    res.status(400).sendFile('./servers/views/404.html', { root: __dirname})
})