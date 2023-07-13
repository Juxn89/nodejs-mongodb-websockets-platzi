const express = require('express');
const controller = require('./controller')
const response = require('../../network/response');

const router = express.Router();

router.post('/', (req, res) => {
  const {users} = req.body;

  controller.addChat(users)
    .then(data =>{
      response.success(req, res, data, 201);
    })
    .catch(err => {
      response.error(req, res, err, 400);
    })
})

router.get('/:userId', (req, res) => {
  const { userId } = req.params;

  controller.listChats(userId)
    .then(user => response.success(req, res, user, 200))
    .catch(err => response.error(req, res, err, 500))
})

module.exports = router;