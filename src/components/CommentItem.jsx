import React from 'react';
import {RemoveCommentAction} from "../store/CommentListReducer";
import {Link} from "react-router-dom";


const CommentItem = ({name, desc, dateTime,del,ids, _id}) => {
    return (
        <div className="content-container">
            <div className="comment-container">
                <div className="commentNameAndData">
                    <div>{name}</div>
                    <div>{dateTime}</div>
                </div>
                <div className="commentDesc">
                    {desc}
                </div>
            </div>
            <button className="deleteBTN" onClick={()=>del(_id)}>X</button>
        </div>
    );
};

export default CommentItem;