import {getPending, getFulfilled, getRejected,FETCH_ALL_REALMS, CREATE_REALM, DELETE_REALM} from '../actions/types';

const initialState = {
    fetching: false,
    fetched: false,
    updated: false,
    deleting : false,
    deleted : false,
    error: false,
    realms: []
    //realm: {},
}

function realmReducer(state=initialState, action) {
    switch (action.type) {
        case getPending(FETCH_ALL_REALMS): {
            return {
                ...state,
                fetching : true,
                fetched : false
            }
        }
        case getFulfilled(FETCH_ALL_REALMS): {
            if (action.payload.status === 200) {
                action.payload = action.payload.data.realms
            }
            return {
                ...state,
                fetched: true,
                fetching: false,
                error: false,
                realms: action.payload
                
            }
        }
        case getRejected(FETCH_ALL_REALMS): {
            return {
                ...state,
                fetched: false,
                fetching: false,
                error: action.payload,
                realms: []
            }
        }

        case getPending(CREATE_REALM): {
            return {
                ...state,
                fetching : true,
                fetched : false
            }
        }
        case getFulfilled(CREATE_REALM): {
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
        case getRejected(CREATE_REALM): {
            return {
                ...state,
                fetched: false,
                fetching: false,
                error: action.payload
            }
        }

        case getPending(DELETE_REALM): {
            return {
                ...state,
                deleting : true,
                deleted : false
            }
        }
        case getFulfilled(DELETE_REALM): {
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
        case getRejected(DELETE_REALM): {
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

export default realmReducer;