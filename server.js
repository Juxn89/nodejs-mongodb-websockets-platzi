const express = require('express');

const app = express();
const router = express.Router();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router);

router.get('/message', (req, res) => {
  res.send('List of message')
})

router.post('/message', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send(`New message: "${req.body.text}" added successfully!`)
})

app.listen(3000);

console.log('Application is lintening on http://localhost:3000');