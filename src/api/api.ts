import axios from 'axios';
// import Cookies from 'js-cookie';

export const baseUrl = () => {
  // return import.meta.env.VITE_BASE_URL;
  // return 'http://localhost:8080';
  return 'http://benepick.kro.kr:10001';
};

const api = axios.create({
  baseURL: 'http://benepick.kro.kr:10001/',
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    // const accessToken = localStorage.getItem("accessToken");
    // const tokenString = Cookies.get('token');
    const tokenString =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJleHAiOjE3MjI4ODMzMzR9.jXOqvSgFKrs4rdKBYpdfPNDT9lXDaqRvyVIJ00HuZwI';
    // let accessToken = null;
    const accessToken = tokenString;

    // if (tokenString) {
    //   try {
    //     const tokenData = JSON.parse(tokenString);
    //     accessToken = tokenData.token;
    //   } catch (e) {
    //     console.error('Error parsing token from cookie:', e);
    //   }
    // }
    // console.log('accessToken:', accessToken);
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
  }
  return config;
});

export default api;
