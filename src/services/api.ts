import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users/rgrassi1',
});

export default api;
