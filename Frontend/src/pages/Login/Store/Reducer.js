import {CHECK_LOGIN} from "./Constrants";

const initState = false;

function Reducer(state, action) {
    switch (action.type) {
        case CHECK_LOGIN:
            return action.check; 
        default:
            throw new Error('Invalid action.');
    }
}

export { initState }
export default Reducer