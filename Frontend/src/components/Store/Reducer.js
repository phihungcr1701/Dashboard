import {CHECK_LOGIN, CHECK_EMAIL, ADD_ACCOUNT} from "./Constrants";

const initStateLogin = false;
const initStateRegister = {};

function Reducer(state, action) {
    switch (action.type) {
        case CHECK_LOGIN:
            return action.check; 
        case CHECK_EMAIL:
            return action.check; 
        case ADD_ACCOUNT:
            return action.check; 
        default:
            throw new Error('Invalid action.');
    }
}

export { initStateLogin, initStateRegister }
export default Reducer