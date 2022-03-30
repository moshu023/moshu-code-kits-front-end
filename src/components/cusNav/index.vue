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
            <div class="name">
                <img class="logo" src="../../assets/logo.png" alt="">

                <h4 class="name" v-show="!isCollapse">KAVANA Admin</h4>
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
                        title:"小程序管理",
                        path:"",
                        icon:"icon-all",
                        child:[
                            {
                                title:"微信用户管理",
                                icon:"icon-all",
                                path:"",
                            },
                            {
                                title:"统计数据",
                                icon:"icon-all",
                                path:"",
                            },
                            {
                                title:"新用户权限设置",
                                icon:"icon-all",
                                path:"",
                            },
                            {
                                title:"节目试听管理",
                                icon:"icon-all",
                                path:"",
                            },
                        ]
                    },

                    {
                        title:"三审管理",
                        path:"",
                        icon:"icon-all",
                        child:[
                            {
                                title:"节目三审",
                                icon:"icon-all",
                                path:"",
                            },
                        ]
                    },
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
        .name{
            display: flex;
            /*width: 199px;*/
            height:60px;
            align-items: center;
            justify-content: center;
            background: #2c1c4b;
            .logo{
                width: 40px;
                height:40px;
                border-radius: 50%;
            }
            .name{
                color:#fff;
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