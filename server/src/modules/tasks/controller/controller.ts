import { Request, Response } from "express";
import TaskService from "../service/service";

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Task management endpoints
 */

export default class TaskController {
  /**
   * @swagger
   * /api/tasks:
   *   get:
   *     summary: Get all tasks for the authenticated user
   *     tags: [Tasks]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: List of tasks
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Task'
   *       401:
   *         description: Unauthorized (invalid or missing token)
   */
  static async getUserTasks(req: Request, res: Response) {
    try {
      const tasks = await TaskService.getUserTasks((req as any).user.id);
      res.json(tasks);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  /**
   * @swagger
   * /api/tasks:
   *   post:
   *     summary: Create a new task
   *     tags: [Tasks]
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - title
   *             properties:
   *               title:
   *                 type: string
   *                 example: Complete project documentation
   *               description:
   *                 type: string
   *                 example: Write all API documentation
   *     responses:
   *       201:
   *         description: Task created successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Task'
   *       400:
   *         description: Bad request (invalid input)
   *       401:
   *         description: Unauthorized (invalid or missing token)
   */
  static async createTask(req: Request, res: Response) {
    try {
      const task = await TaskService.createTask({
        ...req.body,
        userId: (req as any).user.id,
      });
      res.status(201).json(task);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  /**
   * @swagger
   * /api/tasks/{taskId}:
   *   delete:
   *     summary: Delete a task for the authenticated user
   *     tags: [Tasks]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - name: taskId
   *         in: path
   *         description: The ID of the task to be deleted
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Task deleted successfully
   *       400:
   *         description: Bad request (task not found)
   *       401:
   *         description: Unauthorized (invalid or missing token)
   */
  static async deleteTask(req: Request, res: Response) {
    const { taskId } = req.params;
    try {
      await TaskService.deleteTask(Number(taskId), (req as any).user.id);
      res.status(200).json({ message: "Task deleted successfully." });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         userId:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
