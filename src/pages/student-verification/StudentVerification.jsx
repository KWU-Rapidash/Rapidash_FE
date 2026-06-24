import ButtonBack from '../../components/button-back/ButtonBack'
import ButtonDefault from '../../components/button-default/ButtonDefault'
import InputForm from '../../components/input-form/InputForm'
import './StudentVerification.css'

function StudentVerification() {
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
          <InputForm type="text" placeholder="klas 아이디" />

          <InputForm type="password" placeholder="klas 비밀번호" />

          <ButtonDefault type="submit">다음 단계</ButtonDefault>
        </form>
      </section>
    </main>
  )
}

export default StudentVerification
