require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { verify } = require('./src/verify');

const port = process.env.SERVER_PORT || 4000;

const app = express();
app.use(cors()) // We use this to test in localhost.
app.use(express.json()); // to pass request body in express version > 4

app.get('/', (req, res) => {
    //console.log('req.body=', req.body);
    //console.log('__dirname=', __dirname);
    res.sendFile('index.html', {root: __dirname});
    // the .sendFile method needs the absolute path to the file, 
    // see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.post('/', (req, res) => {
    verify(req.body.token)
        .then(ok => {
            if (ok === true) {
                res.sendStatus(200);
            } else {
                res.sendStatus(403);
            }
        });
});

app.listen(port, () => {
    console.log(`Listening the port ${port}`); 
});