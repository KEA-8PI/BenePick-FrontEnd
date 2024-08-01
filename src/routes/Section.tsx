import { Outlet, useRoutes, useLocation } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import { Suspense, lazy } from 'react';

export const HomePage = lazy(() => import('../pages/home/HomePage'));
export const DashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'));
export const MyPage = lazy(() => import('../pages/mypage/MyPage'));
export const WishListPage = lazy(() => import('../pages/wishlist/WishlistPage'));
export const LoginPage = lazy(() => import('../pages/login/LoginPage'));
export const ManageMemberPage = lazy(() => import('../pages/manageMember/ManageMemberPage'));
export const GoodsPage = lazy(() => import('../pages/goods/GoodsPage'));
export const ManageGoodsPage = lazy(() => import('../pages/manageGoods/ManageGoodsPage'));
export const ManageGoodsInfoPage = lazy(() => import('../pages/manageGoods/manageGoodsInfo/ManageGoodsInfoPage'));
export const ManageDrawResultPage = lazy(() => import('../pages/manageGoods/manageDrawResult/ManageDrawResultPage'));

export const Router = () => {
  // Router에서 useLocation 훅을 사용하여 현재 경로를 가져오고,
  const location = useLocation();
  const routes = useRoutes([
    {
      element: (
        // useRoutes 훅을 사용하여 라우트를 설정합니다.
        <Layout path={location.pathname}>
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
          element: <ManageGoodsPage />,
        },
        {
          path: 'manageMember',
          element: <ManageMemberPage />,
        },
        {
          path: 'goods/:id',
          element: <GoodsPage />,
        },
        {
          path: '/manageGoodsInfo',
          element: <ManageGoodsInfoPage />,
        },
        {
          path: '/manageDrawResult',
          element: <ManageDrawResultPage />,
        },
      ],
    },
    { path: 'login', element: <LoginPage /> },
  ]);
  return routes;
};
