import './FloorMap.css'
import Floor1 from '../../../../assets/floor-map/floor-1.svg'
import Floor2 from '../../../../assets/floor-map/floor-2.svg'

export default function FloorMap({ floor = 1 }) {
  const floorSrc = floor === 1 ? Floor1 : Floor2

  return (
    <div className='floor-map'>
      <div className='floor-map__board'>
        <img src={floorSrc} alt={`${floor}층 플로어맵`} className='floor-map__image' />
      </div>
    </div>
  )
}
