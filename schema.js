const mongoose = require("mongoose");

const schemas = {}; // Store schemas by collection name

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

module.exports = { validation };
