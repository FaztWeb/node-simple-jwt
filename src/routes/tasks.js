import { Router } from "express";
import {
  getTasks,
  createTask,
  getTaskById,
  deleteTaskById,
  updateTaskById,
} from "../controllers/taskController";
import { verifyToken } from "../libs/verifyToken";

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/:id", getTaskById);

router.post("/tasks", verifyToken, createTask);

router.delete("/tasks/:id", verifyToken, deleteTaskById);

router.put("/tasks/:id", verifyToken, updateTaskById);

export default router;
