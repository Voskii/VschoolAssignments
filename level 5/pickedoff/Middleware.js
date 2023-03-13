const express = require('express')
const stuffRouter = express.Router()




stuffRouter.use('/', (req, res, next) => {
    console.log('The items middleware was executed')
    req.body = {color: 'aqua'}
    next()
})
// stuffRouter.use('/stuff', (req, res, next) => {
    
//     next()
// })
// stuffRouter.get('/stuff', (req, res, next) => {
//     res.send(req.body)
// })

module.exports = stuffRouter