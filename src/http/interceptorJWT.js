import axios from "axios";
import {API_URL} from "../config.js"

const $api = axios.create({
    withCredentials: true,
    SameSite: 'Strict',
    baseURL: API_URL+"/auth",
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export default $api;