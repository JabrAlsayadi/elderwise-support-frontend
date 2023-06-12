<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header />
    <div class="help">
        <div class="help__title">
            <div class="help__title__text">挂号订单</div>
        </div>
        <div class="help__box">
            <div class="help__box__items">
                <div class="help__box__items__item">Id</div>
                <div class="help__box__items__item">创建用户</div>
                <div class="help__box__items__item">医院id</div>
                <div class="help__box__items__item">医生</div>
                <div class="help__box__items__item">科室</div>
                <div class="help__box__items__item">费用</div>
                <div class="help__box__items__item">挂号状态</div>
                <div class="help__box__items__item">支付方式</div>
                <div class="help__box__items__item">就诊时间</div>
            </div>
            <div v-if="checkList(data.regOrders)">
                <div class="help__box__data" v-for="(item, index) in data.regOrders" :key="index">
                    <div class="help__box__data__item">{{ item.id }}</div>
                    <div class="help__box__data__item">{{ item.createUser }}</div>
                    <div class="help__box__data__item">{{ item.hospitalId }}</div>
                    <div class="help__box__data__item">{{ item.doctorName }}</div>
                    <div class="help__box__data__item">{{ item.registrationType }}</div>
                    <div class="help__box__data__item">{{ item.fee }} 人民币</div>
                    <div class="help__box__data__item">{{ item.registrationStatus === 1 ? '已确认' : '未确认' }}</div>
                    <div class="help__box__data__item">{{ item.paymentStatus === 0 ? '线下' : '线上' }}</div>
                    <div class="help__box__data__item">{{ sli(item.registrationAt) }}</div>
                </div>
            </div>
            <div v-else>
                <van-empty description="暂无数据" />
                <div class="p__b"></div>
            </div>
        </div>
        <div class="help__title">
            <div class="help__title__text">住院房间订单</div>
        </div>
        <div class="help__box">
            <div class="help__box__items">
                <div class="help__box__items__item">Id</div>
                <div class="help__box__items__item">创建用户</div>
                <div class="help__box__items__item">医院Id</div>
                <div class="help__box__items__item">科室</div>
                <div class="help__box__items__item">楼层</div>
                <div class="help__box__items__item">房间类别</div>
                <div class="help__box__items__item">房间号</div>
                <div class="help__box__items__item">床位</div>
                <div class="help__box__items__item">每日费用</div>
                <div class="help__box__items__item">创建时间</div>
                <div class="help__box__items__item">住院时间</div>
                <div class="help__box__items__item">出院时间</div>
                <div class="help__box__items__item">支付方式</div>
                <div class="help__box__items__item">总和费用</div>
            </div>
            <div v-if="checkList(data.roomOrders)">
                <div class="help__box__data" v-for="(item, index) in data.roomOrders" :key="index">
                    <div class="help__box__data__item">{{ item.id }}</div>
                    <div class="help__box__data__item">{{ item.createUser }}</div>
                    <div class="help__box__data__item">{{ item.hospitalId }}</div>
                    <div class="help__box__data__item">{{ item.medicineType }}</div>
                    <div class="help__box__data__item">{{ item.floorNumber }}</div>
                    <div class="help__box__data__item">{{ item.roomType }}</div>
                    <div class="help__box__data__item">{{ item.roomNumber }}</div>
                    <div class="help__box__data__item">{{ item.bedNumber }}</div>
                    <div class="help__box__data__item">{{ item.fee }}</div>
                    <div class="help__box__data__item">{{ sli(item.checkInAt) }}</div>
                    <div class="help__box__data__item">{{ sli(item.checkOutAt) }}</div>
                    <div class="help__box__data__item">{{ sli(item.reservationAt) }}</div>
                    <div class="help__box__data__item">{{ item.paymentStatus === 0 ? '线下' : '线上' }}</div>
                    <div class="help__box__data__item">{{ totalCosts(item.fee, item.checkInAt, item.checkOutAt) }} 人民币</div>
                </div>
            </div>
            <div v-else>
                <van-empty description="暂无数据" />
                <div class="p__b"></div>
            </div>
        </div>
        <div class="help__title">
            <div class="help__title__text">药品订单</div>
        </div>
        <div class="help__box">
            <div class="help__box__items">
                <div class="help__box__items__item">Id</div>
                <div class="help__box__items__item">创建用户id</div>
                <div class="help__box__items__item">药品名称</div>
                <div class="help__box__items__item">科室</div>
                <div class="help__box__items__item">价格</div>
                <div class="help__box__items__item">下单数量</div>
                <div class="help__box__items__item">支付方式</div>
                <div class="help__box__items__item">创建时间</div>
                <div class="help__box__items__item">总和费用</div>
            </div>
            <div v-if="checkList(data.medOrders)">
                <div class="help__box__data" v-for="(item, index) in data.medOrders" :key="index">
                    <div class="help__box__data__item">{{ item.id }}</div>
                    <div class="help__box__data__item">{{ item.createUser }}</div>
                    <div class="help__box__data__item">{{ item.medicineName }}</div>
                    <div class="help__box__data__item">{{ item.medicineType }}</div>
                    <div class="help__box__data__item">{{ item.medicinePrice }} 元</div>
                    <div class="help__box__data__item">{{ item.countOfOrder }}</div>
                    <div class="help__box__data__item">{{ item.paymentStatus === 0 ? '线下' : '线上' }}</div>
                    <div class="help__box__data__item">{{ sli(item.createAt) }}</div>
                    <div class="help__box__data__item">{{ item.countOfOrder * item.medicinePrice }} 人民币</div>
                </div>
            </div>
            <div v-else>
                <van-empty description="暂无数据" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { getMedicalList, getRegOrderList, getRoomOrderList } from '@/api';
import Header from '@/components/admin/header.vue';
import { showToast } from 'vant';
import { onMounted, reactive } from 'vue';

const data = reactive({
    regOrders: [],
    roomOrders: [],
    medOrders: [],
})

const sli = (str) => {
    return str.slice(0, 10) + ' ' + str.slice(11, 19);
}
// check list is empty
const checkList = (list) => {
    if (list.length === 0) {
        return false;
    }
    return true;
}

function totalCosts(dailyRate, checkInDate, checkOutDate) {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    checkIn.setHours(0, 0, 0, 0);
    checkOut.setHours(0, 0, 0, 0);
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const totalDays = Math.round(Math.abs((checkOut - checkIn) / millisecondsPerDay));
    const totalCost = dailyRate * totalDays;
    return totalCost;
}
onMounted(() => {
    getRegOrderList().then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                data.regOrders = res.data.data;
                return;
            }
            showToast('获取数据失败');
            return;
        }
    ).catch(err => {
        showToast('获取数据失败');
        console.log(err);
    });
    getMedicalList().then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                data.medOrders = res.data.data;
                return;
            }
            showToast('获取数据失败');
            return;
        }
    ).catch(err => {
        showToast('获取数据失败');
        console.log(err);
    });
    getRoomOrderList().then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                data.roomOrders = res.data.data;
                return;
            }
            showToast('获取数据失败');
            return;
        }
    ).catch(err => {
        showToast('获取数据失败');
        console.log(err);
    });
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
        max-height: 300px
        overflow: auto
        background: #fff

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
