const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

//Connect to database
mongoose.connect(`mongodb+srv://xavior04350:XsN1IM4Rolp5zkit@xavior04350.7kyiwpi.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=> console.log(`connected to database`))
    .catch(err => console.log(err.message))

//ROUTE
app.use("/bounty", require('./routes/bountyRouter'))

//Error handler

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// tell server to listen at what port, ca ntake cb func
app.listen(9000, () =>{
    console.log('Server is running on port 9000')
})

//XsN1IM4Rolp5zkit