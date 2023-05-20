<template>
    <div class="service_types">
        <div class="service_types__title">我们的服务</div>
        <div class="service_types__desc">享受我们的服务，有什么不满意请及时举报</div>
        <div class="service_types__box">
            <div 
            v-for="(item, index) in data.serviceTypes" :key="index"
            class="service_types__box__item">
            <div class="service_types__box__item__symobl">{{ item }}</div>
            <div class="service_types__box__item__name">{{ data.serviceName[index] }}</div>
        </div>
        </div>
        <div class="service_types__button" @click="startUsing">开始使用</div>
    </div>
</template>

<script setup>
import router from '@/router/co-router';
import { reactive }  from 'vue';

const data = reactive({
    serviceTypes: ['🛒', '🏥', '📱', '🏠', '📞', '📝'],
    serviceName: ['网购', '医疗', '信息', '居家', '通讯', '其他']
});

const startUsing = () => {
    console.log('startUsing');
    router.push('/main');
}

</script>

<style lang="stylus" scoped>
.service_types
    display: flex
    max-width: 480px
    max-height: 100vh
    flex-direction: column
    justify-content: center
    align-items: center
    background: #fff
    &__title
        font-size: 25px
        font-weight: bold
        padding: 10% 0
    &__desc
        font-size: 14px
        text-align: center
        color: #000
        font-size: 16px
        padding: 0 0 10% 0
    &__box
        margin: 5%
        border-radius: 16px
        display: flex
        flex-wrap: wrap
        justify-content: space-round
        align-items: center
        &__item
            width: 26%
            height: 80px
            background: #F5F5F5
            display: flex
            flex-direction: column
            margin: 10px 10px
            justify-content: center
            align-items: center
            border-radius: 8px
            line-height: 20px
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
            &__name
                font-size: 14px
                color: #000
    &__button
        width: 80%
        height: 50px
        background: rgb(6 95 70);
        border-radius: 8px
        display: flex
        justify-content: center
        align-items: center
        color: #fff
        font-size: 16px
        margin: 10% 0
        box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
</style>