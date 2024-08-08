import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { PURGE } from 'redux-persist';

const rootReducer = combineReducers({
  user: userSlice,
});

// 새로고침 후에도 store state 유지하기
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 로그아웃 시, store state 초기화하기
extraReducers: (builder) => {
  builder.addCase(PURGE, () => {
    return persistedReducer(undefined, { type: 'unknown' });
  });
};

const store = configureStore({
  // 사용자 정보
  reducer: persistedReducer,
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
