import $api from "../http/interceptorJWT.js";
import axios from "axios";
import {LoginAction,LogoutAction,RegistrationAction,CheckAuthAction,ErrorAction,isLoadingAction} from "../store/AuthReducer.ts";
import {API_URL} from "../config.js";



export const loginAsync = (username, password) => {

    return (dispatch) => {
        $api.post('/login', {username,password})
            .then(res=>dispatch(LoginAction(res.data)))
            .catch(e=>dispatch(ErrorAction(e.response.data.message)))
    }
}
export const logoutAsync = (username, password) => {
    return (dispatch) => {
        $api.post('/logout', {username, password})
            .then(dispatch(LogoutAction()))
            .catch(e=>dispatch(ErrorAction(e.response.data.message)))
    }
}
export const registrationAsync = (username, password) => {
    return (dispatch) => {
        console.log(username,password)
        $api.post('/registration', {username, password})
            .then(res=>dispatch(RegistrationAction(res.data)))
            .catch(e=>dispatch(ErrorAction(e.response.data)))
    }
}
export const checkAuthAsync = () => {
    return (dispatch) => {
        dispatch(isLoadingAction(true))
        axios.get(`${API_URL}/auth/refresh`,{withCredentials: true})
            .then(res=> { console.log(res.data)
             return dispatch(CheckAuthAction(res.data))})
            .catch(e=>dispatch(ErrorAction(e.response.data.message)))

    }
}