import express, { json } from 'express';
import cors from 'cors';

const server = express();

server.use(cors());
server.use(json());

const users = [];
const tweets = [];
let post = {};
let tweetsFull = [];

server.post('/sign-up', (req, res) => {

    const user = req.body;

    users.push(user);
    res.send("OK");

});

server.post('/tweets', (req, res) => {

    const tweet = req.body;

    tweets.push(tweet);
    res.send("OK");

    post = {};
    tweetsFull = [];
    for (let i = 0; i < tweets.length; i++) {
        for (let j = 0; j < users.length; j++) {
            if (tweets[i].username === users[j].username) {
                post = {
                    username: tweets[i].username,
                    avatar: users[j].avatar,
                    tweet: tweets[i].tweet
                }
            }
            tweetsFull.push(post);
        }
    }
});

server.listen(5000);