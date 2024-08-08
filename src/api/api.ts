// import axios from 'axios';
// // import Cookies from 'js-cookie';

// export const baseUrl = () => {
//   // return import.meta.env.VITE_BASE_URL;
//   // return 'http://localhost:8080';
//   return 'http://benepick.kro.kr:10001';
// };

// const api = axios.create({
//   baseURL: 'http://benepick.kro.kr:10001/',
//   headers: {
//     common: {
//       'Content-Type': 'application/json',
//     },
//   },
// });

// api.interceptors.request.use((config) => {
//   if (typeof window !== 'undefined') {
//     // const accessToken = localStorage.getItem("accessToken");
//     // const tokenString = Cookies.get('token');
//     const tokenString =
//       'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJleHAiOjE3MjI4ODMzMzR9.jXOqvSgFKrs4rdKBYpdfPNDT9lXDaqRvyVIJ00HuZwI';
//     // let accessToken = null;
//     const accessToken = tokenString;

//     // if (tokenString) {
//     //   try {
//     //     const tokenData = JSON.parse(tokenString);
//     //     accessToken = tokenData.token;
//     //   } catch (e) {
//     //     console.error('Error parsing token from cookie:', e);
//     //   }
//     // }
//     // console.log('accessToken:', accessToken);
//     if (accessToken) {
//       config.headers['Authorization'] = `Bearer ${accessToken}`;
//     }
//   }
//   return config;
// });

// export default api;

import axios from 'axios';

export const baseUrl = () => {
  // return import.meta.env.VITE_BASE_URL;
  return 'http://benepick.kro.kr:10001';
};

const api = axios.create({
  baseURL: baseUrl(),
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
});

// 토큰 저장 함수
const saveTokens = (accessToken, refreshToken) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

// 로그인 후 토큰 저장 예시
// login 함수에서 response.data.accessToken과 response.data.refreshToken을 saveTokens로 전달
const login = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    const { accessToken, refreshToken } = response.data;
    saveTokens(accessToken, refreshToken);
    return response;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          const response = await axios.post(`${baseUrl()}/refresh-token`, { token: refreshToken });
          const { accessToken } = response.data;
          saveTokens(accessToken, refreshToken);
          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          return axios(originalRequest);
        } catch (err) {
          console.error('Token refresh failed:', err);
          // 로그아웃 로직 추가
          // logout();
          return Promise.reject(err);
        }
      }
    }
    return Promise.reject(error);
  },
);

export default api;
