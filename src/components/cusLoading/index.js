import cusLoadingComponent from "./index.vue";
import { createApp, h } from "vue";

// const div = document.createElement("div");
// const content="";
// const app = createApp({
//     render() {
//         return h(cusLoadingComponent, {
//             content,
//         });
//     },
// });
// export default {
//     show(content){
//         document.body.appendChild(div);
//         console.log(app);
//         content=content;
//         /**创建节点 */
//         app.mount(div);
//     },
//     /**删除节点 */
//     close(){
//         //@ts-ignore
//         app.unmount(div);
//         div.remove();
//     }
// }

export const loading = (content) => {
   //Props参数
    const div = document.createElement("div");
    document.body.appendChild(div);
    /**删除节点 */
    const close = () => {
        //@ts-ignore
        app.unmount(div);
        div.remove();
    };

    /**创建节点 */
    const app = createApp({
        render() {
            return h(cusLoadingComponent, {
                content
            });
        },
    });
    app.mount(div);

};
export default {

};