import React, {useEffect, useState, useRef} from 'react';
import cl from "./PagesCSS/MainChatPage.module.css"
import NewMessage from "../NewMessage";
import HDRbutton from "../UI/Buttons/HDRbutton";
import axios from "axios";
import {useLocation} from 'react-router-dom'
import RoomBlock from "../roomBlock";

let socket;

const MainChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState([]);
    const [statusPage, setStatusPage] = useState(false)
    const messagesEndRef = useRef(null);

    useEffect(()=>{
        // ws://87.249.44.57:5000/ws
        socket = new WebSocket("ws://87.249.44.57:5000/wsn")
        socket.onopen = (event) => {
            console.log('Client: Ты подключился');
            socket.send(JSON.stringify({
                method: "connection",
                id: Date.now()
            }))
        }
        setStatusPage(true)


    },[])

      useEffect(()=>{
          socket.onmessage = (event) => {
              let parsedData = JSON.parse(event.data)
              switch (parsedData.method) {
                  case "first-connection":
                      setMessages(parsedData.allMessages)
                      break;
                  case "new-connection-msg":
                      setMessages(prev=>[...prev, {connection: parsedData.body, _id: Date.now() }])
                      break;
                  case "new-message":
                      console.log(parsedData)
                      setMessages(prev=>[...prev, parsedData.body])
                      break;
                  default:
                      console.log('Неизвестная хуйня')
                      break;
              }
          }
      },[statusPage])




    const location = useLocation();

    function getDateTime() {
        let dateC = new Date()
        return (
            dateC.toLocaleString()
        )
    }

    const scrollToBottom = () => {
        messagesEndRef.current && messagesEndRef.current.scrollIntoView();
    };





    useEffect(()=>{
        scrollToBottom()
    },[messages]);

    const sendMessage =() =>{

        let message = {
            author: "Николай",
            body: input,
            date: getDateTime(),
            ids: Date.now()
        }
        socket.send(JSON.stringify({
            method: "message",
            body: message
        }))
        setInput('')
        // socket.onmessage = (event) => {
        //     setMessages(prev=>[...prev, JSON.parse(event.data)])
        // }


    }

    return (
        <div className={cl.mainContainer}>
            <div className={cl.leftMenuWindow}>
                <div className={cl.roomsMainHeader}>
                    <div className={cl.roomsHeader}>
                        <div className={cl.menuButton}>lll</div>
                        <div className={cl.roomSearch}>
                            <input className={cl.roomSearchInput} placeholder="Search" />
                        </div>
                    </div>
                </div>
                <div className={cl.chatList}>
                    <RoomBlock />
                    <RoomBlock />
                    <RoomBlock />
                    <RoomBlock />
                    <RoomBlock />
                    <RoomBlock />
                    <RoomBlock />
                </div>



            </div>

            <div className={cl.chatInput}>
                <div className={cl.chatWindow}>
                    <div className={cl.chatBar}>
                        {
                            messages.map(mess=>{

                                return <NewMessage
                                    key={mess._id}
                                    author={mess.author}
                                    date={mess.date}
                                    message={mess.body}
                                    connection={mess.connection}
                                    messagesEndRef={messagesEndRef}/>
                            })

                        }
                    </div>
                    <div className={cl.inputForm}>
                        <input className={cl.messInput} value={input} onChange={e=>setInput(e.target.value)} placeholder="Введите сообщение..."/>
                        <button className={cl.sendMessageButton} onClick={sendMessage}>-S E N D-</button>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default MainChatPage;
export const closeConn = () => {
    if (socket) {
        switch (socket.readyState) {
            case 0:
                socket.close()
                console.log('Соединение закрылось!')
                break;
            case 1:
                socket.close()
                console.log('Соединение закрылось!')
                break;
            default:
                console.log(socket)
        }
    }



}