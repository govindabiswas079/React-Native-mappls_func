import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = axios.create({ baseURL: 'https://127.0.0.1:8080/api' });

API.interceptors.request.use(async (req) => {
  const data = await AsyncStorage.getItem('isAuth');
  if (data) {
    req.headers.Authorization = '';
    req.headers.ContentType = 'application/json';
    req.headers.Accept = 'application/json';
  } else {
    req.headers.ContentType = 'application/json';
    req.headers.Accept = 'application/json';
  }
  return req;
});


export const userLogin = (body) => axios.post(`https://127.0.0.1:8080/api/user/login`, body);