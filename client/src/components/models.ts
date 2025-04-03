export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
}

export interface User {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
}
