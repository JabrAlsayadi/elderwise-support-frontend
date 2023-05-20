<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="medical__regirstrion">
        <div class="medical__regirstrion__title">Registration Confirm</div>
        <div class="medical__regirstrion__basic-info">
            <div class="medical__regirstrion__basic-info__hoispital-name">
                <span class="sup__title">Hoispital Name:</span>
                {{ props.hoispitalName  }}
            </div>
            <div class="medical__regirstrion__basic-info__hoispital-address">
                <span class="sup__title">Address:</span>
                {{ props.hoispitalAddress   }}
            </div>
            <div class="medical__regirstrion__basic-info__doctor-name">
                <span class="sup__title">Doctor:</span>
                {{ props.doctorName  }}
            </div>
            <div class="medical__regirstrion__basic-info__type">
                <span class="sup__title">Type:</span>
                {{ props.type  }}
            </div>
        </div>
        <div class="medical__regirstrion__time">
            <input type="datetime-local" v-model="registerTime" >
            <select v-model="data.choosePaymentMethod">
                <option value="0">Off Line</option>
                <option value="1">Online</option>
            </select>
        </div>
        <div class="medical__regirstrion__confirm">Confirm</div>
    </div>
</template>

<script setup >
import { reactive } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    hoispitalName: {
        type: String,
        default: ''
    },
    hoispitalAddress: {
        type: String,
        default: ''
    },
    doctorName: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
})

const data = reactive({
    registerTime: '',
    choosePaymentMethod: 'Payment Method',
})


</script>

<style lang="stylus" scoped>
.medical__regirstrion
    width 90%
    padding 5%
    &__title
        font-size 20px
        font-weight 600
        text-align center
        margin-bottom 10px
    &__basic-info
        display flex
        flex-direction column
        gap 10px
        font-size 16px
        margin 10px 0
    &__time
        display flex
        justify-content space-between
        gap 10px
        font-size 16px
        margin 10px 0
        & > input
            width 90%
            border: 1px solid #065f46;
            padding: 10px;
            border-radius: 5px;
        & > select
            border: 1px solid #065f46;
            padding: 10px;
            border-radius: 5px;
    &__confirm
        width 90%
        background-color #065f46
        color #fff
        text-align center
        padding 15px
        border-radius 5px
        font-size 16px
        font-weight 600
        margin 20px 0 10px 0
        box-shadow: 0 20px 50px -12px rgb(0 0 0 / 0.25);

.sup__title
    font-size 14px
    font-weight 600
    margin-bottom 5px
    color #000
</style>