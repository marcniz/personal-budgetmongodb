const { Double } = require("mongodb")
const mongoose = require("mongoose")

// validate whether it's a number or not
// validate if the value has been passed
// find by id

const budgetSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
        unique: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
        uppercase: true
    },
    budgetval: {
        type: Number,
        trim: true,
        required: true,
    },
    sectioncolor: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    }
}, { collection: 'personal_budget'})

module.exports = mongoose.model('personal_budget', budgetSchema)