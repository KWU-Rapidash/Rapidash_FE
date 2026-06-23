import './Header.css'
import { Icon } from '../../icon/Icon'
import { useNavigate, useLocation } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const isMypagePath =
    location.pathname === '/mypage' || location.pathname === '/mypage/reservation'

  const isLoginPath = location.pathname === '/'

  return (
    <div className='header__container'>
      {isMypagePath && (
        <Icon name='back-arrow' onClick={() => navigate(-1)} width={32} height={32} />
      )}
      <Icon name='kwangwoon-logo' width={142} height={40} />
      {!isLoginPath && (
        <Icon name='mypage-icon' onClick={() => navigate('/mypage')} width={24} height={24} />
      )}
    </div>
  )
}

export default Header
