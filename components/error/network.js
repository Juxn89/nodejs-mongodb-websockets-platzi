const express = require('express')
const response = require('../../network/response')

const router = express.Router();

router.post('/', (req, res) => {
  if(req.query.error === 'ok') {
    response.error(req, res, 'Simulated error! :(', 400)
  }
  else {
    response.success(req, res, 'Created successfully! :)', 201)
  }
})

module.exports = router;