const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
console.log("Hello");

const connection = mongoose.connection;
console.log("World!");

connection.once("open", () => {
  console.log("There is Sth");

  console.log("MongoDB database Connection established successfully");
});

app.listen(port, () => {
  console.log(`Server Running at Port: ${port}`);
});
