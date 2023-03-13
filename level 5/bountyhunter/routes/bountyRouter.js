const express = require('express')
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const bounties = [
    { fname: 'freedom', lname: 'pirate' , living: true, bounty_amount: 50, type: 'sith', _id: uuidv4()},
]

//Routes
bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties)
    })

    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`MISSION ADD ${newBounty.fname} ${newBounty.lname} SUCCESSFUL BRUV`)
    })

bountyRouter.delete('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send('Deleted Bounty /flex')
    })

bountyRouter.put('/:bountyId', (req, res) => {
                const bountyId = req.params.bountyId
                const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
                const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
                res.send(`${updatedBounty} updated`)
})


module.exports = bountyRouter