<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="medical__regirstrion">
        <div class="medical__regirstrion__title">住院下单信息</div>
        <div class="medical__regirstrion__basic-info">
            <div class="medical__regirstrion__basic-info__hoispital-name">
                <span class="sup__title">每日费用:</span>
                {{ props.item.fee  }} 人民币
            </div>
            <div class="medical__regirstrion__basic-info__hoispital-address">
                <span class="sup__title">房间类别：</span>
                {{ props.item.roomType }}
            </div>
            <div class="medical__regirstrion__basic-info__doctor-name">
                <span class="sup__title">楼层:</span>
                {{ props.item.roomNumber  }}
                <span class="sup__title">房间号:</span>
                {{ props.item.roomNumber  }}     
            </div>
            <div class="medical__regirstrion__basic-info__type">
                <span class="sup__title">床位数:</span>
                {{ props.item.bedNumber  }}
            </div>
        </div>
        <div class="medical__regirstrion__time">
            <div class="sup__title">住院时间：</div>
            <input type="datetime-local" v-model="checkInTime">
            <div class="sup__title">出院时间：</div>
            <input type="datetime-local" v-model="checkOutTime">
            <div class="sup__title">支付方式：</div>
            <select v-model="data.choosePaymentMethod">
                <option value="0">线下</option>
                <option value="1">线上</option>
            </select>
        </div>
        <div class="medical__regirstrion__confirm" @click.prevent="submitOrder">确认</div>
    </div>
</template>

<script setup >
import { orderRoom } from '@/api';
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

const goToRecord = () => {
    return router.push('/cart')
}

const submitOrder = () => {
    orderRoom(
        {
            "hospitalId": props.item.hospitalId || 1,
            "createUser": localStorage.getItem('userId') || 1,
            "medicineType": props.item.medicineType || 'neike',
            "roomType": props.item.roomType || 'vip',
            "bedNumber": props.item.bedNumber || '100',
            "floorNumber": props.item.floorNumber || '5',
            "roomNumber": props.item.roomNumber || '501',
            "fee": props.item.fee || '500',
            "checkInAt": data.checkInTime || '2023-03-26 00:00:00',
            "checkOutAt": data.checkOutTime || '2023-03-26 00:00:00',
            "paymentStatus": data.choosePaymentMethod || 0
        }
    ).then(res => {
        if (res.code.toString() === '0' && res.data.data.toString() > '0') {
            showToast({
                message: '下单成功',
                duration: 1000,
            });
            goToRecord();
            return;
        }
        showToast({
            message: '下单失败',
            duration: 1000,
        });
    }).catch(err => {
        console.log(err);
    })
}

const data = reactive({
    checkInTime: '2023-05-05 11:50:00',
    checkOutTime: '2023-05-26 11:50:00',
    choosePaymentMethod: 0,
})


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
        flex-direction column
        gap 10px
        font-size 16px
        margin 10px 0
    &__time
        display flex
        justify-content space-between
        flex-direction: column
        align-content: center
        gap 10px
        font-size 16px
        margin 10px 0
        & > input
            width 90%
            border: 1px solid #065f46;
            padding: 10px;
            border-radius: 5px;
        & > select
            width: 96%
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