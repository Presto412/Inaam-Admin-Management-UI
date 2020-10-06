import axios from 'axios';
import {FETCH_ALL_REALMS, CREATE_REALM, DELETE_REALM} from './types';

export function fetchAllRealms() {
    return{
        type: FETCH_ALL_REALMS,
        payload: axios.get('/realm')
    }
}

export function createRealm(data) {
    return{
        type: CREATE_REALM,
        payload: axios.post('/realm',data)
    }
}

export function deleteRealm(id) {
    return{
        type: DELETE_REALM,
        payload: axios.get(`/realm/${id}`)
    }
}