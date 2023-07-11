const express = require('express');
const controller = require('./controller')
const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
  controller.getMessage()
    .then(messageList => response.success(req, res, messageList, 200) )
    .catch(err => response.error(req, res, err, 500) )
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