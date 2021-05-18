require("dotenv").config();
const mongoose = require("mongoose");

const initializeDb = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("db connected"))
    .catch((error) => console.log("error in db detected"));
};

module.exports = { initializeDb };
