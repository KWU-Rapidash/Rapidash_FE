const reservationInfo = {
  reservationId: 'reservation-uuid',
  date: '2026-06-25',
  classroom: '새빛 205',
  reserverName: '박현지',
  startTime: '18:00',
  endTime: '19:00',
  status: 'RESERVED',
  //   status: 'CANCELLED',
}

export const getReservationInfo = async () => {
  return reservationInfo
}
