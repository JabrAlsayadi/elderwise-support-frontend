<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="medical__regirstrion">
        <div class="medical__regirstrion__title">挂号确认信息</div>
        <div class="medical__regirstrion__basic-info">
            <div class="medical__regirstrion__basic-info__doctor-name">
                <span class="sup__title">医生:</span>
                {{ props.item.doctorName  }}
            </div>
            <div class="medical__regirstrion__basic-info__type">
                <span class="sup__title">科种:</span>
                {{ props.item.registrationType  }}
            </div>
            <div class="medical__regirstrion__basic-info__type">
                <span class="sup__title">费用:</span>
                {{ props.item.fee  }}
            </div>
        </div>
        <div class="medical__regirstrion__time">
            <div class="sup__title">时间：</div>
            <input type="datetime-local" v-model="registerTime" >
            <div class="sup__title">支付方式：</div>
            <select v-model="data.choosePaymentMethod">
                <option value="0">线下</option>
                <option value="1">线上</option>
            </select>
        </div>
        <div class="medical__regirstrion__confirm" @click.prevent="submitRegistration">确认</div>
    </div>
</template>

<script setup >
import { orderRegistration } from '@/api/index';
import router from '@/router/co-router';
import { showToast } from 'vant';
import { reactive } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    },
})

const records = () => {
    return router.push('/cart');
}

const data = reactive({
    registerTime: '2023-05-26 11:50:00',
    choosePaymentMethod: 0,
})

const submitRegistration = () => {

    orderRegistration(
        {
            "hospitalId": props.item.hospitalId || 1, 
            "createUser": localStorage.getItem('userId') || 1,
            "registrationType": props.item.registrationType || '内科', 
            "doctorName": props.item.doctorName || '张三',
            "fee": props.item.fee || 0, 
            "registrationStatus": 1, 
            "registrationAt": data.registerTime || "2023-05-26 11:50:00",
            "paymentStatus": data.choosePaymentMethod || 0,
        }
    ).then(
        res => {
            if (res.code.toString() === '0' && res.data.data.toString() === '1') {
                showToast('挂号成功');
                records();
                return;
            }
            showToast('挂号失败');
        }
    ).catch(
        err => {
            showToast('挂号失败');
            console.log(err);
        }
    )
    /**
    {
        
    }
     */
}

</script>

<style lang="stylus" scoped>
.medical__regirstrion
    width 90%
    padding 5%
    &__title
        font-size 20px
        font-weight 600
        text-align center
        margin-bottom 10px
    &__basic-info
        display flex
        flex-direction: column
        gap 10px
        font-size 16px
        margin 10px 0
    &__time
        display flex
        justify-content space-between
        flex-direction: column
        gap 10px
        font-size 16px
        margin 10px 0
        & > input
            width 90%
            border: 1px solid #065f46;
            padding: 10px;
            border-radius: 5px;
        & > select
            border: 1px solid #065f46;
            padding: 10px;
            border-radius: 5px;
    &__confirm
        width 90%
        background-color #065f46
        color #fff
        text-align center
        padding 15px
        border-radius 5px
        font-size 16px
        font-weight 600
        margin 20px 0 10px 0
        box-shadow: 0 20px 50px -12px rgb(0 0 0 / 0.25);

.sup__title
    font-size 14px
    font-weight 600
    margin-bottom 5px
    color #000
</style>