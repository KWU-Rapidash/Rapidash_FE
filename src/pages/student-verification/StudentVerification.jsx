import { useState } from 'react'
import UserCircleIcon from '../../assets/student-verification/user-circle.svg?react'
import KeyholeIcon from '../../assets/student-verification/keyhole.svg?react'
import EyeIcon from '../../assets/student-verification/eye.svg?react'
import ButtonBack from '../../components/button-back/ButtonBack'
import ButtonDefault from '../../components/button-default/ButtonDefault'
import InputForm from '../../components/input-form/InputForm'
import './StudentVerification.css'

function StudentVerification() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handlePasswordVisible = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  return (
    <main className="student-verification">
      <section className="student-verification__container">
        <ButtonBack />

        <div className="student-verification__title-area">
          <h1 className="student-verification__title">학생 인증</h1>
          <p className="student-verification__description">
            학생 인증을 위한 절차입니다
          </p>
        </div>

        <form className="student-verification__form">
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
            rightIcon={
              <button
                className="student-verification__eye-button"
                type="button"
                aria-label={
                  isPasswordVisible ? '비밀번호 숨기기' : '비밀번호 보기'
                }
                onClick={handlePasswordVisible}
              >
                <EyeIcon className="student-verification__input-icon" />
              </button>
            }
          />

          <ButtonDefault type="submit">다음 단계</ButtonDefault>
        </form>
      </section>
    </main>
  )
}

export default StudentVerification
