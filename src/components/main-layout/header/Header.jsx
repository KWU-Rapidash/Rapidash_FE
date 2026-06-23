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
        <Icon
          name='back-arrow'
          className='header__back icon'
          onClick={() => navigate(-1)}
          width={32}
          height={32}
        />
      )}
      <Icon name='kwangwoon-logo' className='header__logo' width={142} height={40} />
      {!isLoginPath && (
        <Icon
          name='mypage-icon'
          className='header__mypage icon'
          onClick={() => navigate('/mypage')}
          width={28}
          height={28}
        />
      )}
    </div>
  )
}

export default Header
