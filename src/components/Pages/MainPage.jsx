import React from 'react';
import {Link} from "react-router-dom";
import cl from  "./PagesCSS/MainPage.module.css"



const MainPage = () => {
    return (
            <div className={cl.mainPage}>
                <div className={cl.header}>HEADER</div>
                <div className={cl.mainContainer}>MAIN CONTAINER</div>
                <div className={cl.footer}>FOOTER</div>
            </div>


    );
};

export {MainPage};