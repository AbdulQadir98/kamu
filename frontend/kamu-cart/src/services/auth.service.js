// changed authService to functional approach
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

export function login(username, password) {
  return axios
    .post(API_URL + "signin", {
      username,
      password
    })
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
}

export function logout() {
  localStorage.removeItem("user");
}

export function register(username, email, firstname, lastname, password) {
  return axios.post(API_URL + "signup", {
    username,
    email,
    firstname,
    lastname,
    password
  });
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export function isSignedIn() {
  if (JSON.parse(localStorage.getItem('user')) !== null){
    return true;
  } else {
    return false;
  }
}