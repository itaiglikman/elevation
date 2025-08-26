import express from 'express';

const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}

// const = {
//   zipcode: "6863155",
//   city: "Ankh Morpork",
//   middleName: "Wilfred"
// }

const server = express();

const baseUrl = '/api/details';

server.get(baseUrl, (req, res) => {
    const query = req.query;
    console.log(query);
    res.send({ query })
})

server.get(baseUrl + '/:name', (req, res) => {
    const name = req.params.name;
    res.send(users[name])
})


const port = 3000;
server.listen(port, () => {
    console.log('listening to port ' + port);
})