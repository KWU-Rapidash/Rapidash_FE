import './MainLayout.css'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'

const MainLayout = () => {
  return (
    <div className='mainlayout__container'>
      <Header />
      <div className='mainlayout__page'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
