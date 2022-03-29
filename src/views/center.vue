<template>
    <div class="centerPage">
        <!--左侧导航-->
        <cusNav></cusNav>
        <div class="box">
            <!--面包屑导航-->
            <div class="breadBox">
                <div class="bread">
                    <div class="breadItem center">
                        <div class="name cus_font14 center">首页</div>
                        <div class="line iconfont icon-arrow-right cus_font16"></div>
                    </div>
                    <div class="breadItem center">
                        <div class="name cus_font14 center">系统管理</div>
                        <div class="line iconfont icon-arrow-right cus_font16"></div>
                    </div>
                    <div class="breadItem center">
                        <div class="name cus_font14 center">首页</div>
                        <div class="line iconfont icon-arrow-right cus_font16"></div>
                    </div>
                </div>

                <div class="out center">
                    <el-dropdown >
                        <span class="el-dropdown-link">
                          <div class="iconfont icon-bussiness-man" style="font-size:36px"></div>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="a">联系管理员</el-dropdown-item>
                                <el-dropdown-item command="b">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>


<!--                    icon-set1-->
                </div>
            </div>
            <!--页面标签-->
            <div class="pageTabsBox">
                <div class="pageTabsItem">

                </div>
            </div>

<!--            <router-view/>-->
        </div>
    </div>
</template>

<script>
    import cusNav from '../components/cusNav/index.vue'
    // import loading from '../components/cusLoading/index.js'
    export default {
        data() {
            return {

            }
        },
        mounted() {
            // console.log(this.$loading);
            // loading("loading");
            const loading = this.$loading.show();
            setTimeout(() => {
                this.$loading.close();
            }, 3000)
        },
        methods: {

        },
        components: {
            cusNav
        }
    }
</script>

<style lang="scss">
    .centerPage {
        width: 100%;
        height:100vh;
        display: flex;
        flex-direction: row;

        .box{
            flex:1;
            height:100%;
            .breadBox{
                width: 100%;
                height:60px;
                box-sizing: border-box;
                padding-left:60px;
                display: flex;
                align-items: center;
                .bread{
                    flex:1;
                    height:100%;
                    display: flex;
                    .breadItem{
                        width: auto;
                        height:100%;
                        .name{
                            width: auto;
                            height:100%;
                            padding:4px;
                            color:#97a8be;
                        }
                        .line{
                            position: relative;
                            width: 20px;
                            color:#97a8be;
                            &:before{
                                position: absolute;
                                top:-6px;
                            }
                        }
                    }
                }
                .out{
                    width: 50px;
                    height:60px;
                }
            }

            .pageTabsBox{
                width: 100%;
                box-sizing: border-box;
                padding:20px 16px;
            }
        }
    }
</style>