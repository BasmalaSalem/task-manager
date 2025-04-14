// import axios from 'axios';
// import { useUserStore } from 'src/stores/auth';
// import { useRouter } from 'vue-router';

// const api = axios.create({
//   baseURL: 'http://localhost:3000/api',
//   timeout: 5000,
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('jwt');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       const userStore = useUserStore();
//       const router = useRouter();
//       userStore.logout();
//       router.push('/auth');
//     }
//     return Promise.reject(error);
//   },
// );

// export default api;
