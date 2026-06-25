// 더미 데이터 - 추후 실제 API로 교체 예정
const DUMMY_CLASSROOMS = {
  1: [
    {
      classroomId: 'saebit-101',
      floor: 1,
      classroomNumber: '101',
      available: true,
      times: [
        { time: '9~10:30', available: true },
        { time: '10:30~12', available: false },
        { time: '12~13:30', available: true },
        { time: '13:30~15', available: true },
        { time: '15~16:30', available: false },
        { time: '16:30~18', available: true },
        { time: '18~19', available: true },
        { time: '19~20', available: false },
        { time: '20~21', available: true },
        { time: '21~22', available: true },
      ],
    },
    {
      classroomId: 'saebit-102',
      floor: 1,
      classroomNumber: '102',
      available: false,
      times: [
        { time: '9~10:30', available: false },
        { time: '10:30~12', available: false },
        { time: '12~13:30', available: true },
        { time: '13:30~15', available: false },
        { time: '15~16:30', available: true },
        { time: '16:30~18', available: false },
        { time: '18~19', available: true },
        { time: '19~20', available: true },
        { time: '20~21', available: false },
        { time: '21~22', available: false },
      ],
    },
    {
      classroomId: 'saebit-103',
      floor: 1,
      classroomNumber: '103',
      available: true,
      times: [
        { time: '9~10:30', available: true },
        { time: '10:30~12', available: true },
        { time: '12~13:30', available: false },
        { time: '13:30~15', available: true },
        { time: '15~16:30', available: true },
        { time: '16:30~18', available: false },
        { time: '18~19', available: true },
        { time: '19~20', available: true },
        { time: '20~21', available: true },
        { time: '21~22', available: true },
      ],
    },
  ],
  2: [
    {
      classroomId: 'saebit-202',
      floor: 2,
      classroomNumber: '202',
      available: true,
      times: [
        { time: '9~10:30', available: true },
        { time: '10:30~12', available: false },
        { time: '12~13:30', available: true },
        { time: '13:30~15', available: false },
        { time: '15~16:30', available: true },
        { time: '16:30~18', available: true },
        { time: '18~19', available: false },
        { time: '19~20', available: true },
        { time: '20~21', available: true },
        { time: '21~22', available: true },
      ],
    },
    {
      classroomId: 'saebit-203',
      floor: 2,
      classroomNumber: '203',
      available: false,
      times: [
        { time: '9~10:30', available: false },
        { time: '10:30~12', available: true },
        { time: '12~13:30', available: false },
        { time: '13:30~15', available: true },
        { time: '15~16:30', available: false },
        { time: '16:30~18', available: true },
        { time: '18~19', available: false },
        { time: '19~20', available: true },
        { time: '20~21', available: false },
        { time: '21~22', available: false },
      ],
    },
    {
      classroomId: 'saebit-204',
      floor: 2,
      classroomNumber: '204',
      available: true,
      times: [
        { time: '9~10:30', available: true },
        { time: '10:30~12', available: true },
        { time: '12~13:30', available: false },
        { time: '13:30~15', available: true },
        { time: '15~16:30', available: true },
        { time: '16:30~18', available: false },
        { time: '18~19', available: true },
        { time: '19~20', available: false },
        { time: '20~21', available: true },
        { time: '21~22', available: true },
      ],
    },
    {
      classroomId: 'saebit-205',
      floor: 2,
      classroomNumber: '205',
      available: true,
      times: [
        { time: '9~10:30', available: true },
        { time: '10:30~12', available: false },
        { time: '12~13:30', available: true },
        { time: '13:30~15', available: true },
        { time: '15~16:30', available: false },
        { time: '16:30~18', available: true },
        { time: '18~19', available: true },
        { time: '19~20', available: false },
        { time: '20~21', available: true },
        { time: '21~22', available: true },
      ],
    },
  ],
}

// GET /api/v1/classrooms?floor={floor}&date={date}
// eslint-disable-next-line no-unused-vars
export const fetchRoomStatus = async ({ date, time, floor }) => {
  try {
    // 실제 API 연결 시 아래로 교체
    // const response = await fetch(`/api/v1/classrooms?floor=${floor}&date=${date}`);
    // if (!response.ok) throw new Error('강의실 정보를 불러오지 못했습니다.');
    // const classrooms = await response.json();
    // return classrooms.reduce((acc, room) => {
    //   const timeAvailable = room.times.find((t) => t.time === time)?.available ?? false
    //   acc[room.classroomNumber] = timeAvailable ? 'available' : 'reserved'
    //   return acc
    // }, {})

    const floorKey = parseInt(floor)
    const classrooms = DUMMY_CLASSROOMS[floorKey] ?? []

    return classrooms.reduce((acc, room) => {
      const timeAvailable = room.times.find((t) => t.time === time)?.available ?? false
      acc[room.classroomNumber] = timeAvailable ? 'available' : 'reserved'
      return acc
    }, {})
  } catch (error) {
    console.error('강의실 예약 현황 조회 실패:', error)
    throw error
  }
}
