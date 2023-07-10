const express = require('express');
const response = require('./network/response');

const app = express();
const router = express.Router();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router);

router.get('/message', (req, res) => {
  console.log(req.headers)
  res.header({
    "custom-header": "Our custom value"
  })
  response.success(req, res, 'List of messages')
})

router.post('/message', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  // res.send(`New message: "${req.body.text}" added successfully!`)
  response.success(req, res, `New message: "${req.body.text}" added successfully!`, 201);
})

router.delete('/message', (req, res) => {
  res.status(201).send({errors: [], body: 'Deleted successfully!'})
})

router.post('/error', (req, res) => {
  if(req.query.error === 'ok') {
    response.error(req, res, 'Simulated error! :(', 400)
  }
  else {
    response.success(req, res, 'Created successfully! :)', 201)
  }
})

app.listen(3000);

console.log('Application is lintening on http://localhost:3000');