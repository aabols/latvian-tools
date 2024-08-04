import axios from 'axios';

const api = axios.create({
  baseURL: '/burti/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export { api };