const express = require('express');
const router = express.Router();

// Sample messages data
let messages = [
    { id: 1, from: "ABC Auto Repair", to: "You", message: "We have dispatched our team to your location. Estimated arrival time: 30 minutes.", date: "10 minutes ago" },
    { id: 2, from: "Speedy Car Service", to: "You", message: "Your request for car breakdown assistance has been accepted. Hang tight, we are on our way!", date: "15 minutes ago" },
    { id: 3, from: "Elite Auto Works", to: "You", message: "Thank you for contacting us. Our technician will reach you shortly to assist with your car trouble.", date: "20 minutes ago" },
    { id: 4, from: "Reliable Auto Care", to: "You", message: "We have received your breakdown assistance request. Our team is en route and will arrive soon.", date: "25 minutes ago" },
    { id: 5, from: "QuickFix Auto", to: "You", message: "Our service vehicle is on the way to your location. Please remain where you are.", date: "30 minutes ago" }
];

// Endpoint to get all messages
router.get('/', (req, res) => {
    res.json(messages);
});

// Endpoint to get a message by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const message = messages.find(message => message.id === id);
    if (message) {
        res.json(message);
    } else {
        res.status(404).json({ error: 'Message not found' });
    }
});

module.exports = router;
