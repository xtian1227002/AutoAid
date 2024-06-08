const express = require('express');
const router = express.Router();

let users = [];

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(400).json({ error: 'Invalid credentials' });
    }
});

module.exports = router;
