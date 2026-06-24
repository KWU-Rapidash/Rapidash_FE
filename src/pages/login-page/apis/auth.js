/* api 연결 예정 토큰 데이터 저장*/

export const login = async (klasId, password) => {
  const response = klasId === 'test@kw.ac.kr' && password === '12345'
  return response
}
