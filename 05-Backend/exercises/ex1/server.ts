import * as http from 'http';

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    if(req.url==='/'){
        res.write('Hello, world')
        console.log(req.method);
    }
    else if(req.url==='/about'){
            res.write('about')
            console.log(req.method);
        }
    else if(req.url==='/contact'){
            res.write('contact')
            console.log(req.method);
        }
        else res.write('page not found')
    res.end();
})

const port = 3000
server.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})
