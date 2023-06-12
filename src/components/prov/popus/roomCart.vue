<template>
    <div>
        <div class="container">
            <div class="container__img">
            <img class="doctor-img" :src="props.item.roomImgUrl" :alt="props.item.roomNumber" />
            </div>
            <h1 class="h1">{{ props.item.hospitalName }}</h1>
            <p>{{ props.item.roomType }} {{ props.item.medicineType }}</p>
            <div class="hospital-info">
            <p>所属医院：{{ props.item.hospitalName }}</p>
            <p>医院地址：{{ props.item.hospitalAddress }}</p>
            <p>医院描述：{{ props.item.hospitalDesc }}</p>
            </div>
            <p>每日费用：{{ props.item.room__fee }} 元</p>
            <p>楼层：{{ props.item.floorNumber }}</p>
            <p>床位号：{{ props.item.bedNumber }}</p>
            <p>创建时间：{{ sli(props.item.createAt) }}</p>
    
            <div class="btn" @click.prevent="delRoom(props.item.room__id)">删除</div>
        </div>
    </div>
</template>

<script setup>
import { deleteRoom } from '@/api/index';
import router from '@/router/co-router';
import { showToast } from 'vant';
import { defineProps } from 'vue';

const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
});

const sli = (str) => {
    return str.slice(0, 10) + " "+ str.slice(11, 19);
}

const delRoom = (id) => {
    deleteRoom(`/rooms/${id}`)
    .then((res) => {
        if (res.code.toString() === '0' && res.msg.toString() === 'success') {
            showToast('删除成功');
            router.go(0);
            return;
        }
        showToast('删除失败');
        return;
    })
    .catch((err) => {
        showToast('删除失败');
        console.log(err);
    });
};
</script>

<style lang="stylus" scoped>
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.container__img {
    text-align: center;
    margin-bottom: 10px;
}

.h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.doctor-img {
    width: 300px;
    height: 250px;
    margin-bottom: 10px;
    border-radius: 10px;
}

.hospital-info {
    font-size: 16px;
    margin-bottom: 10px;
}

.btn {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a3045;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
}
</style>
