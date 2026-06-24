import './LoginPage.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../apis/auth'

import { Icon } from '../../../components/icon/Icon'
import ErrorModal from '../components/error-modal/ErrorModal'

function LoginPage() {
  const navigate = useNavigate()

  const [klasId, setKlasId] = useState('')
  const [password, setPassword] = useState('')
  const [showErrorModal, setShowErrorModal] = useState(false)

  const handleLogin = async () => {
    const isSuccess = await login(klasId, password)

    if (isSuccess) {
      navigate('/main')
    } else {
      setShowErrorModal(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (showErrorModal) {
      setShowErrorModal(false)
      return
    }

    handleLogin()
  }

  return (
    <div className='login__container'>
      <div className='login__border--outer'>
        <form className='login__border--inner' onSubmit={handleSubmit}>
          <div className='login__form'>
            <div className='login__input'>
              <Icon className='login__input--icon' name='user-circle' width={14} height={14} />
              <input
                className='login__input--input'
                type='email'
                placeholder='학교 이메일'
                value={klasId}
                onChange={(e) => setKlasId(e.target.value)}
              />
            </div>
            <div className='login__input'>
              <Icon className='login__input--icon' name='key-hole' width={14} height={14} />
              <input
                className='login__input--input'
                type='password'
                placeholder='패스워드'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className='login__button'>
            <button type='button' className='login__button--signup login__button--button'>
              회원가입
            </button>

            <button type='submit' className='login__button--login login__button--button'>
              로그인
            </button>
          </div>
        </form>
      </div>

      {showErrorModal && (
        <ErrorModal
          onClose={() => {
            setShowErrorModal(false)
          }}
        />
      )}
    </div>
  )
}

export default LoginPage
