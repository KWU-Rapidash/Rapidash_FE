import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import UserCircleIcon from '../../assets/sign-up/user-circle.svg?react'
import EyeIcon from '../../assets/sign-up/eye.svg?react'
import ButtonBack from '../../components/button-back/ButtonBack'
import ButtonDefault from '../../components/button-default/ButtonDefault'
import InputForm from '../../components/input-form/InputForm'
import './SignUp.css'

function SignUp() {
  const navigate = useNavigate()
  const location = useLocation()
  const isVerified = location.state?.success === true

  const [studentId, setStudentId] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleBack = () => {
    navigate(-1)
  }

  const handleStudentIdChange = (event) => {
    const nextStudentId = event.target.value

    if (/^\d*$/.test(nextStudentId)) {
      setStudentId(nextStudentId)
    }
  }

  const handlePasswordVisible = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!isVerified) {
      alert('재학생 인증 후 회원가입을 진행해주세요.')
      navigate('/student-verification')
      return
    }

    if (!studentId.trim() || !password.trim()) {
      alert('학번과 비밀번호를 모두 입력해주세요.')
      return
    }

    if (!/^\d{10}$/.test(studentId.trim())) {
      alert('학번은 숫자 10자리로 입력해주세요.')
      return
    }

    const dummySignUpResponse = {
      success: true,
    }

    if (dummySignUpResponse.success) {
      alert('회원가입이 완료되었습니다.')
      navigate('/')
      return
    }

    alert('회원가입에 실패했습니다.')
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
            value={studentId}
            onChange={handleStudentIdChange}
            leftIcon={<UserCircleIcon className="sign-up__input-icon" />}
          />

          <InputForm
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="비밀번호"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
