const http = require('http');
const fs = require('fs');

//creating a server to make a request
const server  = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    //send an htlml file
    fs.readFile('./servers/views/index.html', (err, data) => {
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