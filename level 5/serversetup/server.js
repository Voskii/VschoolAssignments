const express = require('express')
const app = express()

// Middleware (for every request)
// app.use('/', express.json()) '/' is an optional parameter
app.use(express.json())
//Hard coded Data


const fish = [
    { name: 'Nemo', age: 25 },
]


        //ROUTES
//1: Endpoint (mount path) 2: CB function
app.use("/movies", require('./Routes/movieRouter'))
app.use("/tv", require('./Routes/tvRouter'))


//1: PORT  2: CallBack Function
app.listen(9000, () =>{
    console.log('Server is running on port 9000')
})