<template>
    <div class="edit__profile">
        <div class="edit__profile__title">编辑个人资料</div>
        <div class="edite__profile__inputs">
            <input v-model="username" type="text" placeholder="用户名">
            <input v-model="email" type="text" placeholder="邮箱">
        </div>
        <div class="edit__profile__button" @click.prevent="profileUpdate">确定</div>
    </div>
</template>

<script setup>

import { updateProfile } from '@/api';
import router from '@/router/co-router';
import { showToast } from 'vant';
import { ref } from 'vue';
import { defineProps } from 'vue';
const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})

const username = ref(props.item.userName);
const email = ref(props.item.userAccount);

const profileUpdate = () => {
    updateProfile(
        {
            "id": props.item.id || localStorage.getItem('id'),
            "userName": username.value,
            "userAccount" : email.value,
            "userPassword" : props.item.userPassword,
        }
    ).then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                showToast('修改成功');
                // 刷新页面
                router.go(0);
                return;
            }
            showToast(res.msg);
        }
    ).catch(
        err => {
            console.error(err);
        }
    );
}


</script>

<style lang="stylus" scoped>
.edit__profile
    width 280px
    padding 20px
    .edit__profile__title
        font-size 18px
        font-weight 500
        color #333
        text-align center
        margin-bottom 20px
    .edite__profile__inputs
        display flex
        flex-direction column
        gap 10px
        input
            border-radius 5px
            border 1px solid #ccc
            padding 3% 2%
            font-size 14px
            color #333
    .edit__profile__button
        width 100%
        height 40px
        line-height 40px
        text-align center
        color #fff
        background-color rgb(6 95 70)
        border-radius 5px
        margin-top 20px
        margin-bottom 20px
        box-shadow 0 10px 50px -12px rgba(0, 0, 0, 0.4)
</style>