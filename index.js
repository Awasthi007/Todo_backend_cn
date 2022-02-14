const express = require('express');
const app = express();

const port = 8000;
// use express router

app.use('/', require('./routes'));

app.listen(port, function(error){
    if(error)
    {
        console.log(`Error in running the server: ${error}`);
    }
    console.log(`server is running on port : ${port}`);
});