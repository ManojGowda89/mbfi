const {connectDB} = require("./db")
const {validation} = require("./schema")

const nosql = {
    connectDB,
    validation

}

module.exports={nosql}