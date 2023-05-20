<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="prov__main">
        <h1 class="prov__main__text">Welcome to Business web</h1>
        <div class="prov__main__box">
            <div class="prov__main__box__item" @click="goPage('/registeration')">Registeration</div>
            <div class="prov__main__box__item" @click="goPage('/check-in')">CheckIn</div>
            <div class="prov__main__box__item" @click="goPage('/medicine')">Medicine</div>
            <div class="prov__main__box__item" @click="goPage('/orders')">Orders</div>
            <div class="prov__main__box__item" @click="goPage('/profile')">Profile</div>
        </div>
    </div>
</template>

<script setup >
import router from '@/router/prov-router'

const goPage = (path) => {
    router.push(path)
}
</script>

<style lang="stylus" scoped >

.prov__main__text
    font-weight: bold
.prov__main
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
            background: #1a3045
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