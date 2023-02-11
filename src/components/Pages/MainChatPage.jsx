import React, {useEffect, useState, useRef} from 'react';
import cl from "./PagesCSS/MainChatPage.module.css"
import NewMessage from "../NewMessage";
import HDRbutton from "../UI/Buttons/HDRbutton";
import axios from "axios";
import {useLocation} from 'react-router-dom'
import RoomBlock from "../ComponentsCSS/roomBlock";

let socket;

const MainChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState([]);
    const [statusPage, setStatusPage] = useState(false)
    const messagesEndRef = useRef(null);

    useEffect(()=>{
        socket = new WebSocket("ws://localhost:5000/")
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
            <RoomBlock />
                <RoomBlock />
                <RoomBlock />
                <RoomBlock />
                <RoomBlock />
                <RoomBlock />
                <RoomBlock />


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
                </div>
                <div className={cl.inputForm}>
                    <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Введите сообщение..."/>
                    <HDRbutton onClick={sendMessage}>Отправить</HDRbutton>
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