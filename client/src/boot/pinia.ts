import { BootFileParams } from '@quasar/app-vite';
import pinia from '../stores';

export default ({ app }: BootFileParams) => {
  app.use(pinia);
};
