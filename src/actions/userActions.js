import axios from 'axios';
import {FETCH_ALL_REALM_USERS, CREATE_USER, DELETE_USER} from './types';

export function fetchAllRealmUsers(realmId) {
    return{
        type: FETCH_ALL_REALM_USERS,
        payload: axios.get(`/${realmId}/users`)
    }
}

export function createUser(data) {
    return{
        type: CREATE_USER,
        payload: axios.post('/user',data)
    }
}

export function deleteUser(id) {
    return{
        type: DELETE_USER,
        payload: axios.get(`/user/${id}`)
    }
}