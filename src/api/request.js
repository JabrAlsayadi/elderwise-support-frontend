import axios from 'axios'

const createInstance = (config) => {
    const instance = axios.create(Object.assign({}, {
        timeout: 10000,
        responseType: 'json',
        withCredential: true,
        baseURL: process.env.VUE_APP_EX_API,
    }, config));

    instance.interceptors.request.use((config) => {
        if (config.token) {
            config.headers['Authorization'] = `Bearer ${config.token}`;
        }
        return config;
    }, error => {
        return Promise.reject(error);
    });

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

export const post = (url, data = {}, token) => {
    return request({
        url,
        method: 'post',
        data,
        token
    });
}

export const get = (url, data = {}, token) => {
    return request({
        url,
        method: 'get',
        data,
        token
    });
}

export const patch = (url, data = {}, token) => {
    return request({
        url,
        method: 'patch',
        data,
        token
    });
}

export const deleteReq = (url, data = {}, token) => {
    return request({
        url,
        method: 'delete',
        data,
        token
    });
}