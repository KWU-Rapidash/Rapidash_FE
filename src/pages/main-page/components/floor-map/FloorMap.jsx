import './FloorMap.css'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fb3ffa6 (design : 플로어맵 SVG 이미지 추가 (#24))
import Floor1 from '../../../../assets/floor-map/floor-1.svg'
import Floor2 from '../../../../assets/floor-map/floor-2.svg'

export default function FloorMap({ floor = 1 }) {
  const floorSrc = floor === 1 ? Floor1 : Floor2
<<<<<<< HEAD

  return (
    <div className='floor-map'>
      <div className='floor-map__board'>
        <img src={floorSrc} alt={`${floor}층 플로어맵`} className='floor-map__image' />
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
