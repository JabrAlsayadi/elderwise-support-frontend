<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="admin__login">
        
        <div class="admin__login__left">
            <img :src="loginLeft" alt="">
        </div>


        <div class="admin__login__right">
            <div class="admin__login__right-title">Welcome to admin web</div>
            <input v-model="data.userName" type="text" placeholder="User Name">
            <input v-model="data.password" type="password" placeholder="Password">
            <div class="admin__login__right-btn" @click="login">登录</div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router/admin-router';
import loginLeft from '@/assets/image/admin/login_left.svg'
import { reactive } from 'vue';

const data = reactive({
    userName: '',
    password: ''
})

const login = () => {
    router.push('/home');
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
            background-color: #065F46
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


</style>


