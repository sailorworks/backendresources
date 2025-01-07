### Introduction to Express.js

Express.js is a minimal and flexible Node.js web application frame. It simplifies the process of building server-side applications with Node.js by providing a layer of abstraction over the Node.js HTTP module, making it easier to handle routing, middleware, and HTTP requests.

### Example

1. **Install Express.js**: Make sure you have Node.js installed, then run the following command to install Express:

   ```sh
   npm install express
   ```

2. **Create a basic server**: Create a file named `app.js` and add the following code:

   ```javascript
   // Import the express module
   const express = require("express");

   // Create an instance of an Express application
   const app = express();

   // Define a route for the root URL
   app.get("/", (req, res) => {
     res.send("Hello, World!");
   });

   // Start the server on port 3000
   const port = 3000;
   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
   ```

3. **Run the server**: Use Node.js to run your server by executing the following command in your terminal:

   ```sh
   node app.js
   ```

### Explanation

- **`const express = require('express');`**: This line imports the Express module.
- **`const app = express();`**: This creates an instance of an Express application.
- **`app.get('/', (req, res) => { ... });`**: This defines a route for the root URL (`/`). When a GET request is made to the root URL, the server responds with "Hello, World!".
- **`app.listen(port, () => { ... });`**: This starts the server on port 3000 and logs a message indicating that the server is running.
