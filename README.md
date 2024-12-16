# `mbfi` Package

`mbfi` is a utility package that streamlines the process of setting up an Express server with MongoDB and Mongoose, along with essential features like routing, validation, and logging. It simplifies common tasks, allowing you to focus more on building your application and less on boilerplate code. This package includes support for MongoDB connection, schema validation, logging via `morgan`, CORS handling, and basic routing.

## Features

- **Express Server Setup**: Simplifies the process of setting up an Express server.
- **MongoDB and Mongoose Integration**: Easily connect to MongoDB using Mongoose and handle database operations.
- **Schema Validation**: Use simple validation to define your Mongoose schemas.
- **CORS Support**: Handles Cross-Origin Resource Sharing (CORS) to allow resources to be shared across different domains.
- **Logging with Morgan**: Set up logging to track requests and monitor your server's activity.
- **Router Handling**: Easily manage routes with multiple routers for your application.
- **Reusable Components**: Helps reduce time in setting up basic server configurations, Mongoose models, and middleware.

## Installation

Install the package via npm:

```bash
npm install mbfi
```

## How to Use

### Basic Setup

To get started with `mbfi`, you can follow these simple steps to set up a server and connect it to MongoDB.

1. **Create a Server (`server.js`)**

```javascript
const { run, connectDB, validation, express, router1 } = require('mbfi');

const app = run(5000); // Start the server on port 5000

// Connect to MongoDB
connectDB("mongodb://localhost:27017/mydatabase");

// Define a schema and collection using validation
const userSchema = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
};

const User = validation("User", userSchema); // Create a Mongoose model with validation

// Use router1 for API routes
app.use("/api", router1);

// Example of defining custom routes
app.get("/", (req, res) => {
  res.send("Hello from CommonJS!");
});
```

### Creating Routes

You can define multiple routers using the built-in `express.Router()` functionality. 

1. **Router Setup (`main.js`)**

```javascript
const { router1 } = require('mbfi');

router1.get("/", (req, res) => {
  res.send("Welcome to Router 1");
});

module.exports = router1;
```

2. **Custom Routes in Your App**

You can add custom routes to your server with the `run` function, allowing you to define any additional routes you need for your application.

```javascript
app.get("/custom", (req, res) => {
  res.send("This is a custom route");
});
```

### MongoDB and Mongoose Integration

The `mbfi` package integrates MongoDB using Mongoose seamlessly. 

- **Connecting to MongoDB**: Simply pass your MongoDB connection string to `connectDB` to establish a connection.

```javascript
connectDB("mongodb://localhost:27017/mydatabase");
```

- **Defining a Schema**: You can use the `validation` function to create Mongoose models with validation.

```javascript
const userSchema = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
};
const User = validation("User", userSchema);
```

### Logging with Morgan

`mbfi` includes `morgan` for logging HTTP requests. This middleware is automatically added to your app when you use the `run` function.

```javascript
app.use(morgan("dev")); // Logs all incoming requests
```

### CORS Support

To handle CORS, `mbfi` includes CORS middleware by default, which allows you to easily share resources across different domains.

```javascript
app.use(cors()); // Enable CORS
```

### Advanced Configuration (Optional)

You can customize certain features such as logging, database connection settings, and more by modifying the `run`, `connectDB`, and `validation` functions.

#### Running the Server

To start the Express server, you simply call `run` and pass the port number as an argument.

```javascript
const app = run(5000); // Starts the server on port 5000
```

## Use Case

This package is designed to handle all the basic setup for Express and MongoDB, reducing development time for new applications. You can use it for:

- **Rapid Prototyping**: Set up your app quickly without worrying about boilerplate code.
- **REST API Development**: Handle basic RESTful routing, Mongoose models, and MongoDB operations.
- **MERN Stack Setup**: Use this package to build backends for React-based applications.
- **Scalable Applications**: Easily extendable to build large applications with multiple routes and complex MongoDB schemas.

## Example Project

1. **Create a new project**

```bash
mkdir my-project
cd my-project
npm init -y
npm install mbfi
```

2. **Create `server.js`**

```javascript
const { run, connectDB, validation, express, router1 } = require('mbfi');

const app = run(5000); // Start the server on port 5000

connectDB("mongodb://localhost:27017/mydatabase");

const userSchema = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
};

const User = validation("User", userSchema);

app.use("/api", router1);

app.get("/", (req, res) => {
  res.send("Hello from CommonJS!");
});
```

3. **Create `main.js`**

```javascript
const { router1 } = require('mbfi');

router1.get("/", (req, res) => {
  res.send("Welcome to Router 1");
});

module.exports = router1;
```

4. **Run the Server**

```bash
node server.js
```

Your server will be running at `http://localhost:5000`, with all the configurations handled for you!

---

## Conclusion

The `mbfi` package significantly reduces the time needed to set up and configure MongoDB, Mongoose, and Express. With built-in features like validation, logging, and CORS support, it's an ideal starting point for developing applications quickly and efficiently.#
