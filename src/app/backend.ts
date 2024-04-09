import axios from 'axios';
import setInterceptor from './interceptor';
const baseUrl = 'http://localhost:4000/api/';
const API = {
  login: baseUrl + 'user/login',
  signup: baseUrl + 'user/signup',
};

export interface LoginPayload {
  phone: string;
  password: string;
}

setInterceptor(axios);
async function login({ phone, password }: LoginPayload) {
  const data = await axios.post(API.login, { phone, password });
  return data;
}
const userAPI = { login };
export { userAPI, baseUrl };
