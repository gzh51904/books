const express = require('express');
const app = express();

const {PORT} = require('./config.json');

const allRouter = require('./api');
app.use(allRouter);

app.use(express.static('./'));

app.listen(PORT,()=>{
    console.log("running ok");
})