const { Todo } = require("../models/todoModel");

const getAllTodos = (req, res) => {
  res.status(200).json({ success: true, message: "todos" });
};

// ✔️ add new todo
const createNewTodo = async (req, res) => {
  console.log(req.body);
  const { name, completed, description } = req.body;

  try {
    let todo = new Todo({
      name,
      description,
      completed,
    });

    todo = await todo.save();

    res.status(200).json({ success: true, todo });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "unsuccessful" });
  }
};

module.exports = {
  getAllTodos,
  createNewTodo,
};
