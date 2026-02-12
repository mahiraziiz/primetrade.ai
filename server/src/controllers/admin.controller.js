import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Task } from "../models/task.model.js";

// Admin: Get all users
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password -refreshToken");

  if (!users) {
    throw new ApiError(404, "No users found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, users, "All users fetched successfully"));
});

// Admin: Get user by ID
const getUserById = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId).select("-password -refreshToken");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, user, "User fetched successfully"));
});

// Admin: Update user role
const updateUserRole = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;

  if (!role || !["user", "admin"].includes(role)) {
    throw new ApiError(400, "Invalid role. Must be 'user' or 'admin'");
  }

  const user = await User.findByIdAndUpdate(
    userId,
    { role },
    { new: true }
  ).select("-password -refreshToken");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, user, "User role updated successfully"));
});

// Admin: Delete user
const deleteUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const user = await User.findByIdAndDelete(userId);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Delete all tasks of this user
  await Task.deleteMany({ owner: userId });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User and associated tasks deleted successfully"));
});

// Admin: Get all tasks
const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find().populate("owner", "username email fullName");

  if (!tasks) {
    throw new ApiError(404, "No tasks found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, tasks, "All tasks fetched successfully"));
});

// Admin: Delete any task
const deleteTaskAsAdmin = asyncHandler(async (req, res) => {
  const { taskId } = req.params;

  const task = await Task.findByIdAndDelete(taskId);

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Task deleted successfully"));
});

export {
  getAllUsers,
  getUserById,
  updateUserRole,
  deleteUser,
  getAllTasks,
  deleteTaskAsAdmin,
};
