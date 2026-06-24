// 더미 데이터 - 추후 실제 API로 교체 예정
const DUMMY_CLASSROOMS = {
  1: [
    {
      classroomId: 'saebit-101',
      floor: 1,
      classroomNumber: '101',
      available: true,
      times: [
        { time: '09:00~10:30', available: true },
        { time: '10:30~12:00', available: false },
        { time: '12:00~13:30', available: true },
        { time: '13:30~15:00', available: true },
        { time: '15:00~16:30', available: false },
        { time: '16:30~18:00', available: true },
        { time: '18:00~19:30', available: true },
        { time: '19:30~21:00', available: false },
        { time: '21:00~22:00', available: true },
      ],
    },
    {
      classroomId: 'saebit-102',
      floor: 1,
      classroomNumber: '102',
      available: false,
      times: [
        { time: '09:00~10:30', available: false },
        { time: '10:30~12:00', available: false },
        { time: '12:00~13:30', available: true },
        { time: '13:30~15:00', available: false },
        { time: '15:00~16:30', available: true },
        { time: '16:30~18:00', available: false },
        { time: '18:00~19:30', available: true },
        { time: '19:30~21:00', available: true },
        { time: '21:00~22:00', available: false },
      ],
    },
    {
      classroomId: 'saebit-103',
      floor: 1,
      classroomNumber: '103',
      available: true,
      times: [
        { time: '09:00~10:30', available: true },
        { time: '10:30~12:00', available: true },
        { time: '12:00~13:30', available: false },
        { time: '13:30~15:00', available: true },
        { time: '15:00~16:30', available: true },
        { time: '16:30~18:00', available: false },
        { time: '18:00~19:30', available: true },
        { time: '19:30~21:00', available: true },
        { time: '21:00~22:00', available: true },
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
        { time: '09:00~10:30', available: true },
        { time: '10:30~12:00', available: false },
        { time: '12:00~13:30', available: true },
        { time: '13:30~15:00', available: false },
        { time: '15:00~16:30', available: true },
        { time: '16:30~18:00', available: true },
        { time: '18:00~19:30', available: false },
        { time: '19:30~21:00', available: true },
        { time: '21:00~22:00', available: true },
      ],
    },
    {
      classroomId: 'saebit-203',
      floor: 2,
      classroomNumber: '203',
      available: false,
      times: [
        { time: '09:00~10:30', available: false },
        { time: '10:30~12:00', available: true },
        { time: '12:00~13:30', available: false },
        { time: '13:30~15:00', available: true },
        { time: '15:00~16:30', available: false },
        { time: '16:30~18:00', available: true },
        { time: '18:00~19:30', available: false },
        { time: '19:30~21:00', available: true },
        { time: '21:00~22:00', available: false },
      ],
    },
    {
      classroomId: 'saebit-204',
      floor: 2,
      classroomNumber: '204',
      available: true,
      times: [
        { time: '09:00~10:30', available: true },
        { time: '10:30~12:00', available: true },
        { time: '12:00~13:30', available: false },
        { time: '13:30~15:00', available: true },
        { time: '15:00~16:30', available: true },
        { time: '16:30~18:00', available: false },
        { time: '18:00~19:30', available: true },
        { time: '19:30~21:00', available: false },
        { time: '21:00~22:00', available: true },
      ],
    },
    {
      classroomId: 'saebit-205',
      floor: 2,
      classroomNumber: '205',
      available: true,
      times: [
        { time: '09:00~10:30', available: true },
        { time: '10:30~12:00', available: false },
        { time: '12:00~13:30', available: true },
        { time: '13:30~15:00', available: true },
        { time: '15:00~16:30', available: false },
        { time: '16:30~18:00', available: true },
        { time: '18:00~19:30', available: true },
        { time: '19:30~21:00', available: false },
        { time: '21:00~22:00', available: true },
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
