import { useNavigate } from 'react-router-dom'
import ButtonBack from '../../components/button-back/ButtonBack'
import ButtonDefault from '../../components/button-default/ButtonDefault'
import InputForm from '../../components/input-form/InputForm'
import './ResetPassword.css'

function ResetPassword() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/')
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
          <InputForm type="password" placeholder="새 비밀번호" />

          <InputForm type="password" placeholder="비밀번호 확인" />

          <ButtonDefault type="submit">비밀번호 변경</ButtonDefault>
        </form>
      </section>
    </main>
  )
}

export default ResetPassword
