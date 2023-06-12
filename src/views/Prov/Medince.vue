<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header />
    <div class="check__in">
        <div class="check__in__data">
            <div class="check__in__data__top">
                <div class="check__in__data__top__title">
                    药品列表
                </div>
                <div class="box">
                    <div class="check__in__data__top__list">
                        <div class="check__in__data__top__list__item">药品名称</div>
                        <div class="check__in__data__top__list__item">价格</div>
                        <div class="check__in__data__top__list__item">数量</div>
                        <div class="check__in__data__top__list__item">科室</div>
                        <div class="check__in__data__top__list__item">添加时间</div>
                        <div class="check__in__data__top__list__item">删除</div>
                    </div>
                    <div v-if="isEmpty">
                        <div class="check__in__data__top__data" v-for="(item, index) in data.medList"  :key="index">
                            <div class="check__in__data__top__data__item">{{ item.medicineName }}</div>
                            <div class="check__in__data__top__data__item">{{ item.medicinePrice }}</div>
                            <div class="check__in__data__top__data__item">{{ item.medicineCount }}</div>
                            <div class="check__in__data__top__data__item">{{ item.medicineType }}</div>
                            <div class="check__in__data__top__data__item">{{ sli(item.createAt) }}</div>
                            <div class="check__in__data__top__data__item icon" @click.prevent="confirmDel(item.id)"><van-icon name="delete-o" /></div>
                        </div>
                    </div>
                    <div v-else>
                        <van-empty description="暂无数据" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <van-popup round v-model:show="data.show">
        <div class="exit__pop">
            <div class="exit__pop__text">确认删除此药品吗？</div>
            <div class="exit__pop__btn" @click.prevent="delItem()">确认</div>
        </div>
    </van-popup>
</template>

<script setup >
import { medicalListByUser, deleteMedical } from '@/api';
import Header from '@/components/prov/Header.vue';
import router from '@/router/co-router';
import { showToast } from 'vant';
import { onMounted, reactive, computed } from 'vue';


const data = reactive({
    medList: [],
    show: false,
    removeId: '',
});

const sli = (str) => {
    return str.slice(0, 10) + " "+ str.slice(11, 19);
}

onMounted(() => {
    medicalListByUser()
    .then((res) => {
        if (res.code.toString() === '0' && res.msg.toString() === 'success') {
            data.medList = res.data.data;
            return;
        }
        showToast('获取数据失败');
        return;
    })
    .catch((err) => {
        showToast('获取数据失败');
        console.log(err);
    });
})

const isEmpty = computed(() => {
    if (data.medList.length === 0) {
        return false;
    }
    return true;
})

const confirmDel = (id) => {
    data.show = true;
    data.removeId = id;
}

const delItem = () => {
    deleteMedical(`/medical/${data.removeId}`).then(
        res => {
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
}

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

.exit__pop
    width: 200px

    background: #fff
    text-align: center
    line-height: 200%
    padding: 20px
    &__text
        font-size: 18px
        font-weight: bold
        padding: 10px 0px
    &__btn
        height: 30px
        background: #1a3045
        color: #fff
        border-radius: 5px
        cursor: pointer
</style>