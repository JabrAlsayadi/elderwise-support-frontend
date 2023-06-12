import { hospitalList } from "@/api/index";

export function regList({ commit }) {
    hospitalList().then((res) => {
        commit("setRegistrationList", res.data);
    }).catch((err) => {
        console.log(err);
    })
}
