import './FloorMap.css'
import Floor1 from '../../../../assets/floor-map/floor-1.svg?react'
import Floor2 from '../../../../assets/floor-map/floor-2.svg?react'

export default function FloorMap({ floor = '1층', roomStatus = {}, onRoomClick }) {
  const FloorSvg = floor === '1층' ? Floor1 : Floor2

  // 강의실 상태에 따른 색상 반환
  const getRoomStyle = (roomId) => {
    const status = roomStatus[roomId]
    if (status === 'reserved') return { fill: '#77222d', stroke: '#B1A40E' }
    if (status === 'unavailable') return { fill: 'rgba(79,85,92,0.62)', stroke: 'black' }
    return { fill: '#F6F6F6', stroke: 'black' }
  }

  return (
    <div className='floor-map'>
      <div className='floor-map__board'>
        <FloorSvg
          className='floor-map__image'
          style={{
            '--room-101': getRoomStyle('101').fill,
            '--room-101-stroke': getRoomStyle('101').stroke,
            '--room-102': getRoomStyle('102').fill,
            '--room-102-stroke': getRoomStyle('102').stroke,
            '--room-103': getRoomStyle('103').fill,
            '--room-103-stroke': getRoomStyle('103').stroke,
            '--room-202': getRoomStyle('202').fill,
            '--room-202-stroke': getRoomStyle('202').stroke,
            '--room-203': getRoomStyle('203').fill,
            '--room-203-stroke': getRoomStyle('203').stroke,
            '--room-204': getRoomStyle('204').fill,
            '--room-204-stroke': getRoomStyle('204').stroke,
            '--room-205': getRoomStyle('205').fill,
            '--room-205-stroke': getRoomStyle('205').stroke,
          }}
          onClick={(e) => {
            const roomId = e.target.id?.replace('room-', '')
            if (!roomId) return
            if (roomStatus[roomId] === 'reserved') return
            if (onRoomClick) onRoomClick(roomId)
          }}
        />
      </div>
    </div>
  )
}
