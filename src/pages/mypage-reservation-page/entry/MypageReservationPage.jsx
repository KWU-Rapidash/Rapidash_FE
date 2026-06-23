import './MypageReservationPage.css'
import ButtonBold from '../../../components/button-bold/ButtonBold'

function MypageReservationPage() {
  return (
    <>
      <div className='mypageReservation__container'>
        <div className='mypageReservation__content'>
          <div className='mypageReservation__label'>날짜</div>
          <div className='mypageReservation__value'>4/1</div>
        </div>
        <div className='mypageReservation__content'>
          <div className='mypageReservation__label'>강의실</div>
          <div className='mypageReservation__value'>101호</div>
        </div>
        <div className='mypageReservation__content'>
          <div className='mypageReservation__label'>예약자 정보</div>
          <div className='mypageReservation__value'>2024122243 김나리</div>
        </div>
        <div className='mypageReservation__content'>
          <div className='mypageReservation__label'>시간</div>
          <div className='mypageReservation__value'>18~19</div>
        </div>
      </div>
      <ButtonBold content='예약취소' />
    </>
  )
}

export default MypageReservationPage
