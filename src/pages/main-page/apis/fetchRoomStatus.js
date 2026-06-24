// 더미 데이터 - 추후 실제 API로 교체 예정
const DUMMY_CLASSROOMS = {
  1: [
    { classroomId: 'saebit-101', floor: 1, classroomNumber: '101', available: true },
    { classroomId: 'saebit-102', floor: 1, classroomNumber: '102', available: false },
    { classroomId: 'saebit-103', floor: 1, classroomNumber: '103', available: true },
  ],
  2: [
    { classroomId: 'saebit-202', floor: 2, classroomNumber: '202', available: true },
    { classroomId: 'saebit-203', floor: 2, classroomNumber: '203', available: false },
    { classroomId: 'saebit-204', floor: 2, classroomNumber: '204', available: true },
    { classroomId: 'saebit-205', floor: 2, classroomNumber: '205', available: true },
  ],
}

// GET /api/v1/classrooms?floor={floor}&date={date}
// 실제 API 연결 시 파라미터에 date 추가
export const fetchRoomStatus = async ({ floor }) => {
  try {
    // 실제 API 연결 시 아래로 교체
    // const response = await fetch(`/api/v1/classrooms?floor=${floor}&date=${date}`);
    // if (!response.ok) throw new Error('강의실 정보를 불러오지 못했습니다.');
    // return await response.json();

    return DUMMY_CLASSROOMS[floor] ?? []
  } catch (error) {
    console.error('강의실 예약 현황 조회 실패:', error)
    throw error
  }
}
