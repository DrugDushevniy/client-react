import {createStore, combineReducers, applyMiddleware} from "redux";
import {NumberReducer} from "./NumberReducer";
import {CustomerReducer} from "./CustomerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {CommentListReducer} from "./CommentListReducer";


const rootReducer = combineReducers({
    numbersRed: NumberReducer,
    customerRed: CustomerReducer,
    commentsRed: CommentListReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

