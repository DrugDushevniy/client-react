import React, {useEffect} from 'react';
import './styles/main.css'
import {Comments} from "./components/Pages/Comments";
import {Route, Routes, useLocation, useNavigate, redirect} from "react-router-dom";
import {NotFound} from "./components/Pages/NotFound";
import {MainPage} from "./components/Pages/MainPage.jsx";
import {Layout} from "./components/Layout";
import {SelectedComment} from "./components/Pages/SelectedComment";
import MainChatPage, {closeConn} from "./components/Pages/MainChatPage";
import LoginPage from "./components/Pages/LoginPage";
import RegistrationPage from "./components/Pages/RegistrationPage";
import {useDispatch, useSelector} from "react-redux";
import {store} from "./store";
import AuthService from "./Service/AuthService.ts";
import {CheckAuthAction} from "./store/AuthReducer.ts";
import {checkAuthAsync} from "./asyncActions/authAsync";



function App() {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const Auth = useSelector(state=> state.authRed)
    const isLoading = useSelector(state=> state.authRed.isLoading)
    useEffect(()=>{
        if (location.pathname !== "/chat") closeConn()
    },[location.pathname]);
    useEffect(()=>{
             dispatch(checkAuthAsync());
    },[])

    if(!Auth.isAuth) {
        if(isLoading===false) {
         return  <Routes>
                    <Route path="/" element={<LoginPage />}/>
                    <Route path="registration" element={<RegistrationPage />} />
                    <Route path="*" element={<LoginPage />}/>
                </Routes>;
        }
        return <div>Загрузка</div>
    }


  return (
          <>
                <Routes>
                   <Route path="/" element={<Layout />}>
                       <Route index element={<MainPage />}/>
                       <Route path="posts" element={<Comments />}/>
                       <Route path="posts/:id" element={<SelectedComment />} />
                       <Route path="*" element={<NotFound  />}/>
                   </Route>
                    <Route path="chat" element={<MainChatPage />}/>
                </Routes>
          </>



  );
}

export default App;
