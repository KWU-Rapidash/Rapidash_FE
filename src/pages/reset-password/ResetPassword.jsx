import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import KeyholeIcon from '../../assets/reset-password/keyhole.svg?react'
import EyeIcon from '../../assets/reset-password/eye.svg?react'
import ButtonBack from '../../components/button-back/ButtonBack'
import ButtonDefault from '../../components/button-default/ButtonDefault'
import InputForm from '../../components/input-form/InputForm'
import './ResetPassword.css'

function ResetPassword() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)

  const handleBack = () => {
    navigate(-1)
  }

  const handlePasswordVisible = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  const handleConfirmPasswordVisible = () => {
    setIsConfirmPasswordVisible((prev) => !prev)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!password.trim() || !confirmPassword.trim()) {
      alert('새 비밀번호와 비밀번호 확인을 모두 입력해주세요.')
      return
    }

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }

    const dummyResetPasswordResponse = {
      success: true,
    }

    if (dummyResetPasswordResponse.success) {
      alert('비밀번호가 변경되었습니다.')
      navigate('/')
      return
    }

    alert('비밀번호 변경에 실패했습니다.')
  }

  return (
    <main className="reset-password">
      <section className="reset-password__container">
        <ButtonBack onClick={handleBack} />

        <div className="reset-password__title-area">
          <h1 className="reset-password__title">새 비밀번호 만들기</h1>
          <p className="reset-password__description">
            변경할 비밀번호를 작성해주세요
          </p>
        </div>

        <form className="reset-password__form" onSubmit={handleSubmit}>
          <InputForm
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="새 비밀번호"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            leftIcon={<KeyholeIcon className="reset-password__input-icon" />}
            rightIcon={<EyeIcon className="reset-password__input-icon" />}
            onRightIconClick={handlePasswordVisible}
            rightIconAriaLabel={
              isPasswordVisible ? '비밀번호 숨기기' : '비밀번호 보기'
            }
          />

          <InputForm
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            leftIcon={<KeyholeIcon className="reset-password__input-icon" />}
            rightIcon={<EyeIcon className="reset-password__input-icon" />}
            onRightIconClick={handleConfirmPasswordVisible}
            rightIconAriaLabel={
              isConfirmPasswordVisible
                ? '비밀번호 확인 숨기기'
                : '비밀번호 확인 보기'
            }
          />

          <ButtonDefault type="submit">비밀번호 변경</ButtonDefault>
        </form>
      </section>
    </main>
  )
}

export default ResetPassword
