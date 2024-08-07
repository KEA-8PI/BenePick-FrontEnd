import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userID: string | null;
  role: string | null;
}

const initialState: UserState = {
  userID: null,
  role: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 로그인 할 때
    setUser: (state, action: PayloadAction<UserState>) => {
      state.userID = action.payload.userID;
      state.role = action.payload.role;
    },
    // 로그아웃 할 때
    logoutUser: (state) => {
      state.userID = null;
      state.role = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;

// 이미지, 패널티, 복지 포인트 추가
