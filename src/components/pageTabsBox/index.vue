<template>
    <!--页面标签-->
    <div class="pageTabsBox">
        <div class="pageTabsItem center"
             :class = "{pageTabsItemChoose:routerIndex===index}"
             v-for="(item,index) in routerList"
             @click="toPage(item,index)"
             style="padding-right: 16px">
            <div class="name cus_font14">{{item.childTitle}}</div>
            <div class="closeBtn iconfont icon-close" @click.stop="closePage(item,index)" v-show = "index !==0"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {

        },
        computed:{
            routerList(){
                return this.$store.state.router.routerHistory;
            },
            routerIndex(){
                return this.$store.state.router.curChooseRouterIndex;
            },
        },
        methods: {
            //点击标签跳转到不同页面
            toPage(data,index){
                this.$store.dispatch('toOtherRouter',index);
                this.$router.push(data.childPath);
            },
            //删除一个标签
            closePage(data,index){
                let isToOther =index == this.routerIndex;
                this.$store.dispatch('delRouterHistory',index);
                if(isToOther){
                    this.$router.push(this.routerList[this.routerIndex].childPath);
                }

            }
        },
        components: {}
    }
</script>

<style lang="scss">
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
                    /*width:auto;*/
                    animation: pageTabs 0.3s linear;
                    animation-fill-mode: forwards;
                }
            }
        }
        .pageTabsItemChoose{
            .closeBtn{
                width: 18px;
                color:#eb4035;
                animation:none;
            }
            .name{
                color:#eb4035;
            }
        }
    }

    @keyframes pageTabs {
        100%{
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
</style>
