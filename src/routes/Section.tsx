import { Outlet, useRoutes } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import { Suspense, lazy } from 'react';

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
          element: <div>홈페이지</div>,
          index: true,
        },
        {
          path: 'dashboard',
          element: <div>대시보드</div>,
        },
        {
          path: 'myPage',
          element: <div>마이페이지</div>,
        },
        {
          path: 'wishList',
          element: <div>위시리스트</div>,
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
