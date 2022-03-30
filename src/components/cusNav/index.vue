<template>
    <div class="cusNav">
        <div class="collapse iconfont " :class="{'icon-zhankai':isCollapse,'icon-shouqi':!isCollapse}" @click="collapseNav"></div>
        <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                background-color="#2c1c4b"
                text-color="#d5c0cf"
                active-text-color="#e9dcba">
            <div class="nameBox">
                <img class="logo" src="../../assets/logo.png" alt="">

                <h4 class="name" v-show="!isCollapse">manager</h4>
            </div>
            <template v-for="(item,navIndex) in navList" :key="navIndex">
                <el-sub-menu :index="item.title" v-if="item.child.length !=0">
                    <template #title>
                        <div class="iconfont navIcon" :class="item.icon"></div>
                        <span>{{item.title}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item
                                :index="childItem.path"
                                v-for="(childItem,childIndex) in item.child"
                                @click="toPage(item,childItem,childIndex)">
                            <div class="iconfont navIcon" :class="childItem.icon"></div>
                            <span>{{childItem.title}}</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-menu-item :index="item.title" v-if="item.child.length ==0">
                    <div class="iconfont navIcon" :class="item.icon"></div>
                    <template #title>{{item.title}}</template>
                </el-menu-item>
            </template>

        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isCollapse:false,
                navList:[
                    {
                        title:"系统管理",
                        path:"",
                        icon:"icon-all",
                        child:[
                            {
                                title:"用户管理",
                                icon:"icon-all",
                                path:"/system/userManage",
                            },
                            {
                                title:"用户权限",
                                icon:"icon-all",
                                path:"/system/userPower",
                            },
                            {
                                title:"系统日志",
                                icon:"icon-all",
                                path:"/system/systemRecord",
                            },
                        ]
                    },
                    {
                        title:"订单管理",
                        path:"",
                        icon:"icon-all",
                        child:[
                            {
                                title:"查询订单",
                                icon:"icon-all",
                                path:"/system/userManage",
                            },
                            {
                                title:"物流管理",
                                icon:"icon-all",
                                path:"/system/userPower",
                            },
                        ]
                    }
                ],
            }
        },
        mounted() {

        },
        methods: {
            collapseNav(){
                this.isCollapse = !this.isCollapse;
            },
            toPage(item,childItem,childIndex){
                // console.log(this.$store.state.router.routerHistory)
                let routerData = {
                    title:item.title,
                    childTitle:childItem.title,
                    childPath:childItem.path,
                }
                this.$store.dispatch('addRouterHitory',routerData);

                this.$router.push(childItem.path);
            }
        },
        components: {}
    }
</script>

<style lang="scss">
    .cusNav{
        width: auto;
        height:100%;
        position: relative;
        .nameBox{
            display: flex;
            /*width: 199px;*/
            padding:0 16px;
            height:60px;
            align-items: center;
            background: #2c1c4b;
            box-sizing: border-box;
            .logo{
                width: 40px;
                height:40px;
                border-radius: 50%;
            }
            .name{
                color:#fff;
                padding-left:8px;
            }
        }
        /*background: #2c1c4b;*/
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            height:100%;
        }
        .el-menu--collapse{
            height:100%;
        }
        .collapse{
            position: absolute;
            top:8px;
            right:-40px;
            font-size:40px;
        }
        .navIcon{
            font-size:20px;
            padding:4px;
        }
    }
</style>