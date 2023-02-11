import React, {useEffect, useState} from 'react';
import CommentItem from "../CommentItem";
import {useDispatch, useSelector} from "react-redux";
import {AddCustomerAction, RemoveCustomerAction} from "../../store/CustomerReducer";
import {fetchCustomers} from "../../asyncActions/customers";
import {AddCommentAction, LoadFromStorageAction, RemoveCommentAction} from "../../store/CommentListReducer";
import axios from "axios";
import {Link} from "react-router-dom";

const Comments = () => {
    const [inpName, setInpName] = useState('');
    const [inpDesc, setInpDesc] = useState('');
    const BASE_URL = "http://localhost:5000/api/posts";

    const dispatch = useDispatch();
    const counterComm = useSelector(state => state.numbersRed.counterComm);
    const customers = useSelector(state => state.customerRed.customers);
    const comments = useSelector(state => state.commentsRed.commentsList)

    const minusCounter = (num) => {
        dispatch({type: "MINUS_NUMBER", payload: num})
    }
    const addCustomer = (name) => {
        let customerObj = {
            name,
            id: Date.now()
        }
        dispatch(AddCustomerAction(customerObj))

    }
    const removeCustomer = (id) => {
        dispatch(RemoveCustomerAction(id))
    }

    // При загрузке страницы подтягиваются комментарии, если они были сохранены в локал сторейдж
    useEffect(()=>{
        axios.get(BASE_URL)
            .then((res) => {
                console.log(res.data);
                return res.data
            })
           .then((obj)=> (dispatch(LoadFromStorageAction(obj))))
            .catch((err)=>console.log('Ошибка', err));
        console.log('Страничка загрузилась');
      // if(comments.length<1 && localStorage.getItem('stgCommentsList')!== null) {
      //  dispatch(LoadFromStorageAction(JSON.parse(localStorage.getItem('stgCommentsList'))))
      //      console.log(comments)
      //  }

    },[]);


    function getDateTime() {
        let dateC = new Date()
        return (
            dateC.toLocaleString()
        )

    }

    async function addComment(){
        let newComm = {author: inpName, body: inpDesc, ids: Date.now(), date: getDateTime()}

        // findOne({ $query: {}, $orderby: { _id : -1 } })
        // await axios.post(BASE_URL, newComm)
        //     .then((response)=>console.log(response)).catch((err)=>console.log(err));
        await axios.post(BASE_URL, newComm)
            .then(res=> {
                console.log(res.data._id);
                return dispatch(AddCommentAction(res.data))}
                )
            .catch(err=>console.log("Ошибка с созданием поста ",err));


        setInpName('');
        setInpDesc('');
    }
    function removeComment(id){

        console.log(BASE_URL+`/${id}`)
        axios.delete(BASE_URL+`/${id}`)
            .then((response)=>console.log(response)).catch((err)=>console.log(err));
        dispatch(RemoveCommentAction(id))
    }
    return (
        <div className="main-container">
            { (comments.length>0) ?
                comments.map(comm => {
                    return <Link to={`/posts/${comm._id}`} key={comm.ids}> <CommentItem
                        name={comm.author}
                        desc={comm.body}

                        del={removeComment}
                        dateTime={comm.date}
                        id={comm.ids}
                        _id={comm._id}/></Link>
                                })    :
                <div className="content-container" style={{
                    justifyContent: "center",
                    alignItems:"center",
                    height: 50}}>Сообщений не найдено</div>

            }



            <div className="sendForm-container">
                <div className="allInputs">
                    <div>{counterComm}</div>
                    <div>{(customers.length!==0) ? customers.map(cust=>{
                        return <div key={cust.id} onClick={()=>removeCustomer(cust.id)}>{cust.name}</div>
                    }) : <div>Кастомеры не найдены</div>}</div>
                    <input value={inpName} onChange={e=>setInpName(e.target.value)} className="inpName" placeholder="Введите имя" />
                    <textarea value={inpDesc} onChange={e=>setInpDesc(e.target.value)} className="inpDesc" placeholder="Введите комментарий" />
                </div>
                <button onClick={addComment}>Отправить</button>
                <button onClick={()=>minusCounter(Number(inpName))}>-</button>
                <button onClick={()=>addCustomer(inpDesc)}>Добавить пользователя</button>
                <button style={{height: 90, width: 110}} onClick={()=>dispatch(fetchCustomers())}>Загрузить пользователей из базы данных</button>
            </div>
        </div>
    );
};

export {Comments};