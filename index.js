require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const Person = require("./models/personModel.js");
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : false }));

const PORT = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json());

//
app.get('/', (req, res) => {
    res.send ("Welcome to Express person api!");
});
//
//Read
app.get('/api', async(req, res) => {
    try {
        const people = await Person.find({});
        res.status(200).json(people);
    } catch (err) {
        console.log (err.message);
        res.status(500).json({message: err.message});
    }
});
//
app.get('/api/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const people = await Person.findById(id);
        res.status(200).json(people);
    } catch (err) {
        console.log (err.message);
        res.status(500).json({message: err.message});
    }
});
//

//create product
app.post('/api', async(req, res) => {
    try {
        const people = await Person.create(req.body)
        res.status(200).json(people);

    } catch (err) {
        console.log (err.message);
        res.status(500).json({message: err.message});
    }
});

//update product
app.put('/api/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const people = await Person.findByIdAndUpdate(id, req.body);
        if(!people){
            return res.status(404).json({message: `Person with this ID ${id } was not found`});
        }
        const peopleUpdate = await Person.findById(id);
        res.status(200).json(peopleUpdate);
    } catch (err) {
        console.log (err.message);
        res.status(500).json({message: err.message});
    }
});


//delete product
app.delete('/products/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const people = await Person.findByIdAndDelete(id);
        if(!people){
            return res.status(404).json({message: `Person with this ID ${id } was not found`});
        }
        res.status(200).json(`Person with this ID ${id} has been deleted`);
    } catch (err) {
        console.log (err.message);
        res.status(500).json({message: err.message});
    }
});




const url = process.env.ATLAS_URL 
mongoose.connect(url + "person-api")
.then(() => {
    console.log("server connected to mongodb")
    app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)})
})
.catch((err)=>{console.log(err)});