// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [vue()],
  //前端跨域设置
  server: {
    proxy: {
      '/api': {
        //target: 'http://awhtml.cn:3001',
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  //添加全局scss样式
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/style.scss";' // 添加公共样式
      }
    }
  },

}

//
// export default defineConfig({
//   plugins: [vue()],
// })