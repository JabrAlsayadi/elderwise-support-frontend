import router from "@/router/co-router";
import { reactive, toRefs } from "vue";
import { registerReq } from "@/api/index";

export const useLogin = () => {

    const data = reactive({
        username: '',
        password: '',
        displayData: 'nice one'
    })

    const forgetPassword = () => {
        return router.push('/forget-password')
    }

    const userLogin = () => {
        console.log('logined');
    }

    const registerMethod =  async () => {
        const res = await registerReq({
            "userName":"admin1",
            "userAccount":"admin1@gmail.com",
            "userRole":"admin",
            "userPassword":"admin11"
        });

        if (res.status === '0' && res.msg === 'success') {
            console.log('Done')
        }
    }
    registerMethod()

    return {
        ...toRefs(data),
        forgetPassword,
        userLogin,
    }
}