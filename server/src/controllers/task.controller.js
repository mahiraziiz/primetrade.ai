import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Task } from "../models/task.model.js";

// Create a new task
const createTask = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !title.trim()) {
    throw new ApiError(400, "Title is required");
  }

  if (!description || !description.trim()) {
    throw new ApiError(400, "Description is required");
  }

  if (title.length < 3) {
    throw new ApiError(400, "Title must be at least 3 characters long");
  }

  if (description.length < 5) {
    throw new ApiError(400, "Description must be at least 5 characters long");
  }

  const task = await Task.create({
    title: title.trim(),
    description: description.trim(),
    owner: req.user._id,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, task, "Task created successfully"));
});

// Get all tasks for the current user
const getUserTasks = asyncHandler(async (req, res) => {
  const { status } = req.query;
  
  let filter = { owner: req.user._id };
  
  if (status && ["pending", "completed"].includes(status)) {
    filter.status = status;
  }

  const tasks = await Task.find(filter).sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, tasks, "Tasks fetched successfully"));
});

// Get a single task by ID
const getTaskById = asyncHandler(async (req, res) => {
  const { taskId } = req.params;

  const task = await Task.findById(taskId);

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  if (task.owner.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized to access this task");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, task, "Task fetched successfully"));
});

// Update a task
const updateTask = asyncHandler(async (req, res) => {
  const { taskId } = req.params;
  const { title, description, status } = req.body;

  const task = await Task.findById(taskId);

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  if (task.owner.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized to update this task");
  }

  if (title !== undefined) {
    if (!title.trim()) {
      throw new ApiError(400, "Title cannot be empty");
    }
    if (title.length < 3) {
      throw new ApiError(400, "Title must be at least 3 characters long");
    }
    task.title = title.trim();
  }

  if (description !== undefined) {
    if (!description.trim()) {
      throw new ApiError(400, "Description cannot be empty");
    }
    if (description.length < 5) {
      throw new ApiError(400, "Description must be at least 5 characters long");
    }
    task.description = description.trim();
  }

  if (status !== undefined) {
    if (!["pending", "completed"].includes(status)) {
      throw new ApiError(400, "Invalid status. Must be 'pending' or 'completed'");
    }
    task.status = status;
  }

  await task.save();

  return res
    .status(200)
    .json(new ApiResponse(200, task, "Task updated successfully"));
});

// Delete a task
const deleteTask = asyncHandler(async (req, res) => {
  const { taskId } = req.params;

  const task = await Task.findById(taskId);

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  if (task.owner.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized to delete this task");
  }

  await Task.findByIdAndDelete(taskId);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Task deleted successfully"));
});

export {
  createTask,
  getUserTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
