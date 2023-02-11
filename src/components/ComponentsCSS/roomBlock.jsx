import React from 'react';
import cl from "../Pages/PagesCSS/MainChatPage.module.css";

const RoomBlock = () => {
    return (

        <div className={cl.roomBlock}>
                <div className={cl.mainStatus}>
                    <div className={cl.statusColor}>●</div>
                    <div className={cl.roomName}> Паша </div>
                    <div className={cl.time}>10:40, вт</div>
                </div>


                <div className={cl.lastMessage}>Помнишь ты звонил</div>
            </div>

    );
};

export default RoomBlock;