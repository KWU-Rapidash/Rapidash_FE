import { useState } from 'react'
import KeyholeIcon from '../../assets/reset-password/keyhole.svg?react'
import EyeIcon from '../../assets/reset-password/eye.svg?react'
import ButtonBack from '../../components/button-back/ButtonBack'
import ButtonDefault from '../../components/button-default/ButtonDefault'
import InputForm from '../../components/input-form/InputForm'
import './ResetPassword.css'

function ResetPassword() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)

  const handlePasswordVisible = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  const handleConfirmPasswordVisible = () => {
    setIsConfirmPasswordVisible((prev) => !prev)
  }

  return (
    <main className="reset-password">
      <section className="reset-password__container">
        <ButtonBack />

        <div className="reset-password__title-area">
          <h1 className="reset-password__title">새 비밀번호 만들기</h1>
          <p className="reset-password__description">
            변경할 비밀번호를 작성해주세요
          </p>
        </div>

        <form className="reset-password__form">
          <InputForm
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="새 비밀번호"
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
