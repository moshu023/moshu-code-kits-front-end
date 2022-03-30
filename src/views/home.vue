<template>
    <div class="home center">
        <div class="box">
            <div class="square" style="--i:0;"></div>
            <div class="square" style="--i:1;"></div>
            <div class="square" style="--i:2;"></div>
            <div class="square" style="--i:3;"></div>
            <div class="square" style="--i:4;"></div>
            <div class="form">
                <h2>Login Form</h2>
                <div class="inputBox">
                    <input type="text" placeholder="username" v-model="username">
                </div>
                <div class="inputBox">
                    <input type="password" placeholder="password" v-model="password">
                </div>
                <div class="inputBox">
                    <div class="btn center" @click="login">login</div>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                username:"",
                password:"",
            }
        },
        mounted() {

        },
        methods: {
            login(){
                this.$loading.show();
                setTimeout(()=>{
                    this.$loading.close();
                    this.$router.push("/center")
                },1000)
            }
        },
        components: {}
    }
</script>

<style lang="scss">
    .home {
        background: linear-gradient(-45deg, #FFB7B7, #F5A7B6, #9FDEDD, #AEEDBF);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        height: 100vh;
        position: relative;
        .box{
            position: relative;
            width: 400px;
            height:340px;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            backdrop-filter: blur(5px);
            box-shadow: 0 25px 45px rgba(0,0,0,0.1);
            border:1px solid rgba(255,255,255,0.5);
            border-right:1px solid rgba(255,255,255,0.2);
            border-bottom:1px solid rgba(255,255,255,0.2);

            display: flex;
            align-items: center;
            box-sizing: border-box;

            .form{
                position: relative;
                width: 100%;
                /*height:100%;*/
                padding: 40px;
                box-sizing: border-box;
                h2{
                    position: relative;
                    color:#fff;
                    font-size:24px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    margin-bottom: 40px;
                    &:before{
                        content:'';
                        position: absolute;
                        left:0;
                        bottom:-10px;
                        width: 80px;
                        height:4px;
                        background: #fff;
                    }
                }
                .inputBox{
                    position: relative;
                    width: 100%;
                    margin-top:20px;
                    box-sizing: border-box;
                    input,.btn{
                        width: 100%;
                        background: rgba(255,255,255,0.2);
                        border:none;
                        outline: none;
                        padding:10px 20px;
                        border-radius: 35px;
                        box-sizing: border-box;
                        border:1px solid rgba(255,255,255,0.5);
                        border-right:1px solid rgba(255,255,255,0.2);
                        border-bottom:1px solid rgba(255,255,255,0.2);
                        font-size:16px;
                        letter-spacing: 1px;
                        color:#fff;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                        &::placeholder{
                           color:#fff;
                        }
                    }
                    .btn{
                        background: #fff;
                        color:#666;
                        max-width: 100px;
                        cursor: pointer;
                        margin-bottom: 20px;
                        font-weight: 600;
                    }
                }

            }
            .square{
                position: absolute;
                backdrop-filter: blur(5px);
                box-shadow: 0 25px 45px rgba(0,0,0,0.1);
                border:1px solid rgba(255,255,255,0.5);
                border-right:1px solid rgba(255,255,255,0.2);
                border-bottom:1px solid rgba(255,255,255,0.2);
                background: rgba(255,255,255,0.1);
                border-radius: 10px;
                animation: squareAnime 10s linear infinite;
                animation-delay: calc(-1s * var(--i));
                &:nth-child(1){
                    width:100px;
                    height:100px;
                    top:-50px;
                    right:-60px;
                }
                &:nth-child(2){
                    width:120px;
                    height:120px;
                    top:150px;
                    left:-100px;
                    z-index:2;
                }
                &:nth-child(3){
                    width:80px;
                    height:80px;
                    bottom:50px;
                    right:-60px;
                    z-index:2;
                }
                &:nth-child(4){
                    width:50px;
                    height:50px;
                    bottom:-80px;
                    left:100px;
                }
                &:nth-child(5){
                    width:60px;
                    height:60px;
                    top:-80px;
                    left:140px;
                }
            }
        }


    }

    @keyframes squareAnime {
        0%,100%
        {
            transform: translateY(-40px);
        }
        50%
        {
            transform: translateY(40px);
        }
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>