import React, {useEffect} from 'react';
import './styles/main.css'
import {Comments} from "./components/Pages/Comments";
import {Route, Routes, useLocation} from "react-router-dom";
import {NotFound} from "./components/Pages/NotFound";
import {MainPage} from "./components/Pages/MainPage.jsx";
import {Layout} from "./components/Layout";
import {SelectedComment} from "./components/Pages/SelectedComment";
import MainChatPage, {closeConn} from "./components/Pages/MainChatPage";



function App() {
    const location = useLocation()
    useEffect(()=>{
        if (location.pathname !== "/chat") closeConn()
    },[location.pathname]);
  return (

          <>
                <Routes>
                   <Route path="/" element={<Layout />}>
                       <Route index element={<MainPage />}/>
                       <Route path="posts" element={<Comments />}/>
                       <Route path="posts/:id" element={<SelectedComment />} />
                       <Route path="*" element={<NotFound  />}/>
                       <Route path="chat" element={<MainChatPage />}/>
                   </Route>
                </Routes>
          </>



  );
}

export default App;
