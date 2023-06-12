<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="buy__medical" v-if="len">
        <div v-for="(item, index) in state.data" :key="index"
            class="buy__medical__container">
            <div class="buy__medical__box__img">
                <img class="buy__medical__box__img__item" :src="item.imgUrl" alt="" />
            </div>
            <div class="buy__medical__box__info">
                <div class="buy__medical__box__info__name">{{ item.medicineName }}</div>
                <div class="buy__medical__box__info__desc">{{ item.medicineName }}</div>
                <div class="buy__medical__box__info__op">
                    <div class="buy__medical__box__info__op__price">价格：{{ item.medicinePrice }}</div>
                    <div class="buy__medical__box__info__op__price">数量: {{ item.medicineCount }}</div>
                    <div class="buy__medical__box__info__op__add">
                        <div class="buy__medical__box__info__op__add-m"
                        @click="minus(index)">-</div>
                        <div class="buy__medical__box__info__op__add-count">{{ item.countOfOrder }}</div>
                        <div class="buy__medical__box__info__op__add-p"
                        @click="add(index)">+</div>
                    </div>
                </div>
            </div>
            <div class="buy__medical__btn">
                <div class="buy__medical__btn__buy" @click="buyNow(item)">立刻购买</div>
            </div>
        </div>
    </div>
    <div v-else>
        <van-empty description="暂无药品信息" />
    </div>
    <van-popup
        v-model:show="state.showPop"
        position="bottom"
        :style="{'border-radius': '8px 8px 0 0'}"
    >
        <div class="container">
            <div class="container__main">
                <img class="container__main__item" :src="state.orderData.imgUrl" alt="" />
                <div class="container__main__info">
                    <div class="container__main__info__name">{{ state.orderData.medicineName }}</div>
                    <div class="container__main__info__p">
                        <div class="container__main__info__p__price">价格:{{ state.orderData.medicinePrice }}元</div>
                        <div class="container__main__info__p__count">购买数量:{{ state.orderData.countOfOrder }}</div>
                    </div>
                    <div class="payment__method">
                        <div>支付方式：</div>
                        <select v-model="state.choosePaymentMethod">
                            <option value="0">线下</option>
                            <option value="1">线上</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="container__btn">
                <div class="container__btn__confirm" @click.prevent="submitOrder">立刻下单</div>
            </div>
        </div>
    </van-popup>
</template>

<script setup>
import { orderMedicine } from '@/api';
import router from '@/router/co-router';
import { showToast } from 'vant';
import { computed, reactive, watchEffect } from 'vue';

const state = reactive({
    url:"https://medlineplus.gov/images/Medicines_share.jpg",
    data : [],
    countOfOrder: 1,
    orderData: [],
    showPop: false,
    choosePaymentMethod: 0,
});

const props = defineProps({
    medicineList: {
        type: Array,
        default: () => []
    },
})

watchEffect(() => {
    console.log(props.regList);
    state.data = props.medicineList;
})

const add = (item) => {
    state.data[item].countOfOrder++;
}

const minus = (item) => {
    if (state.data[item].countOfOrder <= 1) {
        return;
    }
    state.data[item].countOfOrder--;
}

const len =  computed(() => {
    if (state.data.length > 0) {
        return true;
    }
    return false;
})

const buyNow = (data) => {
    state.showPop = true;
    itemData(data);
}

const itemData = (data) => {
    state.orderData = data;
}

const ordersRecord = () => {
    return router.push('/cart');
}

const submitOrder = () => {
    orderMedicine(
        {
            "createUser": localStorage.getItem('userId') || 1,
            "medicineName": state.orderData.medicineName || '__',
            "imgUrl": state.orderData.imgUrl || '__',
            "medicinePrice": state.orderData.medicinePrice || 0,
            "countOfOrder": state.orderData.countOfOrder || 1,
            "medicineType": state.orderData.medicineType || '__',
            "paymentStatus": state.choosePaymentMethod || 0
        }
    ).then(res => {
        if (res.code.toString() === '0' && res.data.data.toString() === '1') {
            state.showPop = false;
            showToast('下单成功');
            ordersRecord();
            return;
        }
        showToast('下单失败');
    }).catch(err => {
        console.log(err);
    })
}

</script>

<style lang="stylus" scoped>

.buy__medical
    padding: 3% 1%
    margin-bottom: 10%
    &__container
        margin: 4% 0
        padding: 3% 1%
        border-radius: 16px
        box-shadow: 0 20px 50px -12px rgb(0 0 0 / 0.25);
    &__box
        &__img
            display: flex
            justify-content: center
            &__item
                width: 100%
                height: 150px
                border-radius: 10px
        &__info
            display: flex
            flex-direction: column
            padding: 0 10px
            &__name
                font-size: 18px
                font-weight: bold
                margin-top: 5px
            &__desc
                font-size: 16px
                color: #999
                margin-top: 4px
            &__op
                display: flex
                justify-content: space-between
                align-items: center
                padding: 10px 10px

                &__price
                    font-size: 16px
                    font-weight: bold
                    color: #333

                &__add
                    display: flex
                    justify-content: space-between
                    align-items: center
                    gap: 10px
                    &-m, &-p
                        width: 20px
                        height: 20px
                        border-radius: 50%
                        background-color: #eee
                        display: flex
                        justify-content: center
                        align-items: center
                        cursor: pointer
                        font-size: 15px
                        font-weight: bold
                        color: #333
                        transition: all 0.3s ease-in-out
                        &:hover
                            background-color: #065f46
                            color: #fff

                    &-count
                        font-weight: bold
                        color: #333

    &__btn
        display: flex
        justify-content: center
        margin-top: 10px

        &__buy
            width: 80%
            display: flex
            justify-content: center
            align-items: center
            padding: 10px 20px
            border-radius: 5px
            background-color: #065f46
            color: #fff
            font-weight: bold
            cursor: pointer
            
.container
    display: flex
    flex-direction: column
    padding: 5% 0
    &__main
        padding: 0 5%
        display: flex
        &__item
            width: 80px
            height: 80px
            border-radius: 10px
        &__info
            width: 100%
            height: 100px
            display: flex
            flex-direction: column
            justify-content: space-between
            padding: 0 10px
            &__name
                font-size: 18px
                font-weight: bold
            &__p
                display: flex
                justify-content: space-between
                align-items: center
                padding-bottom: 5px
                &__price
                    font-size: 16px
                    font-weight: bold
                    color: rgb(6, 95, 70)
                &__count
                    font-weight: bold
                    color: rgb(6, 95, 70)
            
    &__btn
        display: flex
        justify-content: center
        margin-top: 10px

        &__confirm
            width: 80%
            display: flex
            justify-content: center
            align-items: center
            padding: 12px 20px
            border-radius: 5px
            background-color: #065f46
            color: #fff
            font-weight: bold
            cursor: pointer

.payment__method 
    display: flex
    justify-content: space-between
    align-items: center
    &> div 
        font-weight: bold
        font-size: 15px
    &> select
        width: 50%
        border: 1px solid #065f46;
        padding: 10px;
        border-radius: 5px;
</style>