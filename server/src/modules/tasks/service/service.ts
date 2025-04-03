import TaskRepository from "../repository/repository";
import { CreateTaskDTO } from "../types/types";

export default class TaskService {
  static async getUserTasks(userId: number) {
    return TaskRepository.getUserTasks(userId);
  }

  static async createTask(taskData: CreateTaskDTO) {
    return TaskRepository.createTask(taskData);
  }

  static async deleteTask(taskId: number, userId: number) {
    return TaskRepository.deleteTask(taskId, userId);
  }
}
