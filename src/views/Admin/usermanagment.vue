<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header />
    <div class="user__management">
        <div  class="user__management__info">
            <div class="user__management__info-title">
                <div>用户管理</div>
                <div class="user__management__info-title__btn" @click="handleAdd" >添加用户</div>
            </div>
            <div class="user__management__info__box">
                <div class="user__management__info__box__left">
                    <div class="user__management__info__box__left__list">
                        <div class="user__management__info_box__left__list-item">用户Id</div>
                        <div class="user__management__info_box__left__list-item">用户名</div>
                        <div class="user__management__info_box__left__list-item">账号</div>
                        <div class="user__management__info_box__left__list-item">权限</div>
                        <div class="user__management__info_box__left__list-item">添加时间</div>
                        <!-- <div class="user__management__info_box__left__list-item">删除</div> -->
                        <div class="user__management__info_box__left__list-item">修改</div>
                    </div>
                    <div v-for="(item, index) in data.listOfUsers" :key="index" class="list_items">
                        <div class="list_items__word" v-if="item.userRole === 'user'">
                            <div class="user__management__info_box__left__list-item">{{ item.id }}</div>
                            <div class="user__management__info_box__left__list-item">{{ item.userName }}</div>
                            <div class="user__management__info_box__left__list-item">{{ item.userAccount }}</div>
                            <div class="user__management__info_box__left__list-item">{{ item.userRole }}</div>
                            <div class="user__management__info_box__left__list-item">{{ item.createAt.slice(0, 10) }}</div>
                            <!-- <div class="user__management__info_box__left__list-item pont" @click="handleDelete"><van-icon name="delete-o" color="red" /></div> -->
                            <div class="user__management__info_box__left__list-item pont" @click="handleUpdate(item)"><van-icon name="edit" /></div>
                        </div>
                    </div>
                </div>
                <div class="user__management__info__box__right">
                    <div class="user__management__info__box__right__list">
                        <div class="user__management__info_box__right__list-item">用户Id</div>
                        <div class="user__management__info_box__right__list-item">用户名</div>
                        <div class="user__management__info_box__right__list-item">账号</div>
                        <div class="user__management__info_box__right__list-item">权限</div>
                        <div class="user__management__info_box__right__list-item">添加时间</div>
                        <!-- <div class="user__management__info_box__right__list-item">删除</div> -->
                        <div class="user__management__info_box__right__list-item">修改</div>
                    </div>
                    <div
                    v-for="(item, index) in data.listOfAdminsAndProvs" :key="index" 
                    class="list_items">
                        <div class="list_items__word" v-if="item.userRole === 'prov' || item.userRole === 'admin'">
                            <div class="user__management__info_box__right__list-item">{{ item.id }}</div>
                            <div class="user__management__info_box__right__list-item">{{ item.userName }}</div>
                            <div class="user__management__info_box__right__list-item">{{ item.userAccount.slice(0,5) }}</div>
                            <div class="user__management__info_box__right__list-item">{{ item.userRole }}</div>
                            <div class="user__management__info_box__right__list-item">{{ item.createAt.slice(0, 10) }}</div>
                            <!-- <div class="user__management__info_box__right__list-item pont" @click="handleDelete"><van-icon name="delete-o" color="red" /></div> -->
                            <div class="user__management__info_box__right__list-item pont" @click="handleUpdate(item)"><van-icon name="edit" /></div>
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
                    <div>用户名</div>
                    <input class="add__input" type="text" placeholder="User Name" v-model="data.userObj.userName">
                </div>
                <div class="add__popup__box__item">
                    <div>账号</div>
                    <input class="add__input" type="text" placeholder="User account" v-model="data.userObj.userAccount">
                </div>
                <div class="add__popup__box__item">
                    <div>权限</div>
                    <select name="userrole" v-model="data.userObj.userRole">
                        <option value="user">普通用户</option>
                        <option value="prov">提供服务者</option>
                        <option value="admin">管理者</option>
                    </select>
                </div>
                <div class="add__popup__box__item">
                    <div>密码</div>
                    <input class="add__input" type="text" placeholder="Password" v-model="data.userObj.userPassword">
                </div>
                <div class="btn__b" @click.prevent="addNewUser">添加用户</div>
            </div>
        </div>
    </van-popup>
    <van-popup v-model:show="data.showUpdate" round >
        <div class="add__popup">
            <div class="add__popup__box">
                <div class="add__popup__box__item">
                    <div>用户Id</div>
                    <div>{{ data.updateUserObj.userId }}</div>
                </div>
                <div class="add__popup__box__item">
                    <div>用户名</div>
                    <input class="add__input" type="text" placeholder="User Name" v-model="data.updateUserObj.userName">
                </div>
                <div class="add__popup__box__item">
                    <div>账号</div>
                    <input class="add__input" type="text" placeholder="User account" v-model="data.updateUserObj.userAccount">
                </div>
                <div class="add__popup__box__item">
                    <div>权限</div>
                    <select name="userrole" v-model="data.updateUserObj.userRole">
                        <option value="user">普通用户</option>
                        <option value="prov">提供服务者</option>
                        <option value="admin">管理者</option>
                    </select>
                </div>
                <div class="add__popup__box__item">
                    <div>密码</div>
                    <input class="add__input" type="text" placeholder="Password" v-model="data.updateUserObj.userPassword">
                </div>
                <div class="btn__b" @click.prevent="updateUserById">修改</div>
            </div>
        </div>
    </van-popup>
    <van-popup v-model:show="data.showDelete" round>
        <div class="delete__popup">
            <div class="delete__popup__title">确定要删除此用户吗？</div>
            <div class="btn__b">确认</div>
        </div>
    </van-popup>
</template>

<script setup>
import { getUsersList, updateUser, registerReq } from '@/api/index';
import Header from '@/components/admin/header.vue';
import router from '@/router/admin-router';
import { showToast } from 'vant';
import { onMounted, reactive } from 'vue';
const data = reactive({
    showDelete: false,
    showUpdate: false,
    showAdd: false,
    users : [],
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

const handleUpdate = (item) => {
    data.showUpdate = true;
    data.updateUserObj.userId = item.id;
    data.updateUserObj.userName = item.userName;
    data.updateUserObj.userAccount = item.userAccount;
    data.updateUserObj.userRole = item.userRole;
    data.updateUserObj.userPassword = item.userPassword;
}

// const handleDelete = () => {
//     data.showDelete = true;
// }

const filterLists = () => {
    data.listOfUsers = data.users.filter(item => item.userRole === 'user');
    data.listOfAdminsAndProvs = data.users.filter(item => item.userRole === 'admin' || item.userRole === 'prov');
}


onMounted(() => {
    getUsersList().then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                data.users = res.data.data;
                filterLists();
                return;
            }
            showToast('获取用户列表失败');
            return;
        }
    ).catch(err => {
        console.log(err);
        showToast('获取用户列表失败');
    })
})

const updateUserById = () => {
    updateUser(
        {
            "id": data.updateUserObj.userId,
            "userName" : data.updateUserObj.userName,
            "userAccount" : data.updateUserObj.userAccount,
            "userPassword" : data.updateUserObj.userPassword,
        }
    ).then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                showToast('修改成功');
                router.go(0);
                return;
            }
            showToast('修改失败');
            return;
        }
    ).catch(err => {
        console.log(err);
        showToast('修改失败');
    })
}

const addNewUser = () => {
    registerReq(
        {
            "userName" : data.userObj.userName,
            "userAccount" : data.userObj.userAccount,
            "userPassword" : data.userObj.userPassword,
            "userRole" : data.userObj.userRole,
        }
    ).then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                showToast('添加成功');
                router.go(0);
                return;
            }
            showToast('添加失败');
            return;
        }
    ).catch(err => {
        console.log(err);
        showToast('添加失败');
    })
}
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
        margin: 10px 20px
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