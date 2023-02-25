import axios from "axios";
import {API_URL} from "../config.js"

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {'Access-Control-Allow-Origin': 'http://1253919-ca24285.tw1.ru/'}
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export default $api;