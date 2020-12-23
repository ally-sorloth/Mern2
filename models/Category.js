const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'created',
    },
    description: {
        type: String,
    },
    deletedAt: {
        type: Date,
    }
}, {timestamps:true, collection:'Categories'});

module.exports = Category = mongoose.model('Category', schema);