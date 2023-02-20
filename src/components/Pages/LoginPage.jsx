import React from 'react';
import cl from './PagesCSS/LoginPage.module.css'
import reg_ico from "../../img/reg_ico.png"
import {Link} from "react-router-dom";

const LoginPage = () => {
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
                       onKeyDown={e=>{if(e.key==="Enter")alert('Нажат энтер!')}}
                       placeholder="Введите имя пользователя"/>
                <input className={cl.passINP}
                       onKeyDown={e=>{if(e.key==="Enter")alert('Нажат энтер!')}}
                       placeholder="Введите пароль"
                       type={"password"}/>
                <button className={cl.enterBTN}>-LOGIN-</button>
            </div>
        </div>
    );
};

export default LoginPage;