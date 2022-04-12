import { defineConfig } from 'umi';
const router = require('./config/router.js');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: router.routers,
  fastRefresh: {},
});
