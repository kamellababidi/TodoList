import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    state: () => ({
        tasks: []
    })
});

export default rootReducer;
