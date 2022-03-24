<template>
    <div class="demo">
        <div>DEMO</div>
        <el-button type="primary" @click="toMessage">点击</el-button>
        <el-button type="primary" @click="httpGet">get访问</el-button>
        <el-button type="primary" @click="httpPost">post访问</el-button>
    </div>
</template>

<script>
    import {demoGet,demoPost} from "../api/demo";
    export default {
        data() {
            return {}
        },
        mounted() {

        },
        methods: {
            toMessage(){
                this.$message.success("弹出提示框")
            },
            httpGet(){
                console.log("进行get请求")
                demoGet({
                    username:123,
                    password:123,
                }).then((res)=>{
                    console.log(res);
                })
            },
            httpPost(){
                console.log("进行post请求")
                demoPost({
                    username:123,
                    password:123,
                }).then((res)=>{
                    console.log(res);
                })
            }
        },
        components: {}
    }
</script>

<style lang="scss">

</style>