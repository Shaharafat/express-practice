const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: { type: String, minLength: 3, maxLength: 50 },
  completed: { type: Boolean },
  description: { type: String, minLength: 10, maxLength: 200 },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = { Todo };
