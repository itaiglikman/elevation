import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import expressRateLimit from "express-rate-limit";
import mongoose from 'mongoose';
import catchAll from "./03-middlewares/catch-all";
import logger from "./03-middlewares/logger";
import router from "./05-routes/router";

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


server.use('/api', router)

server.use(catchAll);

async function dbConnect() {
    try {
        const dbConnectionString = `mongodb+srv://itaig1998_db_user:${process.env.DB_PASS}@cluster0.oypbsmo.mongodb.net/People?retryWrites=true&w=majority&appName=Cluster0`;
        const db = await mongoose.connect(dbConnectionString);
        console.log("we are connected to mongoDB, db: " + db.connections[0].name);
    } catch (error) {
        console.log(error);
    }
}

server.listen(process.env.PORT, async () => {
    await dbConnect();
    console.log('listening on port:' + process.env.PORT);
})