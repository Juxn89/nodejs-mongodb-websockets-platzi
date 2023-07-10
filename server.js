const express = require('express');

const app = express();
const router = express.Router();

app.use(router);

router.get('/message', (req, res) => {
  res.send('List of message')
})

router.post('/message', (req, res) => {
  res.send('New message added')
})

app.listen(3000);

console.log('Application is lintening on http://localhost:3000');