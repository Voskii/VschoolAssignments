const express = require('express')
const vehicleRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const vehicles = [
    {name: "f-150 raptor", type: "truck", price: 32000, _id: uuidv4()},
    {name: "challenger r/t", type: "car",price: 50000, _id: uuidv4()},
    {name: "GT 500", type: "car", price: 80795, _id: uuidv4()},
    {name: "ford gt", type: "car", price: 500000, _id: uuidv4()},
    {name: "ram trx", type: "truck", price: 84355, _id: uuidv4()},
    {name: "hummer", type: "truck", price: 105595, _id: uuidv4()},
    {name: "cyclone", type: "truck", price: 135000, _id: uuidv4()}
]

vehicleRouter.route('/')
//get all

    .get((req, res) => {
        res.send(vehicles)
    })
//get one

vehicleRouter.get('/:vehicleId', (req, res) => {
        console.log(req)
        const vehicleId = req.params.vehicleId
        const foundVehicle = vehicles.find(item => item._id === vehicleId)
        res.send(foundVehicle)
    })
//get by type

vehicleRouter.get('/search/type', (req, res) => {
    const type = req.query.type
    const filteredTypes = vehicles.filter(vehicle => vehicle.type === type)
    res.send(filteredTypes)
})
//get by name

vehicleRouter.get('/search/name', (req, res) => {
    const name = req.query.name
    const filteredName = vehicles.filter(vehicle => vehicle.name === name)
    res.send(filteredName)
})
//get by price

vehicleRouter.get('./search/price', (req, res) => {
    console.log(req)
    const price = req.query.price
    const filteredPrice = vehicles.filter(vehicle => vehicle.price === price)
    res.send(filteredPrice)
})

    module.exports = vehicleRouter