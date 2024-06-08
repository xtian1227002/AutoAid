const express = require('express');
const router = express.Router();

// Sample notifications data
let notifications = [
    { id: 1, content: "Your car's service is due soon." },
    { id: 2, content: "New offers available on maintenance services." },
    { id: 3, content: "Reminder: Check your tire pressure regularly." }
];

// Endpoint to get all notifications
router.get('/', (req, res) => {
    res.json(notifications);
});

// Endpoint to get a notification by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const notification = notifications.find(notification => notification.id === id);
    if (notification) {
        res.json(notification);
    } else {
        res.status(404).json({ error: 'Notification not found' });
    }
});

// Endpoint to create a new notification
router.post('/', (req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ error: 'Content is required' });
    }
    const newNotification = { id: notifications.length + 1, content };
    notifications.push(newNotification);
    res.status(201).json(newNotification);
});

// Endpoint to update a notification by ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { content } = req.body;
    const notification = notifications.find(notification => notification.id === id);
    if (notification) {
        notification.content = content;
        res.json(notification);
    } else {
        res.status(404).json({ error: 'Notification not found' });
    }
});

// Endpoint to delete a notification by ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = notifications.findIndex(notification => notification.id === id);
    if (index !== -1) {
        notifications.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.status(404).json({ error: 'Notification not found' });
    }
});

module.exports = router;
