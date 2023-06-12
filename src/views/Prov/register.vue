<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="admin__login">

        <div class="admin__login__left">
            <img :src="loginLeft" alt="">
        </div>

        <div class="admin__login__right">
            <div class="admin__login__right-title">欢迎来老有所联商业注册</div>
            <input v-model="data.userName" type="text" placeholder="用户名">
            <input v-model="data.userAccount" type="text" placeholder="手机号或邮箱">
            <input v-model="data.userPassword" :type="showPassword" placeholder="密码">
            <div class="show__password" @click="changeShowPassword">{{ data.showPassword === true ? '隐藏密码' : '显示密码'}}</div>
            <div class="admin__login__right-btn" @click="register">注册</div>
            <div>已有账号？<span class="go_login" @click.prevent="goLogin">登录</span></div>
        </div>
    </div>
</template>

<script setup >
import router from '@/router/prov-router';
import loginLeft from '@/assets/image/prov/prov__login_img.svg'
import { reactive, computed } from 'vue';
import { registerReq } from '@/api';
import { showToast } from 'vant';

const data = reactive({
    userName: '',
    userAccount: '',
    userRole: 'prov',
    userPassword: '',
    showPassword: false
})

const changeShowPassword = () => {
    data.showPassword = !data.showPassword;
}

const showPassword = computed(() => {
    if (data.showPassword === true)
        return 'text';
    return 'password';
})

const goLogin = () => {
    router.push('/login');
}

const register = () => {
    registerReq(
        {
            userName: data.userName,
            userAccount: data.userAccount,
            userRole: data.userRole,
            userPassword: data.userPassword
        }
    ).then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                showToast('注册成功')
                goLogin();
                return;
            }
            showToast('注册失败，请重试')
        }
    ).catch(
        err => {
            showToast('注册失败，请重试')
            console.log(err);
        }
    )
}

</script>

<style lang="stylus" scoped>
$m_l_q = 768px

.admin__login
    width: 100%
    height: 100vh
    display: flex
    justify-content: space-around
    align-items: center

    &__left
        width: 50%
        height: 100%
        padding: 0 10%
        &>img
            width: 100%
            height: 100%
            object-fit: contain

    &__right
        width: 50%
        height: 100%
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        &-title
            font-size: 30px
            font-weight: 600
            margin-bottom: 20px
        &>input
            width: 300px
            height: 40px
            border-radius: 5px
            border: 1px solid #ccc
            margin-bottom: 20px
            padding-left: 10px
        &-btn
            width: 300px
            height: 40px
            background-color: #1a3045
            border-radius: 5px
            color: #fff
            border: 1px solid #fff
            margin-bottom: 20px
            padding-left: 10px
            display: flex
            justify-content: center
            align-items: center
            cursor: pointer
            
@media (max-width: $m_l_q)
    .admin__login
        &__left
            display: none

.go_login
    font-size: 16px
    font-weight: bold
    color: blue
    cursor: pointer
.show__password
    padding-bottom: 10px
    font-size: 14px
    color: blue
    cursor: pointer
</style>


