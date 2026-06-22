import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './main-layout/MainLayout'
import LoginPage from '../pages/login-page/entry/LoginPage'
import MainPage from '../pages/main-page/entry/MainPage'
import MypageLayout from './mypage-layout/MypageLayout'
import MypageAccountPage from '../pages/mypage-account-page/entry/MypageAccountPage'
import MypageReservationPage from '../pages/mypage-reservation-page/entry/MypageReservationPage'

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <LoginPage /> },
      { path: 'main', element: <MainPage /> },
      {
        path: 'mypage',
        element: <MypageLayout />,
        children: [
          { path: '', element: <MypageAccountPage /> },
          { path: '/reservation', element: <MypageReservationPage /> },
        ],
      },
    ],
  },
])
