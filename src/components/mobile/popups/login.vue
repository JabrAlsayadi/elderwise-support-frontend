<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login">
        <div class="login__line"></div>
        <div class="login__title">欢迎回来</div>
        <div class="login__inputs">
            <div class="login__inputs__username">
                <input type="text" placeholder="邮箱或手机号"  v-model="data.username">
            </div>
            <div class="login__inputs__password">
                <input type="text" placeholder="密码"  v-model="data.password">
            </div>
        </div>
        <div class="login__forgot" @click="forgetPassword">忘记密码?</div>
        <div class="login__button" @click="login">登录</div>
    </div>
</template>

<script setup >
import router from '@/router/co-router';
import { showToast } from 'vant';
import { reactive } from 'vue';

import { loginReq } from '@/api/index'

const data = reactive({
    username: '',
    password: '',
    userData: 0,
})

const login = () => {
    loginReq({
        "userAccount":data.username,
        "userPassword": data.password
    }).then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                console.log(res.token);
                localStorage.setItem('token', res.token);
                localStorage.setItem('id', res.data.length === 0 ? 0 : res.data[0].id);
                showToast('登录成功');
                logined();
                return;
            }
            showToast(res.msg);
        }
    ).catch(error => {
        console.error('Login error:', error);
        showToast('请再次输入您的信息');
    });
}

const forgetPassword = () => {
    router.push('/forget-password');
}

const logined = () => {
    router.push('/service-type');
}

</script>

<style lang="stylus" scoped>
.login
    color: #000
    padding: 18px 24px
    background: #fff
    color: #fff
    &__line
        width: 20%
        height: 4px
        margin: 0 0 0 40%
        background: #000
        opacity: 0.4
        border-radius: 2px
    &__title
        font-size: 20px
        font-weight: bold
        padding: 30px 0
    &__inputs
        display: flex
        flex-direction: column
        gap: 20px
        &__username
            padding: 0 0 10px 0
            input
                width: 90%
                height: 50px
                background: #fff
                border-radius: 8px
                padding: 0 10px
                font-size: 16px
                border: 1px solid #e0e1e4
                color: #000
        &__password
            padding: 0 0 10px 0
            input
                width: 90%
                height: 50px
                background: #fff
                border-radius: 8px
                border: 1px solid #e0e1e4
                padding: 0 10px
                font-size: 16px
                color: #000
    &__forgot
        font-size: 14px
        color: #1d9bf0
        text-align: center
        padding: 10px 0
    &__button
        width: 95%
        height: 50px
        color: #fff
        background: rgb(6 95 70);
        border-radius: 8px
        font-size: 16px
        font-weight: bold
        text-align: center
        line-height: 50px
        margin: 20px 0 0 5px
        box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

</style>


