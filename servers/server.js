const http = require('http');
const fs = require('fs');
const _ = require('lodash');

//creating a server to make a request
const server  = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    //lodash simplifies and enhances the functionality of various JavaScript methods, 
    //making it easier to work with arrays, objects, strings, and other data types.
    const num = _.random(0, 20)
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    })

    greet()

    //set header content type
    res.setHeader('Content-Type', 'text/html');


    let path = './views/'
    
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            break;    
        default: 
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //send an htlml file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })

})

//server listening to requests on a port
server.listen(3000, 'localhost', () => { 
    console.log('server listening for reqeusts on port 3000');
})

//Status codes describe the type of response sent to the browser from the server
// 200 - OK
// 301 - 'Resource removed';
// 404 - 'Not found';
// 500 - 'Internal Server Error';

// 100 range - 'informational responses'
// 200 range - 'successs codes'
// 300 range - 'codes for redirects'
// 400 range - 'user or client error codes'
// 500 range - 'server error codes'
