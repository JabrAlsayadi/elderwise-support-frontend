<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="help">
        <div class="help__dashbord">
            <div class="help__dashbord__box">
                <div class="help__dashbord__box__title">随时求助</div>
                <div class="help__dashbord__box__desc">随时求助警察，医院，消防 <van-icon color="#fff" name="like" /></div>
                <div class="help__dashbord__box__date">{{ dayjs() }}</div>
            </div>
        </div>
        <div class="help__phone">
            <div class="help__phone__title_main">求助电话</div>
            <div class="help__phone__content">
                <div v-for="(item, index) in list" :key="index" class="help__phone__content__item">
                    <div class="help__phone__content__item__name">{{ item.agencyName }}</div>
                    <div class="help__phone__content__item__phone">{{ item.phoneNumber }}</div>
                    <div class="help__phone__content__item__event">
                        <div class="help__phone__content__item__event__text">拨打</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Tabbar />
</template>

<script setup>
import Tabbar from '@/components/mobile/comm/tabbar.vue';
import { computed, onMounted, reactive } from 'vue';
import dayjs from 'dayjs';
import { phonesList } from '@/api';
import { showToast } from 'vant';

const data = reactive({
    phones:[]
})

const list = computed(() => {
    return data.phones
})

onMounted(() => {
    phonesList().then(res => {
        if (res.code.toString() === '0' && res.msg.toString() === 'success') {
            data.phones = res.data.data
        }
    }).catch(err => {
        showToast('获取电话列表失败, 请稍后重试')
        console.log(err)
    })
}) 
</script>
<!-- 246BFD -->
<style lang="stylus" scoped>
.help
    padding: 5%
    &__dashbord
        display: flex
        flex-direction: column
        justify-content: space-round
        background: rgb(6 95 70)
        border-radius: 16px
        padding: 3%
        box-shadow: 0 25px 30px -12px rgb(0 0 0 / 0.25);
        &__box
            display: flex
            flex-direction: column
            padding: 3% 0
            &__title
                background: #fff
                width: 20%
                padding: 2% 3%
                border-radius: 16px
                font-size: 15px
                font-weight: bold
                color: #000
            &__desc
                font-size: 22px
                color: #fff
                padding: 10px 0
            &__date
                font-size: 12px
                color: #fff
    &__phone
        padding: 3% 0
        &__title_main
            font-size: 20px
            font-weight: bold
            padding: 1% 0
            color: #000
        &__content
            display: flex
            gap: 15px
            flex-direction: column
            background: #fff
            &__item
                display: flex
                justify-content: space-between
                align-items: center
                color: #fff
                padding: 5% 3%
                border-radius: 10px
                background: rgb(6 95 70)
                box-shadow: 0 25px 30px -12px rgb(0 0 0 / 0.25);
                &__name
                    font-size: 16px
                &__phone
                    font-size: 16px
                &__event
                    background: #fff
                    padding: 3%
                    border-radius: 16px
                    cursor: pointer
                    color: #000
                    &__text
                        font-size: 15px
</style>
