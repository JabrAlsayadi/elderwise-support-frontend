import { post } from "./request";

export const registerReq = (data = {}) =>  post('http://localhost:3000/v1/user/register', data);


