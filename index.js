const { run } = require("./server");
const { connectDB } = require("./db");
const { validation } = require("./schema");
const { router, router1, router2, router3, router4 } = require("./routers/router");
const state =require("./state")
require("dotenv").config()
module.exports = {
  run,
  connectDB,
  validation,
  router,
  router1,
  router2,
  router3,
  router4,
  state
};
