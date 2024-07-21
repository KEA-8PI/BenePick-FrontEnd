import MemeberNavBar from 'components/navbar/MemberNavbar';
import ManagerNavBar from 'components/navbar/ManagerNavBar';

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

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div style={{ padding: '110px 188px 0 188px' }}>
      {/* <Header /> */}
      <MemeberNavBar navItems={navItems} memberNavItems={memberNavItems} path={''} />
      {/* <ManagerNavBar navItems={navItems} managerNavItems={managerNavItems} path={''} /> */}
      <main>{props.children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
