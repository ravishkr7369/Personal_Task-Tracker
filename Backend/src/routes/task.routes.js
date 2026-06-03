import express from "express";

import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  toggleTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", createTask); //✅

router.get("/", getTasks);  //✅

router.get("/:id", getTask); //✅

router.put("/:id", updateTask);//✅

router.delete("/:id", deleteTask); //✅

router.patch("/toggle/:id", toggleTask); //✅

export default router;
