import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';

const rootReducer = combineReducers({
    reducerContacts: contactsReducer,
});

export default rootReducer;
