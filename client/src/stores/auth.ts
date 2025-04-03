import { defineStore } from 'pinia';
import authApi from '../api/auth';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as null | { email: string },
    returnUrl: null as string | null,
  }),
  actions: {
    async register(email: string, password: string) {
      await authApi.register(email, password);
      await this.login(email, password);
    },
    async login(email: string, password: string) {
      const { data } = await authApi.login(email, password);
      localStorage.setItem('jwt', data.token);
      this.user = { email };
    },
    logout() {
      this.user = null;
      localStorage.removeItem('jwt');
    },
    isAuthenticated(): boolean {
      return !!localStorage.getItem('jwt');
    },
  },
});
