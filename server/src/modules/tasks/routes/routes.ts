import { Router } from "express";
import { authenticate } from "../../../core/middleware/auth.middleware";
import TaskController from "../controller/controller";

const router = Router();
router.use(authenticate);

router.get("/", TaskController.getUserTasks);
router.post("/", TaskController.createTask);
router.delete("/:taskId", TaskController.deleteTask);

export default router;
