// const express = require("express");
// const { connectDB, schema } = require("./sql-orm");

// const app = express();
// app.use(express.json());

// // Connect to the database
// (async () => {
//   try {
//     await connectDB({
//       host: "localhost",
//       user: "root",
//       password: "password",
//       database: "testdb",
//     });
//   } catch (error) {
//     console.error("Failed to connect to DB:", error.message);
//   }
// })();

// // Define Schema
// const User = schema("users", {
//   name: { type: String },
//   email: { type: String },
// });

// // Routes
// app.post("/users", async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.json({ success: true, data: newUser });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json({ success: true, data: users });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// app.get("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findOne({ id: req.params.id });
//     res.json({ success: true, data: user });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// app.put("/users/:id", async (req, res) => {
//   try {
//     const updated = await User.update({ id: req.params.id }, req.body);
//     res.json({ success: true, updated });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// app.delete("/users/:id", async (req, res) => {
//   try {
//     const deleted = await User.delete({ id: req.params.id });
//     res.json({ success: true, deleted });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// app.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });
