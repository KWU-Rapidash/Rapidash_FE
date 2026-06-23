import './SignUp.css'

function UserIcon() {
  return (
    <svg
      className="signup-input-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="9"
        r="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6.8 18C7.7 15.9 9.65 14.6 12 14.6C14.35 14.6 16.3 15.9 17.2 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg
      className="signup-input-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="10"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 10V7.2C8 4.8 9.6 3.4 12 3.4C14.4 3.4 16 4.8 16 7.2V10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SignUp() {
  return (
    <main className="signup-page">
      <section className="signup-container">
        <button className="signup-back-button" type="button" aria-label="뒤로가기">
          ←
        </button>

        <div className="signup-title-area">
          <h1>회원가입</h1>
          <p>어플 내에서 사용할 정보를 적어주세요</p>
        </div>

        <form className="signup-form">
          <div className="signup-input-box">
            <UserIcon />
            <input
              type="text"
              inputMode="numeric"
              placeholder="학번"
            />
          </div>

          <div className="signup-input-box">
            <LockIcon />
            <input
              type="password"
              placeholder="비밀번호"
            />
          </div>

          <button className="signup-submit-button" type="submit">
            회원 가입
          </button>
        </form>
      </section>
    </main>
  )
}

export default SignUp