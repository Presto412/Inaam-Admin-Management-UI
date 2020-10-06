import {
  setAuthTokens,
  clearAuthTokens,
  useAuthTokenInterceptor,
} from "axios-jwt";
import axios from "axios";
import { LOGIN_URL, REFRESH_TOKEN_URL } from "../Config/app.config";
import apiClient from "./apiClient";

// login
export const login = async (params) => {
  const res = (await axios.post(LOGIN_URL, params)).data;
  setAuthTokens(authResponseToAuthTokens(res));
};
export const authResponseToAuthTokens = (res) => ({
  accessToken: res.access_token,
  refreshToken: res.refresh_token,
});

export const logout = () => clearAuthTokens();

export const requestRefresh = async (refreshToken) => {
  return (await axios.post(REFRESH_TOKEN_URL, { token: refreshToken })).data
    .access_token;
};

useAuthTokenInterceptor(apiClient, { requestRefresh });
