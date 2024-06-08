const express = require('express');
const router = express.Router();

// Initial profiles data for testing
let profiles = [
    { id: 1, name: "John Lander Pascual", email: "johnlanderpascual@gmail.com", location: "cavite" },
    { id: 2, name: "James Tan", email: "Jamestan@gmail.com", location: "Lost Angeles" },
    { id: 3, name: "John Christian Laririt", email: "Johnchristianlaririt@gmail.com", location: "batangas" },
    { id: 4, name: "May Maming", email: "maymaming@gmail.com", location: "marinduque" }
];

// GET route to fetch profile by ID
router.get('/:id', (req, res) => {
    const user = profiles.find(p => p.id == req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// PUT route to update profile by ID
router.put('/:id', (req, res) => {
    const user = profiles.find(p => p.id == req.params.id);
    if (user) {
        const { name, email, location } = req.body;
        user.name = name;
        user.email = email;
        user.location = location;
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// POST route to create a new profile
router.post('/', (req, res) => {
    const { name, email, location } = req.body;
    const newProfile = {
        id: profiles.length + 1,
        name,
        email,
        location
    };
    profiles.push(newProfile);
    res.status(201).json(newProfile);
});

// Initial breakdown requests data for testing
let breakdownRequests = [];

// GET route to fetch all breakdown requests
router.get('/breakdown', (req, res) => {
    res.json(breakdownRequests);
});

// POST route to create a new breakdown request
router.post('/breakdown', (req, res) => {
    const { user, location, description } = req.body;

    // Check if all required fields are present
    if (!user || !location || !description) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const newRequest = { id: breakdownRequests.length + 1, user, location, description, date: new Date() };
    breakdownRequests.push(newRequest);
    res.status(201).json(newRequest);
});

// Initial messages data for testing
let messages = [];

// GET route to fetch all messages
router.get('/', (req, res) => {
    res.json(messages);
});

// POST route to create a new message
router.post('/', (req, res) => {
    const { from, to, message } = req.body;
    const newMessage = { id: messages.length + 1, from, to, message, date: new Date() };
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

module.exports = router;
