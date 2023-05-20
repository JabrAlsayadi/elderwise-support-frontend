<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="buy__medical">
        <div v-for="(item, index) in state.data" :key="index"
        class="buy__medical__container">
            <div class="buy__medical__box__img">
                <img class="buy__medical__box__img__item" :src="item.img" alt="" />
            </div>
            <div class="buy__medical__box__info">
                <div class="buy__medical__box__info__name">{{ item.name }}</div>
                <div class="buy__medical__box__info__desc">{{ item.desc }}</div>
                <div class="buy__medical__box__info__op">
                    <div class="buy__medical__box__info__op__price">${{ item.price }}</div>
                    <div class="buy__medical__box__info__op__add">
                        <div class="buy__medical__box__info__op__add-m"
                        @click="minus(index)">-</div>
                        <div class="buy__medical__box__info__op__add-count">{{ item.count }}</div>
                        <div class="buy__medical__box__info__op__add-p"
                        @click="add(index)">+</div>
                    </div>
                </div>
            </div>
            <div class="buy__medical__btn">
                <div class="buy__medical__btn__buy" @click="buyNow(item)">Buy Now</div>
            </div>
        </div>
    </div>
    <van-popup
        v-model:show="state.showPop"
        position="bottom"
        :style="{'border-radius': '8px 8px 0 0'}"
    >
        <div class="container">
            <div class="container__main">
                <img class="container__main__item" :src="state.orderData.img" alt="" />
                <div class="container__main__info">
                    <div class="container__main__info__name">{{ state.orderData.name }}</div>
                    <div class="container__main__info__p">
                        <div class="container__main__info__p__price">Price: ${{ state.orderData.price }}</div>
                        <div class="container__main__info__p__count">Count:{{ state.orderData.count }}</div>
                    </div>
                </div>
            </div>
            <div class="container__btn">
                <div class="container__btn__confirm">Confirm</div>
            </div>
        </div>
    </van-popup>
</template>

<script setup>
import { reactive } from 'vue';
import img  from '@/assets/image/mobile/mainImgae.png';

const state = reactive({
    data : [
        {
            id: 1,
            name: 'medicines name1',
            desc: 'medicines desc is here ...',
            price: '1123',
            count: 1,
            img: img
        },
        {
            id: 2,
            name: 'medicines name2',
            desc: 'medicines desc is here ...',
            price: '1243',
            count: 2,
            img: img
        },
        {
            id: 3,
            name: 'medicines name3',
            desc: 'medicines desc is here ...',
            price: '1231',
            count: 0,
            img: img
        },
    ],
    orderData: [],
    showPop: false
});

const add = (item) => {
    state.data[item].count++;
}   

const minus = (item) => {
    if (state.data[item].count <= 1) {
        return;
    }
    state.data[item].count--;
}

const buyNow = (data) => {
    state.showPop = true;
    itemData(data);
}

// const closePop = () => {
//     state.showPop = false;
// }

const itemData = (data) => {
    state.orderData = data;
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
                height: 270px
                border-radius: 10px
        &__info
            display: flex
            flex-direction: column
            padding: 0 10px
            &__name
                font-size: 20px
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
</style>