

const defaultState = {
    counterComm: 0
}

export const NumberReducer = (state = defaultState, action) => {
    switch (action.type){

        case "PLUS_NUMBER":
            return {...state, counterComm: state.counterComm + action.payload}
        case "MINUS_NUMBER":
            return {...state, counterComm: state.counterComm - action.payload}
        default:
            return state;
    }
}