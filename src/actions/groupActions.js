import apiClient from "../api/apiClient";
import { FETCH_ALL_REALM_GROUPS, CREATE_GROUP, DELETE_GROUP } from "./types";

export function fetchAllRealmGroups(realmId) {
    return {
        type: FETCH_ALL_REALM_GROUPS,
        payload: apiClient.get(`/${realmId}/groups`),
    };
}

export function createGroup(data) {
    return {
        type: CREATE_GROUP,
        payload: apiClient.post("/group", data),
    };
}

export function deleteGroup(id) {
    return {
        type: DELETE_GROUP,
        payload: apiClient.get(`/group/${id}`),
    };
}
