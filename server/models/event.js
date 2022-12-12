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
        enum: ['sel','reg','none'],
        default: 'sel'
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
}, {
    timestamps: true
});


const Event = mongoose.model("event", eventSchema);
module.exports = Event;