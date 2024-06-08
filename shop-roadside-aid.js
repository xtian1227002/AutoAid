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
