const mongoose = require("mongoose");

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

module.exports = { connectDB };
