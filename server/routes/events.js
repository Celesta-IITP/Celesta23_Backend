const EventsControllers = require('../controllers/events');
const express = require('express');
const router = express.Router();

router.get('/events', EventsControllers.getAllEvents);
router.get('/events/:name', EventsControllers.getEventByName);
router.get('/events/:tag', EventsControllers.getEventByTag);
router.post('/events',  EventsControllers.postEvents);

module.exports = router;