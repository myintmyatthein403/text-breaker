const express = require('express')
const bodyParser = require('body-parser')
const word = require('./word-breaker')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.status(200).send(word(req?.query?.text))
})

app.listen(1500, () => console.log('Server is running on port 1500'))