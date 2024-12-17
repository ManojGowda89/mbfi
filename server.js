const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Function to start the Express server
const run = (port) => {
  const app = express();

  // Middleware setup
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  });

  return app; // Return the app instance for further customization
};

module.exports = { run };
