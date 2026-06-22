import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './main-layout/MainLayout'
import LoginPage from '../pages/login-page/entry/LoginPage'
import MainPage from '../pages/main-page/entry/MainPage'

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <LoginPage /> },
      { path: 'main', element: <MainPage /> },
    ],
  },
])
