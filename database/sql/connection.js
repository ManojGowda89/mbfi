const mysql = require("mysql2/promise");

let dbConnection = null;

/**
 * Connects to the MySQL database.
 */
async function connectDB(config) {
  if (dbConnection) {
    console.log("✅ Using existing connection.");
    return dbConnection;
  }

  try {
    dbConnection = await mysql.createConnection(config);
    console.log("✅ Connected to the MySQL database.");
    return dbConnection;
  } catch (error) {
    console.error("❌ Database connection error:", error.message);
    throw error;
  }
}

/**
 * Returns the active database connection.
 */
function getDB() {
  if (!dbConnection) {
    throw new Error("Database not connected. Call `connectDB` first.");
  }
  return dbConnection;
}

module.exports = { connectDB, getDB };
