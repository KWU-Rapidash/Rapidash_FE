import './MypageAccountPage.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { getMyInfo } from '../apis/myInfo'

import ButtonBold from '../../../components/button-bold/ButtonBold'

function MypageAccountPage() {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchMyInfo = async () => {
      const data = await getMyInfo()
      setUser(data)
    }

    fetchMyInfo()
  }, [])
  if (!user) return null

  const handleLogout = () => {
    navigate('/')
    toast.success('로그아웃되었습니다.')
  }

  return (
    <>
      <div className='mypageAccount__container'>
        <div className='mypageAccount__content'>
          <div className='mypageAccount__label'>이름</div>
          <div className='mypageAccount__value'>{user.name}</div>
        </div>
        <div className='mypageAccount__content'>
          <div className='mypageAccount__label'>학번</div>
          <div className='mypageAccount__value'>{user.klasId}</div>
        </div>
        <div className='mypageAccount__content'>
          <div className='mypageAccount__label'>비밀번호</div>
          <div className='mypageAccount__value'>{user.password}</div>
        </div>
      </div>
      <ButtonBold content='로그아웃' onClick={handleLogout} />
    </>
  )
}

export default MypageAccountPage
