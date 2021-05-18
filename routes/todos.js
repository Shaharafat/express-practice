const express = require('express');
const { getAllTodos, createNewTodo } = require('../controller/todoController');

const todoRouter = express.Router();

todoRouter.get('/', getAllTodos)

todoRouter.post('/', createNewTodo);


module.exports = todoRouter;
