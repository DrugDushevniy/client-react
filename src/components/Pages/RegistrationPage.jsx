import React from 'react';
import cl from './PagesCSS/LoginPage.module.css'
import log_ico from "../../img/log_ico.png"
import {Link} from "react-router-dom";

const RegistrationPage = () => {
    return (
        <div className={cl.loginMainContainer}>
            <div className={cl.regBox}>
                <Link to="/login">
                    <img className={cl.logIco} src={log_ico} alt="Reg" />
                </Link>
            </div>

            <div className={cl.authContainer}>
                <span className={cl.loginLabel}>Регистрация нового пользователя</span>
                <input className={cl.loginINP}
                       onKeyDown={e=>{if(e.key==="Enter")alert('Нажат энтер!')}}
                       placeholder="Введите имя пользователя"/>
                <input className={cl.passINP}
                       onKeyDown={e=>{if(e.key==="Enter")alert('Нажат энтер!')}}
                       placeholder="Введите пароль"
                       type={"password"}/>
                <input className={cl.passINP}
                       onKeyDown={e=>{if(e.key==="Enter")alert('Нажат энтер!')}}
                       placeholder="Повторите пароль"
                       type={"password"}/>
                <button className={cl.regBTN}>-REGISTER-</button>
            </div>
        </div>
    );
};

export default RegistrationPage;