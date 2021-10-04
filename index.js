const express = require('express');
const app = express();

require('./api/db/dbconnection');


const shoppingRoutes = require('./api/routes/shoppingRoute');


app.use(express.json());

app.use('/api/shopping',shoppingRoutes);


const port = process.env.port || 3000;

app.listen(port,function(){
    console.log(`Server is running at port: ${port}`);
});