import apiClient from "../api/apiClient";
import { FETCH_ALL_REALM_USERS, CREATE_USER, DELETE_USER } from "./types";

export function fetchAllRealmUsers(realmId) {
    return {
        type: FETCH_ALL_REALM_USERS,
        payload: apiClient.get(`/${realmId}/users`),
    };
}

export function createUser(data) {
    return {
        type: CREATE_USER,
        payload: apiClient.post("/user", data),
    };
}

export function deleteUser(id) {
    return {
        type: DELETE_USER,
        payload: apiClient.get(`/user/${id}`),
    };
}
