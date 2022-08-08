const express = require('express')
const Models = require('../models/models')
const router = express.Router()

router.get('/', (req, res, next) => {
   res.send('Hello kunminttt!')
   next()
  })

router.get('/main', (req,res) => {
    res.send('list')
})

// router.get('/:activityId')

module.exports = router;