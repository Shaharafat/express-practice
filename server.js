const express = require('express');
const server = require('debug')("app:server")
const db = require('debug')("app:db");
const todoRouter = require('./routes/todos');
const { initializeDb } = require('./config/dbConfig');

const app = express();

// creating and connecting database
initializeDb();

app.use(express.json());
app.use('/todos', todoRouter);

app.get('/', (req,res) => {
  res.status(200).json({ message: "successful" });
})

// server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running, listening to ${PORT}`);
  server('server running');
  db('running db')
})
