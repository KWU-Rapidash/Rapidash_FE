import './MainPage.css'
<<<<<<< HEAD
<<<<<<< HEAD
import KwangwoonLogo from '../../../assets/header/kwangwoon-logo.svg'
import MypageIcon from '../../../assets/header/mypage-icon.svg'
=======
import { ReactComponent as KwangwoonLogo } from '../../../assets/header/kwangwoon-logo.svg'
import { ReactComponent as MypageIcon } from '../../../assets/header/mypage-icon.svg'
>>>>>>> 8539197 (design : 메인 페이지 에셋 추가 및 import (#28))
=======
import KwangwoonLogo from '../../../assets/header/kwangwoon-logo.svg'
import MypageIcon from '../../../assets/header/mypage-icon.svg'
>>>>>>> 02871cc (design : 메인 페이지 에셋 적용 (#28))
import FilterBar from '../components/filter-bar/FilterBar'
import FloorMap from '../components/floor-map/FloorMap'
import ReservationModal from '../components/reservation-modal/ReservationModal'
import ConfirmModal from '../components/confirm-modal/ConfirmModal'

export default function MainPage() {
  return (
    <div className='main-page'>
      <div className='main-page__topbar'>
        <div className='main-page__topbar-inner'>
<<<<<<< HEAD
<<<<<<< HEAD
          <img className='main-page__topbar-logo' src={KwangwoonLogo} alt='광운대학교' />
          <button className='main-page__topbar-mypage' type='button'>
            <img src={MypageIcon} alt='마이페이지' />
=======
          <KwangwoonLogo className='main-page__topbar-logo' />
          <button className='main-page__topbar-mypage' type='button'>
            <MypageIcon />
>>>>>>> 8539197 (design : 메인 페이지 에셋 추가 및 import (#28))
=======
          <img className='main-page__topbar-logo' src={KwangwoonLogo} alt='광운대학교' />
          <button className='main-page__topbar-mypage' type='button'>
            <img src={MypageIcon} alt='마이페이지' />
>>>>>>> 02871cc (design : 메인 페이지 에셋 적용 (#28))
          </button>
        </div>
      </div>

      <div className='main-page__content'>
        <FilterBar />
        <FloorMap />
      </div>

      <ReservationModal />
      <ConfirmModal />
    </div>
  )
}
