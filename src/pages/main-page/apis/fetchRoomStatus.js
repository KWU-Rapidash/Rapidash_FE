// 더미 데이터 - 추후 실제 API로 교체 예정
const DUMMY_ROOM_STATUS = {
  '1층': {
    '9~10:30': { 101: 'available', 102: 'reserved', 103: 'unavailable' },
    '10:30~12': { 101: 'reserved', 102: 'available', 103: 'unavailable' },
    '12~13:30': { 101: 'available', 102: 'available', 103: 'reserved' },
    '13:30~15': { 101: 'unavailable', 102: 'available', 103: 'available' },
    '15~16:30': { 101: 'available', 102: 'reserved', 103: 'available' },
    '16:30~18': { 101: 'reserved', 102: 'unavailable', 103: 'available' },
    '18~19': { 101: 'available', 102: 'available', 103: 'reserved' },
    '19~20': { 101: 'available', 102: 'reserved', 103: 'available' },
    '20~21': { 101: 'reserved', 102: 'available', 103: 'available' },
    '21~22': { 101: 'available', 102: 'available', 103: 'available' },
  },
  '2층': {
    '9~10:30': { 202: 'available', 203: 'reserved', 204: 'available', 205: 'unavailable' },
    '10:30~12': { 202: 'reserved', 203: 'available', 204: 'unavailable', 205: 'available' },
    '12~13:30': { 202: 'available', 203: 'available', 204: 'reserved', 205: 'available' },
    '13:30~15': { 202: 'unavailable', 203: 'available', 204: 'available', 205: 'reserved' },
    '15~16:30': { 202: 'available', 203: 'reserved', 204: 'available', 205: 'available' },
    '16:30~18': { 202: 'reserved', 203: 'available', 204: 'available', 205: 'unavailable' },
    '18~19': { 202: 'available', 203: 'unavailable', 204: 'reserved', 205: 'available' },
    '19~20': { 202: 'available', 203: 'available', 204: 'available', 205: 'reserved' },
    '20~21': { 202: 'reserved', 203: 'available', 204: 'available', 205: 'available' },
    '21~22': { 202: 'available', 203: 'reserved', 204: 'unavailable', 205: 'available' },
  },
}

// 날짜/시간/층 기준 예약 현황 조회 (더미 api)
export const fetchRoomStatus = async ({ date, time, floor }) => {
  console.log('조회 날짜:', date)
  return DUMMY_ROOM_STATUS[floor]?.[time] || {}
}
