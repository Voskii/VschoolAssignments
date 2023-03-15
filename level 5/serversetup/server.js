const express = require('express')
const app = express()

// Middleware (for every request) middleware needs to call next() or send a resoponse (res.send())
// app.use('/', express.json()) '/' is an optional parameter
app.use(express.json())
//Middleware

app.use('/items', (req, res, next) => {
    console.log('The items middleware was executed')
    next()
})

app.use('/items', (req, res, next) => {
    req.body = {name: 'kyle'}
    next()
})

app.get('/items', (req, res, next) => {
    console.log('Get request recieved')
    res.send(req.body)
})

        //ROUTES
//1: Endpoint (mount path) 2: CB function
app.use("/movies", require('./Routes/movieRouter'))
app.use("/tv", require('./Routes/tvRouter'))


//1: PORT  2: CallBack Function
app.listen(9000, () =>{
    console.log('Server is running on port 9000')
})