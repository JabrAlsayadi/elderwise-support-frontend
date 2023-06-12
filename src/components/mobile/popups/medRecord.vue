<template>
    <div class="record">
        <img :src="props.item.imgUrl" alt="" class="item__img" />
        <div class="record__item">
            <div class="record__item__title">药品名称:</div>
            <div>{{ props.item.medicineName }}</div>
        </div>
        <div class="record__item">
            <div class="record__item__title">数量：</div>
            <div>{{ props.item.countOfOrder }}</div>
        </div>
        <div class="record__item">
            <div class="record__item__title">价格：</div>
            <div>{{ props.item.medicinePrice }}</div>
        </div>
        <div class="record__item">
            <div class="record__item__title">支付方式</div>
            <div>{{ props.item.paymentStatus === 0 ? '线下': '线上' }}</div>
        </div>
        <div class="record__item">
            <div class="record__item__title">费用：</div>
            <div>{{ props.item.medicinePrice * props.item.countOfOrder }} 人民币</div>
        </div>
        <div class="record__item">
            <div class="record__item__title">下单时间</div>
            <div>{{ sli(props.item.createAt) }}</div>
        </div>
        <div class="btn" @click.prevent="confirmDeletePop">删除</div>
    </div>
    <van-popup v-model:show="showPop" round >
        <div class="delete__confirm">
            <div class="delete__confirm__title">确定要删除此记录吗？</div>
            <div class="delete__confirm__buttons">
                <div class="delete__confirm__buttons__cancel" @click="showPop = false">取消</div>
                <div class="delete__confirm__buttons__confirm" @click="deleteOrder">确定</div>
            </div>
        </div>
    </van-popup>
</template>

<script setup>

import { deleteMedicineOrder } from '@/api/index';
import router from '@/router/co-router';
import { showToast } from 'vant';
import { defineProps, ref } from 'vue';

const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    },
})

const showPop = ref(false);

const sli = (str) => {
    return str.slice(0, 10) + ' ' + str.slice(11, 19);
}

const confirmDeletePop = () => {
    showPop.value = true;
}


const deleteOrder = () => {
    console.log('deleteOrder');

    deleteMedicineOrder(`/order-medical/${props.item.id}`).then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                showToast('删除成功');
                showPop.value = false;
                router.go(0);
                return;
            }
            showToast('删除失败');
        }
    ).catch(err => {
        showToast('删除失败');
        console.log(err);
    })
}
</script>

<style lang="stylus" scoped>
.record
    padding: 15px 10px
    &__item
        display: flex
        justify-content: space-between
        align-items: center
        padding: 5px 10px
        &__title
            font-size: 15px
            font-weight: bold
            color: #000
.item__img
    width: 100%
    height: 250px
    border-radius: 10px
    margin-right: 10px
    object-fit: cover

.btn
    background: rgb(6 95 70)
    margin: 10px 10px 0 10px
    padding: 15px 0
    display: flex
    justify-content: center
    align-items: center
    border-radius: 5px
    color: #fff

.delete__confirm
    width: 300px
    padding: 20px
    background: #fff
    font-size: 16px
    font-weight: bold
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    &__title
        font-size: 16px
        font-weight: bold
        margin-bottom: 20px
    &__buttons
        display: flex
        justify-content: space-between
        gap: 15px
        width: 100%
        &__cancel
            width: 50%
            background: rgb(6 95 70)
            text-align: center
            padding: 10px 0
            border: 1px solid #e0e1e4
            border-radius: 5px
            color: #fff
        &__confirm
            width: 50%
            text-align: center
            padding: 10px 0
            border: 1px solid #e0e1e4
            border-radius: 5px
            color: #000
            background: #fff
</style>