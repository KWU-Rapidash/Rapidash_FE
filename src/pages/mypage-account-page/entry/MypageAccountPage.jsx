import './MypageAccountPage.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import ButtonBold from '../../../components/button-bold/ButtonBold'

function MypageAccountPage() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
    toast.success('로그아웃되었습니다.')
  }

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
      <ButtonBold content='로그아웃' onClick={handleLogout} />
    </>
  )
}

export default MypageAccountPage
