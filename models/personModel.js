const mongoose = require('mongoose');

const personSchema = mongoose.Schema(
    {
        name : {
            type : 'string',
            required : [true, "please enter a name"]
        },
        age : {
            type : Number,
            required : true,
            default : 0
        },
       
        email : {
            type : String,
            required : false
        }
    },
    // {
    //     timestamps : true
    // }
);

const Person = mongoose.model('Person', personSchema);

module.exports = Person;