<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header />
    <div class="orders">
        <div class="orders__data">
            <div class="orders__data__top">
                <div class="orders__data__top__title">
                    门诊订单
                </div>
                <div class="box">
                    <div class="orders__data__top__list">
                        <div class="orders__data__top__list__item">医生</div>
                        <div class="orders__data__top__list__item">科室</div>
                        <div class="orders__data__top__list__item">费用</div>
                        <div class="orders__data__top__list__item">添加时间</div>
                        <div class="orders__data__top__list__item">状态</div>
                        <div class="orders__data__top__list__item">删除</div>
                    </div>
                    <div v-if="isEmpty">
                        <div class="orders__data__top__data" v-for="(item, index) in data.mrOrders"  :key="index">
                            <div class="orders__data__top__data__item">{{ item.doctorName }}</div>
                            <div class="orders__data__top__data__item">{{ item.registrationType }}</div>
                            <div class="orders__data__top__data__item">{{ item.fee }} 人民币</div>
                            <div class="orders__data__top__data__item">{{ item.createAt }}</div>
                            <div class="orders__data__top__data__item">{{ item.registrationStatus === 1 ? '已确认' : '未确认'}}</div>
                            <div class="orders__data__top__data__item icon" @click.prevent="confirmDel(item.id)"><van-icon name="delete-o" /></div>
                        </div>
                    </div>
                    <div v-else>
                        <van-empty description="暂无数据" />
                    </div>
                </div>
            </div>
            <div class="orders__data__top">
                <div class="orders__data__top__title">
                    住院订单
                </div>
                <div class="box">
                    <div class="orders__data__top__list">
                        <div class="orders__data__top__list__item">房间号</div>
                        <div class="orders__data__top__list__item">床位</div>
                        <div class="orders__data__top__list__item">价格</div>
                        <div class="orders__data__top__list__item">住院时间</div>
                        <div class="orders__data__top__list__item">出院时间</div>
                        <div class="orders__data__top__list__item">添加时间</div>
                        <div class="orders__data__top__list__item">删除</div>
                    </div>
                    <div v-if="roomEmpty">
                        <div class="orders__data__top__data" v-for="(item, index) in data.roomOrders"  :key="index">
                            <div class="orders__data__top__data__item">{{ item.roomNumber }}</div>
                            <div class="orders__data__top__data__item">{{ item.bedNumber }}</div>
                            <div class="orders__data__top__data__item">{{ item.fee}}</div>
                            <div class="orders__data__top__data__item">{{ item.checkInAt }}</div>
                            <div class="orders__data__top__data__item">{{ item.checkOutAt }}</div>
                            <div class="orders__data__top__data__item">{{ item.reservationAt }}</div>
                            <div class="orders__data__top__data__item icon" @click.prevent="confirmDel(item.id)"><van-icon name="delete-o" /></div>
                        </div>
                    </div>
                    <div v-else>
                        <van-empty description="暂无数据" />
                    </div>
                </div>
            </div>
            <div class="orders__data__top">
                <div class="orders__data__top__title">
                    药品订单
                </div>
                <div class="box">
                    <!--  -->
                    <div class="orders__data__top__list">
                        <div class="orders__data__top__list__item">药品名称</div>
                        <div class="orders__data__top__list__item">价格</div>
                        <div class="orders__data__top__list__item">数量</div>
                        <div class="orders__data__top__list__item">科室</div>
                        <div class="orders__data__top__list__item">添加时间</div>
                        <div class="orders__data__top__list__item">删除</div>
                    </div>
                    <div v-if="medEmpty">
                        <div class="orders__data__top__data" v-for="(item, index) in data.mdOrders"  :key="index">
                            <div class="orders__data__top__data__item">{{ item.medicineName }}</div>
                            <div class="orders__data__top__data__item">{{ item.medicinePrice }} 人民币</div>
                            <div class="orders__data__top__data__item">{{ item.countOfOrder }}</div>
                            <div class="orders__data__top__data__item">{{ item.medicineType }}</div>
                            <div class="orders__data__top__data__item">{{ item.createAt }}</div>
                            <div class="orders__data__top__data__item icon" @click.prevent="confirmDel(item.id)"><van-icon name="delete-o" /></div>
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
import { getMedOrderByUserId, getRegOrderByUserId, getRoomOrderByUserId } from '@/api';
import Header from '@/components/prov/Header.vue';
import { showToast } from 'vant';
import { onMounted, reactive, computed } from 'vue';


const data = reactive({
    mrOrders: [],
    roomOrders: [],
    mdOrders: [],
    show: false,
    removeId: '',
});

onMounted(() => {

    getRegOrderByUserId().then(res => {
        if (res.code.toString() === '0' && res.msg.toString() === 'success') {
            data.mrOrders = res.data.data;
            return;
        }
        showToast('获取门诊订单失败');
        return;
    }).catch(err => {
        console.log(err);
    })

    getMedOrderByUserId().then(res => {
        if (res.code.toString() === '0' && res.msg.toString() === 'success') {
            data.mdOrders = res.data.data;
            return;
        }
        showToast('获取药品订单失败');
        return;
    }).catch(err => {
        console.log(err);
    })

    getRoomOrderByUserId().then(res => {
        if (res.code.toString() === '0' && res.msg.toString() === 'success') {
            data.roomOrders = res.data.data;
            return;
        }
        showToast('获取房间列表失败');
        return;
    }).catch(err => {
        console.log(err);
    })
})

const isEmpty = computed(() => {
    if (data.mrOrders.length === 0) {
        return false;
    }
    return true;
})

const roomEmpty = computed(() => {
    if (data.roomOrders.length === 0) {
        return false;
    }
    return true;
})

const medEmpty = computed(() => {
    if (data.mdOrders.length === 0) {
        return false;
    }
    return true;
})

const confirmDel = (id) => {
    data.show = true;
    data.removeId = id;
}

const delItem = () => {
    data.show = false;
    console.log(data.removeId);
}

</script>

<style lang="stylus" scoped >
.orders
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