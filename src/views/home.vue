<template>
    <div class="home">
        <div class="myStyle">HOME</div>
        <div @click="toDemo">点击跳转到demo</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {

        },
        methods: {
            toDemo(){
                this.$router.push("/demo")
            },
            
        },
        components: {}
    }
</script>

<style lang="scss">
    .home {
        .myStyle{
            color:$demoColor;
        }
    }
</style>