import { combineReducers } from 'redux';
import realmReducer from './realmReducer';
import userReducer from './userReducer';
import groupReducer from './groupReducer';

const rootReducer = combineReducers({
    realm : realmReducer,
    user : userReducer,
    group : groupReducer
});

export default rootReducer;