<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="cart">
        <div class="cart__title">购物记录</div>
        <div class="cart__reg gen">
            <div class="gen__title">挂号记录</div>
            <registerationOrder></registerationOrder>
        </div>
        <div class="cart__med gen">
            <div class="gen__title">买药记录</div>
            <medicineOrder></medicineOrder>
        </div>
        <div class="cart__room gen">
            <div class="gen__title">住院记录</div>
            <roomOrders></roomOrders>
        </div>
    </div>
    <Tabbar />
</template>

<script setup>
import Tabbar from '@/components/mobile/comm/tabbar.vue';
import registerationOrder from '@/components/mobile/cart/registerationOrder.vue';
import medicineOrder from '@/components/mobile/cart/medicineOrder.vue';
import roomOrders from '@/components/mobile/cart/roomOrders.vue';


</script>

<style lang="stylus" scoped>

.cart 
    width: 100%
    min-height: 95vh
    background: #f5f5f5
    padding-bottom: 0px
    margin: 0 auto
    display: flex
    flex-direction: column
    &__title
        width: 100%
        height: 40px
        line-height: 50px
        text-align: center
        font-size: 17px
        font-weight: 600
        background: #fff
        box-shadow: 0 0 10px #ccc
        margin-bottom: 5px


    .gen
        margin-top: 5px
        padding: 10px 8px
        max-width: 98%
        max-height: 200px
        overflow: auto
        background: #fff
        display: flex
        flex-direction: column
        gap: 5px

        &__title
            font-size: 16px
            font-weight: 600
            color: #333
            margin-bottom: 5px
</style>