<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="service">
        <div class="service__tabbar">
            <RouterLink to="/main" active-class="active">
                <div class="service__tabbar__item">
                    <van-icon name="wap-home" />
                    <div class="service__tabbar__item__text">首页</div>
                </div>
            </RouterLink>
            <RouterLink to="/cart" active-class="active">
                <div class="service__tabbar__item">
                    <van-icon name="cart" />
                    <div class="service__tabbar__item__text">购物车</div>
                </div>
            </RouterLink>
            <RouterLink to="/help" active-class="active">
                <div class="service__tabbar__item">
                    <van-icon name="phone" />
                    <div class="service__tabbar__item__text">求助</div>
                </div>
            </RouterLink>
            <RouterLink to="/profile" active-class="active">
                <div class="service__tabbar__item">
                    <van-icon name="manager" />
                    <div class="service__tabbar__item__text">主页</div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>

.service
    width: 100%
    background: #fff
    color: #000
    &__tabbar
        position: fixed
        bottom: 0
        left: 0
        display: flex
        justify-content: space-around
        align-items: center
        width: 100%
        height: 60px
        background: rgb(6 95 70)
        border-top: 1px solid #eee
        &__item
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            color: #fff
            &__text
                font-size: 13px
                color: #fff
                margin-top: 5%

.active
    font-size: 20px
    font-weight: bold
</style>
