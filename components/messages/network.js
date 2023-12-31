const express = require('express');
const controller = require('./controller')
const response = require('../../network/response');
const multer = require('multer')

const router = express.Router();
const upload = multer({
  dest: 'public/files'
})

router.get('/', (req, res) => {
  const filterMessages = req.query.user || null;

  controller.getMessage(filterMessages)
    .then(messageList => response.success(req, res, messageList, 200) )
    .catch(err => response.error(req, res, err, 500) )
})

router.post('/', upload.single('file'), (req, res) => {
  const {user, message, chat} = req.body;
  const {file} = req

  controller.addMessage(chat, user, message, file)
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