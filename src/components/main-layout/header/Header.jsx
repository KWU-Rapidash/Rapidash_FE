import './Header.css'
import { Icon } from '../../icon/Icon'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  return (
    <div className='header__container'>
      <Icon name='back-arrow' onClick={() => navigate(-1)} width={32} height={32} />
      <Icon name='kwangwoon-logo' width={142} height={40} />
      <Icon name='mypage-icon' onClick={() => navigate('/mypage')} width={24} height={24} />
    </div>
  )
}

export default Header
