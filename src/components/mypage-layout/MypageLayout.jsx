import './MypageLayout.css'
import { Outlet } from 'react-router-dom'
import MypageTab from './mypageTab/MypageTab'

function MypageLayout() {
  return (
    <div className='mypageLayout__container'>
      <MypageTab />
      <div className='mypageLayout__page'>
        <Outlet />
      </div>
    </div>
  )
}

export default MypageLayout
