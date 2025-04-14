// import api from './axios';

import { api } from '../boot/axios';

export default {
  getTasks: () => api.get('/tasks'),
  createTask: (task: { title: string; description?: string }) => api.post('/tasks', task),
  deleteTask: (id: number) => api.delete(`/tasks/${id}`),
  updateTask: (id: number, updates: Partial<{ title: string; description: string }>) =>
    api.patch(`/tasks/${id}`, updates),
};
