import {getPending, getFulfilled, getRejected,FETCH_ALL_REALM_USERS, CREATE_USER, DELETE_USER} from '../actions/types';

const initialState = {
    fetching: false,
    fetched: false,
    updated: false,
    deleting : false,
    deleted : false,
    error: false,
    users: []
    //realm: {},
}

function userReducer(state=initialState, action) {
    switch (action.type) {
        case getPending(FETCH_ALL_REALM_USERS): {
            return {
                ...state,
                fetching : true,
                fetched : false
            }
        }
        case getFulfilled(FETCH_ALL_REALM_USERS): {
            if (action.payload.status === 200) {
                action.payload = action.payload.data.users
            }
            return {
                ...state,
                fetched: true,
                fetching: false,
                error: false,
                users: action.payload
                
            }
        }
        case getRejected(FETCH_ALL_REALM_USERS): {
            return {
                ...state,
                fetched: false,
                fetching: false,
                error: action.payload,
                users: []
            }
        }

        case getPending(CREATE_USER): {
            return {
                ...state,
                fetching : true,
                fetched : false
            }
        }
        case getFulfilled(CREATE_USER): {
            //console.log(action.payload);
            if (action.payload.status === 200) {
                action.payload = action.payload.data.success
            }

            return {
                ...state,
                fetched: true,
                fetching: false,
                error: false,
            }
        }
        case getRejected(CREATE_USER): {
            return {
                ...state,
                fetched: false,
                fetching: false,
                error: action.payload
            }
        }

        case getPending(DELETE_USER): {
            return {
                ...state,
                deleting : true,
                deleted : false
            }
        }
        case getFulfilled(DELETE_USER): {
            //console.log(action.payload);
            if (action.payload.status === 200) {
                action.payload = action.payload.data.success
            }

            return {
                ...state,
                deleted : true,
                deleting: false,
                error: false,
            }
        }
        case getRejected(DELETE_USER): {
            return {
                ...state,
                deleted: false,
                deleting: false,
                error: action.payload
            }
        }

        default: {
            return state;
          }
    }
}

export default userReducer;