const express = require('express');
const controller = require('./controller')
const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
  const filterUser = req.query.user || null;

  controller.getUser(filterUser)
    .then(userList => response.success(req, res, userList, 200) )
    .catch(err => response.error(req, res, err, 500) )
})

router.post('/', (req, res) => {
  const {name} = req.body;

  controller.addUser(name)
    .then(fullUser =>{
      response.success(req, res, fullUser, 201);
    })
    .catch(err => {
      response.error(req, res, err, 400);
    })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  controller.updateUsers(id, name)
    .then(user => response.success(req, res, user, 200))
    .catch(err => response.error(req, res, err, 500))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  controller.deleteUser(id)
    .then(user => response.success(req, res, user, 200))
    .catch(err => response.error(req, res, err, 500))
})

module.exports = router;