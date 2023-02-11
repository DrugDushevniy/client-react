const defaultState = {
    customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";

export const CustomerReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(cust => cust.id !== action.payload)}
        default:
            return state;
    }
}

export const AddCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const AddManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload});
export const RemoveCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})