<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="profile">
        <div class="profile__image">{{ profile.userName }}</div>
        <div class="profile__username">{{ profile.userName }}</div>
        <div class="profile__hashtag">#Profile</div>
        <div class="profile__info">
            <div class="profile__info__item">
                <div class="profile__info__item__icon"><van-icon name="contact" /></div>
                <div class="profile__info__item__info">
                    <div class="item_title">Name</div>
                    <div class="profile__info__name__text">{{ profile.userName }}</div>
                </div>
                <div class="profile__info__item__info_edit" @click="edit"><van-icon name="arrow" /></div>
            </div>
            <div class="profile__info__item">
                <div class="profile__info__item__icon"><van-icon name="comment-o" /></div>
                <div class="profile__info__item__info">
                    <div class="item_title">Email</div>
                    <div class="profile__info__email__text">{{ profile.userAccount }}</div>
                </div>
                <div class="profile__info__item__info_edit" @click="edit"><van-icon name="arrow" /></div>
            </div>
            <div class="profile__info__item">
                <div class="profile__info__item__icon"><van-icon name="clock-o" /></div>
                <div class="profile__info__item__info">
                    <div class="item_title">Register Time</div>
                    <div class="profile__info__create_at__text">{{ profile.createAt.slice(0, 10) }}</div>
                </div>
            </div>
        </div>
    </div>
    <van-popup round v-model:show="data.show">
        <EditProfile :username="profile.userName" :email="profile.userAccount"/>
    </van-popup>
    <Tabbar />
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import Tabbar from '@/components/mobile/comm/tabbar.vue';
// eslint-disable-next-line no-unused-vars
import EditProfile from '@/components/mobile/comm/editProfile.vue';

import { reactive } from 'vue';

const data = reactive({
    profile: [
            {
                "userName": "Gabr",
                "userAccount": "gabr@gmail.com",
                "createAt": "2023-03-25T01:21:00.000Z"
            }
        ],
    show: false,
})
// eslint-disable-next-line no-unused-vars
const profile = data.profile[0];
// eslint-disable-next-line no-unused-vars
const edit = () => {
    data.show = true;
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
</style>


