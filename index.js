const express = require('express');
const app = express()
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/profile', (req, res) => res.send('this is my profile'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
