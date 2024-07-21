import { Outlet, useRoutes } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import { Suspense, lazy } from 'react';

export const HomePage = lazy(() => import('../pages/home/HomePage'));
export const DashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'));
export const MyPage = lazy(() => import('../pages/mypage/MyPage'));
export const WishListPage = lazy(() => import('../pages/wishlist/WishlistPage'));
export const LoginPage = lazy(() => import('../pages/login/LoginPage'));

export const Router = () => {
  const routes = useRoutes([
    {
      element: (
        <Layout>
          <Suspense>
            <Outlet />
          </Suspense>
        </Layout>
      ),
      children: [
        {
          //홈페이지
          element: <HomePage />,
          index: true,
        },
        {
          path: 'dashboard',
          element: <DashboardPage />,
        },
        {
          path: 'myPage',
          element: <MyPage />,
        },
        {
          path: 'wishList',
          element: <WishListPage />,
        },
        {
          path: 'manageGoods',
          element: <div>상품 관리</div>,
        },
        {
          path: 'manageMembers',
          element: <div>사원 관리</div>,
        },
        {
          path: 'goods/:id',
          element: <div>상품 상세 페이지</div>,
        },
      ],
    },
    { path: 'login', element: <LoginPage /> },
  ]);
  return routes;
};
