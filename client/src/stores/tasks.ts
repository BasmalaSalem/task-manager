import { defineStore } from 'pinia';
import taskApi from '../api/tasks';
import type { Task } from '../components/models';

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as Task[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchTasks() {
      this.loading = true;
      try {
        const { data } = await taskApi.getTasks();
        this.tasks = data;
      } catch (error: any) {
        this.error = error.response?.data?.message || 'Failed to fetch tasks';
      } finally {
        this.loading = false;
      }
    },
    async createTask(task: { title: string; description?: string }) {
      try {
        await taskApi.createTask(task);
        await this.fetchTasks();
      } catch (error: any) {
        throw error.response?.data?.message || 'Failed to create task';
      }
    },
    async deleteTask(id: number) {
      try {
        await taskApi.deleteTask(id);
        await this.fetchTasks();
      } catch (error: any) {
        throw error.response?.data?.message || 'Failed to delete task';
      }
    },
  },
});
