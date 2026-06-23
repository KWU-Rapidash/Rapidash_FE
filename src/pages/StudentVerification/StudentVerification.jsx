import './StudentVerification.css'

function UserIcon() {
  return (
    <svg
      className="student-input-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
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
      className="student-input-icon"
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

function EyeIcon() {
  return (
    <svg
      className="student-eye-icon"
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

function StudentVerification() {
  return (
    <main className="student-page">
      <section className="student-container">
        <button className="student-back-button" type="button" aria-label="뒤로가기">
          ←
        </button>

        <div className="student-title-area">
          <h1>재학생 인증</h1>
          <p>재학 인증을 위한 절차입니다</p>
        </div>

        <form className="student-form">
          <div className="student-input-box">
            <UserIcon />
            <input type="text" placeholder="klas 아이디" />
          </div>

          <div className="student-input-box">
            <LockIcon />
            <input type="password" placeholder="klas 비밀번호" />
            <button className="student-eye-button" type="button" aria-label="비밀번호 보기">
              <EyeIcon />
            </button>
          </div>

          <button className="student-submit-button" type="submit">
            다음 단계
          </button>
        </form>
      </section>
    </main>
  )
}

export default StudentVerification