import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccountStore } from 'store/useAccountStore';

export const AdminProtectRoute = ({ children }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const { accountInfo } = useAccountStore();
  const { role } = accountInfo;

  useEffect(() => {
    if (role === '') navigate('/login');
    else role === 'ADMIN' ? setIsSuccess(true) : navigate('/*');
  }, []);

  // 응답이 완료된 후 자식 컴포넌트를 렌더링한다.
  if (isSuccess) {
    return children;
  }
};
