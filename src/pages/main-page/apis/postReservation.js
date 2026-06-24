// 예약 신청 API - 추후 실제 API로 교체 예정
export const postReservation = async ({ classroomId, date, startTime, endTime }) => {
  try {
    // 실제 API 연결 시 아래로 교체
    // const response = await fetch('/api/v1/reservations', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ classroomId, date, startTime, endTime }),
    // })
    // if (!response.ok) throw new Error('예약 신청에 실패했습니다.')
    // return await response.json()

    console.log('예약 신청:', { classroomId, date, startTime, endTime })
    return { success: true }
  } catch (error) {
    console.error('예약 신청 실패:', error)
    throw error
  }
}
