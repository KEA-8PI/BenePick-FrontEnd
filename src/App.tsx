import React from 'react';
import './App.css';
import MemeberNavBar from './components/memberNavbar';
import ManagerNavBar from './components/managerNavBar';

const App: React.FC = () => {
  const navItems = [
    { title: '홈', path: '/' },
    { title: '대시보드', path: '/dashboard' },
  ];
  const memberNavItems = [
    { title: '마이페이지', path: '/myPage' },
    { title: '위시리스트', path: '/wishList' },
  ];
  const managerNavItems = [
    { title: '상품관리', path: '/manageGoods' },
    { title: '사원관리', path: '/manageMember' },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <MemeberNavBar navItems={navItems} memberNavItems={memberNavItems} path={''} />
        {/* <ManagerNavBar navItems={navItems} managerNavItems={managerNavItems} path={''} /> */}
      </header>
      <p className="App-page">Edit and save to reload.</p>
    </div>
  );
};

export default App;
