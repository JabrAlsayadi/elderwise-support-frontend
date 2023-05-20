<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header />
    <div class="help">
        <div class="help__title">
            <div class="help__title__text">Orders</div>
            <div class="help__title__btn">New Order</div>
        </div>
        <div class="help__box">
            <div class="help__box__items">
                <div class="help__box__items__item">Id</div>
                <div class="help__box__items__item">Create User</div>
                <div class="help__box__items__item">Name</div>
                <div class="help__box__items__item">Phone</div>
                <div class="help__box__items__item">Create At</div>
                <div class="help__box__items__item">Delete</div>
                <div class="help__box__items__item">Update</div>
            </div>
            <div class="help__box__data" v-for="(item, index) in data.phones" :key="index">
                <div class="help__box__data__item">{{ item.id }}</div>
                <div class="help__box__data__item">{{ item.createUser }}</div>
                <div class="help__box__data__item">{{ item.agencyName }}</div>
                <div class="help__box__data__item">{{ item.phoneNumber }}</div>
                <div class="help__box__data__item">{{ item.createAt.slice(0, 10) }}</div>
                <div class="help__box__data__item pont"><van-icon name="delete-o" color="red" /></div>
                <div class="help__box__data__item pont"><van-icon name="edit" /></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/admin/header.vue';
import { reactive } from 'vue';

const data = reactive({
    phones: [
        {
            "id": 1,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
        {
            "id": 2,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
        {
            "id": 3,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
        {
            "id": 4,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
        {
            "id": 5,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
        {
            "id": 6,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
        {
            "id": 7,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
        {
            "id": 8,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
        {
            "id": 2,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
        {
            "id": 3,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
        {
            "id": 4,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
        {
            "id": 5,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
        {
            "id": 6,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
        {
            "id": 7,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
        {
            "id": 8,
            "createUser": 9,
            "agencyName": "hoispital",
            "phoneNumber": "110",
            "createAt": "2023-05-19T08:44:00.000Z",
            "updateAt": "2023-05-19T08:44:00.000Z"
        },
    ]
})
</script>

<style lang="stylus" scoped>
.help
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
    &__box
        border-radius: 5px
        max-height: 500px
        overflow: auto

        &__items
            display: flex
            justify-content: space-between
            align-items: center
            padding: 10px
            background: #065F46
            color: #fff

        &__data
            display: flex
            justify-content: space-between
            align-items: center
            padding: 10px
            background: #fff

.pont
    cursor: pointer

</style>
