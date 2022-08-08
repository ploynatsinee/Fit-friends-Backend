const mongoose = require('mongoose');
const express = require('express')
const router = require('./routers/routers')

const app = express()
const port = 3000

app.use('/main', router);
app.use('/', router);



app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})