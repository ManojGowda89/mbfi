const { getDB } = require("./connection");

class Schema {
  constructor(tableName, fields) {
    this.tableName = tableName;
    this.fields = fields; // Schema fields
  }

  // Insert new record
  async create(data) {
    const db = getDB();
    const keys = Object.keys(data).join(", ");
    const placeholders = Object.keys(data).map(() => "?").join(", ");
    const values = Object.values(data);

    const query = `INSERT INTO ${this.tableName} (${keys}) VALUES (${placeholders})`;

    try {
      const [result] = await db.execute(query, values);
      return { id: result.insertId, ...data };
    } catch (error) {
      throw new Error(`Error creating record: ${error.message}`);
    }
  }

  // Find all records
  async find() {
    const db = getDB();
    const query = `SELECT * FROM ${this.tableName}`;

    try {
      const [rows] = await db.execute(query);
      return rows;
    } catch (error) {
      throw new Error(`Error finding records: ${error.message}`);
    }
  }

  // Find one record by condition
  async findOne(condition) {
    const db = getDB();
    const whereClause = Object.keys(condition)
      .map((key) => `${key} = ?`)
      .join(" AND ");
    const values = Object.values(condition);

    const query = `SELECT * FROM ${this.tableName} WHERE ${whereClause} LIMIT 1`;

    try {
      const [rows] = await db.execute(query, values);
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Error finding record: ${error.message}`);
    }
  }

  // Update records
  async update(condition, updates) {
    const db = getDB();
    const setClause = Object.keys(updates)
      .map((key) => `${key} = ?`)
      .join(", ");
    const whereClause = Object.keys(condition)
      .map((key) => `${key} = ?`)
      .join(" AND ");

    const values = [...Object.values(updates), ...Object.values(condition)];

    const query = `UPDATE ${this.tableName} SET ${setClause} WHERE ${whereClause}`;

    try {
      const [result] = await db.execute(query, values);
      return result.affectedRows;
    } catch (error) {
      throw new Error(`Error updating records: ${error.message}`);
    }
  }

  // Delete records
  async delete(condition) {
    const db = getDB();
    const whereClause = Object.keys(condition)
      .map((key) => `${key} = ?`)
      .join(" AND ");
    const values = Object.values(condition);

    const query = `DELETE FROM ${this.tableName} WHERE ${whereClause}`;

    try {
      const [result] = await db.execute(query, values);
      return result.affectedRows;
    } catch (error) {
      throw new Error(`Error deleting records: ${error.message}`);
    }
  }
}

/**
 * Factory function to create a schema/model.
 */
function schema(tableName, fields) {
  return new Schema(tableName, fields);
}

module.exports = { schema };
