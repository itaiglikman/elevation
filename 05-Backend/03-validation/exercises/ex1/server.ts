import express, { NextFunction, Request, Response } from "express";
import logger from "./02-middlewares/logger";
import counter from "./02-middlewares/counter";
import catchAll from "./02-middlewares/catch-all";
import validateId from "./02-middlewares/validateId";
import checkResourceExists from "./02-middlewares/checkResourceExists";

// ????
// how to do checkResourceExists?


// types.d.ts -> add custom property to request object
declare global {
    namespace Express {
        interface Request {
            requestCounter?: number;
        }
    }
}

const server = express();
server.use(express.json());

server.use(logger);
server.use(counter);

server.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.json({ 'message': 'welcome ', 'requestCounter': request.requestCounter });
})

const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];

server.get('/users', (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(users)
})

server.get('/users/:id', validateId, (request: Request, response: Response, next: NextFunction) => {
    // server.get('/users/:id', validateId, checkResourceExists, (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        const user = users.find(u => u.id === id);
        response.status(200).json(user);
    } catch (error) {
        console.log('userId route');
        console.log(error.message);
    }
})

server.post('/users', (request: Request, response: Response, next: NextFunction) => {
    const data = request.body;
})

server.use(catchAll);

server.listen(3000, () => {
    console.log('listening on port 3000');
})