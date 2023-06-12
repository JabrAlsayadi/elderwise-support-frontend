<template>
    <div class="medicine__order">
        <div v-if="isEmpty" class="medicine__order__box">
            <div class="medicine__order__box__titles">
                <div class="">名称</div>
                <div class="">数量</div>
                <div class="">下单时间</div>
                <div class="">操作</div>
            </div>
            <div class="medicine__order__box__data" v-for="(item, index) in data.orderList" :key="index">
                <div>{{ item.medicineName }}</div>
                <div>{{ item.countOfOrder }}</div>
                <div>{{ sli(item.createAt) }}</div>
                <div class="more" @click="openPop(item)"><van-icon name="more-o"/></div>
            </div>
        </div>
        <div v-else>
            <van-empty description="空数据" />
        </div>
    </div>
    <van-popup v-model:show="data.showPop" round position="bottom">
        <medRecord :item="data.item"></medRecord>
    </van-popup>
</template>

<script setup>
import { medicineOrders } from "@/api/index";
import medRecord from "@/components/mobile/popups/medRecord.vue";
import { showToast } from "vant";
import { computed, onMounted, reactive } from "vue";

const data = reactive({
    orderList: [
            {
                "id": 1,
                "imgUrl": "https://medlineplus.gov/images/Medicines_share.jpg",
                "medicineName": "牙药",
                "medicinePrice": "100",
                "countOfOrder": 6,
                "medicineType": "内科",
                "paymentStatus": 0,
                "createAt": "2023-05-26T02:09:00.000Z"
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
    console.log(item);
    data.showPop = true;
    data.item = item;
}

onMounted(() => {
    medicineOrders().then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                data.orderList = res.data.data;
                return;
            }
            showToast('获取数据失败');
        }
    ).catch(
        err => {
            showToast('获取数据失败');
            console.log(err);
        }
    );
})

</script>

<style lang="stylus" scoped>
.medicine__order
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

