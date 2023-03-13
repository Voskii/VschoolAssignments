const express = require('express')
const app = express()

// app.use(express.json())
app.use('/stuff', require('./Middleware'))

app.get('/stuff', (req, res, next) => {
    res.send(req.body)
})

app.listen(9000, () => {
    console.log('Server live port 9000')
})