const mongoose = require("mongoose");
const express = require('express')
const router = require('./routers/routers')

const app = express()
const port = 3000

app.use('./', router);


app.get('/', (req, res) => {
  res.send('Hello kunminttt!')
})

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})