import dotenv from 'dotenv';
import cors from 'cors';
import express, {Request,ErrorRequestHandler, Response } from 'express';
import notesController from './controllers/notesRouter';
import { logger } from './middlewares/logger';

// Load environment variables from .env file
dotenv.config();

const server = express();
const PORT = process.env.PORT

// middlewares that run for every route:
server.use(express.json()); //parses JSON for every request
server.use(cors()); // add cors headers for every response
// server.use(express.static('public')) // access to files in public folder: http://localhost:3000/test.html
server.use(logger);

server.use('/api/notes', notesController);

// handle error if thrown:
server.use((err:Error , req:Request, res:Response, next) => {
    console.log('error middlewares');
    console.log(err)
    res.status(res.statusCode || 500).json({
        success: false,
        message: err.message || "Server Error"
    })
})



server.listen(PORT, () => {
    console.log(`listen ${PORT}`);
})