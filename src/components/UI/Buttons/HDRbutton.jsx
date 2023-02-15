import React from 'react';
import cl from "./HDRbutton.module.css"

const HDRbutton = ({children, style, onClick, ...props}) => {
    return (
        <button style={style} className={cl.HDRBTN} onClick={onClick}>
            {children}
        </button>
    );
};

export default HDRbutton;