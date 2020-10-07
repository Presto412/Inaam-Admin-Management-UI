import apiClient from "../api/apiClient";
import { LOGIN_URL } from "../Config/app.config";

class AuthService {
  login(username, password) {
    return apiClient
      .post(LOGIN_URL, { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
