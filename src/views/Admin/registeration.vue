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
                <div class="registr__normal__titles__item">Hospital</div>
                <div class="registr__normal__titles__item">Address</div>
                <div class="registr__normal__titles__item">Type</div>
                <div class="registr__normal__titles__item">Doctor</div>
                <div class="registr__normal__titles__item">Fee</div>
                <div class="registr__normal__titles__item">Status</div>
                <div class="registr__normal__titles__item">Create At</div>
                <div class="registr__normal__titles__item">Payment</div>
            </div>
            <div class="registr__normal__data" v-for="(item, index) in data.userOrder" :key="index" >
                <div class="registr__normal__data__item">{{ item.id }}</div>
                <div class="registr__normal__data__item">{{ item.createUser }}</div>
                <div class="registr__normal__data__item">{{ item.hospitalName }}</div>
                <div class="registr__normal__data__item">{{ item.hospitalAddress }}</div>
                <div class="registr__normal__data__item">{{ item.registrationType }}</div>
                <div class="registr__normal__data__item">{{ item.doctorName }}</div>
                <div class="registr__normal__data__item">{{ item.fee }}</div>
                <div class="registr__normal__data__item">{{ item.paymentStatus }}</div>
                <div class="registr__normal__data__item">{{ item.registrationAt }}</div>
                <div class="registr__normal__data__item">{{ item.paymentStatus }}</div>
            </div>
        </div>
        <div class="registr__title">
            <div class="registr__title__text">Orders</div>
            <div class="registr__title__btn">New Order</div>
        </div>
        <div class="registr__bussines registr__normal">
            <div class="registr__normal__titles">
                <div class="registr__normal__titles__item">Id</div>
                <div class="registr__normal__titles__item">User</div>
                <div class="registr__normal__titles__item">Hospital</div>
                <div class="registr__normal__titles__item">Address</div>
                <div class="registr__normal__titles__item">Type</div>
                <div class="registr__normal__titles__item">Doctor</div>
                <div class="registr__normal__titles__item">Fee</div>
                <div class="registr__normal__titles__item">Status</div>
                <div class="registr__normal__titles__item">Create At</div>
                <div class="registr__normal__titles__item">Payment</div>
            </div>
            <div class="registr__normal__data" v-for="(item, index) in data.userOrder" :key="index" >
                <div class="registr__normal__data__item">{{ item.id }}</div>
                <div class="registr__normal__data__item">{{ item.createUser }}</div>
                <div class="registr__normal__data__item">{{ item.hospitalName }}</div>
                <div class="registr__normal__data__item">{{ item.hospitalAddress }}</div>
                <div class="registr__normal__data__item">{{ item.registrationType }}</div>
                <div class="registr__normal__data__item">{{ item.doctorName }}</div>
                <div class="registr__normal__data__item">{{ item.fee }}</div>
                <div class="registr__normal__data__item">{{ item.paymentStatus }}</div>
                <div class="registr__normal__data__item">{{ item.registrationAt }}</div>
                <div class="registr__normal__data__item">{{ item.paymentStatus }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/admin/header.vue';
import { reactive } from 'vue';

const data = reactive({
    userOrder: [
    {
                "id": 1,
                "hospitalName": "testing hospital",
                "createUser": 1,
                "hospitalAddress": "shanghai",
                "registrationType": "neike",
                "doctorName": "gabr",
                "fee": 10,
                "registrationStatus": 1,
                "registrationAt": "2023-05-18T14:08:00.000Z",
                "createAt": "2023-05-18T14:08:00.000Z",
                "updateAt": "2023-05-18T14:08:00.000Z",
                "paymentStatus": 0
    },
    {
                "id": 1,
                "hospitalName": "testing hospital",
                "createUser": 1,
                "hospitalAddress": "shanghai",
                "registrationType": "neike",
                "doctorName": "gabr",
                "fee": 10,
                "registrationStatus": 1,
                "registrationAt": "2023-05-18T14:08:00.000Z",
                "createAt": "2023-05-18T14:08:00.000Z",
                "updateAt": "2023-05-18T14:08:00.000Z",
                "paymentStatus": 0
    },
    {
                "id": 1,
                "hospitalName": "testing hospital",
                "createUser": 1,
                "hospitalAddress": "shanghai",
                "registrationType": "neike",
                "doctorName": "gabr",
                "fee": 10,
                "registrationStatus": 1,
                "registrationAt": "2023-05-18T14:08:00.000Z",
                "createAt": "2023-05-18T14:08:00.000Z",
                "updateAt": "2023-05-18T14:08:00.000Z",
                "paymentStatus": 0
    },
    {
                "id": 1,
                "hospitalName": "testing hospital",
                "createUser": 1,
                "hospitalAddress": "shanghai",
                "registrationType": "neike",
                "doctorName": "gabr",
                "fee": 10,
                "registrationStatus": 1,
                "registrationAt": "2023-05-18T14:08:00.000Z",
                "createAt": "2023-05-18T14:08:00.000Z",
                "updateAt": "2023-05-18T14:08:00.000Z",
                "paymentStatus": 0
    },
    {
                "id": 1,
                "hospitalName": "testing hospital",
                "createUser": 1,
                "hospitalAddress": "shanghai",
                "registrationType": "neike",
                "doctorName": "gabr",
                "fee": 10,
                "registrationStatus": 1,
                "registrationAt": "2023-05-18T14:08:00.000Z",
                "createAt": "2023-05-18T14:08:00.000Z",
                "updateAt": "2023-05-18T14:08:00.000Z",
                "paymentStatus": 0
    },
    {
                "id": 1,
                "hospitalName": "testing hospital",
                "createUser": 1,
                "hospitalAddress": "shanghai",
                "registrationType": "neike",
                "doctorName": "gabr",
                "fee": 10,
                "registrationStatus": 1,
                "registrationAt": "2023-05-18T14:08:00.000Z",
                "createAt": "2023-05-18T14:08:00.000Z",
                "updateAt": "2023-05-18T14:08:00.000Z",
                "paymentStatus": 0
    },
    ],
    bussinesOrder: []
});

console.log(data.userOrder);

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