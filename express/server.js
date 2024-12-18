const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Function to start the Express server
const run = (port,allowedOrigins) => {
  const app = express();

  // Middleware setup
  app.use(morgan("dev"));
  app.use(
    cors(allowedOrigins?{
      origin: function (origin, callback) {
        // Allow requests with no origin (e.g., server-to-server or local tools)
        if (!origin) {
          return callback(null, true);
        }
  
        // Allow requests from specific origins
        if (allowedOrigins.includes(origin)) {
          return callback(null, true);
        }
  
        // Reject others
        return callback(new Error('Not allowed by CORS'));
      },
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    }:" ")
  );
  app.use(express.json());

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port} using mbfi`);
  });

  return app; // Return the app instance for further customization
};

module.exports = { run };
