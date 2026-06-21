import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/main-page/entry/MainPage'

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
])
