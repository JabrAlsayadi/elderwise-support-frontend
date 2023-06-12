<!-- eslint-disable vue/multi-word-component-names #1a3045 -->
<template>
    <Header />
    <div class="registeration">
        <div class="registeration__box">
            <div class="registeration__box__top">
                <div class="registeration__box__top__left">
                    <div class="registeration__box__top__left__title">创建医院 <span @click="showAdd('h')"><van-icon name="add-o" /></span></div>
                    <div v-if="data.addHospital">
                        <div class="registeration__box__top__left__inputs">
                            <input type="text" v-model.trim="data.hospitalName" placeholder="医院名称">
                            <textarea type="text" v-model.trim="data.hospitalDesc" placeholder="医院描述（100）字以内"></textarea>
                            <input type="text" v-model.trim="data.hospitalAddress" placeholder="医院地址">
                        </div>
                        <div class="empty" v-if="data.hospitalEmpty">请填写完整信息， 再提交</div>
                        <div class="registeration__box__top__left__btn" @click.prevent="createHospital">创建</div>
                    </div>
                </div>
                <div class="registeration__box__top__right">
                    <div class="registeration__box__top__left__title">创建药品 <span @click="showAdd('o')"><van-icon name="add-o" /></span></div>
                    <div v-if="data.addDoctor">
                        <div class="registeration__box__top__left__inputs">
                            <input type="text" v-model.trim="data.medicineName" placeholder="名称">
                            <input type="text" v-model.trim="data.imgUrl" placeholder="图片链接">
                            <input type="text" v-model.trim="data.medicinePrice" placeholder="价格">
                            <input type="text" v-model.trim="data.medicineCount" placeholder="数量">
                            <input type="text" v-model.trim="data.medicineType" placeholder="药品属于科室">
                        </div>
                        <div class="empty" v-if="data.medicineEmpty">请填写完整信息， 再提交</div>
                        <div class="registeration__box__top__left__btn" @click.prevent="addNewMedicine">创建</div>
                    </div>
                </div>
            </div>
            <div class="registeration__box__bottom">
                <div class="registeration__box__bottom__left">
                    <div class="registeration__box__top__left__title">添加医生 <span @click="showAdd('m')"><van-icon name="add-o" /></span></div>
                    <div v-if="data.addMedicine">
                        <div class="registeration__box__top__left__inputs">
                            <select v-model="data.hospitalId" >
                                <option value="">选择医院</option>
                                <option v-if="checkHospitalList" value="00">请你先添加医院</option>
                                <option v-for="op in data.hList" :key="op.id" :value="op.id">{{ op.hospitalName }}</option>
                            </select>
                            <input type="text" v-model.trim="data.doctorName" placeholder="医生名称">
                            <input type="text" v-model.trim="data.doctorImgUrl" placeholder="医生图片链接">
                            <input type="text" v-model.trim="data.doctorDesc" placeholder="医生简介">
                            <input type="text" v-model.trim="data.regFee" placeholder="价格">
                            <input type="text" v-model.trim="data.registrationType" placeholder="属于科室">
                        </div>
                        <div class="empty" v-if="data.doctorEmpty">请填写完整信息， 再提交</div>
                        <div class="registeration__box__top__left__btn" @click.prevent="addNewDoctor">创建</div>
                    </div>
                </div>
                <div class="registeration__box__bottom__right">
                    <div class="registeration__box__top__left__title">添加房间 <span @click="showAdd('r')"><van-icon name="add-o" /></span></div>
                    <div v-if="data.addRoom">
                        <div class="registeration__box__top__left__inputs">
                            <select v-model="data.rHospitalId">
                                <option value="">选择医院</option>
                                <option v-if="checkHospitalList" value="00">请你先添加医院</option>
                                <option v-for="op in data.hList" :key="op.id" :value="op.id">{{ op.hospitalName }}</option>
                            </select>
                            <input type="text" v-model.trim="data.roomImgUrl" placeholder="房间图片链接">
                            <input type="text" v-model.trim="data.floorNumber" placeholder="楼层">
                            <input type="text" v-model.trim="data.roomNumber" placeholder="房间号">
                            <input type="text" v-model.trim="data.roomType" placeholder="房间类别">
                            <input type="text" v-model.trim="data.bedNumber" placeholder="床位">
                            <input type="text" v-model.trim="data.roomFee" placeholder="每日价格">
                            <input type="text" v-model.trim="data.roomMedicineType" placeholder="属于科室">
                        </div>
                        <div class="empty" v-if="data.roomEmpty">请填写完整信息， 再提交</div>
                        <div class="registeration__box__top__left__btn" @click.prevent="addNewRoom">创建</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup >
import { addHospital, hospitalByProvider, addDoctor, addMedical, addRoom } from '@/api/index';
import Header from '@/components/prov/Header.vue';
import { showToast } from 'vant';
import router from '@/router/prov-router';
import { computed, onMounted, reactive } from 'vue';


const data = reactive({
    addHospital: false,
    addDoctor: false,
    addMedicine: false,
    addRoom: false,
    createUser: '',
    hospitalName: '',
    hospitalDesc:'',
    hospitalAddress: '',
    medicineName: '',
    imgUrl:'',
    medicinePrice: '',
    medicineCount: '',
    medicineType:'',
    hospitalId: '',
    rHospitalId: '',
    registrationType: '',
    doctorName: '',
    doctorDesc: '', 
    doctorImgUrl: '', 
    regFee: '',
    roomMedicineType: '',
    roomImgUrl: '',
    floorNumber: '',
    roomType: '',
    roomNumber: '',
    bedNumber: '',
    roomFee: '',
    hList: [],
    hospitalEmpty: false,
    doctorEmpty: false,
    roomEmpty: false,
    medicineEmpty: false,
});

// 显示添加
const showAdd = (w) => {
    if (w === 'm') {
        data.addMedicine = !data.addMedicine;
        return;
    } else if (w === 'h') {
        data.addHospital = !data.addHospital;
        return;
    } else if (w === 'o') {
        data.addDoctor = !data.addDoctor;
        return;
    }
    data.addRoom = !data.addRoom;
}


// 检查医院列表
const checkHospitalList = computed(() => {
    if (data.hList.length === 0) {
        return true;
    }
    return false;
})


onMounted(() =>  {
    // 获取医院列表
    hospitalByProvider().then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                data.hList = res.data.data;
                return;
            }
            showToast('获取医院列表失败')
            return;
        }
    ).catch(err => {
        showToast('获取医院列表失败')
        console.log(err)
    })
})

// 检查空数据
const isEmpty = (v) => {
    if (v === '' || v === null || v === undefined) {
        console.log(v);
        return true;
    }
    return false;
}
// 创建医院
const createHospital = () => {
    if (isEmpty(data.hospitalName) || isEmpty(data.hospitalDesc) || isEmpty(data.hospitalAddress)) {
        data.hospitalEmpty = true;
        return;
    }
    addHospital(
        {
            "createUser": localStorage.getItem('provId'),
            "hospitalName": data.hospitalName,
            "hospitalDesc": data.hospitalDesc,
            "hospitalAddress": data.hospitalAddress,
        }
    ).then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                showToast('添加医院成功')  
                router.go(0);
                return;
            }
            showToast('添加医院失败')
        }
    ).catch(
        err => {
            showToast('添加医院失败')
            console.log(err)
        }
    );
}

// 创建医生
const addNewDoctor = () => {
    if (
        isEmpty(data.hospitalId) || isEmpty(data.registrationType) || isEmpty(data.doctorName)
        || isEmpty(data.doctorDesc) || isEmpty(data.doctorImgUrl) || isEmpty(data.regFee)) {
        data.doctorEmpty = true;
        return;
    }
    addDoctor(
        {
            "createUser": localStorage.getItem('provId'),
            "hospitalId": data.hospitalId,
            "registrationType": data.registrationType,
            "doctorName": data.doctorName,
            "doctorDesc": data.doctorDesc, 
            "doctorImgUrl": data.doctorImgUrl, 
            "fee": data.regFee
        }
    ).then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                showToast('添加医生成功')  
                router.go(0);
                return;
            }
            showToast('添加医生失败')
            return;
        }
    ).catch(
        err => {
            showToast('添加医生失败')
            console.log(err)
        }
    );
}

// 创建药品
const addNewMedicine = () => {
    if (
        isEmpty(data.medicineName) || isEmpty(data.imgUrl) || isEmpty(data.medicinePrice)
        || isEmpty(data.medicineCount) || isEmpty(data.medicineType)) {
        data.medicineEmpty = true;
        return;
    }
    addMedical(
        {
            "medicineName": data.medicineName,
            "createUser": localStorage.getItem('provId'),
            "imgUrl": data.imgUrl,
            "medicinePrice": data.medicinePrice,
            "medicineCount": data.medicineCount,
            "medicineType": data.medicineType
        }
    ).then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                showToast('添加药品成功')  
                router.go(0);
                return;
            }
            showToast('添加药品失败')
            return;
        }
    ).catch(
        err => {
            showToast('添加药品失败')
            console.log(err)
        }
    );
} 

// 添加房间
const addNewRoom = () => {
    if (isEmpty(data.rHospitalId) || isEmpty(data.roomMedicineType) || isEmpty(data.roomImgUrl) 
    || isEmpty(data.floorNumber) || isEmpty(data.roomType) || isEmpty(data.roomNumber) || isEmpty(data.bedNumber)
    || isEmpty(data.roomFee)) {
        data.roomEmpty = true;
        return;
    }
    
    addRoom(
        {
            "createUser": localStorage.getItem('provId'),
            "hospitalId": data.rHospitalId,
            "medicineType": data.roomMedicineType,
            "roomImgUrl": data.roomImgUrl,
            "floorNumber": data.floorNumber,
            "roomType": data.roomType,
            "roomNumber": data.roomNumber,
            "bedNumber": data.bedNumber,
            "fee": data.roomFee
        }
    ).then(
        res => {
            if (res.code.toString() === '0' && res.msg.toString() === 'success') {
                showToast('添加房间成功')  
                router.go(0);
                return;
            }
            showToast('添加房间失败')
            return;
        }
    ).catch(
        err => {
            showToast('添加房间失败')
            console.log(err)
        }
    );
}

</script>

<style lang="stylus" scoped >

.registeration
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
    &__box
        display: flex
        flex-direction: column
        gap: 20px
        &__top
            display: flex
            justify-content: space-between
            &__left
                width: 50%
                max-height: 709px
                &__title
                    font-size: 20px
                    font-weight: bold
                &__inputs
                    padding: 10px 0
                    display: flex
                    flex-direction: column
                    gap: 10px
                    &>input 
                        width: 50%
                        height: 40px
                        border: 1px solid #ccc
                        border-radius: 5px
                        padding: 0 10px 0 10px
                        outline: none
                        &:focus
                            border: 1px solid #1a3045
                    &>textarea
                        width: 50%
                        height: 123px
                        border: 1px solid #ccc
                        border-radius: 5px
                        padding: 10px
                        outline: none
                        &:focus
                            border: 1px solid #1a3045
                    &>select
                        width: 53.1%
                        height: 40px
                        border: 1px solid #ccc
                        border-radius: 5px
                        padding: 0 10px 0 10px
                        outline: none
                        &:focus
                            border: 1px solid #1a3045
                &__btn
                    width: 53.1%
                    height: 40px
                    background: #1a3045
                    color: #fff
                    font-size: 20px
                    font-weight: bold
                    display: flex
                    justify-content: center
                    align-items: center
                    border-radius: 5px
                    cursor: pointer

            &__right
                width: 50%
                max-height: 709px
            
        &__bottom
            display: flex
            justify-content: space-between
            &__left
                width: 50%
            &__right
                width: 50%

.empty 
    padding: 5px 0
    color: red
</style>