import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props
  console.log(planetsList)

  return (
    <div data-testid="planets" className="app-container">
      <h1>PLANETS</h1>

      <Slider>
        {planetsList.map(each => (
          <PlanetItem key={each.id} data={each} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
