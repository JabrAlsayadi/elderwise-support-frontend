import { post, get, patch, deleteReq } from "./request";

const baseURL = 'http://localhost:3000/v1';

const userToken = localStorage.getItem('token');
const provToken = localStorage.getItem('provToken');
const adminToken = localStorage.getItem('adminToken');

export const loginReq = (data = {}) => post(`${baseURL}/user/login`, data, '');  /** login */
export const registerReq = (data = {}) => post(`${baseURL}/user/register`, data, '');  /** register */

/** user */
export const hospitalList = (data = {}) => get(`${baseURL}/hospital`, data, userToken); /** registration list */
export const doctorListByHospital = (url = `${baseURL}/registration/doctor/1`, data = {}) => get( baseURL+url , data, userToken); /** doctor list */
export const orderRegistration = (data = {}) => post(`${baseURL}/order-registration`, data, userToken); /** order registration */
export const medicineReq = (data = {}) => get(`${baseURL}/medical`, data, userToken);  /** buy medicine */
export const orderMedicine = (data = {}) => post(`${baseURL}/order-medical`, data, userToken); /** order medicine */
export const roomListByHospital = (url = `${baseURL}/rooms/hospital/1`, data = {}) => get( baseURL+url , data, userToken); /** doctor list */
export const orderRoom = (data = {}) => post(`${baseURL}/order-room`, data, userToken); /** order room */
export const phonesList = (data = {}) => get(`${baseURL}/phones`, data, userToken); /** phones list */
export const profileInfo = (data = {}) => get(`${baseURL}/user/${localStorage.getItem('id')}`, data, userToken);  /** profile info */
export const updateProfile = (data = {}) => patch(`${baseURL}/user`, data, userToken);  /** update profile */
export const registrationOrder = (data = {}) => get(`${baseURL}/order-registration/list/${localStorage.getItem('id')}`, data, userToken);  /** registration order */
export const deleteRegistrationOrder = (url = ``, data = {}) => deleteReq(baseURL + url , data, userToken);  /** delete registration order */
export const medicineOrders = (data = {}) => get(`${baseURL}/order-medical/owner-order/${localStorage.getItem('id')}`, data, userToken);  /** medicine order */
export const deleteMedicineOrder = (url = ``, data = {}) => deleteReq(baseURL + url , data, userToken);  /** delete medicine order */
export const roomsOrders = (data = {}) => get(`${baseURL}/order-room/owner-orders/${localStorage.getItem('id')}`, data, userToken);  /** room order */
export const deleteRoomOrder = (url = ``, data = {}) => deleteReq(baseURL + url , data, userToken);  /** delete room order */


/** provider */
export const hospitalByProvider = (data = {}) => get(`${baseURL}/hospital/owner/${localStorage.getItem('provId')}`, data, provToken); /** hospital list */
export const addHospital = (data = {}) => post(`${baseURL}/hospital`, data, provToken); /** add hospital */
export const addDoctor = (data = {}) => post(`${baseURL}/registration`, data, provToken); /** add doctor */
export const addMedical = (data = {}) => post(`${baseURL}/medical`, data, provToken); /** add medical */
export const addRoom = (data = {}) => post(`${baseURL}/rooms`, data, provToken); /** add room */
export const doctorWithHospitalList = (data = {}) => get(`${baseURL}/registration/owner/${localStorage.getItem('provId')}`, data, provToken); /** doctor list */
export const deleteDoctor = (url = ``, data = {}) => deleteReq(baseURL + url , data, provToken);  /** delete doctor */
export const roomListByUser = (data = {}) => get(`${baseURL}/rooms/owner/${localStorage.getItem('provId')}`, data, provToken); /** room list */
export const deleteRoom = (url = ``, data = {}) => deleteReq(baseURL + url , data, provToken);  /** delete room */
export const medicalListByUser = (data = {}) => get(`${baseURL}/medical/owner/${localStorage.getItem('provId')}`, data, provToken); /** medical list */
export const deleteMedical = (url = ``, data = {}) => deleteReq(baseURL + url , data, provToken);  /** delete medical */
export const getRegOrderByUserId = (data = {}) => get(`${baseURL}/order-registration/order/${localStorage.getItem('provId')}`, data, provToken); /** order list */
export const getMedOrderByUserId = (data = {}) => get(`${baseURL}/order-medical/order-prov/${localStorage.getItem('provId')}`, data, provToken); /** order list */
export const getRoomOrderByUserId = (data = {}) => get(`${baseURL}/order-room/order-prov/${localStorage.getItem('provId')}`, data, provToken); /** order list */

/** admin */
export const getUsersList = (data = {}) => get(`${baseURL}/user`, data, adminToken); /** users list */
export const updateUser = (data = {}) => patch(`${baseURL}/user`, data, adminToken); /** update user */
export const getHospitalsList = (data = {}) => get(`${baseURL}/hospital`, data, adminToken); /** hospitals list */
export const getDoctorsList = (data = {}) => get(`${baseURL}/registration`, data, adminToken); /** doctors list */
export const getRoomsList = (data = {}) => get(`${baseURL}/rooms`, data, adminToken); /** rooms list */
export const getMedicalList = (data = {}) => get(`${baseURL}/medical`, data, adminToken); /** medical list */
export const getRegOrderList = (data = {}) => get(`${baseURL}/order-registration`, data, adminToken); /** registration order list */
export const getMedOrderList = (data = {}) => get(`${baseURL}/order-medical`, data, adminToken); /** medical order list */
export const getRoomOrderList = (data = {}) => get(`${baseURL}/order-room`, data, adminToken); /** room order list */

