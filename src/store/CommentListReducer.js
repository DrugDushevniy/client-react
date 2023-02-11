const defaultState = {
    commentsList: []
}

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = "REMOVE_COMMENT";
const LOAD_FROM_STORAGE = "LOAD_FROM_STORAGE";

export const CommentListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {...state, commentsList: [...state.commentsList, action.payload]}
        case REMOVE_COMMENT:
            return {...state, commentsList: state.commentsList.filter(list => list._id !== action.payload)}
        case LOAD_FROM_STORAGE:
            return {...state, commentsList: action.payload}
        default:
            return state
    }
}

export const AddCommentAction = (payload) => ({type: ADD_COMMENT, payload});
export const RemoveCommentAction = (payload) => ({type: REMOVE_COMMENT, payload});
export const LoadFromStorageAction = (payload) => ({type: LOAD_FROM_STORAGE, payload});
