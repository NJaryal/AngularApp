const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    Heading: {
        type: String, 
        required: true
    },
    Date: { 
        type: Date, 
        default: Date.now 
    },
    shortDescription: {
        type: String, 
        required: true
    },
    Author: {
        type: String
    },
    Content: {
       type: String, 
       required: true
    },
    sourceUrl: {
        type: String
    }  
})
module.exports = mongoose.model('News', newsSchema)
