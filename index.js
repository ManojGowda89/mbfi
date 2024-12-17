const { run } = require("./express/server");
const {nosql} = require("./database/nosql/index")
const {sql} =require("./database/sql/index")
const { router } = require("./express/routers/router");
const state =require("./state/state")
require("dotenv").config()


module.exports = {
  run,
  nosql ,
  sql,
   router,
  state
};
