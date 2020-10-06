import { combineReducers } from 'redux';
import realmReducer from './realmReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    realm : realmReducer,
    user : userReducer
});

export default rootReducer;