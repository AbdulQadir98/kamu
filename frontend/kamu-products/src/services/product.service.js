import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8082/api/products/';

export function getProducts() {
  return axios.get(API_URL + '/');
}

export function getItem(id) {
  return axios.get(API_URL + `/${id}`, { headers: authHeader() });
}