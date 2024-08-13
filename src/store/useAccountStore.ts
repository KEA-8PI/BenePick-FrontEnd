import { create } from 'zustand';
import { AccountStore } from './useAccountStore.types';
import { persist, StateStorage } from 'zustand/middleware';

// 테스트용으로 30초로 설정
// const EXPIRATION_TIME = 30 * 1000;
// 실제로는 24시간으로 설정
const EXPIRATION_TIME = 24 * 60 * 60 * 1000;

const customStorage: StateStorage = {
  getItem: (name) => {
    const item = localStorage.getItem(name);
    if (!item) return null;

    const data = JSON.parse(item);
    const now = new Date().getTime();

    // Check if the item has expired
    if (now > data.expiry) {
      localStorage.removeItem(name);
      console.log(`The data stored under the key "${name}" has expired.`);
      return null;
    }

    return data.value;
  },
  setItem: (name, value) => {
    const now = new Date().getTime();
    const expiry = now + EXPIRATION_TIME;

    const data = {
      value,
      expiry,
    };

    localStorage.setItem(name, JSON.stringify(data));
  },
  removeItem: (name) => localStorage.removeItem(name),
};

export const useAccountStore = create<AccountStore>()(
  persist(
    (set) => ({
      accountInfo: {
        id: '',
        role: '',
        point: 0,
        profileImg: '',
      },
      updateAccountInfo: (field, value) =>
        set((state) => ({
          accountInfo: { ...state.accountInfo, [field]: value },
        })),
      setAccountInfo: (id, role, point = 0, profileImg = '') =>
        set(() => ({
          accountInfo: { id, role, point, profileImg },
        })),
      resetAccountInfo: () =>
        set(() => ({
          accountInfo: {
            id: '',
            role: '',
            point: 0,
            profileImg: '',
          },
        })),
    }),
    {
      name: 'account-storage', // 저장소의 키 이름 (유일해야 함)
      getStorage: () => customStorage, // 기본적으로 localStorage 사용
    },
  ),
);
