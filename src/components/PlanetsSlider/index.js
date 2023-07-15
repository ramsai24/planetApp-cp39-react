import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props
  console.log(planetsList)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div data-testid="planets" className="app-container">
      <div className="bg-container">
        <h1>PLANETS</h1>
        <div className="slider-container ">
          <Slider {...settings}>
            {planetsList.map(each => (
              <PlanetItem key={each.id} data={each} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default PlanetSlider
