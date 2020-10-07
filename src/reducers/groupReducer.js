import {
    getPending,
    getFulfilled,
    getRejected,
    FETCH_ALL_REALM_GROUPS,
    CREATE_GROUP,
    DELETE_GROUP,
} from "../actions/types";

const initialState = {
    fetching: false,
    fetched: false,
    updated: false,
    deleting: false,
    deleted: false,
    error: false,
    groups: [],
};

function groupReducer(state = initialState, action) {
    switch (action.type) {
        case getPending(FETCH_ALL_REALM_GROUPS): {
            return {
                ...state,
                fetching: true,
                fetched: false,
            };
        }
        case getFulfilled(FETCH_ALL_REALM_GROUPS): {
            if (action.payload.status === 200) {
                action.payload = action.payload.data.groups;
            }
            return {
                ...state,
                fetched: true,
                fetching: false,
                error: false,
                groups: action.payload,
            };
        }
        case getRejected(FETCH_ALL_REALM_GROUPS): {
            return {
                ...state,
                fetched: false,
                fetching: false,
                error: action.payload,
                groups: [],
            };
        }

        case getPending(CREATE_GROUP): {
            return {
                ...state,
                fetching: true,
                fetched: false,
            };
        }
        case getFulfilled(CREATE_GROUP): {
            //console.log(action.payload);
            if (action.payload.status === 200) {
                action.payload = action.payload.data.success;
            }

            return {
                ...state,
                fetched: true,
                fetching: false,
                error: false,
            };
        }
        case getRejected(CREATE_GROUP): {
            return {
                ...state,
                fetched: false,
                fetching: false,
                error: action.payload,
            };
        }

        case getPending(DELETE_GROUP): {
            return {
                ...state,
                deleting: true,
                deleted: false,
            };
        }
        case getFulfilled(DELETE_GROUP): {
            //console.log(action.payload);
            if (action.payload.status === 200) {
                action.payload = action.payload.data.success;
            }

            return {
                ...state,
                deleted: true,
                deleting: false,
                error: false,
            };
        }
        case getRejected(DELETE_GROUP): {
            return {
                ...state,
                deleted: false,
                deleting: false,
                error: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}

export default groupReducer;
