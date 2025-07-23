const express = require('express');
const router = express.Router();

const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');

// Route to GETting all todos and POSTing a new todo
router.route('/')
  .get(getTodos)
  .post(createTodo);

// Route to PUTting an update to a todo and DELETEing a todo by ID
router.route('/:id')
  .put(updateTodo)
  .delete(deleteTodo);

module.exports = router;