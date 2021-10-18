
const mongoose = require('mongoose');



// Product schema

const Product = mongoose.model('Product',{
    name: {
        type:String,
        required:true
    },
    catagory: {
        type:String,
        required:true
    },
    price: {
        type:String,
        required:true
    },
    countInstock: {
        type:String,
        required:true
    },
    brand: {
        type:String,
        required:true
    },
    rating: {
        type:String,
        required:true
    },
    numReviews: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    }
});


module.exports = {Product}