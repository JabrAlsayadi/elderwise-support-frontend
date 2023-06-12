<template>
    <div class="main">
        <div class="main__title">老有所联</div>
        <div class="main__bg_img"></div>
        <div class="main__sub_title">为老年人提供便利的服务和信息帮助智能化生活</div>
        <div class="main__desc">我们是致力于帮助老年人的在线服务平台，提供便捷的网购、医疗和信息获取等功能，以改善他们的日常生活</div>
        <div class="main__buttons">
            <div class="main__buttons__sign_up" @click="showPops('login')">登录</div>
        </div>
        <van-popup
            v-model:show="loginPop"
            position="bottom"
            :style="{'border-radius': '42px 42px 0 0'}">
            <login />
        </van-popup>
    </div>
</template>

<script setup >
import login from '@/components/mobile/popups/login.vue';
import { ref } from 'vue';

const registerPop = ref(false);
const loginPop = ref(false);


const showPops = (who) => {
    who === 'login' ? loginPop.value = true : registerPop.value = true;
}

</script>

<style lang="stylus" scoped>
bg-img = url(../../assets/image/mobile/mainImgae.png)

.main
    width: 100%
    height: 100%
    color: #000
    background: #fff0
    display: flex
    flex-direction: column
    align-items: center
    &__title
        font-size: 20px
        font-weight: bold
        text-align: center
        padding: 40px 20px
    &__bg_img
        width: 250px
        height: 250px
        background-image: bg-img
        background-size: cover
        border-radius:  16px
        padding: 30px 0 0 0
        box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    &__sub_title
        max-width: 75%
        font-size: 20px
        font-weight: bold
        text-align: center
        padding: 60px 20px 5px 20px
        line-height: 1.2
    &__desc
        max-width: 75%
        font-size: 14px
        text-align: center
        line-height: 1.2
        padding: 5px 20px 40px 20px
    &__buttons
        width: 100%
        display: flex
        justify-content: center
        align-items: center
        &__sign_up
            width: 280px
            height: 50px
            background: rgb(6 95 70);
            color: #fff
            margin: 0 50px
            border-radius: 8px
            font-size: 16px
            font-weight: bold
            text-align: center
            line-height: 300%
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        &__login
            color: #fff
            border-radius: 8px
            font-size: 16px
            font-weight: bold
            text-align: center
            line-height: 300%
</style>


