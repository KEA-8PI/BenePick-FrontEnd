import MemberNavBar from 'components/navbar/memberNavbar';
import ManagerNavBar from 'components/navbar/managerNavBar';
import { useLocation } from 'react-router-dom';
// navItems 배열의 path 속성은 여전히 각 항목의 경로를 정의하는 데 필요
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

// Layout 컴포넌트에서 path Prop을 받아서, MemberNavBar 컴포넌트에 전달합니다.
const Layout = (props: { children: React.ReactNode; path: string }) => {
  const location = useLocation();
  const role = location.state?.role || 'admin'; // 일단 임시로 member로 설정

  return (
    <div style={{ padding: '130px 12%' }}>
      {/* <Header /> */}
      {role === 'member' && <MemberNavBar navItems={navItems} memberNavItems={memberNavItems} path={props.path} />}
      {role === 'admin' && <ManagerNavBar navItems={navItems} managerNavItems={managerNavItems} path={props.path} />}
      <main>{props.children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
