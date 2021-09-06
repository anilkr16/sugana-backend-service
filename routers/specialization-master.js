const router = require('express').Router()
const controller = require('../api/controllers/specialization-master')

router.route('/') 
  .get((req, res) => {
    return controller.list(req, res);
  })
  .post((req, res) => {
    return controller.add(req, res)
  })
  .put((req, res) => {
    res.send('Update the associate')
  })
module.exports = router