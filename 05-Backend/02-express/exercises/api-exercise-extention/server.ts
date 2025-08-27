import express from 'express';
import postsController from './02-controllers/postsController';
import postsModel from './01-models/postsModel';
const server = express()
const port = 3000;
server.use(express.json());

server.use('/', postsController);

server.listen(port, () => {
    console.log('listen on port ', port);
    postsModel.getPostsObject();
})
