import React from 'react';
import cl from "../UICSS/HDRbutton.module.css"

const HDRbutton = ({children, onClick, ...props}) => {
    return (
        <button className={cl.HDRBTN} onClick={onClick}>
            {children}
        </button>
    );
};

export default HDRbutton;