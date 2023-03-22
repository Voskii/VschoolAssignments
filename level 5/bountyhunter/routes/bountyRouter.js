const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')
const { v4: uuidv4 } = require('uuid')

// const bounties = [
//     { fname: 'obi-wan', lname: 'kenobi' , living: true, bounty_amount: 50, type: 'jedi', _id: uuidv4()},
//     { fname: 'darth', lname: 'vader' , living: false, bounty_amount: 100, type: 'sith', _id: uuidv4()},
//     { fname: 'count', lname: 'dooku' , living: true, bounty_amount: 25, type: 'jedi', _id: uuidv4()},
//     { fname: 'asajj', lname: 'ventress' , living: true, bounty_amount: 50, type: 'sith', _id: uuidv4()}
// ]

//                                                  Routes
// bountyRouter.route('/')
//     .get((req, res) => {
//         res.send(bounties)
//     })

    // .post((req, res) => {
    //     const newBounty = req.body
    //     newBounty._id = uuidv4()
    //     bounties.push(newBounty)
    //     res.send(newBounty)
    // })
bountyRouter.get('/', async (req, res, next)=> {
        try{
            const bounties = await Bounty.find()
            return res.status(200).send(bounties)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })

bountyRouter.get('/search/type', async (req, res, next) => {
    console.log(req.query)
    try{
        const result = await Bounty.find({type: req.query.type});
        res.send(result);
    } catch(err) {
        res.status(500)
        return next(err)
    }
})


bountyRouter.get('/:bountyId', (req, res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    if(!foundBounty){
        const error = new Error(`The bounty ${bountyId} was not found.`)
        return next(error)
    }
})

bountyRouter.delete('/:bountyId', async (req, res, next) => {
    try{
        const deletedBounty = await Bounty.findOneAndDelete({
            _id: req.params.bountyId})
            if(!deletedBounty){
                res.status(404).send(`Bounty ${req.params.bountyId} not found`)
            }
            res.status(200).send(`${deletedBounty.title} deleted from DB`)
    }catch(err){
        res.status(500);
        return next(err)
    }
})

bountyRouter.put('/:bountyId', async (req, res, next) => {
    try{
        const updatedBounty = await Bounty.findOneAndUpdate({
            _id: req.params.bountyId}, req.body, {new: true})
        if(!updatedBounty){
            return res.status(404).send(`Bounty ${req.params.bountyId} does not exist`);
        }
        res.status(201).send(updatedBounty)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

bountyRouter.post('/', (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty
    .save()
    .then((savedBounty) => {
        return res.status(200).send(savedBounty)
    })
    .catch((err) => {
        res.status(500)
        return next(err)
    })
})



module.exports = bountyRouter