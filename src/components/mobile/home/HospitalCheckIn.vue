<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="check__in" v-if="lengthOfData">
        <div class="check__in__hospital" v-for="(item, index) in data.hospitals" :key="index">
            <div class="check__in__hospital__box">
                <div class="check__in__hospital__box__image">{{ item.hospitalName.slice(0,2) }}</div>
                <div class="check__in__hospital__box__info">
                    <div class="check__in__hospital__box__info__name">{{ item.hospitalName }}</div>
                    <div class="check__in__hospital__box__info__address">{{ item.hospitalAddress }}</div>
                    <div class="check__in__hospital__box__info__desc">{{ item.hospitalDesc }}</div>
                </div>
            </div>
            <div class="check__in__hospital__button" @click="handleEvent(item.id)">住院</div>
        </div>
    </div>
    <div v-else>
        <van-empty description="暂无住院信息" />
    </div>
</template>

<script setup>
import { reactive, defineProps, computed, watchEffect } from 'vue';
import router from '@/router/co-router';

const data = reactive({
    hospitals: []
})

const props = defineProps({
    hospitallist: {
        type: Array,
        default: () => []
    },
})

const lengthOfData = computed(() => {
    if (data.hospitals.length > 0)
        return true;
    return false;
})

watchEffect(() => {
    data.hospitals = props.hospitallist;
})

const handleEvent = (id) => {
    return router.push(`/checkin-info/${id}`);
}
</script>

<style lang="stylus" scoped>
.check__in
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