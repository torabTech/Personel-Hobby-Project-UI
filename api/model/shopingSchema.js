const mongoose = require('mongoose');

const schoolSchema = mongoose.Schema({
    item: {
        type:String,
        minlength: 3,
        maxlength: 50,
        required: [true, 'item name is required']
    },
    price: {
        type:Number,
        min:0,
        default:0
    },
    orderDate:{
        type:Date,
        default:Date.now
    },
    deliveryDate:{
        type:Date,
        default:Date.now
    }
});

mongoose.model('Shopping',schoolSchema,'shoppings');

