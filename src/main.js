import { createApp } from 'vue'
import App from './App.vue'

//路由控制
import router from './router'  //引入vue-router

//引入vuex
import store from './store/index' //引入vuex

//引入elementUI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { ElMessage } from 'element-plus'

//全局自定义组件

import loading from './components/cusLoading/index.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// SVG配置
import 'virtual:svg-icons-register'; //这一句必须要加上
import SvgIcon from './components/svg/SvgIcon.vue';
// time line
import * as Elicons from "@element-plus/icons-vue";
const app = createApp(App);
app.component('SvgIcon', SvgIcon)
app.use(router); //使用router
app.use(store); //使用vuex
app.use(ElementPlus); //使用elementUI
app.use(ElMessage);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
for (const name in Elicons) {
    app.component(name, Elicons[name]);
}
//挂载组件
app.config.globalProperties.$message = ElMessage;
app.config.globalProperties.$loading = loading;
// app.config.globalProperties.$loading = loading;
app.mount('#app')

