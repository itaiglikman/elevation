import express from 'express';
import notesController from './controllers/notesRouter';

const server = express();
const port = 3000

// middleware that parses JSON for every request
server.use(express.json());

server.use('/api/notes', notesController);

// access to files in public folder: http://localhost:3000/test.html
server.use(express.static('public'))

server.listen(port, () => {
    console.log(`listen ${port}`);
})