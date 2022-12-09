const Event = require("../models/event");

module.exports = {

    // Get all events
    getAllEvents: async (req, res) => {
        const events = await Event.find({});
        if (events) {
            res.status(200).json({
                data: events
            });
        } else {
            res.status(404).json({ message: "Events not found" });
        }
    },

    // Get event by name
    getEventByName: async (req, res) => {
        const name = req.params.name;
        const events = await Event.find({ name: name});
        if (events) {
            res.status(200).json({
                data: events
            });
        } else {
            res.status(404).json({ message: "Event not found" });
        }
    },

    // Get event by tag
    getEventByTag: async (req, res) => {
        const tag = req.params.tag;
        const events = await Event.find({ tag: tag });
        if (events) {
            res.status(200).json({
                data: events
            });
        } else {
            res.status(404).json({ message: "Event not found" });
        }
    },

    // post event
    postEvents: async (req, res) => {
        const event = new Event({
            name: req.body.name,
            desc: req.body.desc,
        });
        if (event) {
            const newEvent = await event.save();
            res.status(201).json(newEvent);
        } else {
            res.status(400).json({ message: "Invalid data" });  
        }
    },
}