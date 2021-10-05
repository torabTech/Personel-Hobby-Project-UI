require('dotenv').config();
const express = require('express');
const app = express();

require('./api/db/dbconnection');


const shoppingRoutes = require('./api/routes/itemRoute');


app.use(express.json());

app.use('/api/item',shoppingRoutes);


const port = process.env.port || 3000;

server = app.listen(port,function(){
    console.log(`Server is running at port: ${server.address().port}`);
});