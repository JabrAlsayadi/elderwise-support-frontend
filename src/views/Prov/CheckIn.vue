<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header />
    <div class="check__in">
        <div class="check__in__data">
            <div class="check__in__data__top">
                <div class="check__in__data__top__title">
                    医生列表
                </div>
                <div class="box">
                    <div class="check__in__data__top__list">
                        <div class="check__in__data__top__list__item">医院</div>
                        <div class="check__in__data__top__list__item">医院地址</div>
                        <div class="check__in__data__top__list__item">医生</div>
                        <div class="check__in__data__top__list__item">科室</div>
                        <div class="check__in__data__top__list__item">添加时间</div>
                        <div class="check__in__data__top__list__item">操作</div>
                    </div>
                    <div v-if="isEmpty">
                        <div class="check__in__data__top__data" v-for="(item, index) in data.list"  :key="index">
                            <div class="check__in__data__top__data__item">{{ item.hospitalName }}</div>
                            <div class="check__in__data__top__data__item">{{ item.hospitalAddress }}</div>
                            <div class="check__in__data__top__data__item">{{ item.doctorName }}</div>
                            <div class="check__in__data__top__data__item">{{ item.registrationType }}</div>
                            <div class="check__in__data__top__data__item">{{ sli(item.createAt) }}</div>
                            <div class="check__in__data__top__data__item icon" @click.prevent="opItem(item)"><van-icon name="more-o" /></div>
                        </div>
                    </div>
                    <div v-else>
                        <van-empty description="暂无数据" />
                    </div>
                </div>
            </div>
            <div class="check__in__data__bottom">
                <div class="check__in__data__top__title">
                    房间列表
                </div>
                <div class="box">
                    <div class="check__in__data__top__list">
                        <div class="check__in__data__top__list__item">医院</div>
                        <div class="check__in__data__top__list__item">房间号</div>
                        <div class="check__in__data__top__list__item">费用</div>
                        <div class="check__in__data__top__list__item">房间类别</div>
                        <div class="check__in__data__top__list__item">添加时间</div>
                        <div class="check__in__data__top__list__item">操作</div>
                    </div>
                    <div v-if="isRoomEmpty">
                        <div class="check__in__data__top__data" v-for="(item, index) in data.roomList"  :key="index">
                            <div class="check__in__data__top__data__item">{{ item.hospitalName }}</div>
                            <div class="check__in__data__top__data__item">{{ item.roomNumber }}</div>
                            <div class="check__in__data__top__data__item">{{ item.room__fee }}人民币</div>
                            <div class="check__in__data__top__data__item">{{ item.roomType }}</div>
                            <div class="check__in__data__top__data__item">{{ sli(item.createAt) }}</div>
                            <div class="check__in__data__top__data__item icon" @click.prevent="opRoomItem(item)"><van-icon name="more-o" /></div>
                        </div>
                    </div>
                    <div v-else>
                        <van-empty description="暂无数据" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <van-popup v-model:show="data.showPop" round >
        <doctorCart :item="data.item" />
    </van-popup>
    <van-popup v-model:show="data.showRoomPop" round >
        <roomCart :item="data.room" />
    </van-popup>
</template>

<script setup >
import { doctorWithHospitalList, roomListByUser } from '@/api';
import Header from '@/components/prov/Header.vue';
import { showToast } from 'vant';
import { reactive, onMounted, computed } from 'vue';
import doctorCart from '@/components/prov/popus/doctorCart.vue';
import roomCart from '@/components/prov/popus/roomCart.vue';

const data = reactive({
    searchId: 0,
    list: [],
    roomList: [],
    showPop: false,
    showRoomPop: false,
    item: {},
    room: {}
})

const sli = (str) => {
    return str.slice(0, 10);
}
onMounted(() => {
    doctorWithHospitalList().then(res => {
        if (res.code.toString() === '0' && res.msg.toString() === 'success') {
            data.list = res.data.data;
            console.log(data.list);
            return;
        }
        showToast('获取医生列表失败');
        return;
    }).catch(() => {
        showToast('获取医生列表失败');
    })

    roomListByUser().then(res => {
        if (res.code.toString() === '0' && res.msg.toString() === 'success') {
            data.roomList = res.data.data;
            return;
        }
        showToast('获取医生列表失败');
        return;
    }).catch(() => {
        showToast('获取医生列表失败');
    })
})

const opItem = (item) => {
    data.showPop = true;
    data.item = item;
}

const opRoomItem = (item) => {
    data.showRoomPop = true;
    data.room = item;
}

const isEmpty = computed(() => {
    if (data.list.length === 0) {
        return false;
    }
    return true;
})

const isRoomEmpty = computed(() => {
    if (data.roomList.length === 0) {
        return false;
    }
    return true;
})
</script>

<style lang="stylus" scoped >
.check__in
    width: 95%
    min-height: 85vh
    background: #fff
    padding-bottom: 20px
    margin: 10px  auto 10px auto
    display: flex
    flex-direction: column
    box-shadow: 0 0 10px #ccc
    border-radius: 20px
    padding: 20px

    &__data
        padding: 0 5px
        display: flex
        flex-direction: column
        gap: 20px
        &__top
            min-height: 40vh
            display: flex
            flex-direction: column
            gap: 10px
            &__data
                display: flex
                justify-content: space-between
                padding: 0 10px
                gap: 10px
                &__item
                    width: 100%
                    padding: 10px 0px
            &__title
                font-size: 18px
                font-weight: bold
                padding: 10px 0px
            &__list
                display: flex
                background: #1a3045
                color: #fff
                font-size: 16px
                font-weight: bold
                border-radius: 5px
                padding: 0 5px
                &__item
                    width: 100%
                    padding: 10px 10px

.box
    display: flex
    flex-direction: column
    gap: 10px
    
.icon
    font-size: 20px
    color: #1a3045
</style>
