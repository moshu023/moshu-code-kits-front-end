<template>
    <div class="cusLoading" v-if="isShow">
        <div class="loader">
            <div class="spinner"></div>
            <div class="text">{{content}}</div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                content: 'Loading',
                isShow :false,
            }
        },
        mounted() {

        },
        methods: {
            show(text){
                this.isShow = true;
                this.content=text;
            },
        },
        components: {}
    }
</script>

<style lang="scss">
    @keyframes spinner {
        50%{
            border-radius: 50%;
            background: #ffd6e1;
            transform: rotate(360deg) scale(0.5);
        }
        100%{
            background: #bee5fc;
            transform: rotate(720deg);
        }
    }
    @keyframes shadow {
        50%{
            transform: scale(0.5);
        }
    }

    @keyframes text {
        0%,100%{
            transform:translate(-50%,-50%) scale(1,1);
        }
        50%{
            transform:translate(-50%,-50%) scale(0.5,0.5);
            color:#bee5fc;
        }
    }
    .cusLoading {
        position: fixed;
        top:0;
        width: 100%;
        height:100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(140,140,140,0.5);
        .loader{
            user-select: none;
            .spinner{
                position: relative;
                width: 180px;
                height:180px;
                &:before,&:after{
                    content: '';
                    position: absolute;
                }
                &:before{
                    width: 100%;
                    height:100%;
                    background: #bee5fc;
                    animation: spinner 2.5s cubic-bezier(0.75,0,0.3,1) infinite;
                }
                &:after{
                    width: 100%;
                    height:4px;
                    bottom: -40px;
                    border-radius: 50%;
                    background: #333;
                    animation: shadow 2.5s cubic-bezier(0.75,0,0.3,1) infinite;
                }
            }
            .text{
                position: absolute;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
                color:#fff;
                font-size: 28px;
                text-transform: uppercase;
                font-weight: 100;
                animation: text 2.5s cubic-bezier(0.75,0,0.3,1) infinite;
            }
        }


    }
</style>