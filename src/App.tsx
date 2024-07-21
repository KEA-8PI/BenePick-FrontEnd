import React from 'react';
import './App.css';

import MemeberNavBar from './components/navbar/MemberNavbar';
// import ManagerNavBar from './components/managerNavBar';

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
    </div>
  );
};

export default App;
