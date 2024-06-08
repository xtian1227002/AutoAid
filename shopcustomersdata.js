// shopcustomersdata.js

const express = require('express');
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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
