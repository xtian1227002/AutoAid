const express = require('express');
const router = express.Router();

// Initial breakdown requests data for testing
let breakdownRequests = [];

// GET route to fetch all breakdown requests
router.get('/', (req, res) => {
    res.render('breakdown', { breakdownRequests });
});

// POST route to create a new breakdown request
router.post('/', (req, res) => {
    const { user, location, description } = req.body;

    // Check if all required fields are present
    if (!user || !location || !description) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const newRequest = { id: breakdownRequests.length + 1, user, location, description, date: new Date() };
    breakdownRequests.push(newRequest);
    res.status(201).json(newRequest);
});

module.exports = router;
