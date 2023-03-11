const express = require('express')
const app = express()

// MIDDLEWARE
app.use(express.json())

//ROUTES
app.use('/vehicles', require('./routes/vehicleRouter'))

//port listen

app.listen(9000, () =>{
    console.log('server running port 9000')
})