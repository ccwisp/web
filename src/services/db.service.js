import axios from 'axios';

const API_URL = 'http://localhost:4000/api/1/users/';

const insertUser = (user) => {
  return axios.post(API_URL + 'user', user).then((response) => {
    console.dir(response.data);
    return response.data;
  });
};
export default {
  insertUser,
};
