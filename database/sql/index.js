const {connectDB} = require("./connection")
const {schema} = require("./schema")

const sql = {
connectDB,
schema
}

module.exports={sql}