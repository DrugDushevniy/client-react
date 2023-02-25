import React, {useState} from 'react';
import cl from './PagesCSS/LoginPage.module.css'
import reg_ico from "../../img/reg_ico.png"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AuthReducer, LoginAction} from "../../store/AuthReducer.ts";
import AuthService from "../../Service/AuthService.ts";
import {loginAsync,logoutAsync} from "../../asyncActions/authAsync.js";


const LoginPage = () => {
    const [username, setUsername] = useState("user");
    const [password, setPassword] = useState("user");
    const dispatch = useDispatch()
    return (
        <div className={cl.loginMainContainer}>
            <div className={cl.regBox}>
                <Link to="/registration">
                    <img className={cl.regIco} src={reg_ico} alt="Reg" />
                </Link>
            </div>

            <div className={cl.authContainer}>
                <span className={cl.loginLabel}>Авторизация</span>
                <input className={cl.loginINP}
                       value={username}
                       onChange={e=>setUsername(e.target.value)}
                       onKeyDown={e=>{if(e.key==="Enter")alert('Нажат энтер!')}}
                       placeholder="Введите имя пользователя"/>
                <input className={cl.passINP}
                       value={password}
                       onChange={e=>setPassword(e.target.value)}
                       onKeyDown={e=>{if(e.key==="Enter")alert('Нажат энтер!')}}
                       placeholder="Введите пароль"
                       type={"password"}/>
                <button onClick={()=>dispatch(loginAsync(username,password))} className={cl.enterBTN}>-LOGIN-</button>
                <button onClick={()=>dispatch(logoutAsync())} className={cl.enterBTN}>-LOGOUT-</button>
            </div>
        </div>
    );
};

export default LoginPage;