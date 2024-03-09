import axios from 'axios';

export const httpInctance = axios.create(
  {
    baseURL: import.meta.env.VITE_APP_SERVER_APP_URL,
    headers: {
      Authorization: localStorage.token ? 'Bearer ' + localStorage.token : null,
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
)