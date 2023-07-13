const http = require('http');

//creating a server to make a request
const server  = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write("<head><link rel='stylesheet' href='#'></head>")
    res.write('<h1>Hello World</h1>')
    res.end();
})

//server listening to requests on a port
server.listen(3000, 'localhost', () => { 
    console.log('server listening for reqeusts on port 3000');
})