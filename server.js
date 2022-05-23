const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

const DATABASE_URL =
  "mongodb+srv://admin:abc1234@cluster0.nku8p.mongodb.net/tweeter?retryWrites=true&w=majority";
const db = mongoose.connection;
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Database Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

app.listen(PORT, () => {
  console.log(`express is listening on port`, PORT);
});
