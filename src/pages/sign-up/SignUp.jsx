import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserCircleIcon from '../../assets/sign-up/user-circle.svg?react'
import EyeIcon from '../../assets/sign-up/eye.svg?react'
import ButtonBack from '../../components/button-back/ButtonBack'
import ButtonDefault from '../../components/button-default/ButtonDefault'
import InputForm from '../../components/input-form/InputForm'
import './SignUp.css'

function SignUp() {
  const navigate = useNavigate()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleBack = () => {
    navigate(-1)
  }

  const handlePasswordVisible = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <main className="sign-up">
      <section className="sign-up__container">
        <ButtonBack onClick={handleBack} />

        <div className="sign-up__title-area">
          <h1 className="sign-up__title">회원가입</h1>
          <p className="sign-up__description">
            어플 내에서 사용할 정보를 적어주세요
          </p>
        </div>

        <form className="sign-up__form" onSubmit={handleSubmit}>
          <InputForm
            type="text"
            placeholder="학번"
            leftIcon={<UserCircleIcon className="sign-up__input-icon" />}
          />

          <InputForm
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="비밀번호"
            leftIcon={<UserCircleIcon className="sign-up__input-icon" />}
            rightIcon={<EyeIcon className="sign-up__input-icon" />}
            onRightIconClick={handlePasswordVisible}
            rightIconAriaLabel={
              isPasswordVisible ? '비밀번호 숨기기' : '비밀번호 보기'
            }
          />

          <ButtonDefault type="submit">회원 가입</ButtonDefault>
        </form>
      </section>
    </main>
  )
}

export default SignUp
