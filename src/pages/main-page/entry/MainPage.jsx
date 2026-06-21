import './MainPage.css'
import { ReactComponent as KwangwoonLogo } from '../../../assets/header/kwangwoon-logo.svg'
import { ReactComponent as MypageIcon } from '../../../assets/header/mypage-icon.svg'
import FilterBar from '../components/filter-bar/FilterBar'
import FloorMap from '../components/floor-map/FloorMap'
import ReservationModal from '../components/reservation-modal/ReservationModal'
import ConfirmModal from '../components/confirm-modal/ConfirmModal'

export default function MainPage() {
  return (
    <div className='main-page'>
      <div className='main-page__topbar'>
        <div className='main-page__topbar-inner'>
          <KwangwoonLogo className='main-page__topbar-logo' />
          <button className='main-page__topbar-mypage' type='button'>
            <MypageIcon />
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
