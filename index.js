const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const tripData = require('./data/tripData.json')
var cors = require('cors')

app.use(cors())

app.get('/api/trip-data', (req, res) => {
  res.send(tripData)
})

app.get('/api/trip-data/:id', (req, res) => {
  const id = req.params.id
  const selectedItem = tripData.find(item => item.id === id)
  res.send(selectedItem)
})

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})