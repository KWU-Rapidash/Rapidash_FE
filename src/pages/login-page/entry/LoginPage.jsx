import './LoginPage.css'

import { Icon } from '../../../components/icon/Icon'
import ErrorModal from '../components/error-modal/ErrorModal'

function LoginPage() {
  return (
    <div className='login__container'>
      <div className='login__border--outer'>
        <div className='login__border--inner'>
          <div className='login__form'>
            <div className='login__input'>
              <Icon name='user-circle' width={14} height={14} />
              <input type='email' placeholder='학교 이메일' />
            </div>
            <div className='login__input'>
              <Icon name='key-hole' width={14} height={14} />
              <input type='password' placeholder='패스워드' />
            </div>
          </div>
          <div className='login__button'>
            <div className='login__button--signup'>회원가입</div>
            <div className='login__button--login'>로그인</div>
          </div>
        </div>
      </div>
      <ErrorModal />
    </div>
  )
}

export default LoginPage
