export const FETCH_ALL_REALMS = "FETCH_ALL_REALMS";
export const CREATE_REALM = "CREATE_REALM";
export const DELETE_REALM = "DELETE_REALM";

export const FETCH_ALL_REALM_USERS = "FETCH_ALL_REALM_USERS";
export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";

export const FETCH_ALL_REALM_GROUPS = "FETCH_ALL_REALM_GROUPS";
export const CREATE_GROUP = "CREATE_GROUP";
export const DELETE_GROUP = "DELETE_GROUP";

export function getPending(str) {
    return str + '_PENDING';
}
  
 export function getFulfilled(str) {
    return str + '_FULFILLED';
}

 export function getRejected(str) {
    return str + '_REJECTED';
}
