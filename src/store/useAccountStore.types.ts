export interface AccountInfo {
  id: string;
  role: string;
}

export interface AccountStore {
  accountInfo: AccountInfo;
  updateAccountInfo: (field: keyof AccountInfo, value: string | number) => void;
  setAccountInfo: (id: string, role: string) => void;
  resetAccountInfo: () => void;
}
