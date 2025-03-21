import { Outlet, useRoutes, useLocation } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { Suspense, lazy } from 'react';
import { MemberProtectRoute } from 'pages/common/MemberProtectRoute';
import { AdminProtectRoute } from 'pages/common/AdminProtectRoute';

export const HomePage = lazy(() => import('../pages/home/HomePage'));
export const DashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'));
export const MyPage = lazy(() => import('../pages/mypage/MyPage'));
export const WishListPage = lazy(() => import('../pages/wishlist/WishlistPage'));
export const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
export const ManageMemberPage = lazy(() => import('../pages/manageMember/ManageMemberPage'));
export const GoodsPage = lazy(() => import('../pages/goods/GoodsPage'));
export const ManageGoodsPage = lazy(() => import('../pages/manageGoods/ManageGoodsPage'));
export const ManageGoodsInfoPage = lazy(() => import('../pages/manageGoods/manageGoodsInfo/ManageGoodsInfoPage'));
export const ManageDrawResultPage = lazy(() => import('../pages/manageGoods/manageDrawResult/ManageDrawResultPage'));
export const NotFoundPage = lazy(() => import('../pages/common/NotFoundPage'));

export const Router = () => {
  // Router에서 useLocation 훅을 사용하여 현재 경로를 가져오고,
  const location = useLocation();
  const routes = useRoutes([
    {
      path: '/',
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
          // 홈페이지
          element: <HomePage />,
          index: true,
        },
        {
          path: 'dashboard',
          element: <DashboardPage />,
        },
        {
          path: 'myPage',
          element: (
            <MemberProtectRoute>
              <MyPage />
            </MemberProtectRoute>
          ),
        },
        {
          path: 'wishList',
          element: (
            <MemberProtectRoute>
              <WishListPage />
            </MemberProtectRoute>
          ),
        },
        {
          path: 'manageGoods',
          element: (
            <AdminProtectRoute>
              <ManageGoodsPage />
            </AdminProtectRoute>
          ),
        },
        {
          path: 'manageMember',
          element: (
            <AdminProtectRoute>
              <ManageMemberPage />
            </AdminProtectRoute>
          ),
        },
        {
          path: 'goods/:id',
          element: <GoodsPage />,
        },
        {
          path: 'manageGoodsInfo/:id?',
          element: (
            <AdminProtectRoute>
              <ManageGoodsInfoPage />
            </AdminProtectRoute>
          ),
        },
        {
          path: 'manageDrawResult/:id',
          element: (
            <AdminProtectRoute>
              <ManageDrawResultPage />
            </AdminProtectRoute>
          ),
        },
      ],
    },
    {
      path: 'login',
      element: (
        <Suspense>
          <LoginPage />
        </Suspense>
      ),
    },
    {
      path: '*',
      element: (
        <Suspense>
          <NotFoundPage />
        </Suspense>
      ),
    },
  ]);
  return routes;
};
