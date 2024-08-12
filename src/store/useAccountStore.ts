import { create } from 'zustand';
import { AccountStore } from './useAccountStore.types';
import { persist } from 'zustand/middleware';

// export const useAccountStore = create<AccountStore>((set) => ({
//   accountInfo: {
//     id: '',
//     role: '',
//     point: 0,
//     profileImg: '',
//   },
//   updateAccountInfo: (field, value) => set((state) => ({ accountInfo: { ...state.accountInfo, [field]: value } })),
//   setAccountInfo: (id, role) =>
//     set(() => ({
//       accountInfo: { id, role, point: 0, profileImg: '' },
//     })),
//   resetAccountInfo: () =>
//     set(() => ({
//       accountInfo: {
//         id: '',
//         role: '',
//         point: 0,
//         profileImg: '',
//       },
//     })),
// }));

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
      getStorage: () => localStorage, // 기본적으로 localStorage 사용
    },
  ),
);
