// Import required modules
const express = require('express');
const router = express.Router();

// Define dummy user data
const users = [
     { id: 1, name: 'John Doe', email: 'john@example.com' },
     { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Define GET endpoint to retrieve all users
router.get('/', (req, res) => {
     res.json(users);
});

// Define GET endpoint to retrieve a specific user by ID
router.get('/:id', (req, res) => {
     const userId = parseInt(req.params.id);
     const user = users.find(user => user.id === userId);
     if (user) {
         res.json(user);
     } else {
         res.status(404).json({ message: 'User not found' });
     }
});

// Define POST endpoint to create a new user
router.post('/', (req, res) => {
    // Here you would typically handle the request body to create a new user
    // For this example, we'll just send a dummy response
    res.json({ message: 'User created successfully' });
});

// Define PUT endpoint to update an existing user
router.put('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    // Here you would typically handle the request body to update the user
    // For this example, we'll just send a dummy response
    res.json({ message: `User with ID ${userId} updated successfully` });
});

// Define DELETE endpoint to delete an existing user
router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    // Here you would typically handle the deletion logic
    // For this example, we'll just send a dummy response
    res.json({ message: `User with ID ${userId} deleted successfully` });
});

// Export the router to make it available to other modules
module.exports = router;
                                                                                             
