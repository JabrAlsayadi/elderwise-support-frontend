<template>
    <div class="medicine__order">
        <div v-if="isEmpty" class="medicine__order__box">
            <div class="medicine__order__box__titles">
                <div class="">医院</div>
                <div class="">房间号</div>
                <div class="">房间类别</div>
                <div class="">操作</div>
            </div>
            <div class="medicine__order__box__data" v-for="(item, index) in data.orderList" :key="index">
                <div>{{ item.hospitalName }}</div>
                <div>{{ item.roomNumber }}</div>
                <div>{{ item.roomType }}</div>
                <div class="more" @click="openPop(item)"><van-icon name="more-o"/></div>
            </div>
        </div>
        <div v-else>
            <van-empty description="空数据" />
        </div>
    </div>
    <van-popup v-model:show="data.showPop" round position="bottom">
        <RoomsRecord :item="data.item"></RoomsRecord>
    </van-popup>
</template>

<script setup>
import { roomsOrders } from "@/api/index";
import RoomsRecord from "@/components/mobile/popups/roomsRecord";
import { showToast } from "vant";
import { computed, onMounted, reactive } from "vue";

const data = reactive({
    orderList: [],
    showPop: false,
    item: {}
});


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
    roomsOrders().then(
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

