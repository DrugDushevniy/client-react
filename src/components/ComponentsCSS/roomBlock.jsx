import React from 'react';
import cl from "../Pages/PagesCSS/MainChatPage.module.css";

const RoomBlock = () => {
    return (

        <div className={cl.roomBlock}>
                <div className={cl.infoRow}>
                    <div className={cl.statusColor}>●</div>
                    <div className={cl.title}>
                        <h3 className={cl.fullName}>Паша</h3>
                    </div>
                    <div className={cl.separator} />
                    <div className={cl.lastMessageMeta}>10:40, вт</div>
                </div>
                <div className={cl.subtitle}>
                    <p className={cl.lastMessage}>Помнишь ты звонил</p>
                    <div className={cl.badgeTransition}>
                        <div className={cl.badgeUnread}>
                            <span className={cl.badge}><span>6</span></span>
                        </div>
                    </div>
                </div>

            </div>

    );
};

export default RoomBlock;