const express = require('express');
const db = require('./config/mongoose');
const app = express();

const port = 8000;
// use express router


//setup the view engine

app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(port, function(error){
    if(error)
    {
        console.log(`Error in running the server: ${error}`);
    }
    console.log(`server is running on port : ${port}`);
});