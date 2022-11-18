<template>
    <div class="centerPage">
        <!--左侧导航-->
        <cusNav></cusNav>
        <div class="box">
            <!--面包屑导航-->
            <breadBox></breadBox>
            <!--页面标签-->
            <pageTabsBox></pageTabsBox>
            <div class="views">
                <router-view/>
            </div>

        </div>

    </div>
</template>

<script>
    import cusNav from '../components/cusNav/index.vue'
    import breadBox from '../components/breadBox/index.vue'
    import pageTabsBox from '../components/pageTabsBox/index.vue'
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
            cusNav,
            breadBox,
            pageTabsBox
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
            background: rgb(245,247,249);
            .views{
                width: 100%;
                height:100%;
                box-sizing: border-box;
                padding:16px;
            }
        }
    }
</style>