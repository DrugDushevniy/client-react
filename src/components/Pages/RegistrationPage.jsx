import React, {useState} from 'react';
import cl from './PagesCSS/LoginPage.module.css'
import log_ico from "../../img/log_ico.png"
import {Link} from "react-router-dom";
import {registrationAsync} from "../../asyncActions/authAsync";
import {useDispatch} from "react-redux";

const RegistrationPage = () => {
    const [username, setUsername] = useState("user");
    const [password, setPassword] = useState("user");
    const [confirmPassword, setConfirmPassword] = useState("user");
    const dispatch = useDispatch()
    const registrationValidation = ()=>{
        if (password === confirmPassword){
            dispatch(registrationAsync(username,password))
        }
        else console.log('Указаны не идентичные пароли')
    }
    return (
        <div className={cl.loginMainContainer}>
            <div className={cl.regBox}>
                <Link to="/">
                    <img className={cl.logIco} src={log_ico} alt="Reg" />
                </Link>
            </div>

            <div className={cl.authContainer}>
                <span className={cl.loginLabel}>Регистрация нового пользователя</span>
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
                <input className={cl.passINP}
                       value={confirmPassword}
                       onChange={e=>setConfirmPassword(e.target.value)}
                       placeholder="Повторите пароль"
                       type={"password"}/>
                <button onClick={()=>registrationValidation()} className={cl.regBTN}>-REGISTER-</button>
            </div>
        </div>
    );
};

export default RegistrationPage;