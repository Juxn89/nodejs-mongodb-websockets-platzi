const express = require('express');
const app = express();
const server = require('http').Server(app);

const db = require('./db')
const router = require('./network/routes')
const { connect } = require('./socket')

const NODE_SERVER_PORT = 3000;
const URL_DATABASE = `${process.env.MONGO_SERVER}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`
db.Connect(URL_DATABASE)


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(router);

connect(server)

router(app)

app.use('/app', express.static('public'))

server.listen(NODE_SERVER_PORT, () => {
  console.log(`Application is lintening on http://localhost:${NODE_SERVER_PORT}`);
});
