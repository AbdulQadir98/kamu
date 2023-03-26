import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8083/api/orders/';

// get all orders of the current user
export function getOrders(id) {
  return axios.get(API_URL + `?user_id=${id}`, { headers: authHeader() });
}

// get order by order id
export function getOrder(id) {
  return axios.get(API_URL + `/${id}`, { headers: authHeader() });
}

export function newOrder(user_id, name, count, price, items) {
  return axios.post(API_URL, { user_id, name, count, price, items });
}

export function deleteOrder(id) {
  return axios.delete(API_URL + id, { headers: authHeader() });
}