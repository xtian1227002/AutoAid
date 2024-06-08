const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sample customer data
const customers = [
    { id: 1, name: 'John Doe', location: 'Los Angeles, CA', serviceDate: '2024-05-01', status: 'Completed' },
    { id: 2, name: 'Jane Smith', location: 'Las Vegas, NV', serviceDate: '2024-05-15', status: 'In Progress' },
    { id: 3, name: 'Michael Brown', location: 'New York, NY', serviceDate: '2024-04-20', status: 'Completed' },
    { id: 4, name: 'Emily Johnson', location: 'Chicago, IL', serviceDate: '2024-03-30', status: 'Completed' },
    { id: 5, name: 'David Lee', location: 'San Francisco, CA', serviceDate: '2024-02-10', status: 'Pending' }
];

// Sample messages data
const messages = [
    { id: 1, name: 'John Doe', content: 'Hello, my car broke down near Elm Street. Can you send someone to help?', timestamp: '5 minutes ago' },
    { id: 2, name: 'Jane Smith', content: 'I need an oil change and tire rotation. Are you available today?', timestamp: '10 minutes ago' },
    { id: 3, name: 'Michael Brown', content: 'Can you provide a quote for brake pad replacement for a Honda Civic?', timestamp: '15 minutes ago' },
    { id: 4, name: 'Emily Johnson', content: 'My battery died and I need a replacement. Can you come today?', timestamp: '20 minutes ago' },
    { id: 5, name: 'David Lee', content: 'Do you offer roadside assistance for flat tires?', timestamp: '25 minutes ago' }
];

// Sample notifications data
const notifications = [
    { id: 1, content: 'Customer John Doe has a car breakdown and needs assistance.', timestamp: '2 minutes ago' },
    { id: 2, content: 'Customer Jane Smith requires immediate assistance for a car breakdown.', timestamp: '5 minutes ago' },
    { id: 3, content: 'Urgent: Customer Michael Johnson needs help with a car breakdown.', timestamp: '10 minutes ago' }
];

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Add this to handle URL-encoded form data
app.use(cors());

// Routes
const authRoutes = require('./routes/auth');
const notificationRoutes = require('./routes/notifications');
const messageRoutes = require('./routes/messages');
const breakdownRoutes = require('./routes/breakdown');
const profileRoutes = require('./routes/profile');

app.use('/auth', authRoutes);
app.use('/notifications', notificationRoutes);
app.use('/messages', messageRoutes);
app.use('/breakdown', breakdownRoutes);
app.use('/profile', profileRoutes);

// API endpoint to get customer data by ID
app.get('/api/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find(customer => customer.id === id);
    if (customer) {
        res.json(customer);
    } else {
        res.status(404).json({ message: 'Customer not found' });
    }
});

// API endpoint to get a message by ID
app.get('/api/messages/:id', (req, res) => {
    const messageId = parseInt(req.params.id);
    const message = messages.find(msg => msg.id === messageId);

    if (message) {
        res.json(message);
    } else {
        res.status(404).json({ message: 'Message not found' });
    }
});

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

// API endpoint to get shop roadside aid data by ID
app.get('/api/shop-roadside-aid/:id', (req, res) => {
    const shopId = parseInt(req.params.id);
    // Sample roadside aid data (replace with your actual data source)
    const shopRoadsideAid = [
        { id: 1, name: 'Roadside Assistance Inc.', email: 'roadside@gmail.com', location: '123 Main St, Los Angeles, CA' },
        // Add more roadside aid data as needed
    ];
    const roadsideAid = shopRoadsideAid.find(aid => aid.id === shopId);

    if (roadsideAid) {
        res.json(roadsideAid);
    } else {
        res.status(404).json({ message: 'Roadside aid not found' });
    }
});

// API endpoint to get shop profile data by ID
app.get('/api/shop-profiles/:id', (req, res) => {
    const shopId = parseInt(req.params.id);
    // Sample shop profile data (replace with your actual data source)
    const shopProfiles = [
        { id: 1, name: 'Wheel Power', email: 'wheelpower@gmail.com', location: 'Tampus, Boac, Marinduque' },
        // Add more shop profiles as needed
    ];
    const shopProfile = shopProfiles.find(profile => profile.id === shopId);

    if (shopProfile) {
        res.json(shopProfile);
    } else {
        res.status(404).json({ message: 'Shop profile not found' });
    }
});

// Endpoint to handle user sign up
app.post('/user_signup', (req, res) => {
    const { username, email, password } = req.body;

    // Here you would typically save the data to a database
    // For this example, we'll just return the data as a JSON response
    res.json({
        message: 'User signed up successfully',
        data: {
            username: username,
            email: email,
            // In a real application, never return the password like this!
        }
    });
});

// Endpoint to handle shop registration
app.post('/shop_register', (req, res) => {
    const { shopName, shopAddress, shopContact } = req.body;

    // Here you would typically save the data to a database
    // For this example, we'll just return the data as a JSON response
    res.json({
        message: 'Shop registered successfully',
        data: {
            shopName: shopName,
            shopAddress: shopAddress,
            shopContact: shopContact
        }
    });
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve index.html
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
