import ButtonBold from '../../../components/button-bold/ButtonBold'
import './MypageAccountPage.css'

function MypageAccountPage() {
  return (
    <>
      <div className='mypageAccount__container'>
        <div className='mypageAccount__content'>
          <div className='mypageAccount__label'>이름</div>
          <div className='mypageAccount__value'>김나리</div>
        </div>
        <div className='mypageAccount__content'>
          <div className='mypageAccount__label'>학번</div>
          <div className='mypageAccount__value'>2024122243</div>
        </div>
        <div className='mypageAccount__content'>
          <div className='mypageAccount__label'>비밀번호</div>
          <div className='mypageAccount__value'>************</div>
        </div>
      </div>
      <ButtonBold content='로그아웃' />
    </>
  )
}

export default MypageAccountPage
