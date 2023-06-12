<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header />
    <div class="registr">
        <div class="registr__title">
            <div class="registr__title__text">医院</div>
        </div>
        <div class="registr__normal">
            <div class="registr__normal__titles">
                <div class="registr__normal__titles__item">Id</div>
                <div class="registr__normal__titles__item">创建用户Id</div>
                <div class="registr__normal__titles__item">医院名称</div>
                <div class="registr__normal__titles__item">医院地址</div>
                <div class="registr__normal__titles__item">创建时间</div>
            </div>
            <div v-if="checkListEmpty(data.hospitalList)">
                <div class="registr__normal__data" v-for="(item, index) in data.hospitalList" :key="index" >
                    <div class="registr__normal__data__item">{{ item.id }}</div>
                    <div class="registr__normal__data__item">{{ item.createUser }}</div>
                    <div class="registr__normal__data__item">{{ item.hospitalName }}</div>
                    <div class="registr__normal__data__item">{{ item.hospitalAddress }}</div>
                    <div class="registr__normal__data__item">{{ sli(item.createAt) }}</div>
                </div>
            </div>
            <div v-else>
                <van-empty description="暂无数据" />
            </div>
        </div>
        <div class="registr__title">
            <div class="registr__title__text">医生</div>
        </div>
        <div class="registr__bussines registr__normal">
            <div class="registr__normal__titles">
                <div class="registr__normal__titles__item">Id</div>
                <div class="registr__normal__titles__item">创建用户Id</div>
                <div class="registr__normal__titles__item">医院id</div>
                <div class="registr__normal__titles__item">医生名称</div>
                <div class="registr__normal__titles__item">科室</div>
                <div class="registr__normal__titles__item">挂号费用</div>
                <div class="registr__normal__titles__item">添加时间</div>
            </div>
            <div v-if="checkListEmpty(data.doctorsList)">
                <div class="registr__normal__data" v-for="(item, index) in data.doctorsList" :key="index" >
                    <div class="registr__normal__data__item">{{ item.id }}</div>
                    <div class="registr__normal__data__item">{{ item.createUser }}</div>
                    <div class="registr__normal__data__item">{{ item.hospitalId }}</div>
                    <div class="registr__normal__data__item">{{ item.doctorName }}</div>
                    <div class="registr__normal__data__item">{{ item.registrationType }}</div>
                    <div class="registr__normal__data__item">{{ item.fee }} 人民币</div>
                    <div class="registr__normal__data__item">{{ sli(item.createAt) }}</div>
                </div>
            </div>
            <div v-else>
                <van-empty description="暂无数据" />
            </div>
        </div>
        <div class="registr__title">
            <div class="registr__title__text">医院房间</div>
        </div>
        <div class="registr__bussines registr__normal">
            <div class="registr__normal__titles">
                <div class="registr__normal__titles__item">Id</div>
                <div class="registr__normal__titles__item">创建用户Id</div>
                <div class="registr__normal__titles__item">医院id</div>
                <div class="registr__normal__titles__item">科室</div>
                <div class="registr__normal__titles__item">楼层</div>
                <div class="registr__normal__titles__item">房间类别</div>
                <div class="registr__normal__titles__item">房间号</div>
                <div class="registr__normal__titles__item">床位</div>
                <div class="registr__normal__titles__item">每日费用</div>
                <div class="registr__normal__titles__item">添加时间</div>
            </div>
            <div v-if="checkListEmpty(data.roomsList)">
                <div class="registr__normal__data" v-for="(item, index) in data.roomsList" :key="index" >
                    <div class="registr__normal__data__item">{{ item.id }}</div>
                    <div class="registr__normal__data__item">{{ item.createUser }}</div>
                    <div class="registr__normal__data__item">{{ item.hospitalId }}</div>
                    <div class="registr__normal__data__item">{{ item.medicineType }}</div>
                    <div class="registr__normal__data__item">{{ item.floorNumber }}</div>
                    <div class="registr__normal__data__item">{{ item.roomType }}</div>
                    <div class="registr__normal__data__item">{{ item.roomNumber }}</div>
                    <div class="registr__normal__data__item">{{ item.bedNumber }}</div>
                    <div class="registr__normal__data__item">{{ item.fee }} 人民币</div>
                    <div class="registr__normal__data__item">{{ sli(item.createAt) }}</div>
                </div>
            </div>
            <div v-else>
                <van-empty description="暂无数据" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { getDoctorsList, getHospitalsList, getRoomsList } from '@/api';
import Header from '@/components/admin/header.vue';
import { showToast } from 'vant';
import { /* computed, */ onMounted, reactive } from 'vue';

const data = reactive({
    hospitalList: [],
    doctorsList: [],
    roomsList: []
});

const sli = (str) => {
    return str.slice(0, 10);
}

// check empty
const checkListEmpty = (list) => {
    if (list.length === 0) {
        return false;
    }
    return true;
}

onMounted(() => {
    getHospitalsList().then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                data.hospitalList = res.data.data;
                return;
            }
            showToast('获取医院列表失败');
            return;
        }
    ).catch(err => {
        console.log(err);
        showToast('获取医院列表失败');
    });
    getDoctorsList().then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                data.doctorsList = res.data.data;
                return;
            }
            showToast('获取医生列表失败');
            return;
        }
    ).catch(err => {
        console.log(err);
        showToast('获取医生列表失败');
    });
    getRoomsList().then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                data.roomsList = res.data.data;
                return;
            }
            showToast('获取房间列表失败');
            return;
        }
    ).catch(err => {
        console.log(err);
        showToast('获取房间列表失败');
    });
})

</script>

<style lang="stylus" scoped>
.registr
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

    &__normal
        width: 100%
        max-height: 400px
        overflow: auto
        background: #fff
        border-radius: 10px
        box-shadow: 0 0 10px #ccc
        &__titles
            position relative
            padding: 10px
            display: flex
            justify-content: space-between
            align-items: center
            background: #065F46
            color: #fff
            font-size: 16px

        &__data
            padding 15px 10px
            display: flex
            justify-content: space-between
            align-items: center
            font-size: 14px
            border-bottom: 1px solid #ccc

</style>