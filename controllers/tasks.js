import Task from "../models/Task.js";

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const { name, completed } = req.body;
    let task = new Task({
      name,
      completed,
    });

    const newTask = await task.save();
    res.status(201).json({ newTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.status(201).json({ task });
    if (!task) {
      return res.status(404).json({ mgs: `No task with id: ${task} ` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

export { getAllTasks, createTask, getTask, updateTask, deleteTask };
