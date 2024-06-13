const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config();
const cors = require("cors");

const app = express()


const PORT  = process.env.PORT 
app.use(cors());


mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on('error',()=>{
      console.log('Eror');
})
db.once('open',()=>{
    console.log("Database is Connected");
})




app.set('view engine' ,'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// link router
const urlRouter = require('./routes/urlroute')
app.use('/', urlRouter)


app.listen(PORT, ()=>{
     console.log("server is running");
})