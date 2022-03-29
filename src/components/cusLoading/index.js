import cusLoadingComponent from "./index.vue";
import { createApp, h } from "vue";
const app = createApp(cusLoadingComponent);
const div = document.createElement("div");
document.body.appendChild(div);

const instance = app.mount(div);

export default {
    show(txt='Loading'){
        instance.show(txt);
    },
    close(){
        app.unmount(div);
        div.remove();
    }
}


// export const loading = (content) => {
//    //Props参数
//     const div = document.createElement("div");
//     document.body.appendChild(div);
//     /**删除节点 */
//     const close = () => {
//         //@ts-ignore
//         app.unmount(div);
//         div.remove();
//     };
//
//     /**创建节点 */
//     const app = createApp({
//         render() {
//             return h(cusLoadingComponent, {
//                 content
//             });
//         },
//     });
//     app.mount(div);
//
// };
// export default loading