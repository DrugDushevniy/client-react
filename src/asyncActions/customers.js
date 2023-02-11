import {AddManyCustomersAction} from "../store/CustomerReducer";

export const fetchCustomers = () => {
        return (dizpatch) => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json =>dizpatch(AddManyCustomersAction(json)))

        }
}