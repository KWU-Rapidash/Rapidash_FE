import ButtonBack from '../../components/button-back/ButtonBack'
import ButtonDefault from '../../components/button-default/ButtonDefault'
import InputForm from '../../components/input-form/InputForm'
import './SignUp.css'

function SignUp() {
  return (
    <main className="signup-page">
      <section className="signup-container">
        <ButtonBack />

        <div className="signup-title-area">
          <h1>회원가입</h1>
          <p>어플 내에서 사용할 정보를 적어주세요</p>
        </div>

        <form className="signup-form">
          <InputForm
            type="text"
            placeholder="학번"
          />

          <InputForm
            type="password"
            placeholder="비밀번호"
          />

          <ButtonDefault type="submit">
            회원 가입
          </ButtonDefault>
        </form>
      </section>
    </main>
  )
}

export default SignUp
