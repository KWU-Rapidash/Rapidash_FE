import './Header.css'
import { Icon } from '../../icon/Icon'

function Header() {
  return (
    <div className='header__container'>
      <Icon name='back-arrow' width={32} height={32} />
      <Icon name='kwangwoon-logo' width={142} height={40} />
      <Icon name='mypage-icon' width={24} height={24} />
    </div>
  )
}

export default Header
