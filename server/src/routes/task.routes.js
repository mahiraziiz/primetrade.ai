import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTaskById,
  getUserTasks,
  updateTask,
} from "../controllers/task.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// All task routes require authentication
router.use(verifyJWT);

// Create a new task
router.route("/").post(createTask);

// Get all tasks for current user
router.route("/").get(getUserTasks);

// Get a specific task
router.route("/:taskId").get(getTaskById);

// Update a task
router.route("/:taskId").patch(updateTask);

// Delete a task
router.route("/:taskId").delete(deleteTask);

export default router;
