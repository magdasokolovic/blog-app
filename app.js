const express = require('express');
const mongoose = require('mongoose');
const {port, mongoURL} = require('./config/env')
const app = express()
app.use(express.json())

mongoose.connect(
    mongoURL, 
    {   useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
)
mongoose.connection.on('err', console.error)
mongoose.connection.on('open', ()=>{
    console.log("Database Connected")

})

app.listen(port, ()=>{
    console.log("=================")
    console.log('Server running')
    console.log("=================")

})