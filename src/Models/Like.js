const mongoose = require('mongoose')

const schema = new mongoose.Schema({

    picture: {
        typeof: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        require: true
    },
    user: {
        typeof: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }

})

module.exports = mongoose.model('Like', schema)