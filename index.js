require('dotenv').config();
const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');

require('./api/db/dbconnection');


const shoppingRoutes = require('./api/routes/itemRoute');
const regesterationRoutes = require('./api/routes/regRoute');

app.use(express.json());

app.use(express.static(path.join(__dirname,'node_modules')));
app.use(express.static(path.join(__dirname,'public')));

app.use('/api/items',shoppingRoutes);
app.use('/api/users',regesterationRoutes);

const port = process.env.port || 3000;

server = app.listen(port,function(){
    console.log(`Server is running at port: ${server.address().port}`);
});