import svgr from 'vite-plugin-svgr';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(viteConfig, defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['vitest.setup.ts'],
    reporters: ['verbose'],
    coverage: {
      reporter: 'json-summary',
      provider: 'v8',
    },
  },
  resolve: {
    alias: {
      // Mock CSS Modules
      '\\.(css|scss|sass)$': 'identity-obj-proxy',
    }
  },
  plugins: [
    svgr({
      include: '**/*.svg', // or a more specific path
      svgrOptions: {
        icon: true, // Example option for SVGR
      },
    }),
  ],
}));
