import axios from "axios";
const baseUrl = `http://localhost:4000/user`;

export const AuthService = {
  register,
  login,
  logout,
  getCurrentUser
};

function register(params) {
  return axios.post(`${baseUrl}/register`, params);
}

function login(params) {
  return axios.post(`${baseUrl}/login`, params).then((res) => {
    if (res.data.token) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  });
}

function logout() {
  localStorage.removeItem("user");
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}
