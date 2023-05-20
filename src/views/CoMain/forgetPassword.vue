<template>
    <div class="forget_password">
        <div class="forget_password__title">重置密码</div>
        <div class="forget_password__inputs">
            <div class="forget_password__inputs__username">
                <input type="text" placeholder="邮箱或手机号" v-model="data.username">
            </div>
            <div v-if="data.canChange" class="forget_password__inputs__change_password">
                <input type="password" placeholder="密码" v-model="data.changePassword">
            </div>
        </div>
        <div class="forget_password__reset" @click="changePassword">重置</div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const data = reactive({
    username: '',
    changePassword: '',
    canChange: false,
});

const searchAccount = () => {
    data.canChange = true;
    console.log('searching account');
}
const resetPassword = () => {
    console.log('resetting password');
}


// eslint-disable-next-line no-unused-vars
const changePassword = () => {
    data.canChange ? resetPassword() : searchAccount();
}

</script>

<style lang="stylus" scoped>

.forget_password
    width: 100%
    background: #fff
    display: flex
    flex-direction: column
    justifty-content: center
    align-items: center
    padding: 10% 0
    &__title
        font-size: 20px
        font-weight: bold
        color: #000
        padding: 5% 0
    &__inputs
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        gap: 20px
        &__username
            padding: 0 0 1% 0
            input
                width: 100%
                height: 50px
                background: #fff
                border-radius: 8px
                padding: 0 5%
                border: 1px solid #e0e1e4
                font-size: 16px
                color: #000
        &__change_password
            padding: 0 0 1% 0
            input
                width: 100%
                height: 50px
                background: #fff
                border-radius: 8px
                padding: 0 5%
                border: 1px solid #e0e1e4
                font-size: 16px
                color: #000
    &__reset
        width: 150px
        height: 50px
        background: rgb(6 95 70)
        border-radius: 8px
        color: #fff
        display: flex
        align-items: center
        justify-content: center
        margin: 5% 0
        box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
</style>