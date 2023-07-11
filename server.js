const express = require('express');
const router = require('./network/routes')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(router);

router(app)

app.use('/app', express.static('public'))

app.listen(3000);

console.log('Application is lintening on http://localhost:3000');