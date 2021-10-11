const mongoose = require('mongoose');
require('../model/itemSchema');
require('../model/regSchema');


mongoose.connect('mongodb://localhost/shoppingDB')
    .then(()=>console.log('Database connection established...'))
    .catch(err=> console.log(err));

