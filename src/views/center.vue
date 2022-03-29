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
                <div class="pageTabsItem center" style="padding-right: 16px">
                    <div class="name cus_font14">主页</div>
                    <div class="closeBtn iconfont icon-close" v-show = "false"></div>
                </div>
                <div class="pageTabsItem center">
                    <div class="name cus_font14">主页</div>
                    <div class="closeBtn iconfont icon-close" ></div>
                </div>
            </div>

<!--            <router-view/>-->
        </div>
    </div>
</template>

<script>
    import cusNav from '../components/cusNav/index.vue'
    export default {
        data() {
            return {

            }
        },
        mounted() {
            // const loading = this.$loading.show();
            // setTimeout(() => {
            //     this.$loading.close();
            // }, 3000)
        },
        methods: {

        },
        components: {
            cusNav
        }
    }
</script>

<style lang="scss">
    @keyframes pageTabs {
        0%{
            width: 0px;
        }
        100%{
            width: 18px;
        }
    }
    @keyframes pageTabsClose {
        0%{
            width: 18px;
        }
        100%{
            width: 0px;
        }
    }

    .centerPage {
        width: 100%;
        height:100vh;
        display: flex;
        flex-direction: row;

        .box{
            flex:1;
            height:100%;
            background: rgb(245,247,249);
            .breadBox{
                width: 100%;
                height:60px;
                box-sizing: border-box;
                padding-left:60px;
                display: flex;
                align-items: center;
                background: #fff;
                box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
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
                height:auto;
                box-sizing: border-box;
                padding:10px 16px;
                display: flex;
                .pageTabsItem{
                    position: relative;
                    width: auto;
                    height:32px;
                    padding-left:16px;
                    padding-right: 8px;
                    border-radius: 2px;
                    background: #fff;
                    margin-right:16px;
                    cursor: pointer;
                    .closeBtn{
                        width:0;
                        overflow: hidden;
                        margin-left:8px;
                        animation: pageTabsClose 0.3s linear;
                    }
                    &:hover{

                        .name{
                            color:#eb4035;
                        }
                        .closeBtn{
                            color:#eb4035;
                            width:auto;
                            animation: pageTabs 0.3s linear;
                        }
                    }
                }
            }
        }
    }
</style>