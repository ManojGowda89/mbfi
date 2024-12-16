const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const schemas = {}; // Store schemas by collection name

// Function to start the Express server
const run = (port) => {
  const app = express();

  // Middleware setup
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port http://localhost${port}`);
  });

  return app; // Return the Express app instance for further customization
};

// Function to connect to MongoDB
const connectDB = async (connectionString) => {
  if (!connectionString) {
    console.error("Error: Connection string is not provided.");
    return;
  }

  try {
    const db = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (db.connection.readyState === 1) {
      console.log("Successfully connected to the database");
    } else {
      console.error("Failed to connect to the database");
    }
  } catch (error) {
    if (error.name === "MongoNetworkError") {
      console.error(
        "Network error: Failed to connect to the database. Please check your network settings."
      );
    } else if (error.name === "MongoParseError") {
      console.error("Parse error: Invalid connection string format.");
    } else {
      console.error(`Failed to connect to the database: ${error.message}`);
    }
  }
};

// Function to create or retrieve a Mongoose model
const validation = (collection, schema, timestamps = true) => {
  if (schemas[collection]) {
    return mongoose.model(collection); // Return existing model
  } else {
    const mongoschema = new mongoose.Schema(schema, { timestamps });
    schemas[collection] = mongoschema; // Store schema for future use
    return mongoose.model(collection, mongoschema);
  }
};
const router = express.Router();
const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();
const router4 = express.Router();
// Export the functions
module.exports = {
  run,
  connectDB,
  validation,
  express,
  router,
  router1,
  router2,
  router3,
  router4
};
