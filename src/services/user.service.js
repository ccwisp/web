import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:4000/api/1/users/';

const getPublicContent = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const getUserBoard = () => {
  return axios.get(API_URL + 'me', { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
};
