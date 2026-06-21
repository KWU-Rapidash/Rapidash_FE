import './FloorMap.css'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fb3ffa6 (design : 플로어맵 SVG 이미지 추가 (#24))
import Floor1 from '../../../../assets/floor-map/floor-1.svg'
import Floor2 from '../../../../assets/floor-map/floor-2.svg'

export default function FloorMap({ floor = 1 }) {
  const floorSrc = floor === 1 ? Floor1 : Floor2
<<<<<<< HEAD
=======
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
>>>>>>> 8c693f3 (feat : 플로어맵 SVG 강의실 클릭 이벤트 연결 (#26))

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
=======

export default function FloorMap() {
<<<<<<< HEAD
  return null
>>>>>>> 869d6b7 (design : 메인 페이지 레이아웃 마크업 및 라우터 등록 (#27))
=======
=======

>>>>>>> fb3ffa6 (design : 플로어맵 SVG 이미지 추가 (#24))
  return (
    <div className='floor-map'>
      <div className='floor-map__board'>
        <img src={floorSrc} alt={`${floor}층 플로어맵`} className='floor-map__image' />
      </div>
    </div>
  )
>>>>>>> 42e9b17 (design : 플로어맵 마크업 (#19))
}
