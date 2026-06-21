import './FloorMap.css'
<<<<<<< HEAD
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
=======

export default function FloorMap() {
<<<<<<< HEAD
  return null
>>>>>>> 869d6b7 (design : 메인 페이지 레이아웃 마크업 및 라우터 등록 (#27))
=======
  return (
    <div className='floor-map'>
      <div className='floor-map__board'>
        {/* SVG 도면 위에 강의실 버튼을 절대 위치로 올리는 구조 */}
        {/* SVG 파일 추가 후 작업 예정 */}
      </div>
    </div>
  )
>>>>>>> 42e9b17 (design : 플로어맵 마크업 (#19))
}
