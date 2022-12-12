const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    date: {
        type: String,
    },
    form: {
        type: String
    },
    rules:{
        type:String
    },
    tag : {
        type: String
    },
},
{collection: 'events'},
 {
    timestamps: true
});


const Event = mongoose.model("events", eventSchema);
module.exports = Event;