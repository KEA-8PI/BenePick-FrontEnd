import MemberNavBar from 'components/navbar/memberNavbar';
import ManagerNavBar from 'components/navbar/managerNavBar';
import { useAccountStore } from 'store/useAccountStore';

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
  // const userRole = useSelector((state: RootState) => state.user.role);
  const userRole = useAccountStore((state) => state.accountInfo.role);
  // const userRole = 'MEMBER';

  console.log('계정 정보 확인:', useAccountStore.getState().accountInfo);

  return (
    // <div style={{ padding: '130px 12%' }}>
    <div className="wrapper">
      <div className="container">
        {/* 로그아웃 상태 일 때 */}
        {userRole === '' && <MemberNavBar navItems={navItems} memberNavItems={memberNavItems} path={props.path} />}
        {/* 로그인 상태 일 때 */}
        {userRole === 'MEMBER' && (
          <MemberNavBar navItems={navItems} memberNavItems={memberNavItems} path={props.path} />
        )}
        {userRole === 'ADMIN' && (
          <ManagerNavBar navItems={navItems} managerNavItems={managerNavItems} path={props.path} />
        )}
        <main>{props.children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
