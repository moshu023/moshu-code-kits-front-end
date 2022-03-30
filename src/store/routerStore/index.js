/**
* 路由状态管理
* @author awen
* @date 2022/3/30
*/
const routerModule = {
    state: {
        routerHistory:[
            {
                title:"首页",
                childTitle:"首页",
                childPath:"/center",
            }
        ],//路由历史
        curChooseRouterIndex:0,//当前选择展示的路由
        curShowRouter:{},//当前显示的路由
    },
    mutations: {
        //添加一个路由
        addRouterHitory(state,data){
            let has = false;
            let hasIndex = 0;
            for (let i=0;i<state.routerHistory.length;i++){
                if(state.routerHistory[i].childTitle == data.childTitle){
                    has = true;
                    hasIndex = i;
                    break;
                }
            }
            if(has){
                state.curChooseRouterIndex = hasIndex;
            }else{
                state.routerHistory.push(data);
                state.curChooseRouterIndex =state.routerHistory.length-1;
            }
            state.curShowRouter = state.routerHistory[state.curChooseRouterIndex];
        },
        //删掉一个路由
        delRouterHistory(state,index){
            state.routerHistory.splice(index,1);
            if(index == state.curChooseRouterIndex){
                state.curChooseRouterIndex =index-1;
            }
            if(index < state.curChooseRouterIndex){
                state.curChooseRouterIndex =index;
            }
            state.curShowRouter = state.routerHistory[state.curChooseRouterIndex];
        },
        //跳转到已存在的路由中
        toOtherRouter(state,data){
            state.curChooseRouterIndex =data;
            state.curShowRouter = state.routerHistory[state.curChooseRouterIndex];
        }
    },
    actions: {
        addRouterHitory(context,data){
            context.commit('addRouterHitory',data);
        },
        delRouterHistory(context,index){
            context.commit('delRouterHistory',index);
        },
        toOtherRouter(context,data){
            context.commit('toOtherRouter',data);
        },
    },
    getters: {

    }
}
export default routerModule