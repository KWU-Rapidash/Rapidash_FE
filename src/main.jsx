import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './styles/global.css'
import { AppRouter } from './components/AppRouter.jsx'

createRoot(document.getElementById('root')).render(<RouterProvider router={AppRouter} />)
