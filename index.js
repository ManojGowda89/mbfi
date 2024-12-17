const { run } = require("./server");
const { connectDB } = require("./database/nosql/db");
const { validation } = require("./database/nosql/schema");
const {nosql} = require("./database/nosql/index")
const {sql} =require("./database/sql/index")
const { router, router1, router2, router3, router4 } = require("./routers/router");
const state =require("./state")
require("dotenv").config()


module.exports = {
  run,
  nosql ,
  sql,
   router,
  router1,
  router2,
  router3,
  router4,
  state
};
