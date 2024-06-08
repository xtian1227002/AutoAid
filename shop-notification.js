const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Sample notifications data
const notifications = [
    { id: 1, content: 'Customer John Doe has a car breakdown and needs assistance.', timestamp: '2 minutes ago' },
    { id: 2, content: 'Customer Jane Smith requires immediate assistance for a car breakdown.', timestamp: '5 minutes ago' },
    { id: 3, content: 'Urgent: Customer Michael Johnson needs help with a car breakdown.', timestamp: '10 minutes ago' }
];

// API endpoint to get a notification by ID
app.get('/api/notifications/:id', (req, res) => {
    const notificationId = parseInt(req.params.id);
    const notification = notifications.find(notif => notif.id === notificationId);

    if (notification) {
        res.json(notification);
    } else {
        res.status(404).json({ message: 'Notification not found' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
