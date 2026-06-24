import './ResetPassword.css'

function LockIcon() {
  return (
    <svg
      className="reset-input-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12.7 12.4C13.35 12.05 13.8 11.35 13.8 10.55C13.8 9.4 13.0 8.5 12 8.5C11 8.5 10.2 9.4 10.2 10.55C10.2 11.35 10.65 12.05 11.3 12.4L10.55 15.15C10.45 15.5 10.72 15.85 11.08 15.85H12.92C13.28 15.85 13.55 15.5 13.45 15.15L12.7 12.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg
      className="reset-eye-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.5 12C4.2 8.8 7.6 6.5 12 6.5C16.4 6.5 19.8 8.8 21.5 12C19.8 15.2 16.4 17.5 12 17.5C7.6 17.5 4.2 15.2 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function ResetPassword() {
  return (
    <main className="reset-page">
      <section className="reset-container">
        <button className="reset-back-button" type="button" aria-label="뒤로가기">
          ←
        </button>

        <div className="reset-title-area">
          <h1>새 비밀번호 만들기</h1>
          <p>변경할 비밀번호를 작성해주세요</p>
        </div>

        <form className="reset-form">
          <div className="reset-input-box">
            <LockIcon />
            <input type="password" placeholder="새 비밀번호" />
            <button className="reset-eye-button" type="button" aria-label="비밀번호 보기">
              <EyeIcon />
            </button>
          </div>

          <div className="reset-input-box">
            <LockIcon />
            <input type="password" placeholder="비밀번호 확인" />
            <button className="reset-eye-button" type="button" aria-label="비밀번호 확인 보기">
              <EyeIcon />
            </button>
          </div>

          <button className="reset-submit-button" type="submit">
            비밀번호 변경
          </button>
        </form>
      </section>
    </main>
  )
}

export default ResetPassword