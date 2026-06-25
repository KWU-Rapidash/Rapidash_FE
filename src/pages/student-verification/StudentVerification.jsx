import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserCircleIcon from '../../assets/student-verification/user-circle.svg?react'
import KeyholeIcon from '../../assets/student-verification/keyhole.svg?react'
import EyeIcon from '../../assets/student-verification/eye.svg?react'
import ButtonBack from '../../components/button-back/ButtonBack'
import ButtonDefault from '../../components/button-default/ButtonDefault'
import InputForm from '../../components/input-form/InputForm'
import './StudentVerification.css'

function StudentVerification() {
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
    navigate('/sign-up')
  }

  return (
    <main className="student-verification">
      <section className="student-verification__container">
        <ButtonBack onClick={handleBack} />

        <div className="student-verification__title-area">
          <h1 className="student-verification__title">재학생 인증</h1>
          <p className="student-verification__description">
            재학생 인증을 위한 절차입니다
          </p>
        </div>

        <form className="student-verification__form" onSubmit={handleSubmit}>
          <InputForm
            type="text"
            placeholder="klas 아이디"
            leftIcon={
              <UserCircleIcon className="student-verification__input-icon" />
            }
          />

          <InputForm
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="klas 비밀번호"
            leftIcon={
              <KeyholeIcon className="student-verification__input-icon" />
            }
            rightIcon={<EyeIcon className="student-verification__input-icon" />}
            onRightIconClick={handlePasswordVisible}
            rightIconAriaLabel={
              isPasswordVisible ? '비밀번호 숨기기' : '비밀번호 보기'
            }
          />

          <ButtonDefault type="submit">다음 단계</ButtonDefault>
        </form>
      </section>
    </main>
  )
}

export default StudentVerification

