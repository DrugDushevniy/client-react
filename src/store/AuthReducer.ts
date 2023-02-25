import AuthService from "../Service/AuthService";
import {IUser} from "../models/IUser";

interface UserState {
    user: any;
    isAuth: boolean;
    isLoading?: boolean;
}

const initialState: UserState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: null
}
const CHECKAUTH = "CHECKAUTH";
const ISLOADING = "ISLOADING"
const LOGIN = "LOGIN";
const REGISTRATION = "REGISTRATION";
const LOGOUT = "LOGOUT";
const ERROR = "ERROR";

export const AuthReducer = (state = initialState, action): UserState =>{
    switch (action.type) {
        case ISLOADING:
                if(action.payload){
                    return {...state, isLoading: true}
                }
                else if(!action.payload){
                    return {...state, isLoading: false}
                }
                else return state
        case CHECKAUTH:
            try {
                localStorage.setItem('token', action.payload.accessToken)
                return {...state, user: action.payload.user, isAuth: true, isLoading:false}
            }
            catch (e) {
                console.log('Ошибка в ЧЕКАУТЕ ',e)
                break
            }
        case LOGIN:
            try {
                console.log(action.payload)
                localStorage.setItem('token', action.payload.accessToken)
                return {...state, user: action.payload.user, isAuth: true}
            } catch(e){
                console.log('ОШИБКА В РЕДУСЕРЕ БРАТ, ', e)
                return state
            }
        case LOGOUT:
           try {
                console.log('Logout')
                localStorage.removeItem('token')
                return {...state, user: {}, isAuth: false}
           }
           catch (e){
               console.log('e')
               return state
           }
        case REGISTRATION:
            try {
                console.log(action.payload)
                localStorage.setItem('token', action.payload.accessToken)
                return {...state, user: action.payload.user, isAuth: true}
            }catch(e){
                console.log(e)
                return state
            }
        case ERROR:
            try {
                console.log(action.payload)
                return {...state, isLoading: false}
            }catch(e){
                console.log(e)
                return state
            }

        default:
            return state;
    }
}
export const isLoadingAction = (payload) => ({type: ISLOADING, payload})
export const LoginAction = (payload) => ({type: LOGIN, payload})
export const RegistrationAction = (payload) => ({type: REGISTRATION, payload})
export const LogoutAction = () => ({type: LOGOUT})
export const CheckAuthAction = (payload) => ({type: CHECKAUTH, payload})
export const ErrorAction = (payload) => ({type: ERROR, payload})