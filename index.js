const express = require("express");
const logger = require("./middlewares/logger.middleware");
const router = require("./routes");
const connectToDB = require("./db");

require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/users", router);

// Database
connectToDB();

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
