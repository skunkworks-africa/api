const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use the default port 3000 or use a port specified in the environment variable

// Define your API endpoint
app.get('/api/users', (req, res) => {
     // Return some dummy data as a response
     const users = [
         { id: 1, name: 'John' },
         { id: 2, name: 'Jane' }
      ];
      res.json(users);
});
// Start the server
app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
});

