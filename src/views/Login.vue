<template>
    <div class="login-body">
        <header class="login-header">
              <div class="login-log">
                     
              </div>
        </header>
        <div class="login-main">
               <div class="form-container">
                   <div class="login-bg">

                   </div>
                   <div class="login-form">
                       <div class="login-title">
                           登录
                       </div>
                       <div class="form-input">
                           <div class="input-container"> 
                               <input type="text" name="userName" v-model="userName">
                           </div>
                           <div class="input-container">
                               <input type="password" name="password" v-model="password">
                           </div>
                       </div>
                       <div class="login-btn-container">
                           <div class="login-btn" @click="loginClick()">登录</div>
                       </div>
                   </div>
               </div>
        </div>
        <div style="height:1800px;">

        </div>
        <footer class="login-footer">
             版权所有 ©深圳奥哲网络科技有限公司 粤ICP备10083177号
        </footer>
    </div>
</template>
<script>
import {mapActions} from "vuex";
import md5 from 'js-md5';
export default {
    data:function(){
        return {
            password:"",
            userName:""
        }
    },
    methods:{
        ...mapActions(["login"]),
        loginClick:function(){
         this.login({
                password:md5(this.password),
                userCode:this.userName
            });

        }
    }
}
</script>
<style lang="less" scoped>
@headerHeight:60px;
@footerHeight:60px;
@headerPaddingLeft:24px;
@loginFormWidth: 1066px;
.login-body{
    .login-header{
        position:fixed;
        height:@headerHeight;
        padding-left:@headerPaddingLeft;
        top:0;
        left:0;
        right:0;
        display:flex;
        align-items: center;
        .login-log{
            background:url(../css/img/H3-BPMLogo.png);
            width:126px;
            height:30px;
            background-size:cover;
        }
    }
    .login-main{
        background:#002638;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:@headerHeight 0 @footerHeight 0;
        overflow: auto;
        .form-container{
            position:absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            width: @loginFormWidth;
            margin:0 auto;
            display:flex;
            align-items: center;
            padding-top:20px;
            .login-bg{
                width:671px;
                height:418px;
                background:url(../css/img/bj.png) ;
            }
            .login-form{
                width:300px;
                height:400px;
                padding:0 20px;
                background:#fff;
                .login-title{
                    margin:50px 0 ;
                    text-align: center;
                    font-size:30px;

                }
                .input-container{
                    margin-bottom:30px;
                    input{
                        padding: 5px 12px;
                        font-size:14px;
                        border: 1px solid #d9d9d9;
                        border-radius: 4px; 
                        display:block;
                        outline: none;
                        width:100%;
                        box-sizing: border-box;
                    }
                }
                .login-btn{
                    height:30px;
                    line-height: 30px;
                    background:#17bc94;
                    color:#fff;
                    border-radius: 5px;
                    text-align: center;
                    cursor: pointer;
                }
            }
        }
    }
    .login-footer{
        position:fixed;
        bottom:0;
        height:@footerHeight;
        left:0;
        right:0;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

</style>