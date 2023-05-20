<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="registeration">
        <div class="registeration__hospital" v-for="(item, index) in data.hospitals" :key="index">
            <div class="registeration__hospital__box">
                <div class="registeration__hospital__box__image">{{ item.name.slice(0,2) }}</div>
                <div class="registeration__hospital__box__info">
                    <div class="registeration__hospital__box__info__name">{{ item.name }}</div>
                    <div class="registeration__hospital__box__info__address">{{ item.address }}</div>
                    <div class="registeration__hospital__box__info__desc">{{ item.desc }}</div>
                </div>
            </div>
            <div class="registeration__hospital__button" @click="handleEvent(item.name)">挂号</div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router/co-router';
import { reactive, provide } from 'vue';

const data = reactive({
    hospitals: [
        {id: 1, name: '医院名称1', address: '医院地址医院地址医院地址', desc: '医院介绍医院地址医院地址医院地址医院地址医院地址医院地址'},
        {id: 2, name: '医院名称2', address: '医院地址医院地址医院地址', desc: '医院介绍医院地址医院地址医院地址医院地址医院地址医院地址'},
        {id: 3, name: '医院名称3', address: '医院地址医院地址医院地址', desc: '医院介绍医院地址医院地址医院地址医院地址医院地址医院地址'},
    ]
})

const register = () => {
    router.push('/register-info');
}

const handleEvent = (hoispitalName) => {
    console.log(hoispitalName);
    provide('hoispital', hoispitalName)
    register()
}
</script>

<style lang="stylus" scoped>
.registeration
    display flex
    flex-direction column
    padding: 3% 1%
    margin-bottom 12%
    background: #f9f9f9
    gap: 10px
    &__hospital
        background: #f9f9f9
        padding: 3% 5%
        margin 1% 0
        border-radius: 10px
        box-shadow: 0 20px 50px -12px rgb(0 0 0 / 0.25);
        &__box
            display: flex
            &__image
                width: 15%
                height: 50px
                text-align: center
                color: #000
                line-height: 250%
                background-color: #fff
                border-radius: 50%
                border: 1px solid #e0e1e4
            &__info
                width: 70%
                padding-left: 5%
                &__name
                    color: #000
                    font-size: 16px
                    font-weight: 600
                &__address
                    font-size: 14px
                    color: #000
                    padding: 5% 0
                &__desc
                    font-size: 14px
                    color: #000
        &__button
            width: 100%
            height: 40px
            background-color: rgb(6 95 70)
            border-radius: 10px
            margin-top: 5%
            display: flex
            justify-content: center
            align-items: center
            font-size: 16px
            font-weight: 600
            color: #fff
</style>
