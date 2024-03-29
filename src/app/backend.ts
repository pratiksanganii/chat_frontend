import axios from 'axios';
import setInterceptor from './interceptor';
const base = 'http://localhost:4000/';
const API = {
  login: base + 'login',
  signup: base + 'signup',
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
export { userAPI };
