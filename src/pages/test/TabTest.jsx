import '../../components/mypage-layout/mypageTab/MypageTab.css'
import { NavLink } from 'react-router-dom'

function TabTest() {
  return (
    <div className='mypageTab__container'>
      <NavLink
        to='/mypage-reservation-t'
        className={({ isActive }) => `mypageTab__item ${isActive ? 'active' : ''}`}
      >
        예약정보
      </NavLink>

      <NavLink
        to='/mypage-t'
        end
        className={({ isActive }) => `mypageTab__item ${isActive ? 'active' : ''}`}
      >
        내 계정
      </NavLink>
    </div>
  )
}

export default TabTest
