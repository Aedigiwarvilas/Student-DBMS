const mongoose = require("mongoose");
require("dotenv").config();

const USER = process.env.MONGO_USERNAME;
const PASS = process.env.MONGO_PASSWORD;
const DB = process.env.MONGO_DATABASE;

const URI = `mongodb+srv://${USER}:${PASS}@cluster0.kkferxq.mongodb.net/${DB}?retryWrites=true&w=majority`;

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDb = () => {
  mongoose
    .connect(URI, connectionOptions)
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectDb;
