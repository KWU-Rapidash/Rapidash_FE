// 예약 신청 API - 추후 실제 API로 교체 예정
export const postReservation = async ({ date, time, floor, roomId, studentId }) => {
  // 더미 데이터
  console.log('예약 신청:', { date, time, floor, roomId, studentId })
  return { success: true }
}
