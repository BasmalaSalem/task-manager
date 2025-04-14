// import api from './axios';

import { api } from '../boot/axios';

export default {
  register: (email: string, password: string) => api.post('/auth/register', { email, password }),
  login: (email: string, password: string) => api.post('/auth/login', { email, password }),
};
