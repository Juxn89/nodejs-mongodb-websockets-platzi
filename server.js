const express = require('express');
const db = require('./db')
const router = require('./network/routes')

const URL_DATABASE = `${process.env.MONGO_SERVER}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`
db.Connect(URL_DATABASE)

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(router);

router(app)

app.use('/app', express.static('public'))

app.listen(3000);

console.log('Application is lintening on http://localhost:3000');