import Task from "../models/task.model.js";


// Create Task
export const createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;

    const task = await Task.create({
      title,
      description,
      dueDate,
    });

    return res.status(201).json(task);
  } catch (error) {
	console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Tasks
export const getTasks = async (req, res) => {

  try {
    const { search, status } = req.query;

    let filter = {};

    if (search) {
      filter.title = {
        $regex: search,
        $options: "i",
      };
    }

    if (status === "completed") {
      filter.completed = true;
    }

    if (status === "active") {
      filter.completed = false;
    }

    const tasks = await Task.find(filter).sort({
      createdAt: -1,
    });

    if(tasks.length === 0) {
      return res.status(404).json({
        message: "No tasks found",
      });
    }

    res.status(200).json(tasks);
  } catch (error) {
	console.log(error)
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Task
export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(task);
  } catch (error) {
	console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Task
export const updateTask = async (req, res) => {
  try {
    const existingTask = await Task.findById(req.params.id);

    if (!existingTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    const task = await Task.findByIdAndUpdate(req.params.id, req.body, 
    { returnDocument: 'after' 
    });

    res.status(200).json(task);
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Toggle Complete
export const toggleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    task.completed = !task.completed;

    await task.save();

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
