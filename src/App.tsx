import React from 'react';
import './App.css';

import MemeberNavBar from './components/navbar/memberNavbar';
// import ManagerNavBar from './components/managerNavBar';

import Home from './pages/home';
import Dashboard from './pages/dashboard';
import MyPage from './pages/myPage';
import Wishlist from './pages/wishlist';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  const navItems = [
    { title: '홈', path: '/' },
    { title: '대시보드', path: '/dashboard' },
  ];
  const memberNavItems = [
    { title: '마이페이지', path: '/myPage' },
    { title: '위시리스트', path: '/wishlist' },
  ];
  // const managerNavItems = [
  //   { title: '상품관리', path: '/manageGoods' },
  //   { title: '사원관리', path: '/manageMember' },
  // ];
  return (
    <div className="App">
      <header className="App-header">
        <MemeberNavBar navItems={navItems} memberNavItems={memberNavItems} path={''} />
        {/* <ManagerNavBar navItems={navItems} managerNavItems={managerNavItems} path={''} /> */}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
};

export default App;
