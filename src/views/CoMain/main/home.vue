<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="home">
        <div class="home__title">欢迎来到老有所联</div>
        <div class="home__choose__service">
            <div class="home__choose__service__item"
            :class="{active: service === 0}"
            @click="chooseService(0)">挂号</div>
            <div class="home__choose__service__item"
            :class="{active: service === 1}"
            @click="chooseService(1)">买药</div>
            <div class="home__choose__service__item"
            :class="{active: service === 2}"
            @click="chooseService(2)">住院</div>
        </div>
        <Registration v-if="service === 0" />
        <BuyMedical v-if="service === 1" />
        <HospitalCheckIn v-if="service === 2" />
    </div>
    <Tabbar />
</template>

<script setup>
import Tabbar from '@/components/mobile/comm/tabbar';
import Registration from '@/components/mobile/home/Registration';
import HospitalCheckIn from '@/components/mobile/home/HospitalCheckIn';
import BuyMedical from '@/components/mobile/home/BuyMedical';
import { ref } from 'vue';

const service = ref(0);

const chooseService = (index) => {
    console.log(index);
    service.value = index;
}

</script>

<style lang="stylus" scoped>
.home
    padding: 5%
    background: #f9f9f9
    &__title
        height: 100px
        text-align: center
        line-height: 100px
        font-size: 24px
        font-weight: bold
        color: rgb(6 95 70)
        background: #fff0
        box-shadow: 0 20px 50px -12px rgb(0 0 0 / 0.25);
        border-radius: 16px
    &__choose__service
        display: flex
        flex-direction: row
        gap: 10px
        justify-content: space-around
        margin-top: 15px
        &__item
            width: 30%
            height: 30px
            background: #f9f9f9
            border-radius: 16px
            text-align: center
            line-height: 30px
            font-size: 15px
            color: #000
            margin-bottom 10px
            box-shadow: 0 20px 50px -12px rgb(0 0 0 / 0.25);

.active
    background: rgb(6 95 70)
    color: #fff
</style>
