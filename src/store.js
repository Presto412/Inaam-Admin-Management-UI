import { applyMiddleware, createStore } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middlewares = applyMiddleware(promise, thunk);
const store = createStore(rootReducer, middlewares);

export default store;
