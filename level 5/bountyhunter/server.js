const express = require('express')
const app = express()

app.use(express.json())


//ROUTE
app.use("/bounty", require('./routes/bountyRouter'))

// tell server to listen at what port, ca ntake cb func
app.listen(9000, () =>{
    console.log('Server is running on port 9000')
})