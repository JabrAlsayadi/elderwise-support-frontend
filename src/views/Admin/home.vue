<!-- eslint-disable vue/multi-word-component-names -->
<template>
    
    <div class="admin__main">
        <h1 class="admin__main__text">欢迎来老有所联后台管理</h1>
        <div class="admin__main__box">
            <div class="admin__main__box__item" @click="goPage('/users')">用户管理</div>
            <div class="admin__main__box__item" @click="goPage('/Registeration')">医院信息</div>
            <div class="admin__main__box__item" @click="goPage('/medicine')">药品信息</div>
            <div class="admin__main__box__item" @click="goPage('/help')">订单信息</div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router/admin-router'

const goPage = (path) => {
    router.push(path)
}
</script>

<style lang="stylus" scoped>

.admin__main__text
    font-weight: bold
.admin__main
    width: 100%
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    &__text
        font-size: 40px
        font-weight: bold
    &__box
        width: 100%
        padding: 20px 0 0 0
        display: flex
        flex-wrap: wrap
        justify-content: space-around
        align-items: center
        &__item
            width: 200px
            height: 200px
            background: #065F46
            color: #fff
            display: flex
            justify-content: center
            align-items: center
            font-size: 20px
            font-weight: bold
            border-radius: 10px
            margin: 10px
            cursor: pointer
            transition: all 0.3s
            &:hover
                transform: scale(1.1)
                box-shadow: 0 0 10px #000
</style>


