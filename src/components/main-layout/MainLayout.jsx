import { Outlet } from 'react-router-dom'
import './MainLayout.css'

const MainLayout = () => {
  return (
    <div className='mainlayout__container'>
      <p>header</p>
      <div className='mainlayout__page'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
