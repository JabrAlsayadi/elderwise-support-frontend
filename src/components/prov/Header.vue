<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="prov__header">
        <div class="prov__header__list">
            <div><RouterLink class="link_sty" active-class="a_class" to="/home">Home</RouterLink></div>
            <div><RouterLink class="link_sty" active-class="a_class" to="/registeration">Registeration</RouterLink></div>
            <div><RouterLink class="link_sty" active-class="a_class" to="/check-in">Check In</RouterLink></div>
            <div><RouterLink class="link_sty" active-class="a_class" to="/medicine">Medicine</RouterLink></div>
            <div><RouterLink class="link_sty" active-class="a_class" to="/orders">Orders</RouterLink></div>
            <div><RouterLink class="link_sty" active-class="a_class" to="/profile">Profile</RouterLink></div>
        </div>
        <div class="prov__header__user">
            <div><van-icon name="manager-o" /></div>
            <div>18410270621</div>
            <div @click="logMethod"><van-icon name="ellipsis" /></div>
        </div>
    </div>
    <van-popup round v-model:show="data.show">
        <div class="exit__pop">
            <div class="exit__pop__text">click button to exit</div>
            <div class="exit__pop__btn">退出登录</div>
        </div>
    </van-popup>
</template>

<script setup>
import { reactive } from 'vue';

const data = reactive({
    show: false
})

const logMethod = () => {
    data.show = true
}

</script>

<style lang="stylus" scoped>
.prov__header 
    width: 100%
    height: 60px
    background: #1a3045
    color: #fff
    display: flex
    justify-content: space-between
    align-items: center
    &__list
        margin-left: 20px
        width: 60%
        display: flex
        justify-content: space-between
        align-items: center

    &__user
        width: 40%
        display: flex
        padding: 0 10px
        justify-content: flex-end
        align-items: center
        &>div
            margin-left: 10px
            font-size: 16px
            cursor pointer

.link_sty
    color: #fff

.a_class
    font-size: 17px
    font-weight: bold

.exit__pop 
    width: 300px
    padding: 20px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    &__text
        font-size: 14px
        padding: 10px 0
    &__btn
        width: 100%
        height: 40px
        background: #1a3045
        color: #fff
        border-radius: 3px
        text-align: center
        line-height: 40px
        font-size: 16px
        font-weight: bold
        cursor: pointer
</style>