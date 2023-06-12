<template>
    <div class="registeration__order">
        <div v-if="isEmpty" class="registeration__order__box">
            <div class="registeration__order__box__titles">
                <div class="">医院</div>
                <div class="">医生</div>
                <div class="">就诊时间</div>
                <div class="">操作</div>
            </div>
            <div class="registeration__order__box__data" v-for="(item, index) in data.orderList" :key="index">
                <div>{{ item.hospitalName }}</div>
                <div>{{ item.doctorName }}</div>
                <div>{{ sli(item.registrationAt) }}</div>
                <div class="more" @click="openPop(item)"><van-icon name="more-o"/></div>
            </div>
        </div>
        <div v-else>
            <van-empty description="空数据" />
        </div>
    </div>
    <van-popup v-model:show="data.showPop" round position="bottom">
        <RegRecord :item="data.item"></RegRecord>
    </van-popup>
</template>

<script setup>
import { registrationOrder } from "@/api/index";
import RegRecord from "@/components/mobile/popups/regRecord.vue";
import { showToast } from "vant";
import { computed, onMounted, reactive } from "vue";

const data = reactive({
    orderList: [
            {
                "order_id": 1,
                "hospitalName": "shanghai",
                "hospitalAddress": "shanghai",
                "registrationType": "内科",
                "doctorName": "贾布尔 第二三",
                "fee": 20,
                "paymentStatus": 0,
                "registrationAt": "2023-03-25T03:50:00.000Z"
            },
    ],
    showPop: false,
    item: {}
});

const sli = (str) => {
    return str.slice(0, 10);
}
// check empty
const isEmpty = computed(() => {
    if (data.orderList.length === 0)
        return false;
    return true;
})

// show popup
const openPop = (item) => {
    data.showPop = true;
    data.item = item;
}

onMounted(() => {
    registrationOrder().then(res => {
        if (res.code.toString() === '0' && res.msg.toString() === 'success') {
            data.orderList = res.data.data;
            return;
        }
        showToast("获取数据失败");
    }).catch(err => {
        showToast("获取数据失败");
        console.log(err);
    })
})

</script>

<style lang="stylus" scoped>
.registeration__order
    width: 98%
    padding: 10px 5px;
    border-radius: 5px
    color: #000
    box-shadow: 0 0 10px #ccc
    
    &__box
        display: flex
        flex-direction: column
        gap: 10px
        padding: 5px 5px

        &__titles
            display: flex
            justify-content: space-between
            align-items: center
            font-size: 15px
            font-weight: bold
            background: #fff

        &__data
            display: flex
            justify-content: space-between
            align-items: center
            padding: 5px 0
.more
    font-size: 18px
    color: #065f46
</style>