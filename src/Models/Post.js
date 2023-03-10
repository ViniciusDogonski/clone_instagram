const mongoose = require('mongoose')


const schema = new mongoose.Schema({

    picture: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

})

module.exports = mongoose.model('Post', schema)