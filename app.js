const express = require('express');
const mongoose = require('mongoose');
const core = require('./middleware/security')
const errors = require('./middleware/errors')
const {port, mongoURL} = require('./config/env')
const usersRouter = require('./routes/users')
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
const app = express()
app.use(core)

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/v1/users', usersRouter)

app.use(errors)
app.listen(port, ()=>{
    console.log("=================")
    console.log('Server running with port:' + port)
    console.log("=================")

})