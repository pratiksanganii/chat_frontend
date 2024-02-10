import axios from 'axios';

const base = 'http://localhost:5000/';
const API = {
  login: base + 'login',
  signup: base + 'signup',
};

export interface LoginPayload {
  phone: string;
  password: string;
}

async function login({ phone, password }: LoginPayload) {
  const data = await axios.post(API.login, { phone, password });
  return data;
}
const userAPI = { login };
export { userAPI };
