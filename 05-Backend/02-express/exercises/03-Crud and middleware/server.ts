import express from "express";
import { runInNewContext } from "vm";

const server = express();

server.use(express.json());

server.get('/sanity', (req, res) => {
    res.send('Server is up and running');
})

const wordCounter: { [key: string]: number } = {
    'hello': 3,
    'world': 5,
    'express': 2
};

server.get('/:word', (req, res) => {
    const word = req.params.word;
    const count = wordCounter[word] ? wordCounter[word] : 0
    res.send({ count: count });
})

server.post('/', (req, res) => {
    const word = req.body;
    const value = word.word;
    if (wordCounter[value]) wordCounter[value]++;
    else wordCounter[value] = 1;
    res.send('ok')
})

server.listen(3000, () => {
    console.log('listening on port 3000');
})