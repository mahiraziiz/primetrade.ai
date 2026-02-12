import { Router } from "express";
import {
  deleteTaskAsAdmin,
  deleteUser,
  getAllTasks,
  getAllUsers,
  getUserById,
  updateUserRole,
} from "../controllers/admin.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { verifyRole } from "../middlewares/roleAuth.middleware.js";

const router = Router();

// All admin routes require authentication and admin role
router.use(verifyJWT);
router.use(verifyRole(["admin"]));

// User management
router.route("/users").get(getAllUsers);
router.route("/users/:userId").get(getUserById);
router.route("/users/:userId/role").patch(updateUserRole);
router.route("/users/:userId").delete(deleteUser);

// Task management
router.route("/tasks").get(getAllTasks);
router.route("/tasks/:taskId").delete(deleteTaskAsAdmin);

export default router;
