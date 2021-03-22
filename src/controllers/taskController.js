import Task from "../models/Task";

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const newTask = new Task(req.body);
  const savedTask = await newTask.save();
  res.json(savedTask);
};

export const getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};

export const deleteTaskById = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  res.json(task);
};

export const updateTaskById = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(task);
};
