import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());
server.use(json());

const users = [];

server.post('/sign-up', (req, res) => {

    const user = req.body;

    users.push(user);
    res.send("OK");

})


server.listen(5000);