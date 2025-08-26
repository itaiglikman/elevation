import express from 'express';
import path from 'path';
import storeController from './controllers/storeRouter';


const server = express()
const port = 3000;
server.use(express.json());

server.use(express.static(path.join(__dirname, '../web')));

server.use('/api', storeController);

server.listen(port, () => {
    console.log('listen on port ', port);
})