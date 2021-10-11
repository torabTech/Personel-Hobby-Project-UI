const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type:String,
        minlength: 3,
        maxlength: 50,
        required: [true, 'user-name is required'],
        unique:[true,'username should be unique']
    },
    email: {
        type:String,
        minlength: 5,
        maxlength: 100,
        unique:[true,'email already exist']
    },
    password:String,
    gender:String

});

mongoose.model('User',userSchema,'users');

