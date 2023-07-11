const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.headers)
  res.header({
    "custom-header": "Our custom value"
  })
  response.success(req, res, 'List of messages')
})

router.post('/', (req, res) => {
  const {user, message} = req.body;

  controller.addMessage(user, message)
    .then(fullMessage =>{
      response.success(req, res, fullMessage, 201);
    })
    .catch(err => {
      response.error(req, res, err, 400);
    })
})

router.delete('/', (req, res) => {
  res.status(201).send({errors: [], body: 'Deleted successfully!'})
})

module.exports = router;