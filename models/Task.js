import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
