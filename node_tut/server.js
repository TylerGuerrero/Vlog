const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    })

    greet();
    greet();

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html'; 
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'; 
            res.statusCode = 200;
            break;
        case '/about-me': 
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default :
            path += '404.html'; 
            res.statusCode = 404;
            break;
    }

    // set header content type
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path, (err, data) => {
        if (err) throw err;
        res.end(data);
    })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, 'localhost', () => {
    console.log(`Server running on port: ${PORT}`);
})