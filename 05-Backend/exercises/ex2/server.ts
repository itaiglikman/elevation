import http from 'http';

type User = {
    id: number,
    name: string,
    email: string
}

let users: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

const baseUrl = '/api/users';

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-type', 'application/json')
    let url = req.url
    switch (req.method) {
        case 'GET':
            if (url === baseUrl) {
                res.write(JSON.stringify(users));
                res.statusCode = 200;
            }
            else if (url.includes(baseUrl + '/')) {
                const id = Number(url.slice(11));
                const user = users.find(user => user.id === id)
                res.statusCode = 200;
                res.write(JSON.stringify(user || 'not found user id ' + id));
            }
            else {
                res.statusCode = 404;
                res.write('some error');
            }
            break;
        case 'POST': {
            if (url === baseUrl) {
                const newUser = await readBody(req) as User;
                if (newUser) {
                    newUser.id = users[users.length - 1].id + 1;
                    users.push(newUser);
                    res.statusCode = 201;
                    res.write(JSON.stringify(users));
                }
                else {
                    res.statusCode = 400;
                    res.write('not valid payload');
                }
            }
            break;
        }

        default:
            break;
    }

    res.end();
})

server.listen(3000, () => {
    console.log('listening on 3000');
})

function readBody(req) {
    return new Promise((resolve, reject) => {
        let body = [];
        req
            .on("data", (chunk) => {
                body.push(chunk);
            })
            .on("end", () => {
                let bufferedBody = Buffer.concat(body).toString();
                resolve(JSON.parse(bufferedBody));
            });
    });
}