import apiClient from "../api/apiClient";
import { FETCH_ALL_REALMS, CREATE_REALM, DELETE_REALM } from "./types";

export function fetchAllRealms() {
  return {
    type: FETCH_ALL_REALMS,
    payload: apiClient.get("/realm"),
  };
}

export function createRealm(data) {
  return {
    type: CREATE_REALM,
    payload: apiClient.post("/realm", data),
  };
}

export function deleteRealm(id) {
  return {
    type: DELETE_REALM,
    payload: apiClient.get(`/realm/${id}`),
  };
}
