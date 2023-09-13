require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose');
const Person = require("./models/personModel.js");
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : false }));

const PORT = process.env.PORT || 3000

//
app.get('/', (req, res) => {
    res.send ("Welcome to Express sever api!");
});



const url = process.env.ATLAS_URL 
mongoose.connect(url + "person-api")
.then(() => {
    console.log("server connected to mongodb")
    app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)})
})
.catch((err)=>{console.log(err)});