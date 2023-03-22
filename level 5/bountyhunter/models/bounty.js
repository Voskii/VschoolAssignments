const { default: mongoose } = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema ({
    fname: {
        type: String,
        required: true
    },
    lname: { 
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        enum: ['sith', 'jedi'],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Bounty', bountySchema)