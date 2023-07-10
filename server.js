const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send('Hi! :)')
})

app.listen(3000);

console.log('Application is lintening on http://localhost:3000');