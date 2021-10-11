const mongoose = require('mongoose');

const shoppingSchema = mongoose.Schema({
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
    stockQty:{
        type:Number,
        default:0
    },
    regDate:{
        type:Date,
        default:Date.now
    },
    unit: {
        type: String,
        enum: ['pcs','kg','pnd','lb','inch','cm','mt','can','pkg'],
        default : 'pcs'
    },
    item_specification: {
        munifacturer: String,
        weight: String, 
        color:String,
        image:{
            type:String,
            default:'app/assets/images/default.png'
        },
        description:String
    }


});

mongoose.model('Shopping',shoppingSchema,'items');

