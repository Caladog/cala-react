import { defineConfig } from 'umi'
import settings from './settings';
import router from './router';

export default defineConfig({
  mfsu: {},
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  routes: router,
  ignoreMomentLocale: true,
  theme: {
    'primary-color': settings.primaryColor,
  },
})