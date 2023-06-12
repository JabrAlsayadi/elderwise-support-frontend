<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header />
    <div class="registr">
        <div class="registr__title">
            <div class="registr__title__text">药品信息</div>
        </div>
        <div class="registr__normal">
            <div class="registr__normal__titles">
                <div class="registr__normal__titles__item">Id</div>
                <div class="registr__normal__titles__item">创建用户Id</div>
                <div class="registr__normal__titles__item">药品名称</div>
                <div class="registr__normal__titles__item">价格</div>
                <div class="registr__normal__titles__item">数量</div>
                <div class="registr__normal__titles__item">科室</div>
                <div class="registr__normal__titles__item">创建时间</div>
            </div>
            <div v-if="isEmpty">
                <div class="registr__normal__data" v-for="(item, index) in data.medList" :key="index" >
                    <div class="registr__normal__data__item">{{ item.id }}</div>
                    <div class="registr__normal__data__item">{{ item.createUser }}</div>
                    <div class="registr__normal__data__item">{{ item.medicineName }}</div>
                    <div class="registr__normal__data__item">{{ item.medicinePrice }}人民币</div>
                    <div class="registr__normal__data__item">{{ item.medicineCount }}</div>
                    <div class="registr__normal__data__item">{{ item.medicineType }}</div>
                    <div class="registr__normal__data__item">{{ item.createAt.slice(0,10) }}</div>
                </div>
            </div>
            <div v-else>
                <van-empty description="暂无数据" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { getMedicalList } from '@/api';
import Header from '@/components/admin/header.vue';
import { showToast } from 'vant';
import { computed, onMounted, reactive } from 'vue';

const data = reactive({
    medList: [],
});

// check empty 
const isEmpty = computed(() => {
    if (data.medList.length === 0) {
        return false;
    }
    return true;
})

onMounted(() => {
    getMedicalList().then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                data.medList = res.data.data;
                return;
            }
            showToast('获取药品列表失败');
            return;
        }
    ).catch(err => {
        console.log(err);
        showToast('获取药品列表失败');
    })
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