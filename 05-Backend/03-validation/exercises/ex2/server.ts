import dotenv from 'dotenv';
import cors from "cors";
import express from "express";
import expressRateLimit from "express-rate-limit";
import catchAll from "./02-middlewares/catch-all";
import logger from "./02-middlewares/logger";
import postsRouter from './04-routes/postsRouter';
import routeNotFound from './02-middlewares/routeNotFound';

// Load environment variables from .env file
dotenv.config();

const server = express();

// security DoS Attack: limits number of request from the same IP:
server.use(expressRateLimit({
    windowMs: 1000, //time limit
    max: 20 //max requests allowed in that time window
}));

server.use(express.json());
server.use(cors());
server.use(logger);

server.use('/posts', postsRouter)

// routeNotFound
server.use(routeNotFound);

// any other error
server.use(catchAll)

server.listen(process.env.PORT, () => {
    console.log('listening on port:' + process.env.PORT);
})