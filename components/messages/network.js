const express = require('express');
const controller = require('./controller')
const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
  const filterMessages = req.query.user || null;

  controller.getMessage(filterMessages)
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

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  console.log(id, message)

  controller.updateMessage(id, message)
    .then(message => response.success(req, res, message, 200))
    .catch(err => response.error(req, res, err, 500))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  controller.deleteMessage(id)
    .then(message => response.success(req, res, message, 200))
    .catch(err => response.error(req, res, err, 500))
})

module.exports = router;