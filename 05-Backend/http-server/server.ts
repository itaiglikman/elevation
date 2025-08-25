import * as http from "http";
// const http = require('http');

// const server = http.createServer((req, res) => {
// // const server = http.createServer((req:RequestListener, res:ServerResponse) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/html');
//     res.write('<h1>Hello</h1>');
//     res.end();
// })

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.statusCode = 200;

    if (req.url === '/') {
        res.write('Hello')
    } else if (req.url === '/notes') {
        res.write('Notes URL')
    } else {
        res.write('404')
    }

    res.end();
})

server.listen(8080, () => {
    console.log('server is listening');
})