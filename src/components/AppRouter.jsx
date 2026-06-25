import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './main-layout/MainLayout'
import LoginPage from '../pages/login-page/entry/LoginPage'
import MainPage from '../pages/main-page/entry/MainPage'
import MypageLayout from './mypage-layout/MypageLayout'
import MypageAccountPage from '../pages/mypage-account-page/entry/MypageAccountPage'
import MypageReservationPage from '../pages/mypage-reservation-page/entry/MypageReservationPage'
import StudentVerification from '../pages/student-verification/StudentVerification'
import SignUp from '../pages/sign-up/SignUp'
import ResetPassword from '../pages/reset-password/ResetPassword'

import MainTest from '../pages/test/MainTest'
import AccountTest from '../pages/test/AccountTest'
import ReservationTest from '../pages/test/ReservationTest'

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <LoginPage /> },
      { path: 'main', element: <MainPage /> },
      { path: 'student-verification', element: <StudentVerification /> },
      { path: 'sign-up', element: <SignUp /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'main-t', element: <MainTest /> },
      { path: 'mypage-t', element: <AccountTest /> },
      { path: 'mypage-reservation-t', element: <ReservationTest /> },
      {
        path: 'mypage',
        element: <MypageLayout />,
        children: [
          { path: '', element: <MypageAccountPage /> },
          { path: 'reservation', element: <MypageReservationPage /> },
        ],
      },
    ],
  },
])
