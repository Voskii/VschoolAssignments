const express = require('express')
const app = express()

app.use(express.json())
app.use('/todo', require('./routes/todoRouter'))

app.listen(9000, () => {
    console.log('server live port 9000')
})