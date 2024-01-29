import axios from 'axios';

const base = 'http://localhost:4000/';
const API = {
  login: base + 'user/login',
  signup: base + 'user/signup',
};

export interface LoginPayload {
  email: string;
  password: string;
}

async function login({ email, password }: LoginPayload) {
  const data = await axios.post(base + API.login, { email, password });
  return data;
}
const userAPI = { login };
export { userAPI };
