<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="prov__header">
        <div class="prov__header__list">
            <div><RouterLink class="link_sty" active-class="a_class" to="/">首页</RouterLink></div>
            <div><RouterLink class="link_sty" active-class="a_class" to="/registeration">创建实体</RouterLink></div>
            <div><RouterLink class="link_sty" active-class="a_class" to="/check-in">医院信息</RouterLink></div>
            <div><RouterLink class="link_sty" active-class="a_class" to="/medicine">药品</RouterLink></div>
            <div><RouterLink class="link_sty" active-class="a_class" to="/orders">订单</RouterLink></div>
        </div>
        <div class="prov__header__user">
            <div><van-icon name="manager-o" /></div>
            <div>{{ userAcount }}</div>
            <div @click.prevent="openPop"><van-icon name="ellipsis" /></div>
        </div>
    </div>
    <van-popup v-model:show="data.showExit" round>
        <div class="exit__pop">
            <div class="exit__pop__text">确定退出登录吗？</div>
            <div class="exit__pop__btn" @click="exit">退出登录</div>
        </div>
    </van-popup>
</template>

<script setup>
import router from "@/router/co-router";
import { reactive, ref } from "vue";

const userAcount  = ref("18410270621")
userAcount.value = localStorage.getItem('provAccount')

const data = reactive({
    showExit: false
})

const openPop = () => {
    data.showExit = true
}

const exit = () => {
    localStorage.removeItem('provAccount')
    localStorage.removeItem('provToken')
    localStorage.removeItem('provId')
    router.go(0);
    return;
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
    height: 110px
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