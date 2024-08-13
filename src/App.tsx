import React, { useEffect } from 'react';
import './App.css';
import { Router } from './routes/Section';
import { useScrollToTop } from 'hooks/useScrollToTop';
import { useAccountStore } from 'store/useAccountStore';

function App() {
  useScrollToTop();
  const { updateAccountInfo, accountInfo } = useAccountStore();
  // updateAccountInfo('id', 'test');
  useEffect(() => {
    const { role, id } = accountInfo;

    if (id !== accountInfo.id) {
      updateAccountInfo('id', id);
    }
    if (role !== accountInfo.role) {
      updateAccountInfo('role', role);
    }

    console.log('id:', id);
    console.log('role:', role);
  }, [updateAccountInfo, accountInfo]);

  return <Router />;
}

export default App;
