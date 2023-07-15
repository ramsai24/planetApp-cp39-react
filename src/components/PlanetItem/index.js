// Write your code here
import './index.css'

const PlanetItem = props => {
  const {data} = props
  console.log(data)
  const {name, imageUrl, description} = data

  return (
    <div className="planet-container">
      <img className="planet-img" src={imageUrl} alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
