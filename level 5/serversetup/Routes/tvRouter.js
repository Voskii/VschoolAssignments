const express = require('express')
const tvRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const tvshow = [
    {title: 'the sandman', genre: 'drama', _id: uuidv4()},
    {title: 'the last of us', genre: 'drama', _id: uuidv4()},
    {title: 'peaky blinders', genre: 'god tier', _id: uuidv4()},
    {title: 'vikings', genre: 'pagan', _id: uuidv4()},
]



tvRouter.route('/')
//Get All
    .get((req, res) => {
    res.send(tvshow)
    })
//Get one
tvRouter.get('/:tvId', (req, res) => {
        console.log(req)
        const tvId = req.params.tvId
        const foundTv = tvshow.find(show => show._id === tvId)
        res.send(foundTv)
    })
//Post One
    .post((req, res) => {
    const newTv = req.body
    newTv._id = uuidv4()
    tvshow.push(newTv)
    res.send(`Successfully added ${newTv.title} to the database`)
    })

module.exports = tvRouter 