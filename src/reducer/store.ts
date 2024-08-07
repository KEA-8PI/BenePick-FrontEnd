import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

const store = configureStore({
  // 사용자 정보
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // 개발자 도구에서 Redux DevTools 활성화하기
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
