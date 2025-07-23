const Todo = require('../models/Todo');

//@desc    Get all todos
//@route   GET /api/todos
exports.getTodos = async (req, res) => {
  try{
    const todos = await Todo.find().sort({ date: -1 });
    res.json(todos);
  }catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

//@desc    Create a new todo
//@route   POST /api/todos
exports.createTodo = async (req, res) => {
  try{
    const newTodo = new Todo({
      text: req.body.text,
    });
    const todo = await newTodo.save();
    res.json(todo);
  }catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

//@desc    Update a new todo
//@route   PUT /api/todos/:id
exports.updateTodo = async (req, res) => {
  try {
    // Find the todo by its ID
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    // Find the document and UPDATE it in one step.
    // Set 'completed' to the opposite of its current value.
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: !todo.completed },
      { new: true } // This option sends back the updated document
    );

    res.json(updatedTodo);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

//@desc    Delete a todo
//@route   DELETE /api/todos/:id
exports.deleteTodo = async (req, res) => {
  try{
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }
    
    await todo.deleteOne();
    res.json({ msg: 'Todo deleted' });
  }catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};