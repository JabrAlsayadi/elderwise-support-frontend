<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header />
    <div class="registr">
        <div class="registr__title">
            <div class="registr__title__text">Orders</div>
            <div class="registr__title__btn">New Order</div>
        </div>
        <div class="registr__normal">
            <div class="registr__normal__titles">
                <div class="registr__normal__titles__item">Id</div>
                <div class="registr__normal__titles__item">User</div>
                <div class="registr__normal__titles__item">Medicine</div>
                <div class="registr__normal__titles__item">Price</div>
                <div class="registr__normal__titles__item">Count</div>
                <div class="registr__normal__titles__item">Type</div>
                <div class="registr__normal__titles__item">Payment</div>
                <div class="registr__normal__titles__item">Create At</div>
                <div class="registr__normal__titles__item">Op</div>
            </div>
            <div class="registr__normal__data" v-for="(item, index) in data.orders" :key="index" >
                <div class="registr__normal__data__item">{{ item.id }}</div>
                <div class="registr__normal__data__item">{{ item.createUser }}</div>
                <div class="registr__normal__data__item">{{ item.createUser }}</div>
                <div class="registr__normal__data__item">{{ item.medicinePrice }}</div>
                <div class="registr__normal__data__item">{{ item.medicineCount }}</div>
                <div class="registr__normal__data__item">{{ item.medicineType }}</div>
                <div class="registr__normal__data__item">{{ item.paymentStatus }}</div>
                <div class="registr__normal__data__item">{{ item.createAt.slice(0,10) }}</div>
                <div class="registr__normal__data__item">...</div>
            </div>
        </div>
        <div class="registr__title">
            <div class="registr__title__text">Medicine</div>
            <div class="registr__title__btn">Add Medicine</div>
        </div>
        <div class="registr__normal">
            <div class="registr__normal__titles">
                <div class="registr__normal__titles__item">Id</div>
                <div class="registr__normal__titles__item">User</div>
                <div class="registr__normal__titles__item">Medicine</div>
                <div class="registr__normal__titles__item">Price</div>
                <div class="registr__normal__titles__item">Count</div>
                <div class="registr__normal__titles__item">Type</div>
                <div class="registr__normal__titles__item">Payment</div>
                <div class="registr__normal__titles__item">Create At</div>
                <div class="registr__normal__titles__item">Op</div>
            </div>
            <div class="registr__normal__data" v-for="(item, index) in data.orders" :key="index" >
                <div class="registr__normal__data__item">{{ item.id }}</div>
                <div class="registr__normal__data__item">{{ item.createUser }}</div>
                <div class="registr__normal__data__item">{{ item.createUser }}</div>
                <div class="registr__normal__data__item">{{ item.medicinePrice }}</div>
                <div class="registr__normal__data__item">{{ item.medicineCount }}</div>
                <div class="registr__normal__data__item">{{ item.medicineType }}</div>
                <div class="registr__normal__data__item">{{ item.paymentStatus }}</div>
                <div class="registr__normal__data__item">{{ item.createAt.slice(0,10) }}</div>
                <div class="registr__normal__data__item">...</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/admin/header.vue';
import { reactive } from 'vue';

const data = reactive({
    orders: [
        {
            "id": 1,
            "medicineName": "咳嗽药",
            "createUser": 1,
            "medicinePrice": "30",
            "medicineCount": 2,
            "medicineType": "内科",
            "paymentStatus": 0,
            "createAt": "2023-05-18T16:41:00.000Z",
            "updateAt": "2023-05-18T16:41:00.000Z"
        },
        {
            "id": 2,
            "medicineName": "咳嗽药",
            "createUser": 1,
            "medicinePrice": "30",
            "medicineCount": 2,
            "medicineType": "内科",
            "paymentStatus": 0,
            "createAt": "2023-05-18T16:41:00.000Z",
            "updateAt": "2023-05-18T16:41:00.000Z"
        },
        {
            "id": 3,
            "medicineName": "咳嗽药",
            "createUser": 1,
            "medicinePrice": "30",
            "medicineCount": 2,
            "medicineType": "内科",
            "paymentStatus": 0,
            "createAt": "2023-05-18T16:41:00.000Z",
            "updateAt": "2023-05-18T16:41:00.000Z"
        },
        {
            "id": 4,
            "medicineName": "咳嗽药",
            "createUser": 1,
            "medicinePrice": "30",
            "medicineCount": 2,
            "medicineType": "内科",
            "paymentStatus": 0,
            "createAt": "2023-05-18T16:41:00.000Z",
            "updateAt": "2023-05-18T16:41:00.000Z"
        },
        {
            "id": 5,
            "medicineName": "咳嗽药",
            "createUser": 1,
            "medicinePrice": "30",
            "medicineCount": 2,
            "medicineType": "内科",
            "paymentStatus": 0,
            "createAt": "2023-05-18T16:41:00.000Z",
            "updateAt": "2023-05-18T16:41:00.000Z"
        },
        {
            "id": 6,
            "medicineName": "咳嗽药",
            "createUser": 1,
            "medicinePrice": "30",
            "medicineCount": 2,
            "medicineType": "内科",
            "paymentStatus": 0,
            "createAt": "2023-05-18T16:41:00.000Z",
            "updateAt": "2023-05-18T16:41:00.000Z"
        },
        {
            "id": 1,
            "medicineName": "咳嗽药",
            "createUser": 1,
            "medicinePrice": "30",
            "medicineCount": 2,
            "medicineType": "内科",
            "paymentStatus": 0,
            "createAt": "2023-05-18T16:41:00.000Z",
            "updateAt": "2023-05-18T16:41:00.000Z"
        },
        {
            "id": 2,
            "medicineName": "咳嗽药",
            "createUser": 1,
            "medicinePrice": "30",
            "medicineCount": 2,
            "medicineType": "内科",
            "paymentStatus": 0,
            "createAt": "2023-05-18T16:41:00.000Z",
            "updateAt": "2023-05-18T16:41:00.000Z"
        },
        {
            "id": 3,
            "medicineName": "咳嗽药",
            "createUser": 1,
            "medicinePrice": "30",
            "medicineCount": 2,
            "medicineType": "内科",
            "paymentStatus": 0,
            "createAt": "2023-05-18T16:41:00.000Z",
            "updateAt": "2023-05-18T16:41:00.000Z"
        },
        {
            "id": 4,
            "medicineName": "咳嗽药",
            "createUser": 1,
            "medicinePrice": "30",
            "medicineCount": 2,
            "medicineType": "内科",
            "paymentStatus": 0,
            "createAt": "2023-05-18T16:41:00.000Z",
            "updateAt": "2023-05-18T16:41:00.000Z"
        },
        {
            "id": 5,
            "medicineName": "咳嗽药",
            "createUser": 1,
            "medicinePrice": "30",
            "medicineCount": 2,
            "medicineType": "内科",
            "paymentStatus": 0,
            "createAt": "2023-05-18T16:41:00.000Z",
            "updateAt": "2023-05-18T16:41:00.000Z"
        },
        {
            "id": 6,
            "medicineName": "咳嗽药",
            "createUser": 1,
            "medicinePrice": "30",
            "medicineCount": 2,
            "medicineType": "内科",
            "paymentStatus": 0,
            "createAt": "2023-05-18T16:41:00.000Z",
            "updateAt": "2023-05-18T16:41:00.000Z"
        },
    ],
    bussinesOrder: []
});


</script>

<style lang="stylus" scoped>
.registr
    width: 95%
    min-height: 92vh
    background: #ccc
    padding-bottom: 20px
    margin: 10px  auto 10px auto
    display: flex
    flex-direction: column
    box-shadow: 0 0 10px #ccc
    border-radius: 20px
    padding: 20px

    &__title
        display: flex
        justify-content: space-between
        align-items: center
        &__text
            font-size: 20px
            font-weight: 600
            margin: 20px 0 10px 0
            color: #065F46
        &__btn
            background: #065F46
            color: #fff
            border-radius: 5px
            padding: 10px
            font-size: 15px
            font-weight: bold
            cursor: pointer


    &__normal
        width: 100%
        max-height: 400px
        overflow: auto
        background: #fff
        border-radius: 10px
        box-shadow: 0 0 10px #ccc
        &__titles
            position relative
            padding: 10px
            display: flex
            justify-content: space-between
            align-items: center
            background: #065F46
            color: #fff
            font-size: 16px

        &__data
            padding 15px 10px
            display: flex
            justify-content: space-between
            align-items: center
            font-size: 14px
            border-bottom: 1px solid #ccc
</style>