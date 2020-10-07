import { combineReducers } from "redux";
import realmReducer from "./realmReducer";
import userReducer from "./userReducer";
import groupReducer from "./groupReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    realm: realmReducer,
    user: userReducer,
    group: groupReducer,
    auth: authReducer,
});

export default rootReducer;
