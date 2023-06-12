<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="profile">
        <div class="profile__image">{{ data.profile.userName }}</div>
        <div class="profile__username">{{ data.profile.userName }}</div>
        <div class="profile__hashtag">#Profile</div>
        <div class="profile__info">
            <div class="profile__info__item">
                <div class="profile__info__item__icon"><van-icon name="contact" /></div>
                <div class="profile__info__item__info">
                    <div class="item_title">Name</div>
                    <div class="profile__info__name__text">{{ data.profile.userName }}</div>
                </div>
                <div class="profile__info__item__info_edit" @click="edit"><van-icon name="arrow" /></div>
            </div>
            <div class="profile__info__item">
                <div class="profile__info__item__icon"><van-icon name="comment-o" /></div>
                <div class="profile__info__item__info">
                    <div class="item_title">Email</div>
                    <div class="profile__info__email__text">{{ data.profile.userAccount }}</div>
                </div>
                <div class="profile__info__item__info_edit" @click="edit"><van-icon name="arrow" /></div>
            </div>
            <div class="profile__info__item">
                <div class="profile__info__item__icon"><van-icon name="clock-o" /></div>
                <div class="profile__info__item__info">
                    <div class="item_title">Register Time</div>
                    <div class="profile__info__create_at__text">{{ data.profile.createAt }}</div>
                </div>
            </div>

            <div class="profile__info__item exit">
                <div class="exit__info">
                    <div class="item_title" @click.prevent="exit">退出登录</div>
                </div>
            </div>
        </div>
    </div>
    <van-popup round v-model:show="data.show">
        <EditProfile :item="data.profile"/>
    </van-popup>

    <van-popup round v-model:show="data.exitConfirm">
        <div class="exit__confirm">
            <div class="exit__confirm__title">确定退出登录吗？</div>
            <div class="exit__confirm__buttons">
                <div class="exit__confirm__buttons__cancel" @click="data.exitConfirm = false">取消</div>
                <div class="exit__confirm__buttons__confirm" @click="confirmExit">确定</div>
            </div>
        </div>
    </van-popup>
    <Tabbar />
</template>

<script setup>
import Tabbar from '@/components/mobile/comm/tabbar.vue';
import EditProfile from '@/components/mobile/comm/editProfile.vue';
import { onMounted, reactive } from 'vue';
import { profileInfo } from '@/api';
import { showToast } from 'vant';
import router from '@/router/co-router';

const data = reactive({
    profile: [],
    show: false,
    exitConfirm: false,
})

onMounted(() => {
    profileInfo().then(res => {
        if (res.code.toString() === '0' && res.msg.toString() === 'success') {
            data.profile = res.data.data[0];
            return;
        }
        showToast({
            message: res.msg.toString(),
            type: 'fail',
            duration: 1000,
        })
    }).catch(error => {
        console.error('Profile error:', error);
    })
})

const edit = () => {
    data.show = true;
}

const exit = () => {
    data.exitConfirm = true;
}

const confirmExit = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    showToast({
        message: '退出成功',
        type: 'success',
        duration: 1000,
    })
    return router.push('/');
}

</script>

<style lang="stylus" scoped>

.profile
    padding 10% 8%
    &__image
        width 80px
        height 80px
        border-radius 50%
        background-color #f9f9f9
        text-align center
        line-height 80px
        color rgb(6 95 70)
        margin 0 auto
        margin-bottom 10px
        border 1px solid #e0e1e4
        box-shadow: 0 20px 30px -12px rgb(0 0 0 / 0.25);

    &__username
        color   #000
        text-align center
        font-size 16px
        font-weight bold
        margin: 5% 0
    &__hashtag
        text-align center
        font-size 12px
        color #1d9bf0
        margin-bottom 10px

    &__info
        padding 10% 0
        display flex
        justify-content space-between
        flex-direction column
        gap 10px
        &__item
            display flex
            justify-content space-between
            align-items center
            background: #fff
            padding 3% 2%
            color #000
            border-radius 10px
            box-shadow: 0 20px 50px -12px rgb(0 0 0 / 0.25);
            &__icon
                width 20px
                height 20px
                line-height 20px
                text-align center
                color rgb(6 95 70)
                font-size 16px
            &__info
                flex 1
                margin-left 10px
                &__title
                    font-size 14px
                    color #000
                &__text
                    font-size 16px
                    color #000
            &__info_edit
                width 20px
                height 20px
                line-height 20px
                text-align center
                color rgb(6 95 70)
                font-size 16px
.item_title
    font-size 15px
    padding 5px 0

.exit
    display: flex
    justify-content: center
    align-items: center
    background: rgb(6 95 70)
    color: #fff
    margin-top: 20px
    &__info
        display: flex
        justify-content: center
        align-items: center
        font-size: 16px
        font-weight: bold

.exit__confirm
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


