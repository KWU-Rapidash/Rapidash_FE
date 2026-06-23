import './FloorMap.css'
import Floor1 from '../../../../assets/floor-map/floor-1.svg?react'
import Floor2 from '../../../../assets/floor-map/floor-2.svg?react'

export default function FloorMap({ floor = '1층', roomStatus = {}, onRoomClick }) {
  const FloorSvg = floor === '1층' ? Floor1 : Floor2

  // 강의실 상태에 따른 색상 반환
  const getRoomFill = (roomId) => {
    const status = roomStatus[roomId]
    if (status === 'reserved') return '#77222d'
    if (status === 'unavailable') return 'rgba(79,85,92,0.62)'
    return '#F6F6F6'
  }

  return (
    <div className='floor-map'>
      <div className='floor-map__board'>
        <FloorSvg
          className='floor-map__image'
          style={{
            '--room-101': getRoomFill('101'),
            '--room-102': getRoomFill('102'),
            '--room-103': getRoomFill('103'),
            '--room-202': getRoomFill('202'),
            '--room-203': getRoomFill('203'),
            '--room-204': getRoomFill('204'),
            '--room-205': getRoomFill('205'),
          }}
          onClick={(e) => {
            const roomId = e.target.id?.replace('room-', '')
            if (roomId && onRoomClick) onRoomClick(roomId)
          }}
        />
      </div>
    </div>
  )
}
