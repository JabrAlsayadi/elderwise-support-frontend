<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header />
    <div class="user__management">
        <div class="user__management__search">
            <van-search placeholder="Search" />
            <div class="btn">Search</div>
        </div>
        <div  class="user__management__info">
            <div class="user__management__info-title">
                <div>User Management</div>
                <div class="user__management__info-title__btn" @click="handleAdd" >New User</div>
            </div>
            <div class="user__management__info__box">
                <div class="user__management__info__box__left">
                    <div class="user__management__info__box__left__list">
                        <div class="user__management__info_box__left__list-item">Id</div>
                        <div class="user__management__info_box__left__list-item">Name</div>
                        <div class="user__management__info_box__left__list-item">Account</div>
                        <div class="user__management__info_box__left__list-item">Role</div>
                        <div class="user__management__info_box__left__list-item">Create At</div>
                        <div class="user__management__info_box__left__list-item">Delete</div>
                        <div class="user__management__info_box__left__list-item">Update</div>
                    </div>
                    <div v-for="(item, index) in data.listOfUsers" :key="index" class="list_items">
                        <div class="list_items__word" v-if="item.userRole === 'user'">
                            <div class="user__management__info_box__left__list-item">{{ item.id }}</div>
                            <div class="user__management__info_box__left__list-item">{{ item.userName }}</div>
                            <div class="user__management__info_box__left__list-item">{{ item.userAccount }}</div>
                            <div class="user__management__info_box__left__list-item">{{ item.userRole }}</div>
                            <div class="user__management__info_box__left__list-item">{{ item.createAt.slice(0, 10) }}</div>
                            <div class="user__management__info_box__left__list-item pont" @click="handleDelete"><van-icon name="delete-o" color="red" /></div>
                            <div class="user__management__info_box__left__list-item pont" @click="handleUpdate"><van-icon name="edit" /></div>
                        </div>
                    </div>
                </div>
                <div class="user__management__info__box__right">
                    <div class="user__management__info__box__right__list">
                        <div class="user__management__info_box__right__list-item">Id</div>
                        <div class="user__management__info_box__right__list-item">Name</div>
                        <div class="user__management__info_box__right__list-item">Account</div>
                        <div class="user__management__info_box__right__list-item">Role</div>
                        <div class="user__management__info_box__right__list-item">Create At</div>
                        <div class="user__management__info_box__right__list-item">Delete</div>
                        <div class="user__management__info_box__right__list-item">Update</div>
                    </div>
                    <div
                    v-for="(item, index) in data.listOfAdminsAndProvs" :key="index" 
                    class="list_items">
                        <div class="list_items__word" v-if="item.userRole === 'prov' || item.userRole === 'admin'">
                            <div class="user__management__info_box__right__list-item">{{ item.id }}</div>
                            <div class="user__management__info_box__right__list-item">{{ item.userName }}</div>
                            <div class="user__management__info_box__right__list-item">{{ item.userAccount }}</div>
                            <div class="user__management__info_box__right__list-item">{{ item.userRole }}</div>
                            <div class="user__management__info_box__right__list-item">{{ item.createAt.slice(0, 10) }}</div>
                            <div class="user__management__info_box__right__list-item pont" @click="handleDelete"><van-icon name="delete-o" color="red" /></div>
                            <div class="user__management__info_box__right__list-item pont" @click="handleUpdate"><van-icon name="edit" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <van-popup v-model:show="data.showAdd" round >
        <div class="add__popup">
            <div class="add__popup__box">
                <div class="add__popup__box__item">
                    <div>User name</div>
                    <input class="add__input" type="text" placeholder="User Name" v-model="data.userObj.userName">
                </div>
                <div class="add__popup__box__item">
                    <div>Account</div>
                    <input class="add__input" type="text" placeholder="User account" v-model="data.userObj.userAccount">
                </div>
                <div class="add__popup__box__item">
                    <div>User Role</div>
                    <select name="userrole" v-model="data.userObj.userRole">
                        <option value="user">User</option>
                        <option value="prov">Provider</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div class="add__popup__box__item">
                    <div>Password</div>
                    <input class="add__input" type="text" placeholder="Password" v-model="data.userObj.userPassword">
                </div>
                <div class="btn__b">Add User</div>
            </div>
        </div>
    </van-popup>
    <van-popup v-model:show="data.showUpdate" round >
        <div class="add__popup">
            <div class="add__popup__box">
                <div class="add__popup__box__item">
                    <div>User id</div>
                    <div>{{ data.updateUserObj.userId }}</div>
                </div>
                <div class="add__popup__box__item">
                    <div>User name</div>
                    <input class="add__input" type="text" placeholder="User Name" v-model="data.updateUserObj.userName">
                </div>
                <div class="add__popup__box__item">
                    <div>Account</div>
                    <input class="add__input" type="text" placeholder="User account" v-model="data.updateUserObj.userAccount">
                </div>
                <div class="add__popup__box__item">
                    <div>User Role</div>
                    <select name="userrole" v-model="data.updateUserObj.userRole">
                        <option value="user">User</option>
                        <option value="prov">Provider</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div class="add__popup__box__item">
                    <div>Password</div>
                    <input class="add__input" type="text" placeholder="Password" v-model="data.updateUserObj.userPassword">
                </div>
                <div class="btn__b">Add User</div>
            </div>
        </div>
    </van-popup>
    <van-popup v-model:show="data.showDelete" round>
        <div class="delete__popup">
            <div class="delete__popup__title">Are you sure to delete {{ data.deleteUserId }} User?</div>
            <div class="btn__b">Confirm</div>
        </div>
    </van-popup>
</template>

<script setup>
import Header from '@/components/admin/header.vue';
import { reactive } from 'vue';
const data = reactive({
    showDelete: false,
    showUpdate: false,
    showAdd: false,
    users : [
        {
            "id": 1,
            "userName": "admin",
            "userAccount": "admin@gmail.com",
            "userRole": "admin",
            "userPassword": "admin1",
            "createAt": "2023-05-15T02:38:00.000Z",
            "updateAt": "2023-05-15T02:38:00.000Z"
        },
        {
            "id": 2,
            "userName": "user",
            "userAccount": "admin@gmail.com",
            "userRole": "user",
            "userPassword": "admin1",
            "createAt": "2023-05-15T02:38:00.000Z",
            "updateAt": "2023-05-15T02:38:00.000Z"
        },
        {
            "id": 3,
            "userName": "prov",
            "userAccount": "admin@gmail.com",
            "userRole": "prov",
            "userPassword": "admin1",
            "createAt": "2023-05-15T02:38:00.000Z",
            "updateAt": "2023-05-15T02:38:00.000Z"
        },
        {
            "id": 4,
            "userName": "prov",
            "userAccount": "admin@gmail.com",
            "userRole": "prov",
            "userPassword": "admin1",
            "createAt": "2023-05-15T02:38:00.000Z",
            "updateAt": "2023-05-15T02:38:00.000Z"
        },
        {
            "id": 5,
            "userName": "prov",
            "userAccount": "admin@gmail.com",
            "userRole": "prov",
            "userPassword": "admin1",
            "createAt": "2023-05-15T02:38:00.000Z",
            "updateAt": "2023-05-15T02:38:00.000Z"
        },
        {
            "id": 6,
            "userName": "admin",
            "userAccount": "admin@gmail.com",
            "userRole": "admin",
            "userPassword": "admin1",
            "createAt": "2023-05-15T02:38:00.000Z",
            "updateAt": "2023-05-15T02:38:00.000Z"
        },
        {
            "id": 7,
            "userName": "user",
            "userAccount": "admin@gmail.com",
            "userRole": "user",
            "userPassword": "admin1",
            "createAt": "2023-05-15T02:38:00.000Z",
            "updateAt": "2023-05-15T02:38:00.000Z"
        },
        {
            "id": 8,
            "userName": "user",
            "userAccount": "admin@gmail.com",
            "userRole": "user",
            "userPassword": "admin1",
            "createAt": "2023-05-15T02:38:00.000Z",
            "updateAt": "2023-05-15T02:38:00.000Z"
        },
    ],
    listOfUsers: [],
    listOfAdminsAndProvs: [],
    deleteUserId: null,
    userObj: {
        userName: '',
        userAccount: '',
        userRole: 'user',
        userPassword: ''
    },
    updateUserObj: {
        userId: 0,
        userName: '',
        userAccount: '',
        userRole: 'user',
        userPassword: ''
    },
})

const handleAdd = () => {
    data.showAdd = true;
}

const handleUpdate = () => {
    data.showUpdate = true;
}

const handleDelete = () => {
    data.showDelete = true;
}

const filterLists = () => {
    data.listOfUsers = data.users.filter(item => item.userRole === 'user');
    data.listOfAdminsAndProvs = data.users.filter(item => item.userRole === 'admin' || item.userRole === 'prov');
}

filterLists();

</script>

<style lang="stylus" scoped>

.user__management
    width: 95%
    min-height: 92vh
    background: #ccc
    padding-bottom: 20px
    margin: 10px  auto 10px auto
    display: flex
    flex-direction: column
    box-shadow: 0 0 10px #ccc
    border-radius: 20px
    
    &__search
        background: #ccc
        margin: 10px
        display: flex
        justify-content: space-between
        align-items: center
        &>div
            background: #ccc
            border-radius: 5px
            width: 100%
    &__info
        display: flex
        flex-direction: column
        margin: 0 20px
        &-title
            display: flex
            justify-content: space-between
            font-size: 25px
            font-weight: bold
            margin: 10px 0
            color: #065F46
            &__btn
                background: #065F46
                color: #fff
                border-radius: 5px
                padding: 8px 10px
                font-size: 20px
                font-weight: bold
                cursor: pointer
        &__box
            width: 100%
            height: 100%
            display: flex
            justify-content: space-between
            gap: 15px
            &__left
                width: 50%
                height: 100%
                background: #fff
                display: flex
                flex-direction: column
                border-radius: 5px
                display: flex
                font-size: 20px
                font-weight: bold
                color: #065F46
                &__list
                    padding: 10px
                    width: 100%
                    display: flex
                    justify-content: space-around
                    

            &__right
                width: 50%
                height: 100%
                background: #fff
                display: flex
                flex-direction: column
                border-radius: 5px
                display: flex
                font-size: 20px
                font-weight: bold
                color: #065F46
                &__list
                    padding: 10px
                    width: 100%
                    display: flex
                    justify-content: space-around

.list_items
    display: flex
    justify-content: space-around
    padding: 10px
    &-item
        width: 100%
        text-align: center
        padding: 10px
        border-right: 1px solid #ccc
        &::last-child
            border-right: none
    &__word
        display: flex
        justify-content: space-around
        width: 100%
    
.pont 
    cursor pointer

.btn
    color: #065F46
    font-size: 17px
    font-weight: bold
    border-radius: 5px
    padding: 8px 10px
    cursor: pointer

.delete__popup
    padding: 10px
    background: #fff

    &__title
        padding: 10px
        font-size: 18px
        color: #000
        margin-bottom: 10px


.add__popup
    padding: 10px
    background: #fff
    width: 300px

    &__box
        padding:  5px
        display: flex
        flex-direction: column
        &__item
            display: flex
            justify-content: start
            align-items: center
            gap: 10px
            padding-bottom: 10px
            margin: 10px 0
            &__title
                font-size: 18px
                color: #000
                margin-bottom: 10px
            &__input
                width: 100%
                padding: 5px
                border-radius: 5px
                border: 1px solid #ccc
                outline: none
                &::placeholder
                    font-size: 16px
                    color: #ccc
.add__input
    width: 100%
    padding: 8px
    border-radius: 4px
    border: 1px solid #ccc
    outline: none
    &::placeholder
        font-size: 16px
        color: #ccc
.btn__b
    background: #065F46
    color: #fff
    display: flex
    justify-content: center
    align-items: center
    font-size: 16px
    padding: 10px
    border-radius: 5px
</style>