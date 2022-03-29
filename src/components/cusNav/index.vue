<template>
    <div class="cusNav">
        <div class="collapse iconfont " :class="{'icon-zhankai':isCollapse,'icon-shouqi':!isCollapse}" @click="collapseNav"></div>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                background-color="#2c1c4b"
                text-color="#d5c0cf"
                active-text-color="#e9dcba">
            <div class="name">
                <img class="logo" src="../../assets/logo.png" alt="">

                <h4 class="name" v-show="!isCollapse">KAVANA Admin</h4>
            </div>

            <el-sub-menu index="1">
                <template #title>
                    <el-icon></el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon></el-icon>
                <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <el-icon></el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon></el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isCollapse:false,
            }
        },
        mounted() {

        },
        methods: {
            collapseNav(){
                this.isCollapse = !this.isCollapse;
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
    }
</style>