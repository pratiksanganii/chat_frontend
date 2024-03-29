import { Axios } from 'axios';

export default function setInterceptor(axios: Axios) {
  axios.interceptors.response.use(
    (value) => {
      return value;
    },
    (error) => { 
      return error;
    }
  );
}
