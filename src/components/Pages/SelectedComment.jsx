import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {LoadFromStorageAction} from "../../store/CommentListReducer";


const SelectedComment = () => {
    const BASE_URL = "http://localhost:5000/api/posts"
    let {id} = useParams();
    const [post, setPost] = useState(null);
    console.log(BASE_URL+`/${id}`)
    useEffect(()=>{
        axios.get(BASE_URL+`/${id}`)
            .then((res) => {
                setPost(res.data);
            })
            .catch((err)=>console.log('Ошибка', err));
        console.log('Страничка загрузилась');


    },[])


    return (
        <div>
            {post && (
                <>
                    <h1 style={{color: "orange", textAlign: "center"}}>{post.author}</h1>
                    <p style={{color: "white", textAlign: "center"}}>{post.body}</p>
                </>
            )}
        </div>
    )
};

export {SelectedComment};