const express = require ("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

const DATABASE_URL = 'mongodb+srv://admin:abc1234@cluster0.nku8p.mongodb.net/tweeter?retryWrites=true&w=majority'
const db = mongoose.connection;
mongoose.connect(DATABASE_URL);

app.listen(PORT,()=>{
 console.log(`express is listening on port`, PORT);
});