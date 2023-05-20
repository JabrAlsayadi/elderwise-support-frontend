import axios from 'axios'


const createInstance = (config) => {
    const instance = axios.create(Object.assign({}, {
        timeout: 10000,
        responseType: 'json',
        withCredentials: true,
        baseURL: process.env.VUE_APP_ENV,
        headers: {
            token: localStorage.getItem('token') || ''
        }
    }, config));

    instance.interceptors.response.use((response) => {
        const { data } = response
        if (data.code === '0') { 
            return data;
        } else {
            return Promise.reject(data);
        }
    }, error => {
        return Promise.reject(error);
    })
    return instance;
}

const request = createInstance()

export const post = (url, data = {}) => {
    return request({
        url,
        method: 'post',
        data
    });
}

export const get = (url, data = {}) => {
    return request({
        url,
        method: 'get',
        data
    });
}

export const patch = (url, data = {}) => {
    return request({
        url,
        method: 'patch',
        data
    });
}

export const deleteM = (url, data = {}) => {
    return request({
        url,
        method: 'delete',
        data
    });
}