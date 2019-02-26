const Request = require('request')
const express = require('express')
const Axios = require('axios')
const app = express()

app.use('/', express.static('./'))

app.get('/', (req, res) => {
  res.send('index.html')
})

app.get('/desc', (req, res) => {
  Axios.get(`http://interstellar-desc.us-east-2.elasticbeanstalk.com/desc`)
  .then((result) => {res.send(result.data)})
  .catch(() => console.log('it did not work'))
})

app.get('/desc/:key', (req, res) => {
  let key = req.params.key;
  Axios.get(`http://interstellar-desc.us-east-2.elasticbeanstalk.com/desc/${key}`)
  .then((result) => {res.send(result.data)})
  .catch(() => console.log('it did not work'))
})

app.get('/pic/:picKey', (req, res) => {
  let picKey = req.params.picKey;
  Axios.get(`http://interstellar-desc.us-east-2.elasticbeanstalk.com/pic/${picKey}`)
  .then((result) => {res.send(result.data)})
  .catch(() => console.log('it did not work'))
})

app.listen(4001, () => console.log('Server running on port 4001'))