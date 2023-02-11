import React from 'react';
import {NavLink, Link, Outlet} from "react-router-dom";
import cl from "./Pages/PagesCSS/Layout.module.css"
import HDRbutton from "./UI/Buttons/HDRbutton";

const Layout = () => {
    return (
        <>
            <div className={cl.header}>
                <div className={cl.navbar}>
                    <NavLink to="/"><HDRbutton>Главная</HDRbutton></NavLink>
                    <NavLink to="/chat"><HDRbutton>Общий чат</HDRbutton></NavLink>
                    <NavLink to="/profile"><HDRbutton>Профиль</HDRbutton></NavLink>
                </div>
            </div>
                <Outlet />



        </>
    );
};

export {Layout};