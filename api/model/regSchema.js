const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

userSchema.post('save',function(doc,next){
    console.log('post registeration: ',doc);
    next();
});

userSchema.pre('save',async function(next){
   // console.log('user pre registeration: ',this);

   const salt = await bcrypt.genSalt();
   this.password = await bcrypt.hash(this.password,salt); 
   
   next();
});
mongoose.model('User',userSchema,'users');

