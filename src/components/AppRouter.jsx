import { createBrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import MainLayout from './main-layout/MainLayout'
import LoginPage from '../pages/login-page/entry/LoginPage'
import MainPage from '../pages/main-page/entry/MainPage'
import MypageLayout from './mypage-layout/MypageLayout'
import MypageAccountPage from '../pages/mypage-account-page/entry/MypageAccountPage'
import MypageReservationPage from '../pages/mypage-reservation-page/entry/MypageReservationPage'
=======
import MainPage from '../pages/main-page/entry/MainPage'
>>>>>>> 869d6b7 (design : 메인 페이지 레이아웃 마크업 및 라우터 등록 (#27))

export const AppRouter = createBrowserRouter([
  {
    path: '/',
<<<<<<< HEAD
    element: <MainLayout />,
    children: [
      { path: '', element: <LoginPage /> },
      { path: 'main', element: <MainPage /> },
      {
        path: 'mypage',
        element: <MypageLayout />,
        children: [
          { path: '', element: <MypageAccountPage /> },
          { path: 'reservation', element: <MypageReservationPage /> },
        ],
      },
    ],
=======
    element: <MainPage />,
>>>>>>> 869d6b7 (design : 메인 페이지 레이아웃 마크업 및 라우터 등록 (#27))
  },
])
