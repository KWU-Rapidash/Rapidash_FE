const reservationInfo = {
  reservationId: 'reservation-uuid',
  date: '2024-04-01',
  classroom: '새빛 101',
  reserverName: '박현지',
  startTime: '09:00',
  endTime: '10:30',
  status: 'RESERVED',
  //   status: 'CANCELLED',
}

export const getReservationInfo = async () => {
  return reservationInfo
}
