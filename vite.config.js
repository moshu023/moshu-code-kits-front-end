import vue from '@vitejs/plugin-vue';
import path from 'path';
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons';

export default {
    plugins: [vue(),  //svg
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            // 指定symbolId格式
            symbolId: 'icon-[dir]-[name]',

            /**
             * 自定义插入位置
             * @default: body-last
             */
            inject: 'body-last' | 'body-first',

            /**
             * custom dom id
             * @default: __svg__icons__dom__
             */
            customDomId: '__svg__icons__dom__'
        })],
    //前端跨域设置
    server: {
        // proxy: {
        //     '^/api': {
        //         target: 'http://localhost:8085/',
        //         changeOrigin: true,
        //         // rewrite: (path) => path.replace(/^\/api/, ""),
        //         pathRewrite: {
        //             "^/api": ""
        //         }
        //     },
        // },
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
