import Task from "../models/task.models";
import { CreateTaskDTO } from "../types/types";

export default class TaskRepository {
  static async getUserTasks(userId: number) {
    return Task.findAll({ where: { userId } });
  }

  static async createTask(taskData: CreateTaskDTO) {
    return Task.create(taskData);
  }

  static async deleteTask(taskId: number, userId: number) {
    const task = await Task.findOne({ where: { id: taskId, userId } });
    if (task) {
      return task.destroy();
    }
    throw new Error("Task not found or unauthorized.");
  }
}
